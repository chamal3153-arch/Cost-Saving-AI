import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions for Small & Medium Businesses - Cost Saver AI",
  description:
    "Comprehensive AI automation solutions for SMBs: chatbots, dashboards, workflow automation, social media systems, and more. Replace expensive manual work with affordable AI.",
  keywords: [
    "AI solutions for small business",
    "SMB automation",
    "business chatbots",
    "custom dashboards",
    "workflow automation",
    "social media automation",
    "AI agents",
    "business intelligence",
  ],
  openGraph: {
    title: "AI Solutions for Small & Medium Businesses - Cost Saver AI",
    description:
      "Complete AI automation solutions including chatbots, dashboards, workflow automation, and more for small and medium businesses.",
    type: "website",
  },
};

export default function Services() {

  return (
    <>
      {/* Hero Section */}
      <section className="bg-transparent py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              AI Solutions for Small & Medium Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              Comprehensive automation solutions that replace expensive manual work and help your business scale efficiently
            </p>
          </div>
        </div>
      </section>

      {/* Intelligent Chatbots & Assistants */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Intelligent Chatbots & Assistants
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">24/7 customer service chatbots for websites</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Lead qualification & appointment booking assistants</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Internal HR & IT support bots for employee questions</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Multi-language customer support automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">WhatsApp/Facebook Messenger business bots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Business Dashboards */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Custom Business Dashboards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Visual KPI dashboards connecting all your data sources</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Real-time sales & performance monitoring systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Automated reporting with AI insights</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Mobile-friendly dashboard access for teams</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Department-specific views (Sales, Marketing, Operations)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow & Process Automation */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Workflow & Process Automation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Invoice & document processing automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Lead-to-CRM data entry automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Customer onboarding & follow-up sequences</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Inventory tracking & reorder alert systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Email triage & smart routing automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Content Systems */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Social Media & Content Systems
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Automated content creation & scheduling</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Social media engagement & response automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Brand monitoring & sentiment analysis</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Competitor tracking & alert systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Content repurposing across platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website & Digital Monitoring */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Website & Digital Monitoring
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">24/7 website uptime & performance monitoring</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">SEO health tracking & optimization alerts</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Content update automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">User behavior analysis & conversion tracking</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Security monitoring & anomaly detection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Tools */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Customer Experience Tools
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Smart booking & scheduling optimization</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Personalized customer communication systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Feedback collection & sentiment analysis</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Loyalty program automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Multi-channel customer support integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Team Productivity */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Internal Team Productivity
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Meeting transcription & summarization tools</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Internal knowledge base & Q&A systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Training & onboarding automation</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Document management & search systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Team coordination & task automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Strategy & Implementation */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                AI Strategy & Implementation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Business process automation audit</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">ROI-focused AI implementation roadmap</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Team training & change management</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Vendor selection & integration guidance</p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <p className="text-gray-700 text-sm md:text-base">Performance tracking & optimization</p>
              </div>
            </div>
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
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 mb-4"
            >
              Get a Custom Proposal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
