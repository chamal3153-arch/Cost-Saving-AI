const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Free Process Audit",
    subtitle: "30-min discovery call",
    description:
      "We map your most expensive manual workflows, identify automation wins, and calculate your exact ROI before you spend a single dollar.",
    color: "brand-blue",
    gradient: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/25",
    badge: "rgba(59,130,246,0.12)",
    badgeText: "#93c5fd",
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Build",
    subtitle: "2–3 week deployment",
    description:
      "We build your AI automation system, connecting to your existing tools — CRM, accounting, email, spreadsheets. Zero disruption to how you work.",
    color: "brand-cyan",
    gradient: "from-cyan-600/20 to-cyan-800/10",
    border: "border-cyan-500/25",
    badge: "rgba(6,182,212,0.12)",
    badgeText: "#67e8f9",
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Deploy & Own",
    subtitle: "You own it. No monthly fees.",
    description:
      "Your system goes live and starts saving money from day one. You own the automation outright — no vendor lock-in, no recurring retainers.",
    color: "brand-emerald",
    gradient: "from-emerald-600/20 to-emerald-800/10",
    border: "border-emerald-500/25",
    badge: "rgba(16,185,129,0.12)",
    badgeText: "#6ee7b7",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="badge badge-blue mx-auto mb-5">
            <span>⚡</span> How It Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-heading mb-4">
            From Audit to Automation{" "}
            <span className="gradient-text">in 3 Steps</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Most clients are saving time and money within 3 weeks. No technical knowledge required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-slate-200 to-transparent z-10 -ml-4" />
              )}

              <div
                className={`bg-gradient-to-br ${step.gradient} border ${step.border} rounded-2xl p-7 h-full relative overflow-hidden group hover:shadow-lg transition-all duration-300`}
              >
                {/* Step number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black opacity-5 font-heading select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: step.badge, color: step.badgeText }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest mb-2 font-heading"
                    style={{ color: step.badgeText }}
                  >
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://calendly.com/chamal-3153/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Start with a Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
