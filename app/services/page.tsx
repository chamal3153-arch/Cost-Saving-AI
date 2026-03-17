import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services – Cost Saver AI",
  description:
    "Done-for-you AI automation services: chatbots, custom dashboards, workflow automation, document processing, social media systems, and AI strategy. Fixed price. You own it.",
  alternates: {
    canonical: "https://costsaverai.com/services",
  },
  openGraph: {
    title: "AI Automation Services – Cost Saver AI",
    description:
      "Custom AI automation systems built for SMBs. One-time build, you own it outright. No monthly fees.",
    type: "website",
  },
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "AI Chatbots & Assistants",
    desc: "24/7 customer service, lead qualification, and internal support bots — trained on your business, deployed on your website or internal tools.",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    bullets: [
      "Answers customer FAQs instantly, 24/7",
      "Qualifies leads and books calls automatically",
      "Integrated with your CRM, Slack, or helpdesk",
      "Custom tone and brand voice",
      "Live handoff to human when needed",
    ],
    from: "$800",
    time: "5–10 days",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Custom Business Dashboards",
    desc: "Live KPI dashboards that pull data from Xero, GA4, HubSpot, Airtable and more — everything in one view, automatically updated.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    bullets: [
      "Real-time data from all your tools in one screen",
      "Xero, QuickBooks, GA4, HubSpot, Salesforce",
      "Automated weekly/monthly email reports",
      "AI-written insights and commentary",
      "No more Monday morning manual reporting",
    ],
    from: "$600",
    time: "3–7 days",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Workflow & Process Automation",
    desc: "Eliminate manual data entry, copy-paste work, and repetitive tasks between your tools using Zapier, Make, or n8n — fully custom built.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    bullets: [
      "Connect any two tools that don't talk to each other",
      "Auto-sync leads from forms to CRM",
      "Trigger Slack alerts from spreadsheet changes",
      "Auto-create tasks, send emails, update records",
      "Zapier, Make, n8n — whichever fits your stack",
    ],
    from: "$400",
    time: "2–5 days",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document & Invoice Processing",
    desc: "OCR and AI extraction that reads invoices, receipts, and forms — then automatically pushes the data into Xero, your spreadsheet, or database.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    bullets: [
      "Extract data from PDFs, scans, and photos",
      "Auto-populate Xero, QuickBooks, or spreadsheets",
      "Flag anomalies and duplicates automatically",
      "Approval workflows with email notifications",
      "Zero manual data entry on invoices",
    ],
    from: "$700",
    time: "5–10 days",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: "Social Media Automation",
    desc: "AI-generated content, auto-scheduling, and cross-platform publishing — your social presence runs on autopilot while you focus on the business.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "border-yellow-500/20",
    accent: "text-yellow-400",
    bullets: [
      "AI writes posts in your brand voice",
      "Auto-schedule across LinkedIn, Instagram, X",
      "Repurpose long content into short clips and posts",
      "Engage with comments automatically",
      "Weekly content calendar generated and queued",
    ],
    from: "$500",
    time: "3–7 days",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Strategy & Roadmap",
    desc: "A structured audit of your workflows, a prioritised list of automation wins, and a 90-day roadmap to roll them out — starting with the highest ROI first.",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    border: "border-pink-500/20",
    accent: "text-pink-400",
    bullets: [
      "Full process audit across your business",
      "ROI estimate for each automation opportunity",
      "Prioritised roadmap — highest impact first",
      "Tool recommendations for your exact stack",
      "Delivered as a PDF + 60-min walkthrough call",
    ],
    from: "$400",
    time: "3–5 days",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-dark grid-pattern py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="badge badge-blue mb-6">
              <span>🛠️</span> Services
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              Done-For-You AI Systems{" "}
              <span className="gradient-text-blue-cyan">Built Around Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
              Every service below is custom-built for your specific workflows. One-time investment. You own it outright. No monthly platform fees.
            </p>
            <div className="flex flex-wrap gap-5 text-slate-500 text-sm">
              {["Fixed price upfront", "2–3 week delivery", "You own the system", "30-day support included"].map(t => (
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
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-[#050d1a] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/4 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <div
                key={i}
                className={`bg-[#0a1628] border ${s.border} rounded-2xl p-7 flex flex-col gap-5 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] hover:border-opacity-60 transition-all duration-300 group`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: s.bg, color: s.color }}
                >
                  {s.icon}
                </div>

                {/* Title + desc */}
                <div>
                  <h2 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-blue-200 transition-colors" style={{ letterSpacing: "-0.01em" }}>
                    {s.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 flex-1">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${s.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-400 text-xs leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + time + CTA */}
                <div className="pt-4 border-t border-white/6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-slate-600 text-xs uppercase tracking-wide">From</span>
                      <p className={`text-xl font-bold font-heading ${s.accent}`}>{s.from}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-600 text-xs uppercase tracking-wide">Delivery</span>
                      <p className="text-white text-sm font-semibold">{s.time}</p>
                    </div>
                  </div>
                  <a
                    href="https://calendly.com/chamal-3153/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 px-4 rounded-xl border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/6 hover:border-white/20 hover:text-white transition-all duration-200 block"
                  >
                    Get a Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-slate-600 text-sm mt-10">
            Need something not listed? We build custom. <a href="https://calendly.com/chamal-3153/30min" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Book a free scoping call →</a>
          </p>
        </div>
      </section>

      {/* ── Dashboard Examples ── */}
      <section className="bg-[#0a1628] py-20 md:py-24 border-t border-white/6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="badge badge-cyan mx-auto mb-5">
              <span>📊</span> Dashboard Examples
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4" style={{ letterSpacing: "-0.02em" }}>
              Real Dashboards We&apos;ve Built
            </h2>
            <p className="text-slate-400 text-lg">
              Custom-built for each client — not templates, not off-the-shelf.
            </p>
          </div>

          {/* Google Analytics */}
          <div className="mb-14 max-w-6xl mx-auto">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-5">Google Analytics Dashboard</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {["GoogleAnalytics.png", "GoogleAnalytics2.png"].map((img, i) => (
                <div key={i} className="bg-[#050d1a] border border-white/8 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all">
                  <div className="relative w-full aspect-video bg-[#050d1a] flex items-center justify-center overflow-hidden">
                    <img
                      src={`/${img}`}
                      alt={`Google Analytics Dashboard ${i + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Xero */}
          <div className="mb-14 max-w-7xl mx-auto">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-5">Xero Financial Dashboard</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {["XERO.png", "XERO2.png", "XERO3.png"].map((img, i) => (
                <div key={i} className="bg-[#050d1a] border border-white/8 rounded-xl overflow-hidden group hover:border-cyan-500/30 transition-all">
                  <div className="relative w-full aspect-video bg-[#050d1a] flex items-center justify-center overflow-hidden">
                    <img
                      src={`/${img}`}
                      alt={`Xero Dashboard ${i + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Homepage example */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-5">Custom Business Dashboard — Homepage</p>
            <div className="bg-[#050d1a] border border-white/8 rounded-xl overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="relative w-full aspect-video bg-[#050d1a] flex items-center justify-center overflow-hidden">
                <img
                  src="/Homepage.png"
                  alt="Custom Business Dashboard"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex px-8 py-4"
            >
              Get a Custom Dashboard Quote →
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#050d1a] border-t border-white/6 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4" style={{ letterSpacing: "-0.02em" }}>
              Not sure which service you need?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Book a free 30-minute audit call. We&apos;ll map your workflows, identify the highest-ROI automation, and tell you exactly what to build first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-base"
              >
                Book Free Audit Call →
              </a>
              <Link
                href="/#roi-calculator"
                className="btn-secondary px-8 py-4 text-base border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/10"
              >
                ⚡ Calculate My ROI First
              </Link>
            </div>
            <p className="text-slate-600 text-sm mt-5">Projects from $400 · Fixed quote · You own it outright</p>
          </div>
        </div>
      </section>
    </>
  );
}
