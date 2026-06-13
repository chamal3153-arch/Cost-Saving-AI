import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools & Resources – AI Tools by Cost Saver AI",
  description:
    "Personal finance tools, business automation tools, and practical guides — built by Cost Saver AI to help individuals and SMBs save money and work smarter.",
  alternates: {
    canonical: "https://costsaverai.com/tools",
  },
  openGraph: {
    title: "Tools & Resources – Cost Saver AI",
    description:
      "Personal and business AI tools plus practical guides from Cost Saver AI.",
    type: "website",
  },
};

const businessToolsUpcoming = [
  {
    name: "Automation ROI Tracker",
    description: "Connect your tools and track exactly how much your automations are saving you — in real time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "AI Workflow Builder",
    description: "Map and design your automation workflows visually before we build them — see the logic before a single line of code is written.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: "Staff Cost Calculator",
    description: "Calculate the true loaded cost of manual tasks across your team — including salary, on-costs, and hidden overhead.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-blue mx-auto mb-6">
              <span>🛠️</span> Tools & Resources
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tools Built to{" "}
              <span className="gradient-text-blue-cyan">Save You Money</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Personal finance tools, upcoming business automation tools, and practical guides — all from Cost Saver AI.
            </p>
          </div>
        </div>
      </section>

      {/* ── PERSONAL TOOLS ── */}
      <section className="bg-[#050d1a] pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="badge badge-blue">
                <span>👤</span> Personal Tools
              </div>
              <div className="h-px flex-1 bg-white/6" />
            </div>

            <p className="text-slate-500 text-sm mb-8 -mt-4">
              Tools for individuals to take control of personal finances and everyday costs.
            </p>

            {/* BudgetPlan AI — featured card */}
            <a
              href="https://budgetplanai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-blue-500/30 p-8 md:p-10 transition-all duration-300 hover:scale-[1.01] hover:border-blue-400/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.12)]"
              style={{ background: "radial-gradient(ellipse at top left, rgba(59,130,246,0.07), transparent 60%), #0a1628" }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white font-heading group-hover:text-blue-300 transition-colors">
                      BudgetPlan AI
                    </h2>
                    <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wide">
                      Live Now
                    </span>
                  </div>
                  <p className="text-blue-300 font-medium mb-3">AI-Powered Budget Planning & Forecasting</p>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                    Stop guessing where your money goes. BudgetPlan AI helps you build smarter personal budgets, forecast your cash flow, and spot overspending before it becomes a problem — powered by AI.
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {[
                      "AI budget recommendations",
                      "Cash flow forecasting",
                      "Overspending alerts",
                      "Built for personal use",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                        <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all duration-200 whitespace-nowrap">
                    Open BudgetPlan AI
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── BUSINESS TOOLS (UPCOMING) ── */}
      <section className="bg-[#050d1a] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="badge" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#fbbf24" }}>
                <span>🏢</span> Business Tools
              </div>
              <span className="text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Coming Soon
              </span>
              <div className="h-px flex-1 bg-white/6" />
            </div>

            <p className="text-slate-500 text-sm mb-8 -mt-4">
              Dedicated tools for SMBs to measure, plan, and manage automation — currently in development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {businessToolsUpcoming.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-white/6 bg-white/2 p-6 opacity-70"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center mb-4 text-slate-500">
                    {tool.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-white font-semibold font-heading text-sm">{tool.name}</h3>
                    <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/15 px-2 py-0.5 rounded-full">Soon</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-slate-600 mt-6">
              Want early access?{" "}
              <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-500 underline underline-offset-2">
                Email us
              </a>{" "}
              and we&apos;ll notify you when they launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050d1a] border-t border-white/6 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3" style={{ letterSpacing: "-0.02em" }}>
              Ready to Cut Real Business Costs?
            </h2>
            <p className="text-slate-400 mb-7">
              Book a free 30-minute audit — we&apos;ll identify your highest-ROI automation opportunity and give you a fixed quote.
            </p>
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4"
            >
              Book Free Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
