// functions/index.js
// Firebase Cloud Functions for Cost Saver AI

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

// Email transporter configuration
// Configure with your email service (Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Change to your email service
  auth: {
    user: functions.config().email.user, // Set via: firebase functions:config:set email.user="your-email@gmail.com"
    pass: functions.config().email.password, // Set via: firebase functions:config:set email.password="your-app-password"
  },
});

/**
 * Send confirmation email to user after form submission
 */
exports.sendContactConfirmation = functions.firestore
  .document('contact_submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const submissionId = context.params.submissionId;

    // Only send if this is a new submission (not a test)
    if (data.status !== 'new') {
      return null;
    }

    const mailOptions = {
      from: 'Cost Saver AI <noreply@costsaver.ai>',
      to: data.email,
      subject: 'We received your message - Cost Saver AI',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #2563eb, #06b6d4); padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { color: white; margin: 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            .info-box { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #2563eb; }
            .footer { color: #6b7280; font-size: 14px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Cost Saver AI</h1>
            </div>
            <div class="content">
              <h2>Thank you for contacting us!</h2>
              <p>Dear ${data.name},</p>
              <p>We have successfully received your message and will respond within <strong>one business day</strong>.</p>
              <div class="info-box">
                <h3>Your Submission Details</h3>
                <p><strong>Submission ID:</strong> ${data.submissionId || submissionId}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
              </div>
              <h3>Your Privacy Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:costsaverai@proton.me">costsaverai@proton.me</a> with your Submission ID: <strong>${data.submissionId || submissionId}</strong></p>
              <div style="background: #fef3c7; border: 1px solid #fbbf24; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; color: #92400e;"><strong>Data Retention:</strong> Your personal information will be automatically deleted 24 months from the date of submission, unless you request earlier deletion.</p>
              </div>
              <div class="footer">
                <p><strong>Cost Saver AI</strong><br>
                Email: <a href="mailto:costsaverai@proton.me">costsaverai@proton.me</a><br>
                Website: <a href="https://costsaver.ai">costsaver.ai</a></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Confirmation email sent to:', data.email);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }

    return null;
  });

/**
 * Send notification email to admin
 */
exports.sendAdminNotification = functions.firestore
  .document('contact_submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    if (data.status !== 'new') {
      return null;
    }

    const mailOptions = {
      from: 'Cost Saver AI <noreply@costsaver.ai>',
      to: 'costsaverai@proton.me', // Admin email
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { color: white; margin: 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            .info-box { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .message-box { background: #f9fafb; padding: 15px; border-radius: 4px; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <h2>Submission Details</h2>
              <div class="info-box">
                <p><strong>Submission ID:</strong> ${data.submissionId || context.params.submissionId}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Location:</strong> ${data.userLocation || 'Unknown'}</p>
              </div>
              <h3>Message</h3>
              <div class="message-box">${data.message}</div>
              <h3>Consent Status</h3>
              <ul>
                <li><strong>Privacy Policy Accepted:</strong> ${data.privacyPolicyAccepted ? 'Yes' : 'No'}</li>
                <li><strong>Marketing Consent:</strong> ${data.marketingConsent ? 'Yes' : 'No'}</li>
                <li><strong>CCPA "Do Not Sell":</strong> ${data.doNotSell ? 'Opted Out' : 'Not Opted Out'}</li>
              </ul>
              <p style="text-align: center; margin-top: 30px;">
                <a href="mailto:${data.email}?subject=Re: Your inquiry to Cost Saver AI" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${data.name}</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Admin notification email sent');
    } catch (error) {
      console.error('Error sending admin notification:', error);
    }

    return null;
  });

/**
 * Automated deletion of submissions older than 24 months
 * Runs daily via Cloud Scheduler
 */
exports.autoDeleteOldSubmissions = functions.pubsub
  .schedule('0 2 * * *') // Run daily at 2 AM UTC
  .timeZone('UTC')
  .onRun(async (context) => {
    const now = new Date();
    const db = admin.firestore();
    const batch = db.batch();
    let deletedCount = 0;

    try {
      // Find submissions where autoDeleteDate has passed
      const submissionsRef = db.collection('contact_submissions');
      const snapshot = await submissionsRef
        .where('autoDeleteDate', '<=', now)
        .where('deletedAt', '==', null)
        .get();

      if (snapshot.empty) {
        console.log('No submissions to delete');
        return null;
      }

      // Group by email for logging
      const emailGroups = {};
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        const email = data.email;
        if (!emailGroups[email]) {
          emailGroups[email] = [];
        }
        emailGroups[email].push(doc);
      });

      // Soft delete all submissions
      snapshot.docs.forEach((doc) => {
        batch.update(doc.ref, {
          deletedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        deletedCount++;
      });

      await batch.commit();

      // Log deletions
      for (const [email, docs] of Object.entries(emailGroups)) {
        await db.collection('data_deletion_logs').add({
          deletionId: `AUTO-${Date.now()}-${email}`,
          email: email,
          deletionType: 'auto_deletion',
          deletedCount: docs.length,
          deletedAt: admin.firestore.FieldValue.serverTimestamp(),
          reason: 'Automated deletion after 24-month retention period',
        });
      }

      console.log(`Deleted ${deletedCount} old submissions`);
      return null;
    } catch (error) {
      console.error('Error in auto-deletion:', error);
      throw error;
    }
  });

/**
 * HTTP endpoint for testing (optional)
 */
exports.testFunction = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.json({ message: 'Firebase Functions are working!' });
  });
});
