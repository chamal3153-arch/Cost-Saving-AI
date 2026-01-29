import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Services - Custom Dashboards & Data Solutions for SMBs",
  description:
    "Discover our automation services: Lead Qualifier Bot, Analytics Dashboards, and Data Automation. Custom solutions built for your business.",
  keywords: [
    "automation services",
    "business intelligence dashboards",
    "data automation",
    "lead qualification",
    "analytics dashboards",
    "business automation",
  ],
  openGraph: {
    title: "Automation Services - Cost Saver AI",
    description:
      "Custom automation solutions including dashboards, data automation, and lead qualification systems built for SMBs.",
    type: "website",
  },
};

export default function Services() {

  return (
    <>
      {/* Services Overview Section */}
      <section className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              Smart automation solutions that replace expensive manual work
            </p>
          </div>
          
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
            {/* Card 1: Lead Qualifier Bot */}
            <article className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 text-left">
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-left">
                  Lead Qualifier Bot
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left">
                  Automatically qualify and score leads 24/7, replacing expensive lead gen agency retainers.
                </p>
              </div>
            </article>

            {/* Card 2: Analytics Dashboard */}
            <article className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 text-left">
              <div className="mb-6">
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-left">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left">
                  Build custom BI dashboards in days, not months, without expensive consultants.
                </p>
              </div>
            </article>

            {/* Card 3: Data Automation */}
            <article className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 text-left">
              <div className="mb-6">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-left">
                  Data Automation
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left">
                  Eliminate manual data entry with intelligent automation that works faster than VAs.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Dashboard Examples Section */}
      <section className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              Dashboard Examples
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              See how we transform complex data into actionable insights with custom dashboards
            </p>
          </div>
          
          {/* Google Analytics Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">
              Google Analytics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl">
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 group">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/GoogleAnalytics.png"
                    alt="Google Analytics Dashboard Example 1 - Custom analytics and reporting dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 group">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/GoogleAnalytics2.png"
                    alt="Google Analytics Dashboard Example 2 - Advanced metrics and insights dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Xero Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">
              Xero
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl">
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 group">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/XERO.png"
                    alt="Xero Financial Dashboard Example 1 - Accounting and financial reporting dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 group">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/XERO2.png"
                    alt="Xero Financial Dashboard Example 2 - Cash flow and expense tracking dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 group">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/XERO3.png"
                    alt="Xero Financial Dashboard Example 3 - Profit and loss analysis dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Example Homepage Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">
              Example Homepage
            </h3>
            <div className="max-w-5xl">
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 group">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/Homepage.png"
                    alt="Example Homepage Dashboard - Business intelligence and analytics homepage"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Below Grid */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Need a Custom Dashboard? Get a Free Consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Your Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation to discuss your automation needs and get a custom proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 mb-4"
            >
              Get a Custom Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
