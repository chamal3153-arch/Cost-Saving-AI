"use client";

import { useState, useEffect } from "react";

export default function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen/submitted the popup
    const hasSeenPopup = localStorage.getItem("email_capture_seen");
    const hasSubmitted = localStorage.getItem("email_capture_submitted");

    // Show popup after 3 seconds if not seen/submitted
    if (!hasSeenPopup && !hasSubmitted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("email_capture_seen", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("email_capture_seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track conversion event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "email_capture",
        form_name: "free_audit_popup",
        email: email,
      });
    }

    // Submit to Formspree (same service as contact form)
    // TODO: Create a dedicated Formspree form for email captures at: https://formspree.io/
    // For now using the contact form endpoint - replace with dedicated endpoint when ready
    try {
      const response = await fetch('https://formspree.io/f/xbdyonwb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'email_capture_popup',
          offer: 'free_manual_cost_audit',
          message: 'User requested Free Manual Cost Audit via popup',
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      localStorage.setItem("email_capture_submitted", "true");

      // Close popup after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Icon */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              Get Your Free Manual Cost Audit
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Discover where you're overpaying for manual work. Get a personalized efficiency guide delivered to your inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Get My Free Audit"}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email!</h2>
            <p className="text-gray-600">
              Your free audit guide is on its way. We'll send it to <strong>{email}</strong> shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
