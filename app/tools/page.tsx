import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Tools for SMBs – Cut Costs Starting Today",
  description:
    "Free tools built by Cost Saver AI to help small businesses reduce costs, plan smarter, and identify automation opportunities. No sign-up required.",
  alternates: {
    canonical: "https://costsaverai.com/tools",
  },
  openGraph: {
    title: "Free AI Tools for SMBs – Cost Saver AI",
    description:
      "Free cost-saving tools for small and mid-sized businesses — budget planning, ROI calculators, automation audits, and more.",
    type: "website",
  },
};

const tools = [
  {
    name: "BudgetPlan AI",
    tagline: "AI-Powered Budget Planning & Forecasting",
    description:
      "Stop guessing where your money is going. BudgetPlan AI helps small businesses build smarter budgets, forecast cash flow, and spot overspending before it becomes a crisis.",
    href: "https://budgetplanai.com",
    external: true,
    badge: "Free to Use",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    color: "border-blue-500/30",
    glowColor: "rgba(59,130,246,0.06)",
    accentColor: "text-blue-400",
    iconColor: "#3b82f6",
    features: [
      "AI-generated budget recommendations",
      "Cash flow forecasting",
      "Overspending alerts",
      "Built for SMBs — not enterprise complexity",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
      </svg>
    ),
    cta: "Open BudgetPlan AI →",
    featured: true,
  },
  {
    name: "Free ROI Calculator",
    tagline: "See Exactly How Much Manual Work Is Costing You",
    description:
      "Enter your team size, hourly rates, and the manual tasks eating up your week. Get an instant breakdown of your monthly waste, potential savings, ROI %, and payback period.",
    href: "/#roi-calculator",
    external: false,
    badge: "Takes 2 Minutes",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    color: "border-cyan-500/30",
    glowColor: "rgba(6,182,212,0.06)",
    accentColor: "text-cyan-400",
    iconColor: "#06b6d4",
    features: [
      "Instant cost-of-manual-work estimate",
      "Projected savings after automation",
      "ROI % and payback period",
      "No sign-up, no email required",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    cta: "Calculate My ROI →",
    featured: false,
  },
  {
    name: "Automation Audit Quiz",
    tagline: "Find Your Highest-ROI Automation in 3 Minutes",
    description:
      "Answer 8 quick questions about your business processes. The quiz identifies which manual tasks are costing you the most and recommends where to start with automation.",
    href: "/audit-quiz",
    external: false,
    badge: "Free Instant Results",
    badgeColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    color: "border-purple-500/30",
    glowColor: "rgba(139,92,246,0.06)",
    accentColor: "text-purple-400",
    iconColor: "#8b5cf6",
    features: [
      "8 targeted questions about your business",
      "Personalised automation recommendations",
      "Cost estimate for each opportunity",
      "Instant results — no waiting",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    cta: "Take the Quiz →",
    featured: false,
  },
  {
    name: "SMB Automation Blog",
    tagline: "Real Cost Breakdowns & How-To Guides",
    description:
      "Practical guides written for business owners — not developers. Real cost estimates, step-by-step automation walkthroughs, and honest breakdowns of what works and what doesn't.",
    href: "/blog",
    external: false,
    badge: "Free to Read",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    color: "border-emerald-500/30",
    glowColor: "rgba(16,185,129,0.06)",
    accentColor: "text-emerald-400",
    iconColor: "#10b981",
    features: [
      "Invoice automation cost breakdowns",
      "AI chatbot ROI guides",
      "Step-by-step workflow tutorials",
      "New articles added regularly",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    cta: "Read the Blog →",
    featured: false,
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
              <span>🛠️</span> Free Tools
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Free Tools to{" "}
              <span className="gradient-text-blue-cyan">Cut Business Costs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Built by Cost Saver AI for small and mid-sized businesses. Use them free — no sign-up, no strings attached.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-[#050d1a] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tools.map((tool) => {
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                tool.external ? (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative rounded-2xl border ${tool.color} p-8 flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] group`}
                    style={{ background: `radial-gradient(ellipse at top left, ${tool.glowColor}, transparent 60%), #0a1628` }}
                  >
                    {children}
                  </a>
                ) : (
                  <Link
                    href={tool.href}
                    className={`relative rounded-2xl border ${tool.color} p-8 flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] group`}
                    style={{ background: `radial-gradient(ellipse at top left, ${tool.glowColor}, transparent 60%), #0a1628` }}
                  >
                    {children}
                  </Link>
                );

              return (
                <CardWrapper key={tool.name}>
                  {tool.featured && (
                    <div className="absolute -top-3.5 left-8">
                      <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                        Featured Tool
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${tool.iconColor}18`, color: tool.iconColor }}
                    >
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h2 className={`text-xl font-bold text-white font-heading group-hover:${tool.accentColor} transition-colors`}>
                          {tool.name}
                        </h2>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                          {tool.badge}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm font-medium">{tool.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{tool.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tool.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`inline-flex items-center gap-2 font-semibold text-sm ${tool.accentColor} group-hover:gap-3 transition-all duration-200`}>
                    {tool.cta}
                    {tool.external && (
                      <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider — custom build CTA */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-blue mx-auto mb-5">
              <span>⚡</span> Need Something Custom?
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-heading mb-4" style={{ letterSpacing: "-0.02em" }}>
              These Tools Show You the Problem.{" "}
              <span className="gradient-text-blue-cyan">We Build the Fix.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              If your ROI calculator or audit reveals a real opportunity, we&apos;ll scope and build a custom automation system — fixed price, you own it outright.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4"
              >
                Book Free Audit →
              </a>
              <Link href="/services" className="btn-secondary px-8 py-4 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400">
                View Services
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-500">
              {["Projects from $400", "Deploy in 2–3 weeks", "You own it outright", "No monthly fees"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
