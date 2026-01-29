import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Get a Custom AI Automation Proposal",
  description:
    "Book a free 30-minute discovery call to discuss your AI automation needs. Get a custom proposal tailored to your business workflows and goals. No templates, no surprises.",
  keywords: [
    "AI automation consultation",
    "free consultation",
    "custom AI proposal",
    "automation strategy call",
  ],
  openGraph: {
    title: "Contact Cost Saver AI - Get Your Custom Proposal",
    description:
      "Book a free discovery call and get a custom AI automation proposal for your business.",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get a Custom Proposal for Your AI Agents
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. After understanding your specific workflows and goals on a strategy call,
              we provide a detailed, scoped proposal with a clear investment. No templates, no surprises.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {/* LEFT COLUMN (Context) */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get a Custom Proposal for Your AI Agents
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Every business is unique. After understanding your specific workflows and goals on a strategy call,
                we provide a detailed, scoped proposal with a clear investment. No templates, no surprises.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li>
                  <span className="font-semibold">Step 1:</span> Book a 30-minute discovery call.
                </li>
                <li>
                  <span className="font-semibold">Step 2:</span> We analyze your current workflows and present a custom
                  plan.
                </li>
                <li>
                  <span className="font-semibold">Step 3:</span> You approve, and we begin building your agents.
                </li>
              </ul>
            </div>

            {/* RIGHT COLUMN (Action) */}
            <div className="space-y-6">
              {/* Calendly Booking */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Your Free Discovery Call</h2>
                <p className="text-gray-700 mb-4">
                  Schedule your free 30-minute discovery call. We&apos;ll walk through your ideas, answer questions, and
                  outline where AI agents can create the most value.
                </p>
                {/* Calendly inline widget */}
                <div
                  className="calendly-inline-widget rounded-lg overflow-hidden"
                  data-url="https://calendly.com/chamal-3153/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>

              {/* Google Forms Link */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-700 mb-4">
                  Have questions or want to share details about your project? Fill out our form and we&apos;ll get back to you.
                </p>
                <a
                  href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Open Contact Form
                </a>
              </div>

              {/* Email Contact */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Have general questions?</h3>
                <p className="text-gray-700 mb-1">
                  Email us any time and we&apos;ll get back to you within one business day:
                </p>
                <a
                  href="mailto:costsaverai@proton.me"
                  className="text-blue-600 font-semibold hover:text-blue-700 break-all"
                >
                  costsaverai@proton.me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
