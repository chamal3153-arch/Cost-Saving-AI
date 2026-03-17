import type { Metadata } from "next";
import FAQSection from "../components/FAQSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ – AI Automation Questions Answered | Cost Saver AI",
  description:
    "Answers to the most common questions about AI automation for SMBs — pricing, timelines, data security, ownership, ROI, and more.",
  alternates: {
    canonical: "https://costsaverai.com/faq",
  },
  openGraph: {
    title: "FAQ – Cost Saver AI",
    description: "Everything you need to know before booking your free AI automation audit.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-blue mx-auto mb-6">
              <span>❓</span> FAQ
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              Questions We Get{" "}
              <span className="gradient-text-blue-cyan">Every Day</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about working with us — pricing, timelines, ownership, security, and ROI — before you book your free audit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <FAQSection />

      {/* CTA */}
      <section className="bg-[#050d1a] border-t border-white/6 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3" style={{ letterSpacing: "-0.02em" }}>
              Still have questions?
            </h2>
            <p className="text-slate-400 mb-7">
              Book a free 30-minute call — no obligation, no sales pitch. Just honest answers about your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4"
              >
                Book Free Audit Call →
              </a>
              <Link
                href="/contact"
                className="btn-secondary px-8 py-4 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
