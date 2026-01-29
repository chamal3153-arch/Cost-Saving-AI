// app/api/contact/route.ts
// GDPR/CCPA Compliant Contact Form API Route using Firebase

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  writeBatch,
} from 'firebase/firestore';
import crypto from 'crypto';

// Types
interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  message: string;
  privacyPolicyAccepted: boolean;
  marketingConsent: boolean;
  doNotSell: boolean;
  userLocation?: string;
  submittedAt: string;
  ipAddress?: string;
}

/**
 * Generate unique submission ID for DSAR tracking
 */
function generateSubmissionId(): string {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const random = crypto.randomBytes(8).toString('hex');
  return `CSAI-${timestamp}-${random}`;
}

/**
 * Sanitize string input to prevent XSS
 */
function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .substring(0, 5000);
}

/**
 * POST /api/contact - Submit contact form
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactSubmission = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!body.privacyPolicyAccepted) {
      return NextResponse.json(
        { message: 'Privacy policy acceptance is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get client IP address
    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Rate limiting check (simple in-memory check - for production, use Redis)
    // TODO: Implement proper rate limiting

    // Sanitize input data
    const sanitizedData = {
      name: sanitizeString(body.name),
      email: sanitizeString(body.email).toLowerCase(),
      company: sanitizeString(body.company),
      message: sanitizeString(body.message),
      privacyPolicyAccepted: body.privacyPolicyAccepted,
      marketingConsent: body.marketingConsent || false,
      doNotSell: body.doNotSell || false,
      userLocation: body.userLocation || 'unknown',
      ipAddress: ipAddress,
      submittedAt: serverTimestamp(),
      autoDeleteDate: new Date(Date.now() + 24 * 30 * 24 * 60 * 60 * 1000), // 24 months from now
      submissionId: generateSubmissionId(),
      status: 'new',
      deletedAt: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    // Store in Firestore
    const docRef = await addDoc(collection(db, 'contact_submissions'), sanitizedData);

    // TODO: Send confirmation email to user
    // TODO: Send notification email to admin
    // For now, we'll use Firebase Functions or a service like Resend

    // Log for audit trail
    await addDoc(collection(db, 'audit_logs'), {
      event: 'contact_form_submission',
      submissionId: sanitizedData.submissionId,
      email: sanitizedData.email,
      timestamp: serverTimestamp(),
      ipAddress: sanitizedData.ipAddress,
    });

    return NextResponse.json(
      {
        message: 'Form submitted successfully',
        submissionId: sanitizedData.submissionId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        message:
          'An error occurred while processing your submission. Please try again or email us directly at costsaverai@proton.me',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact - DSAR (Data Subject Access Request)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
      return NextResponse.json(
        { message: 'Email and verification token are required' },
        { status: 400 }
      );
    }

    // TODO: Verify token from Firestore dsar_requests collection
    // For now, return placeholder
    const submissionsQuery = query(
      collection(db, 'contact_submissions'),
      where('email', '==', email.toLowerCase()),
      where('deletedAt', '==', null)
    );

    const querySnapshot = await getDocs(submissionsQuery);
    const submissions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Log DSAR request
    await addDoc(collection(db, 'dsar_requests'), {
      requestId: `DSAR-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`,
      email: email.toLowerCase(),
      requestType: 'access',
      status: 'completed',
      submittedAt: serverTimestamp(),
      completedAt: serverTimestamp(),
    });

    return NextResponse.json({
      message: 'DSAR request processed',
      submissions: submissions,
    });
  } catch (error) {
    console.error('DSAR request error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/contact - Data deletion request
 */
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, token } = body;

    if (!email || !token) {
      return NextResponse.json(
        { message: 'Email and verification token are required' },
        { status: 400 }
      );
    }

    // TODO: Verify token
    // Find all submissions for this email
    const submissionsQuery = query(
      collection(db, 'contact_submissions'),
      where('email', '==', email.toLowerCase()),
      where('deletedAt', '==', null)
    );

    const querySnapshot = await getDocs(submissionsQuery);
    const deletedCount = querySnapshot.size;

    // Soft delete (set deletedAt timestamp)
    // Firestore doesn't have updateMany, so we use batch writes
    const batchWrite = writeBatch(db);
    
    querySnapshot.docs.forEach((doc) => {
      batchWrite.update(doc.ref, { deletedAt: serverTimestamp() });
    });
    await batchWrite.commit();

    // Log deletion
    await addDoc(collection(db, 'data_deletion_logs'), {
      deletionId: `DEL-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`,
      email: email.toLowerCase(),
      deletionType: 'user_request',
      deletedCount: deletedCount,
      deletedAt: serverTimestamp(),
      reason: 'User-initiated deletion request (GDPR/CCPA)',
    });

    // TODO: Send confirmation email

    return NextResponse.json({
      message: 'Data deletion request processed',
      deletedCount: deletedCount,
    });
  } catch (error) {
    console.error('Data deletion error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your deletion request' },
      { status: 500 }
    );
  }
}
