'use client';

import { useState } from 'react';

const steps = [
  {
    id: 'business',
    question: 'What type of business are you running?',
    subtitle: 'We\'ll tailor your results to your industry.',
    options: [
      { label: 'Professional Services', sub: 'Consulting, accounting, legal', icon: '💼' },
      { label: 'E-commerce / Retail', sub: 'Online or physical store', icon: '🛒' },
      { label: 'Healthcare / Medical', sub: 'Clinic, dental, allied health', icon: '🏥' },
      { label: 'Trade / Property', sub: 'Construction, real estate, facilities', icon: '🏗️' },
      { label: 'Other SMB', sub: 'Any other small-mid business', icon: '🏢' },
    ],
  },
  {
    id: 'pain',
    question: 'Which manual process costs you the most time?',
    subtitle: 'Pick the one that\'s hurting most right now.',
    options: [
      { label: 'Invoice & document processing', sub: 'Data entry, approvals, filing', icon: '🧾' },
      { label: 'Customer support & enquiries', sub: 'Emails, calls, FAQs', icon: '💬' },
      { label: 'Reporting & dashboards', sub: 'Pulling data, building reports', icon: '📊' },
      { label: 'Lead follow-up & CRM', sub: 'Chasing leads, updating records', icon: '📈' },
      { label: 'Social media & content', sub: 'Creating and scheduling posts', icon: '📱' },
    ],
  },
  {
    id: 'people',
    question: 'How many people are doing this manually?',
    subtitle: 'Include full-time, part-time and VAs.',
    options: [
      { label: 'Just me', sub: 'Founder doing it all', icon: '🧑' },
      { label: '2–3 people', sub: 'Small team', icon: '👥' },
      { label: '4–6 people', sub: 'Growing team', icon: '👨‍👩‍👧‍👦' },
      { label: '7+ people', sub: 'Large operation', icon: '🏢' },
    ],
  },
  {
    id: 'hours',
    question: 'How many hours per week does this process take?',
    subtitle: 'Across your whole team combined.',
    options: [
      { label: 'Under 5 hours', sub: 'Occasional but annoying', icon: '⏱️' },
      { label: '5–10 hours', sub: 'Half a day+ per week', icon: '🕐' },
      { label: '10–20 hours', sub: 'Multiple half-days per week', icon: '🕙' },
      { label: '20+ hours', sub: 'Almost a full-time role', icon: '📅' },
    ],
  },
  {
    id: 'cost',
    question: 'Monthly salary cost for the people doing this?',
    subtitle: 'Rough estimate including the portion spent on this task.',
    options: [
      { label: 'Under $2,000', sub: 'Part-time / low cost', icon: '💵' },
      { label: '$2,000 – $5,000', sub: 'One part-time or shared role', icon: '💰' },
      { label: '$5,000 – $10,000', sub: 'One or two staff', icon: '💎' },
      { label: 'Over $10,000', sub: 'Full team or senior staff', icon: '🏦' },
    ],
  },
];

// Savings + project cost lookup
const savingsMap: Record<string, { min: number; max: number }> = {
  'Under $2,000': { min: 1200, max: 1800 },
  '$2,000 – $5,000': { min: 2400, max: 4000 },
  '$5,000 – $10,000': { min: 4500, max: 8000 },
  'Over $10,000': { min: 8000, max: 15000 },
};

const projectCostMap: Record<string, { min: number; max: number }> = {
  'Just me': { min: 400, max: 1500 },
  '2–3 people': { min: 1200, max: 3000 },
  '4–6 people': { min: 2000, max: 5000 },
  '7+ people': { min: 3500, max: 8000 },
};

const painToService: Record<string, string> = {
  'Invoice & document processing': 'Invoice & Document Automation',
  'Customer support & enquiries': 'AI Chatbot & Support Automation',
  'Reporting & dashboards': 'Custom Business Dashboard',
  'Lead follow-up & CRM': 'CRM & Lead Automation',
  'Social media & content': 'Social Media AI System',
};

export default function AuditQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  function selectOption(option: string) {
    const newAnswers = { ...answers, [step.id]: option };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 260);
    } else {
      setTimeout(() => setShowResults(true), 260);
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Build mailto with pre-filled lead info
    const body = encodeURIComponent(
      `New Audit Quiz Lead!\n\n` +
      `Email: ${email}\n` +
      `Business type: ${answers.business}\n` +
      `Biggest pain: ${answers.pain}\n` +
      `Team size: ${answers.people}\n` +
      `Hours/week: ${answers.hours}\n` +
      `Monthly cost: ${answers.cost}\n\n` +
      `Estimated monthly savings: $${savings.min.toLocaleString()} – $${savings.max.toLocaleString()}\n` +
      `Recommended service: ${recommendedService}`
    );

    window.open(`mailto:costsaverai@proton.me?subject=New%20Audit%20Quiz%20Lead%20-%20${encodeURIComponent(email)}&body=${body}`);
    setSubmitted(true);
  }

  // Calculate results
  const savings = savingsMap[answers.cost] || { min: 1500, max: 3500 };
  const projectCost = projectCostMap[answers.people] || { min: 800, max: 2500 };
  const paybackMonths = Math.ceil(projectCost.min / savings.min);
  const recommendedService = painToService[answers.pain] || 'Custom AI Automation';
  const annualSavings = savings.min * 12;

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Results header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-2" style={{ letterSpacing: '-0.02em' }}>
            Your Automation Opportunity
          </h3>
          <p className="text-slate-400">Based on your answers — here&apos;s what we found.</p>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Monthly savings', value: `$${savings.min.toLocaleString()}–$${savings.max.toLocaleString()}`, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
            { label: 'Annual savings', value: `$${annualSavings.toLocaleString()}+`, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
            { label: 'Payback period', value: `${paybackMonths}–${paybackMonths + 1} months`, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl border p-4 text-center ${s.bg}`}>
              <p className={`text-xl md:text-2xl font-bold font-heading ${s.color} mb-1`}>{s.value}</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="bg-[#0a1628] border border-blue-500/20 rounded-xl p-5 mb-6">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Recommended Solution</p>
          <p className="text-white font-semibold font-heading text-lg mb-1">{recommendedService}</p>
          <p className="text-slate-400 text-sm">
            Estimated project cost: <span className="text-white">${projectCost.min.toLocaleString()} – ${projectCost.max.toLocaleString()}</span> one-time. You own it outright.
          </p>
        </div>

        {/* Email capture */}
        {!submitted ? (
          <div className="bg-[#0a1628] border border-white/8 rounded-xl p-5 mb-5">
            <p className="text-white font-semibold mb-1">Get your full personalised report</p>
            <p className="text-slate-400 text-sm mb-4">We&apos;ll send a detailed breakdown with exact steps to automate your specific process.</p>
            <form onSubmit={handleEmailSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
              />
              <button type="submit" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">
                Send Report →
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 mb-5 text-center">
            <p className="text-emerald-400 font-semibold">Report on its way! Check your inbox.</p>
          </div>
        )}

        {/* Primary CTA */}
        <a
          href="https://calendly.com/chamal-3153/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center py-4 text-base block mb-3"
        >
          Book My Free 30-Min Audit Call →
        </a>
        <p className="text-center text-slate-600 text-xs">
          No sales pitch. We&apos;ll walk through your specific process and give you a fixed quote.
        </p>

        {/* Retake */}
        <button
          onClick={() => { setAnswers({}); setCurrentStep(0); setShowResults(false); setSubmitted(false); setEmail(''); }}
          className="w-full text-center text-slate-600 text-sm mt-4 hover:text-slate-400 transition-colors"
        >
          ← Start over
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-500 font-medium">Step {currentStep + 1} of {steps.length}</span>
          <span className="text-xs text-slate-500">{Math.round(((currentStep) / steps.length) * 100)}% complete</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-7">
        <h3 className="text-xl md:text-2xl font-bold text-white font-heading mb-2" style={{ letterSpacing: '-0.02em' }}>
          {step.question}
        </h3>
        <p className="text-slate-400 text-sm">{step.subtitle}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {step.options.map((option) => (
          <button
            key={option.label}
            onClick={() => selectOption(option.label)}
            className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group
              ${answers[step.id] === option.label
                ? 'border-blue-500/60 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                : 'border-white/8 bg-white/3 hover:border-blue-500/40 hover:bg-white/6'
              }`}
          >
            <span className="text-2xl flex-shrink-0">{option.icon}</span>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm font-heading transition-colors ${answers[step.id] === option.label ? 'text-blue-300' : 'text-white group-hover:text-blue-200'}`}>
                {option.label}
              </p>
              <p className="text-slate-500 text-xs mt-0.5">{option.sub}</p>
            </div>
            <svg className={`w-5 h-5 flex-shrink-0 transition-all ${answers[step.id] === option.label ? 'text-blue-400 opacity-100' : 'text-slate-600 opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>

      {/* Back button */}
      {currentStep > 0 && (
        <button
          onClick={() => setCurrentStep(currentStep - 1)}
          className="mt-5 text-slate-600 text-sm hover:text-slate-400 transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      )}
    </div>
  );
}
