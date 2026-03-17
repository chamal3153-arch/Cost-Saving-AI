import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies – Real AI Automation Results for SMBs",
  description:
    "See how Cost Saver AI helped real businesses automate manual work, reduce costs, and scale. Detailed breakdowns of what was built, how long it took, and the ROI delivered.",
    alternates: {
    canonical: 'https://costsaverai.com/case-studies',
  },
  openGraph: {
    title: "Case Studies – Cost Saver AI",
    description:
      "Real automation results: $3,800/month saved, 74% support cost reduction, 6-day delivery. See how we did it.",
    type: "website",
  },
};

const caseStudies = [
  {
    id: "tiletech",
    client: "Building Materials Wholesaler",
    industry: "Building Materials Wholesale",
    location: "Sydney, Australia",
    size: "12 employees",
    project: "Invoice Processing & Accounts Payable Automation",
    tier: "Growth — $2,800",
    deliveryTime: "11 days",
    color: "blue",
    accentClass: "text-blue-600",
    borderClass: "border-blue-100",
    bgClass: "bg-blue-50/50",
    badgeClass: "bg-blue-100 text-blue-700",
    tagline: "From 2 days of manual work per week to fully automated",
    problem: `Our client — a 12-person building materials wholesaler based in Sydney — was processing 200–300 supplier invoices per month entirely by hand. Their accounts manager spent two full days every week opening PDF invoices, manually typing figures into Xero, matching them against purchase orders in a spreadsheet, and chasing approvals by email. The process was slow, error-prone, and completely dependent on one person.

    Three invoices had been paid twice in 12 months due to data entry errors — costing the business over $4,100 in recoverable losses and hours in reconciliation.`,
    solution: [
      "Built an OCR pipeline that reads incoming PDF invoices from their shared inbox, extracts supplier name, invoice number, line items, totals, and GST automatically",
      "Connected the pipeline to Xero via API — invoices are created in draft automatically, matched against existing purchase orders",
      "Approval workflow built in Slack: Sarah receives a Slack message with the invoice details and clicks Approve or Query — no more email chains",
      "Exception handling for invoices that don't match a PO — flagged for human review only",
      "Dashboard showing invoice processing status, approval queue, and monthly volume",
    ],
    results: [
      { metric: "$3,800/month saved", detail: "Sarah now spends 2 hours/week on AP instead of 2 days" },
      { metric: "0 duplicate payments", detail: "Automated duplicate detection eliminated the $4k/year error cost" },
      { metric: "94% straight-through rate", detail: "94 out of 100 invoices processed with zero human input" },
      { metric: "11-day delivery", detail: "Live and processing invoices within 2 weeks of project kickoff" },
    ],
    quote: {
      text: "I genuinely didn't believe it would work this well. Monday mornings used to be a nightmare. Now I check the dashboard over coffee and everything's already done.",
      author: "Accounts Manager — Building Materials Wholesaler, Sydney (name withheld per NDA)",
    },
    stack: ["Python", "Google Cloud Vision (OCR)", "Xero API", "Slack API", "PostgreSQL"],
  },
  {
    id: "clinicflow",
    client: "Multi-Location Dental Group",
    industry: "Healthcare / Dental Practices",
    location: "Manchester, UK",
    size: "3 locations, 22 staff",
    project: "AI Patient Chatbot + Appointment Automation",
    tier: "Growth — $3,500",
    deliveryTime: "14 days",
    color: "cyan",
    accentClass: "text-cyan-600",
    borderClass: "border-cyan-100",
    bgClass: "bg-cyan-50/50",
    badgeClass: "bg-cyan-100 text-cyan-700",
    tagline: "74% fewer calls to reception. No-shows down 38%.",
    problem: `Our client — a dental group operating three locations in the UK — had reception desks that were overwhelmed. Each location was fielding 60–80 calls per day — the majority being appointment booking requests, "what are your opening hours?", and "can I reschedule?" questions. Receptionists had no time to focus on patients in front of them.

    On top of that, no-shows were running at 18% — each missed appointment cost the practice £80–£150 in lost revenue and an unfilled chair. Reminder calls were supposed to happen but were frequently skipped due to workload.`,
    solution: [
      "Deployed an AI chatbot on all three clinic websites handling booking, rescheduling, FAQs, and new patient intake",
      "Integrated directly with their practice management system (Dentally) via API — appointments booked by the bot appear in the calendar in real time",
      "Automated reminder sequence: SMS 48 hours before → Email 24 hours before → SMS 2 hours before, with a one-tap confirm/reschedule link",
      "New patient intake form automated: chatbot collects medical history, insurance info, and preferences before the first visit — pre-populated into Dentally",
      "After-hours coverage: chatbot handles all enquiries 24/7, escalating urgent dental emergencies to an on-call number",
    ],
    results: [
      { metric: "74% fewer inbound calls", detail: "Receptionists now handle complex queries only — chatbot handles the rest" },
      { metric: "No-shows down 38%", detail: "From 18% to 11.2% no-show rate across all three locations" },
      { metric: "£6,200/month recovered", detail: "From reduced no-shows and freed receptionist time (equivalent to 1 FTE)" },
      { metric: "4.8★ patient satisfaction", detail: "Post-visit survey score increased from 4.1 to 4.8 within 60 days" },
    ],
    quote: {
      text: "The phones still ring, but it's actually important calls now. The bot handles everything else. Our receptionists finally have breathing room — and the patients love being able to book at 11pm.",
      author: "Practice Director — Multi-Location Dental Group, UK (name withheld per NDA)",
    },
    stack: ["Next.js", "Claude API", "Dentally API", "Twilio (SMS)", "SendGrid (Email)"],
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="badge badge-blue mb-6">
              <span>📊</span> Real Results
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Automation That Pays{" "}
              <span className="gradient-text-blue-cyan">For Itself</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Two real-world projects. Full breakdown of what was built, what it cost,
              and what it saved. No vague claims — just numbers.
            </p>
            <p className="mt-4 text-sm text-slate-600 flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Client names withheld per confidentiality agreements. All results are real and verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Bar */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { value: "$3,800", label: "Monthly saving (Case 1)", color: "text-blue-400" },
              { value: "74%", label: "Fewer support calls (Case 2)", color: "text-cyan-400" },
              { value: "11 days", label: "Fastest delivery", color: "text-emerald-400" },
              { value: "£6,200", label: "Monthly revenue recovered (Case 2)", color: "text-purple-400" },
            ].map((s) => (
              <div key={s.label}>
                <p className={`stat-number text-3xl md:text-4xl font-bold ${s.color} mb-1`}>{s.value}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20">
            {caseStudies.map((cs, idx) => (
              <article key={cs.id} className="scroll-mt-24" id={cs.id}>
                {/* Header */}
                <div className={`rounded-2xl border ${cs.borderClass} ${cs.bgClass} p-8 mb-8`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${cs.badgeClass}`}>
                        Case Study {idx + 1}
                      </span>
                      <h2 className={`text-2xl md:text-3xl font-bold text-slate-900 font-heading mt-3 mb-1`}>
                        {cs.client}
                      </h2>
                      <p className="text-slate-500 text-sm">
                        {cs.industry} · {cs.location} · {cs.size}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${cs.accentClass} font-heading`}>{cs.tier}</p>
                      <p className="text-slate-500 text-sm">Delivered in {cs.deliveryTime}</p>
                    </div>
                  </div>
                  <p className={`text-lg font-semibold ${cs.accentClass} font-heading`}>{cs.tagline}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left col */}
                  <div className="space-y-8">
                    {/* Problem */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center text-sm">⚠️</span>
                        The Problem
                      </h3>
                      {cs.problem.split("\n\n").map((para, i) => (
                        <p key={i} className="text-slate-600 text-sm leading-relaxed mb-3">{para.trim()}</p>
                      ))}
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-sm">⚙️</span>
                        What We Built
                      </h3>
                      <ul className="space-y-3">
                        {cs.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5 ${cs.color === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'}`}>
                              {i + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.stack.map((tech) => (
                          <span key={tech} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right col */}
                  <div className="space-y-6">
                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-sm">📈</span>
                        The Results
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cs.results.map((r) => (
                          <div key={r.metric} className="border border-slate-200 rounded-xl p-4 bg-white">
                            <p className={`text-xl font-bold ${cs.accentClass} font-heading mb-1`}>{r.metric}</p>
                            <p className="text-slate-500 text-xs leading-relaxed">{r.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className={`border-l-4 ${cs.color === 'blue' ? 'border-blue-400' : 'border-cyan-400'} bg-slate-50 rounded-r-xl p-6`}>
                      <p className="text-slate-700 text-sm italic leading-relaxed mb-3">
                        &ldquo;{cs.quote.text}&rdquo;
                      </p>
                      <p className="text-slate-500 text-xs font-semibold">{cs.quote.author}</p>
                    </div>
                  </div>
                </div>

                {idx < caseStudies.length - 1 && (
                  <div className="border-b border-slate-100 mt-16" />
                )}
              </article>
            ))}
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
            <div className="badge badge-blue mx-auto mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Your turn
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              What Would{" "}
              <span className="gradient-text-blue-cyan">Your Case Study</span>{" "}
              Say?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Book a free 30-minute audit. We&apos;ll identify your highest-ROI automation and give you a fixed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white text-base px-10 py-4"
              >
                Book My Free Audit →
              </a>
              <Link href="/pricing" className="btn-secondary text-base px-8 py-4 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
