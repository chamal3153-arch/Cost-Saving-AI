'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  privacyPolicyAccepted: boolean;
  marketingConsent: boolean;
  doNotSell: boolean;
  userLocation?: string; // Detected or user-provided location
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  privacyPolicyAccepted?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    privacyPolicyAccepted: false,
    marketingConsent: false,
    doNotSell: false,
    userLocation: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Detect user location (for CCPA compliance)
  const detectUserLocation = async () => {
    try {
      // Use a geolocation API or IP-based detection
      // For production, use a service like ipapi.co, ip-api.com, or similar
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.region_code || data.country_code || '';
    } catch (error) {
      console.error('Location detection failed:', error);
      return '';
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Company validation (optional but recommended)
    if (formData.company.trim().length > 0 && formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters if provided';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }

    // Privacy policy acceptance (required)
    if (!formData.privacyPolicyAccepted) {
      newErrors.privacyPolicyAccepted = 'You must accept the Privacy Policy to submit this form';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Detect user location for CCPA compliance
      const location = await detectUserLocation();
      const submissionData = {
        ...formData,
        userLocation: location,
        submittedAt: new Date().toISOString(),
        ipAddress: '', // Will be captured server-side for security
      };

      // Submit to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(
          'Thank you for your message! We have received your inquiry and will respond within one business day. A confirmation email has been sent to your email address.'
        );
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          privacyPolicyAccepted: false,
          marketingConsent: false,
          doNotSell: false,
          userLocation: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(
          result.message || 'There was an error submitting your form. Please try again or email us directly at costsaverai@proton.me'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(
        'There was an error submitting your form. Please try again or email us directly at costsaverai@proton.me'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      // Clear error when checkbox is checked
      if (name === 'privacyPolicyAccepted' && checked) {
        setErrors((prev) => ({ ...prev, privacyPolicyAccepted: undefined }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm md:text-base">{submitMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm md:text-base">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.company ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={errors.company ? 'true' : 'false'}
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company && (
            <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.company}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            maxLength={5000}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message ? (
              <p id="message-error" className="text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            ) : (
              <span className="text-xs text-gray-500">
                {formData.message.length} / 5000 characters
              </span>
            )}
          </div>
        </div>

        {/* Privacy Policy Acceptance (Required) */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacyPolicyAccepted"
              name="privacyPolicyAccepted"
              checked={formData.privacyPolicyAccepted}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              aria-invalid={errors.privacyPolicyAccepted ? 'true' : 'false'}
              aria-describedby={errors.privacyPolicyAccepted ? 'privacy-error' : undefined}
            />
            <label htmlFor="privacyPolicyAccepted" className="ml-3 text-sm text-gray-700">
              I have read and accept the{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline" target="_blank">
                Privacy Policy
              </Link>{' '}
              <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.privacyPolicyAccepted && (
            <p id="privacy-error" className="mt-1 ml-7 text-sm text-red-600" role="alert">
              {errors.privacyPolicyAccepted}
            </p>
          )}
        </div>

        {/* Marketing Consent (Optional) */}
        <div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="marketingConsent" className="ml-3 text-sm text-gray-700">
              I consent to receive marketing communications, including newsletters, product updates, and promotional
              offers, via email. You can unsubscribe at any time.
            </label>
          </div>
        </div>

        {/* CCPA "Do Not Sell" Option (for California residents) */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="doNotSell"
              name="doNotSell"
              checked={formData.doNotSell}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="doNotSell" className="ml-3 text-sm text-gray-700">
              <strong>California Residents:</strong> I opt-out of the sale of my personal information (CCPA/CPRA).{' '}
              <Link href="/privacy#do-not-sell" className="text-blue-600 hover:text-blue-700 underline" target="_blank">
                Learn more
              </Link>
            </label>
          </div>
        </div>

        {/* Data Retention Notice */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-600">
            <strong>Data Retention:</strong> Your personal information will be retained for 24 months from the date of
            submission, after which it will be automatically deleted in accordance with our Privacy Policy. You have the
            right to request access, correction, or deletion of your data at any time by contacting{' '}
            <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">
              costsaverai@proton.me
            </a>
            .
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </div>

        {/* DSAR and Breach Notification Notice */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>
            <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal data (DSAR). To
            exercise these rights, contact us at{' '}
            <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">
              costsaverai@proton.me
            </a>
            .
          </p>
          <p>
            <strong>Breach Notification:</strong> In the event of a data breach affecting your personal information, we
            will notify you and relevant authorities within 72 hours as required by GDPR.
          </p>
        </div>
      </form>
    </div>
  );
}
