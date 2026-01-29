import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stop Overpaying for Manual Work - AI Automation for SMBs",
  description:
    "Replace expensive manual work with affordable AI automation systems. Save 70-90% on VA retainers, consultant fees, and agency costs. Custom automation built in days, not months.",
  openGraph: {
    title: "Stop Overpaying for Manual Work - Cost Saver AI",
    description:
      "Replace expensive manual work with affordable AI automation systems. Save 70-90% on costs with custom automation built in days.",
    type: "website",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cost Saver AI",
    description:
      "AI automation systems for small and mid-sized businesses, replacing manual workflows with custom bots, dashboards, and integrations.",
    url: "https://tekonai.com", // Update with your actual domain
    logo: "https://tekonai.com/Company logo.png", // Update with your actual domain
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "costsaverai@proton.me",
    },
    sameAs: [
      // Add your social media links here
      // "https://twitter.com/tekonai",
      // "https://linkedin.com/company/tekonai",
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Automation Services",
    provider: {
      "@type": "Organization",
      name: "Cost Saver AI",
    },
    areaServed: "Worldwide",
    description:
      "Custom AI automation systems including AI agents, dashboards, and workflow integrations for small and mid-sized businesses.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      {/* Hero Section - Top Center with Left Alignment */}
      <section className="bg-transparent py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Headline - Left Aligned */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-left">
              Stop Overpaying for Manual Work
          </h1>
            
            {/* Sub-headline - Left Aligned */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed text-left">
              We replace expensive, repetitive tasks with affordable AI automations for SMBs. Get a system, not a subscription.
            </p>
            
            {/* Primary CTA Button - Left Aligned */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-fit min-h-[48px] touch-manipulation"
              >
                Get a Custom Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Key Benefit Bullets - Just Below Hero */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-left">
                    Save 70-90% on Manual Costs
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-left">
                    Replace expensive VA retainers, consultant fees, and agency costs with one-time automation systems that work 24/7.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-left">
                    Deploy in Days, Not Months
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-left">
                    Get your automation system running in 2-3 weeks, not the 6-12 months typical consultants take.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-left">
                    Own Your System, Not a Subscription
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-left">
                    One-time investment instead of monthly retainers. You own the automation, not the vendor.
          </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links to Services and AI Agents Pages */}
      <section className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-left">
              Explore Our Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed text-left">
              Discover how we can help automate your business processes and reduce costs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Services Link Card */}
              <Link
                href="/services"
                className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 text-left group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Our Services
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  Explore our specialized AI agents and automation solutions designed to replace expensive manual work.
                </p>
                <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                  View Services
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* AI Agents Link Card */}
              <Link
                href="/agents"
                className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 text-left group"
              >
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  AI Agents
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  Learn about our autonomous AI agents that work 24/7 to handle customer service, sales, operations, and more.
                </p>
                <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                  Explore AI Agents
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about AI automation? Want to discuss your specific needs? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Contact */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Send us an email and we'll get back to you within one business day.
                </p>
                <a
                  href="mailto:costsaverai@proton.me"
                  className="text-blue-600 font-semibold hover:text-blue-700 text-lg break-all"
                >
                  costsaverai@proton.me
                </a>
              </div>

              {/* Book a Call */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-600 rounded-lg p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Book a Call</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Schedule a free 30-minute discovery call to discuss your automation needs.
                </p>
                <a
                  href="https://calendly.com/chamal-3153/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 text-lg"
                >
                  Book Your Free Call
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 text-center">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Protection Officer</h4>
                <p className="text-gray-700">
                  For privacy-related inquiries, contact: <strong>Chamal Abeytuga</strong>
                </p>
                <a
                  href="mailto:costsaverai@proton.me"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  costsaverai@proton.me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Contrasting Background */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-left">
              What's Your Most Ridiculous Manual Cost?
            </h2>
            <p className="text-lg md:text-xl text-black mb-8 md:mb-10 max-w-2xl leading-relaxed text-left">
              Let's find and fix it in a free 30-minute audit.
            </p>
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              Book Your Free Audit Now
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
    </div>
      </section>
    </>
  );
}
