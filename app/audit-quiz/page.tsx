import type { Metadata } from 'next';
import AuditQuiz from '../components/AuditQuiz';

export const metadata: Metadata = {
  title: 'Free Automation Audit Quiz – Find Your ROI in 2 Minutes',
  description:
    'Answer 5 quick questions and get a personalised estimate of how much you could save by automating your biggest manual process. Free, instant results.',
  openGraph: {
    title: 'Free Automation Audit Quiz – Cost Saver AI',
    description:
      'Discover your automation ROI in 2 minutes. See monthly savings estimates, payback period, and a recommended solution tailored to your business.',
    type: 'website',
  },
};

export default function AuditQuizPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-cyan mx-auto mb-6">
              <span>⚡</span> 2-Minute Quiz
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              How Much Could You{' '}
              <span className="gradient-text-blue-cyan">Save With AI?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
              Answer 5 quick questions. Get a personalised estimate of your monthly savings, payback period, and the exact automation your business needs.
            </p>
            <p className="text-sm text-slate-600">Free · No email required to see results · Takes 2 minutes</p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-[#050d1a] py-12 md:py-20 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AuditQuiz />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0d1b2e] border-t border-white/6 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              { icon: '🔒', title: 'No spam, ever', body: 'Your email is only used to send your personalised report. Unsubscribe any time.' },
              { icon: '📊', title: 'Real estimates', body: 'Based on actual project costs and client results from our case studies.' },
              { icon: '📞', title: 'No obligation', body: 'The audit call is free. No sales pitch — just honest advice on your specific process.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-white font-semibold text-sm font-heading">{item.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
