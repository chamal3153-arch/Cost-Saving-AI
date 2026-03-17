const testimonials = [
  {
    quote:
      "We were spending $4,200/month on a VA just for data entry and invoice processing. Cost Saver AI automated the entire workflow in 12 days. We haven't hired a VA since.",
    name: "S.M.",
    title: "Operations Director",
    company: "Professional Services Firm, AU (name withheld per NDA)",
    avatar: "SM",
    avatarColor: "from-blue-500 to-cyan-500",
    stat: "$50k+",
    statLabel: "saved in year one",
  },
  {
    quote:
      "Our Xero reports used to take our finance manager 3 hours every Monday morning. Now they're automatically in her inbox at 7am with AI-written insights. Genuinely unreal.",
    name: "J.T.",
    title: "CEO",
    company: "Digital Agency, UK (name withheld per NDA)",
    avatar: "JT",
    avatarColor: "from-cyan-500 to-emerald-500",
    stat: "3hrs → 0",
    statLabel: "weekly report time",
  },
  {
    quote:
      "I was sceptical — we'd tried 'AI tools' before and they were useless. These guys audited our processes, built a proper system, and deployed it in 18 days. Zero technical headaches on our end.",
    name: "P.S.",
    title: "Finance Manager",
    company: "Healthcare Group, NZ (name withheld per NDA)",
    avatar: "PS",
    avatarColor: "from-purple-500 to-blue-500",
    stat: "18 days",
    statLabel: "from audit to live",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="badge badge-blue mx-auto mb-5">
            <span>⭐</span> Client Results
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-heading mb-4">
            Real Businesses.{" "}
            <span className="gradient-text">Real Savings.</span>
          </h2>
          <p className="text-slate-500 text-lg">
            See what happens when you replace manual work with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stat callout */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-center">
                <p className="stat-number text-2xl gradient-text">{t.stat}</p>
                <p className="text-slate-500 text-xs mt-0.5 font-heading">{t.statLabel}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-xs font-bold font-heading">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm font-heading">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
