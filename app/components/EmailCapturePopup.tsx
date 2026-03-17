"use client";

import { useState, useEffect } from "react";

export default function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("newsletter_seen_v2");
    if (hasSeen) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem("newsletter_seen_v2", "true");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xbdyonwb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "newsletter_popup", message: "Newsletter signup" }),
      });
      if (!response.ok) throw new Error("Failed");
      setIsSubmitted(true);
      localStorage.setItem("newsletter_subscribed", "true");
      setTimeout(() => setIsOpen(false), 2500);
    } catch {
      setIsSubmitted(true);
      setTimeout(() => setIsOpen(false), 2500);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(5,13,26,0.85)", backdropFilter: "blur(8px)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 0 0 1px rgba(59,130,246,0.2), 0 32px 64px rgba(0,0,0,0.7)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

        <div className="bg-[#0a1628] p-7 md:p-8">
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-600 hover:text-slate-400 transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2
                className="text-xl md:text-2xl font-bold text-white font-heading mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                AI Automation Insights. Free. Weekly.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Practical AI tool reviews, automation case studies, and cost-saving tactics for SMB owners. Every week. No fluff.
              </p>

              {/* Social proof avatars */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex -space-x-1">
                  {[
                    { l: "S", bg: "#2563eb" },
                    { l: "J", bg: "#0891b2" },
                    { l: "P", bg: "#7c3aed" },
                    { l: "M", bg: "#059669" },
                  ].map((a, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-[#0a1628] flex items-center justify-center text-white text-[9px] font-bold"
                      style={{ background: a.bg }}
                    >
                      {a.l}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs">SMB owners in AU, UK, US &amp; NZ</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-[#0d1b2e] border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-sm font-bold text-white font-heading transition-all disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Free →"}
                </button>
              </form>
              <p className="text-slate-700 text-xs text-center mt-3">
                One email per week · Unsubscribe any time · No spam ever
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white font-heading mb-2">You&apos;re on the list! 🎉</h2>
              <p className="text-slate-400 text-sm">First issue arrives next week. Welcome aboard.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
