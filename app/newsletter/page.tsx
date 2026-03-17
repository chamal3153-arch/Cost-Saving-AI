import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Newsletter – Weekly Insights for SMB Owners',
  description:
    'Get a weekly roundup of AI tools, automation case studies, and cost-saving tactics delivered straight to your inbox. Free, practical, no fluff.',
  openGraph: {
    title: 'AI Automation Newsletter – Cost Saver AI',
    description:
      'Weekly AI automation insights for SMB owners. Real tools, real results, zero jargon.',
    type: 'website',
  },
};

const topics = [
  { icon: '🤖', title: 'AI Tool Roundups', body: 'The best new automation tools reviewed every week — what works, what\'s overhyped, and what\'s worth your time.' },
  { icon: '📊', title: 'Real Case Studies', body: 'How real SMBs automated specific processes, what it cost, and what they saved. Numbers included.' },
  { icon: '💡', title: 'Actionable Tactics', body: 'Step-by-step breakdowns you can implement this week — no developer required for most of them.' },
  { icon: '🔥', title: 'Industry News', body: 'The AI developments that actually matter for your business, filtered from the noise.' },
];

const recentIssues = [
  { number: '#004', title: 'How to Cut Invoice Processing Time by 90% Using Free OCR Tools', tag: 'Workflow' },
  { number: '#003', title: '5 Zapier Automations Every Service Business Should Have Running', tag: 'Quick Wins' },
  { number: '#002', title: 'Claude vs GPT-4 for Business Automation — Honest Comparison', tag: 'AI Tools' },
  { number: '#001', title: 'The $3,800/Month Save: How One Wholesaler Automated Their AP Department', tag: 'Case Study' },
];

export default function Newsletter() {
  const mailtoLink = `mailto:costsaverai@proton.me?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20the%20Cost%20Saver%20AI%20newsletter.%0A%0AMy%20name%3A%20%0AMy%20business%3A%20%0AMy%20biggest%20manual%20process%3A%20`;

  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-cyan mx-auto mb-6">
              <span>📬</span> Free Weekly Newsletter
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              AI Automation Insights{' '}
              <span className="gradient-text-blue-cyan">That Actually Help</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              A weekly email for SMB owners. Practical AI tools, real automation case studies, and cost-saving tactics — written by people who build these systems for a living.
            </p>

            {/* Signup */}
            <div className="bg-[#0a1628] border border-blue-500/20 rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
              <p className="text-white font-semibold text-lg font-heading mb-1">Join the list</p>
              <p className="text-slate-400 text-sm mb-5">One email per week. Unsubscribe any time. Zero spam.</p>
              <a
                href={mailtoLink}
                className="btn-primary w-full text-center py-4 text-base block"
              >
                Subscribe via Email →
              </a>
              <p className="text-slate-600 text-xs mt-3 text-center">
                Clicking opens your email client with a pre-filled signup. We&apos;ll add you manually within 24 hours.
              </p>
            </div>

            <p className="text-slate-600 text-sm mt-5">Free forever · No credit card · No spam</p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">Every issue includes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {topics.map((t) => (
                <div key={t.title} className="bg-[#0a1628] border border-white/6 rounded-xl p-6 flex gap-4">
                  <span className="text-2xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-white font-semibold font-heading mb-1">{t.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent issues */}
      <section className="bg-[#050d1a] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 text-center">Recent issues</p>
            <div className="space-y-3">
              {recentIssues.map((issue) => (
                <div key={issue.number} className="flex items-center gap-4 bg-white/3 border border-white/6 rounded-xl px-5 py-4">
                  <span className="text-slate-600 text-xs font-mono flex-shrink-0">{issue.number}</span>
                  <p className="text-slate-300 text-sm flex-1 leading-snug">{issue.title}</p>
                  <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full flex-shrink-0 hidden sm:block">{issue.tag}</span>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-10 text-center">
              <a
                href={mailtoLink}
                className="btn-primary inline-flex text-base px-8 py-4"
              >
                Subscribe Free →
              </a>
              <p className="text-slate-600 text-xs mt-3">One email per week. No fluff. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
