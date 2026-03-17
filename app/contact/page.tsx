import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import CalendlyWidget from "../components/CalendlyWidget";

export const metadata: Metadata = {
  title: "Contact Us – Book a Free Automation Audit | Cost Saver AI",
  description:
    "Book a free 30-minute discovery call or send us a message. We'll scope your project, calculate your ROI, and send a fixed quote — no obligation.",
  keywords: [
    "AI automation consultation",
    "free audit call",
    "automation quote",
    "AI workflow consultation",
  ],
    alternates: {
    canonical: 'https://costsaverai.com/contact',
  },
  openGraph: {
    title: "Contact Cost Saver AI – Get Your Free Audit",
    description:
      "Book a free discovery call and get a custom AI automation proposal for your business.",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-blue mx-auto mb-5">
              <span>📞</span> Free Discovery Call
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let&apos;s Scope Your{" "}
              <span className="gradient-text-blue-cyan">Automation Project</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every business is different. On a free 30-minute call we map your workflows, identify
              the highest-ROI automation, and send you a fixed quote — no templates, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* 3-step process strip */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-0 max-w-3xl mx-auto">
            {[
              { step: "01", label: "Book a 30-min call", icon: "📅" },
              { step: "02", label: "We send a fixed quote", icon: "📋" },
              { step: "03", label: "We build your system", icon: "🚀" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-0">
                <div className="flex items-center gap-3 px-6 py-3 text-center sm:text-left">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-slate-600 text-xs font-mono">{item.step}</p>
                    <p className="text-slate-300 text-sm font-semibold font-heading">{item.label}</p>
                  </div>
                </div>
                {i < 2 && (
                  <svg className="w-4 h-4 text-slate-700 flex-shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#050d1a] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">

            {/* LEFT — Calendly */}
            <div className="bg-[#0a1628] border border-blue-500/15 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white font-heading mb-2">
                Book Your Free Discovery Call
              </h2>
              <p className="text-slate-400 text-sm mb-5">
                30 minutes. We&apos;ll walk through your workflows, answer questions, and outline exactly
                where automation creates the most value for your business.
              </p>
              <div className="w-full overflow-hidden rounded-xl">
                <CalendlyWidget url="https://calendly.com/chamal-3153/30min" />
              </div>
            </div>

            {/* RIGHT — form + info */}
            <div className="space-y-6">

              {/* Send a message */}
              <div id="contact-form" className="bg-[#0a1628] border border-blue-500/15 rounded-2xl p-6 md:p-8 scroll-mt-20">
                <h2 className="text-xl font-bold text-white font-heading mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  Prefer to write first? Tell us about your project and we&apos;ll reply within one business day with initial thoughts and next steps.
                </p>
                <ContactForm />
              </div>

              {/* Direct email */}
              <div className="bg-[#0a1628] border border-white/6 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-semibold mb-0.5">Email us directly</p>
                    <a
                      href="mailto:costsaverai@proton.me"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      costsaverai@proton.me
                    </a>
                    <p className="text-slate-600 text-xs mt-1">Replies within 1 business day</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#0a1628] border border-white/6 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-semibold mb-0.5">Based in Australia</p>
                    <p className="text-slate-500 text-sm">Serving clients globally — AU · NZ · UK · US · SG</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
