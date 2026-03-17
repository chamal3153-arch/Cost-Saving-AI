"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build and deploy an AI automation system?",
    answer:
      "Most systems go live in 2–3 weeks from the discovery call. Simpler automations (email routing, data entry, report generation) can be live in under a week. Complex multi-tool workflows typically take 2–4 weeks. We'll give you a precise timeline during your free audit.",
  },
  {
    question: "Do I need any technical knowledge to use the automations?",
    answer:
      "None whatsoever. We build everything end-to-end and train your team on how to use it. If something breaks or needs updating, we handle it. You just use the result — like a new employee who never sleeps.",
  },
  {
    question: "What tools and software do you integrate with?",
    answer:
      "We integrate with 100+ platforms including Xero, HubSpot, Salesforce, Airtable, Google Sheets, Slack, Microsoft Teams, Notion, Zapier, Make.com, n8n, OpenAI, and many more. If you're using it, we can almost certainly connect to it.",
  },
  {
    question: "How much does AI automation cost and are there monthly fees?",
    answer:
      "Every system is quoted based on your specific requirements. The core model is a one-time build fee — you own the system outright with no ongoing retainer. Some third-party API costs may apply (e.g. OpenAI usage), but these are typically under $50/month and far less than what you're currently spending manually.",
  },
  {
    question: "What ROI can I realistically expect?",
    answer:
      "Our clients typically see 70–90% reduction in the manual costs being automated. The average client saves $2,000–$8,000/month within the first 60 days. The ROI calculator on this page gives a personalised estimate based on your inputs.",
  },
  {
    question: "Is my business data secure with your automation systems?",
    answer:
      "Yes. We follow enterprise security best practices: encrypted connections, principle of least-privilege API access, and we never store your sensitive data on our own servers. All credentials are stored in your own environment.",
  },
  {
    question: "Do I own the automation system you build?",
    answer:
      "100%. Once built and deployed, the system is yours. No vendor lock-in. No monthly licensing to us. If you want to take it to another developer in future, you can. We even provide full documentation.",
  },
  {
    question: "What size businesses do you work with?",
    answer:
      "We specialise in small and mid-sized businesses — typically 5 to 500 employees with annual revenue between $500k and $50M. The sweet spot is businesses doing $1M–$10M in revenue that have outgrown manual processes but haven't yet built out a full tech team.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="badge badge-blue mx-auto mb-5">
            <span>❓</span> FAQ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-heading mb-4">
            Questions We Get Every Day
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know before booking your free audit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-blue-200 shadow-sm"
                    : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base font-heading leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-45"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions?{" "}
            <a
              href="mailto:costsaverai@proton.me"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
            >
              Email us directly
            </a>{" "}
            or{" "}
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
            >
              book a free call
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
