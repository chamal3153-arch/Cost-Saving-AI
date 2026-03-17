import Link from "next/link";
import type { Metadata } from "next";
import HowItWorks from "./components/HowItWorks";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ROICalculator from "./components/ROICalculator";

export const metadata: Metadata = {
  title: "Cost Saver AI – AI Automation That Saves SMBs 70-90% on Manual Costs",
  description:
    "Replace expensive manual work with done-for-you AI automation systems. Custom bots, dashboards, and integrations built in 2-3 weeks. You own it. No monthly fees.",
  openGraph: {
    title: "Cost Saver AI – AI Automation That Saves SMBs 70-90% on Manual Costs",
    description:
      "Replace expensive manual work with affordable AI automation systems. Deploy in weeks, not months. No recurring fees.",
    url: "https://costsaverai.com",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cost Saver AI",
  description:
    "AI automation systems for small and mid-sized businesses. Replace manual workflows with custom bots, dashboards, and integrations.",
  url: "https://costsaverai.com",
  logo: "https://costsaverai.com/Company logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "costsaverai@proton.me",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation Services",
  provider: { "@type": "Organization", name: "Cost Saver AI" },
  areaServed: "Worldwide",
  description:
    "Done-for-you AI automation systems including chatbots, custom dashboards, workflow automation, and business process automation for SMBs.",
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "AI Chatbots & Assistants",
    desc: "24/7 customer service, lead qualification, and internal support — without hiring.",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Custom Business Dashboards",
    desc: "Live KPI dashboards pulling data from all your tools. Xero, GA4, HubSpot — one view.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Workflow Automation",
    desc: "Eliminate manual data entry, invoice processing, email triage and more.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Processing",
    desc: "OCR invoices, extract data, auto-populate your accounting system. Zero manual entry.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: "Social Media Automation",
    desc: "AI-generated content, auto-scheduling, and engagement responses across all platforms.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Strategy & Roadmap",
    desc: "We audit your business, identify the highest-ROI automation wins, and build your roadmap.",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    href: "/ai-consulting",
  },
];

const stats = [
  { value: "70–90%", label: "Cost reduction", color: "text-blue-400" },
  { value: "2–3 wks", label: "Deployment time", color: "text-cyan-400" },
  { value: "100%", label: "System ownership", color: "text-emerald-400" },
  { value: "$0", label: "Monthly retainer", color: "text-purple-400" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        suppressHydrationWarning
      />

      {/* ════════════════════════════════════════
          HERO — Dark, futuristic
      ════════════════════════════════════════ */}
      <section className="hero-dark grid-pattern relative min-h-[75vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="badge badge-blue mb-7 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI Automation for Small & Mid-Sized Businesses
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-heading"
              style={{ letterSpacing: "-0.03em" }}
            >
              Stop Paying People<br />
              to Do Work{" "}
              <span className="gradient-text-blue-cyan">AI Does in Seconds</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              We build done-for-you AI automation systems that replace expensive manual work.
              Deploy in 2–3 weeks. Own it outright. No monthly fees.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 touch-manipulation"
              >
                Get My Free Audit →
              </a>
              <Link
                href="/services"
                className="btn-secondary text-base px-8 py-4 touch-manipulation border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-white/5"
              >
                See All Services
              </Link>
            </div>

            {/* Trust micro-copy */}
            <div className="flex flex-wrap gap-5 text-slate-500 text-sm">
              {["Free 30-min audit", "No obligation", "Results in 2–3 weeks"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute bottom-10 right-10 hidden xl:block opacity-30 animate-float pointer-events-none">
          <div className="w-40 h-40 rounded-2xl border border-blue-500/30 bg-blue-500/5 flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════ */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className={`stat-number text-3xl md:text-4xl ${s.color} mb-1`}>{s.value}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-heading">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROBLEM SECTION
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="badge badge-blue mb-5">
                  <span>⚠️</span> The Problem
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-heading mb-6" style={{ letterSpacing: "-0.02em" }}>
                  Manual Work is Quietly Draining Your Business
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Most SMBs are spending tens of thousands per year on tasks that AI can handle in seconds —
                  not because they haven&apos;t heard of AI, but because nobody&apos;s built them a system that actually works.
                </p>
                <a
                  href="https://calendly.com/chamal-3153/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Fix It — Free Audit →
                </a>
              </div>

              <div className="space-y-4">
                {[
                  {
                    problem: "Paying a VA $3k–$5k/month to copy data between systems",
                    icon: "💸",
                    color: "border-red-200 bg-red-50/50",
                    text: "text-red-700",
                  },
                  {
                    problem: "Finance manager spending Monday mornings on manual reports",
                    icon: "⏰",
                    color: "border-orange-200 bg-orange-50/50",
                    text: "text-orange-700",
                  },
                  {
                    problem: "Leads falling through cracks because CRM isn't updated",
                    icon: "📉",
                    color: "border-yellow-200 bg-yellow-50/50",
                    text: "text-yellow-700",
                  },
                  {
                    problem: "Customer emails going unread for hours (or days)",
                    icon: "📬",
                    color: "border-red-200 bg-red-50/50",
                    text: "text-red-700",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${item.color}`}>
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <p className={`text-sm font-medium ${item.text} leading-snug`}>{item.problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════ */}
      <HowItWorks />

      {/* ════════════════════════════════════════
          SERVICES GRID
      ════════════════════════════════════════ */}
      <section className="bg-[#f8fafc] py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="badge badge-blue mx-auto mb-5">
              <span>🛠️</span> Services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-heading mb-4" style={{ letterSpacing: "-0.02em" }}>
              Everything You Need to{" "}
              <span className="gradient-text">Automate & Scale</span>
            </h2>
            <p className="text-slate-500 text-lg">
              End-to-end AI systems built specifically for your business — not generic SaaS tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.bg, color: s.color }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary inline-flex text-sm">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ROI CALCULATOR
      ════════════════════════════════════════ */}
      <ROICalculator />

      {/* ════════════════════════════════════════
          AUDIT QUIZ CTA
      ════════════════════════════════════════ */}
      <section className="bg-[#050d1a] relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/6 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-blue-500/20 bg-[#0a1628] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left — copy */}
                <div className="p-8 md:p-10 lg:border-r border-blue-500/10">
                  <div className="badge badge-cyan mb-5">
                    <span>⚡</span> Free 2-Min Quiz
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Not Sure Where to Start?{' '}
                    <span className="gradient-text-blue-cyan">Find Out in 2 Minutes.</span>
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    Our Automation Audit Quiz asks 5 quick questions about your business — and gives you a personalised ROI estimate, payback period, and recommended solution.
                  </p>
                  <Link
                    href="/audit-quiz"
                    className="btn-primary inline-flex text-sm px-6 py-3"
                  >
                    Take the Free Quiz →
                  </Link>
                  <p className="text-slate-600 text-xs mt-3">No sign-up required. Results are instant.</p>
                </div>
                {/* Right — proof points */}
                <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
                  {[
                    { icon: '📊', text: 'See your estimated monthly savings in dollars' },
                    { icon: '⏱️', text: 'Get your payback period — typically 1–3 months' },
                    { icon: '🎯', text: 'Receive a recommended service matched to your pain point' },
                    { icon: '📧', text: 'Optionally get a full personalised report emailed to you' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TECH STACK
      ════════════════════════════════════════ */}
      <TechStack />

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <Testimonials />

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <FAQSection />

      {/* ════════════════════════════════════════
          FINAL CTA — Dark
      ════════════════════════════════════════ */}
      <section className="bg-[#050d1a] relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="badge badge-blue mx-auto mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ready to automate?
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading"
              style={{ letterSpacing: "-0.03em" }}
            >
              What&apos;s Your Most Expensive<br />
              <span className="gradient-text-blue-cyan">Manual Process?</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Tell us in a free 30-minute call and we&apos;ll tell you exactly how to automate it and how much you&apos;ll save.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white text-base px-10 py-4 touch-manipulation"
              >
                Book My Free Audit Now →
              </a>
              <a
                href="mailto:costsaverai@proton.me"
                className="btn-secondary text-base px-8 py-4 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 touch-manipulation"
              >
                Email Us Instead
              </a>
            </div>

            <p className="text-slate-600 text-sm mt-6">
              No sales pitch. No commitment. Just a straight conversation about your costs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
