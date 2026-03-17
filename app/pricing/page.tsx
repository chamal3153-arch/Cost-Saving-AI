import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing – Transparent Project-Based AI Automation Pricing",
  description:
    "No retainers. No surprises. Cost Saver AI charges per project — from simple $400 automations to full $10,000 AI overhauls. See what's included and book a free audit.",
    alternates: {
    canonical: 'https://costsaverai.com/pricing',
  },
  openGraph: {
    title: "Pricing – Cost Saver AI",
    description:
      "Project-based pricing from $400 to $10,000. You own the system outright. No monthly fees.",
    type: "website",
  },
};

const tiers = [
  {
    name: "Starter",
    range: "$400 – $1,500",
    tagline: "One problem. One solution. Done.",
    description:
      "Perfect for businesses that have one specific manual process costing time or money and want it fixed fast.",
    color: "border-emerald-500/40",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    accentColor: "text-emerald-400",
    glowColor: "rgba(16,185,129,0.06)",
    examples: [
      "Lead capture form → auto-enter into CRM",
      "Invoice arrives → auto-extracted into Xero",
      "Customer emails → auto-categorised & routed",
      "New booking → auto-confirmation + reminder sent",
      "Social post scheduled from a spreadsheet",
    ],
    includes: [
      "Single workflow automation",
      "1 integration (e.g. Gmail ↔ HubSpot)",
      "Setup + testing",
      "Handover walkthrough",
      "2 weeks post-launch support",
    ],
    cta: "Book a Free Audit",
    popular: false,
    deliveryTime: "3–7 days",
  },
  {
    name: "Growth",
    range: "$1,500 – $4,500",
    tagline: "Multi-system. Real business impact.",
    description:
      "For SMBs ready to automate a whole department or connect several tools into one intelligent workflow.",
    color: "border-blue-500/60",
    badgeColor: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    accentColor: "text-blue-400",
    glowColor: "rgba(59,130,246,0.08)",
    examples: [
      "AI chatbot on your website (leads + support)",
      "Custom KPI dashboard (Xero + GA4 + HubSpot)",
      "Full invoice processing pipeline with approvals",
      "CRM automation + follow-up email sequences",
      "Social media AI content + scheduling system",
    ],
    includes: [
      "Up to 3 integrated workflows",
      "Custom AI model tuning to your business",
      "Dashboard or chatbot interface",
      "Full documentation",
      "4 weeks post-launch support + 1 revision round",
    ],
    cta: "Book a Free Audit",
    popular: true,
    deliveryTime: "1–3 weeks",
  },
  {
    name: "Enterprise",
    range: "$4,500 – $10,000+",
    tagline: "Full automation overhaul. End-to-end.",
    description:
      "For businesses that want to systematically eliminate manual work across multiple departments with a custom-built AI stack.",
    color: "border-purple-500/40",
    badgeColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    accentColor: "text-purple-400",
    glowColor: "rgba(139,92,246,0.06)",
    examples: [
      "Complete AI operations system (finance, sales, ops)",
      "Custom AI voice bot for inbound customer calls",
      "End-to-end e-commerce automation stack",
      "Multi-department workflow + reporting platform",
      "White-label AI product built for your clients",
    ],
    includes: [
      "Unlimited workflows within scope",
      "Custom AI models + prompts + guardrails",
      "Admin panel + team training session",
      "Full technical documentation + source code",
      "8 weeks post-launch support + 3 revision rounds",
    ],
    cta: "Book a Strategy Call",
    popular: false,
    deliveryTime: "2–6 weeks",
  },
];

const faqs = [
  {
    q: "How does project-based pricing work?",
    a: "We scope your project during a free 30-minute audit call. You get a fixed quote before any work starts. No surprises, no scope creep fees.",
  },
  {
    q: "Do I own the system after it's built?",
    a: "100%. Everything we build is yours — the code, the workflows, the integrations. You're not locked into any platform or paying us a monthly fee to keep it running.",
  },
  {
    q: "What if my project is between tiers?",
    a: "The tiers are guides, not boxes. Every quote is custom. If your project is a $2,200 job, that's what you pay. Simple.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within 1–3 business days of project approval. Starter projects can often be live in under a week.",
  },
  {
    q: "What if I don't know exactly what I need?",
    a: "That's exactly what the free audit is for. We'll map your current processes, identify where money is being lost, and recommend the highest-ROI automation — with a fixed quote.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. For Growth and Enterprise projects we typically split 50% upfront, 50% on delivery. For larger projects we can discuss milestone-based payments.",
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-blue mx-auto mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Transparent Pricing
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Pay Once.{" "}
              <span className="gradient-text-blue-cyan">Own It Forever.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              No retainers. No monthly fees. No lock-in. Every project is scoped,
              quoted, and delivered at a fixed price — then it&apos;s yours.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-[#050d1a] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border ${tier.color} p-8 flex flex-col transition-all duration-300 hover:scale-[1.01]`}
                style={{ background: `radial-gradient(ellipse at top, ${tier.glowColor}, transparent 60%), #0a1628` }}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${tier.badgeColor}`}>
                    {tier.name}
                  </span>
                  <p className={`text-3xl font-bold mt-4 mb-1 ${tier.accentColor} font-heading`}>
                    {tier.range}
                  </p>
                  <p className="text-slate-300 font-semibold text-lg font-heading">{tier.tagline}</p>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">{tier.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-500 text-sm">Delivery: <span className="text-slate-300">{tier.deliveryTime}</span></span>
                  </div>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Example Projects</p>
                  <ul className="space-y-2">
                    {tier.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="mb-8 flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What&apos;s Included</p>
                  <ul className="space-y-2">
                    {tier.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="https://calendly.com/chamal-3153/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.popular ? "btn-primary text-center py-3.5" : "btn-secondary text-center py-3.5 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-white/5"}
                >
                  {tier.cta} →
                </a>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-slate-500 max-w-2xl mx-auto text-center">
            {[
              "Fixed quote before we start",
              "You own all code & systems",
              "No monthly retainer",
              "Results in 3–42 days",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">What clients say after working with us</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "We were spending $4,200/month on a VA just for data entry. They automated the entire workflow in 12 days. We haven't hired a VA since.",
                  name: "S.M.", role: "Operations Director, Professional Services AU",
                  stat: "$50k+", statLabel: "saved year one",
                  color: "border-blue-100 bg-blue-50/50",
                },
                {
                  quote: "Sceptical at first. We'd tried AI tools before and they were useless. These guys built a proper system and deployed it in 18 days. Zero technical headaches.",
                  name: "P.S.", role: "Finance Manager, Healthcare Group NZ",
                  stat: "18 days", statLabel: "audit to live",
                  color: "border-emerald-100 bg-emerald-50/50",
                },
                {
                  quote: "Our Xero reports used to take 3 hours every Monday. Now they're automatically in the inbox at 7am with AI insights. Genuinely unreal.",
                  name: "J.T.", role: "CEO, Digital Agency UK",
                  stat: "3hrs → 0", statLabel: "weekly report time",
                  color: "border-cyan-100 bg-cyan-50/50",
                },
              ].map((t) => (
                <div key={t.name} className={`rounded-2xl border p-6 ${t.color}`}>
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map(n => (
                      <svg key={n} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 font-bold text-lg font-heading">{t.stat}</p>
                      <p className="text-slate-400 text-xs">{t.statLabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-5">Names withheld per confidentiality agreements.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center font-heading mb-10" style={{ letterSpacing: "-0.02em" }}>
              How the Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Free Audit Call", desc: "30 minutes. We map your manual processes and identify the highest-ROI automation opportunity." },
                { step: "02", title: "Fixed Quote", desc: "You receive a clear, itemised quote within 24 hours. No vague estimates. No hidden costs." },
                { step: "03", title: "We Build It", desc: "We design, build, test, and refine your automation system — usually in days, not months." },
                { step: "04", title: "You Own It", desc: "We hand over the keys. Full documentation, walkthrough, and support. It's yours forever." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-400 font-bold text-sm font-heading">{item.step}</span>
                  </div>
                  <h3 className="text-white font-semibold font-heading mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center font-heading mb-12" style={{ letterSpacing: "-0.02em" }}>
              Pricing Questions Answered
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 font-heading mb-2">{faq.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050d1a] relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-5" style={{ letterSpacing: "-0.03em" }}>
              Not Sure Which Tier Fits?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Book a free 30-minute audit. We&apos;ll scope your project and send you a fixed quote — no obligation.
            </p>
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white text-base px-10 py-4"
            >
              Book My Free Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
