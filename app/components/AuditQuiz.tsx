'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormData {
  // Step 1 – Business
  industry: string;
  companySize: string;
  // Step 2 – Team & Time
  staffCount: number;
  hourlyRate: number;
  hoursPerWeek: number;
  // Step 3 – Processes (multi-select)
  processes: string[];
  // Step 4 – Errors & Rework
  errorsPerWeek: number;
  hoursToFix: number;
  complaintsPerMonth: number;
  // Step 5 – Revenue & Tools
  revenuePerEmployee: number;
  toolSpend: number;
}

const DEFAULT: FormData = {
  industry: '',
  companySize: '',
  staffCount: 3,
  hourlyRate: 45,
  hoursPerWeek: 12,
  processes: [],
  errorsPerWeek: 5,
  hoursToFix: 1.5,
  complaintsPerMonth: 2,
  revenuePerEmployee: 8000,
  toolSpend: 400,
};

const INDUSTRIES = [
  { label: 'Professional Services', icon: '💼', sub: 'Consulting, legal, accounting' },
  { label: 'Healthcare / Allied Health', icon: '🏥', sub: 'Clinics, dental, physio' },
  { label: 'E-commerce / Retail', icon: '🛒', sub: 'Online or physical store' },
  { label: 'Real Estate / Property', icon: '🏠', sub: 'Agents, PMs, developers' },
  { label: 'Finance / Accounting', icon: '📊', sub: 'Bookkeeping, financial advice' },
  { label: 'Construction / Trades', icon: '🏗️', sub: 'Building, facilities, trades' },
  { label: 'Education / Training', icon: '🎓', sub: 'Schools, RTOs, coaches' },
  { label: 'Other SMB', icon: '🏢', sub: 'Any other business' },
];

const SIZES = [
  { label: '1–5', sub: 'Solo / micro' },
  { label: '6–20', sub: 'Small team' },
  { label: '21–50', sub: 'Growing' },
  { label: '51–200', sub: 'Mid-market' },
  { label: '200+', sub: 'Enterprise' },
];

const PROCESSES = [
  { id: 'data_entry', label: 'Data Entry & Migration', icon: '⌨️' },
  { id: 'invoicing', label: 'Invoicing & Accounts Payable', icon: '🧾' },
  { id: 'reporting', label: 'Report Generation', icon: '📊' },
  { id: 'email_followup', label: 'Email Follow-ups & Sequences', icon: '📧' },
  { id: 'scheduling', label: 'Scheduling & Appointments', icon: '📅' },
  { id: 'onboarding', label: 'Client / Staff Onboarding', icon: '👤' },
  { id: 'inventory', label: 'Inventory Management', icon: '📦' },
  { id: 'compliance', label: 'Compliance & Documentation', icon: '📋' },
  { id: 'crm', label: 'CRM Updates & Data Sync', icon: '🔄' },
  { id: 'payroll', label: 'Payroll & Timesheets', icon: '💰' },
  { id: 'social', label: 'Social Media Management', icon: '📱' },
  { id: 'support', label: 'Customer Support Tickets', icon: '💬' },
];

// ─── Real calculation engine ──────────────────────────────────────────────────
function calculate(d: FormData) {
  const { staffCount, hourlyRate, hoursPerWeek, errorsPerWeek, hoursToFix,
          complaintsPerMonth, revenuePerEmployee, toolSpend, companySize, processes } = d;

  // 1. Annual manual labour cost (time literally paid to do repetitive tasks)
  const weeklyLabourCost = staffCount * hoursPerWeek * hourlyRate;
  const annualLabourCost = weeklyLabourCost * 52;

  // 2. Annual error rework cost
  const weeklyErrorHours = errorsPerWeek * hoursToFix;
  const annualErrorCost = weeklyErrorHours * hourlyRate * 52;

  // 3. Complaint handling cost (avg 2.5h per complaint to resolve, at hourly rate)
  const annualComplaintCost = complaintsPerMonth * 2.5 * hourlyRate * 12;

  // 4. Opportunity cost: freed hours redirected to revenue-generating work
  //    Revenue/employee/month ÷ 160 working hours = revenue per hour
  //    Assume 80% of freed hours can be redirected to revenue work
  const revenuePerHour = revenuePerEmployee / 160;
  const annualOpportunityCost = staffCount * hoursPerWeek * 0.8 * revenuePerHour * 52;

  // Total annual cost of doing things manually
  const totalAnnualCost = annualLabourCost + annualErrorCost + annualComplaintCost + annualOpportunityCost;

  // ── Savings projections (conservative automation rates) ──
  const labourSavings = annualLabourCost * 0.82;      // automate 82% of manual hours
  const errorSavings = annualErrorCost * 0.94;         // near-eliminate errors
  const complaintSavings = annualComplaintCost * 0.75; // reduce complaints
  const opportunitySavings = annualOpportunityCost * 0.60; // unlock 60% of opportunity
  const totalAnnualSavings = labourSavings + errorSavings + complaintSavings + opportunitySavings;

  // ── Estimated project investment ──
  const sizeMultiplier =
    companySize === '1–5' ? 1 :
    companySize === '6–20' ? 1.8 :
    companySize === '21–50' ? 3.0 :
    companySize === '51–200' ? 4.5 : 7;
  const processComplexity = 1 + Math.min(processes.length, 8) * 0.18;
  const rawProjectCost = 950 * sizeMultiplier * processComplexity;
  const projectCost = Math.max(400, Math.round(rawProjectCost / 50) * 50);

  // ── ROI metrics ──
  const roiPercent = Math.round(((totalAnnualSavings - projectCost) / projectCost) * 100);
  const paybackMonths = parseFloat((projectCost / (totalAnnualSavings / 12)).toFixed(1));
  const fiveYearNet = Math.round(totalAnnualSavings * 5 - projectCost);
  const hoursFreedPerYear = Math.round(staffCount * hoursPerWeek * 52 * 0.82);
  const monthlyWaste = Math.round(totalAnnualCost / 12);

  return {
    annualLabourCost: Math.round(annualLabourCost),
    annualErrorCost: Math.round(annualErrorCost),
    annualComplaintCost: Math.round(annualComplaintCost),
    annualOpportunityCost: Math.round(annualOpportunityCost),
    totalAnnualCost: Math.round(totalAnnualCost),
    labourSavings: Math.round(labourSavings),
    errorSavings: Math.round(errorSavings),
    complaintSavings: Math.round(complaintSavings),
    opportunitySavings: Math.round(opportunitySavings),
    totalAnnualSavings: Math.round(totalAnnualSavings),
    projectCost,
    roiPercent,
    paybackMonths,
    fiveYearNet,
    hoursFreedPerYear,
    monthlyWaste,
  };
}

function fmt(n: number) {
  return n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;
}
function fmtFull(n: number) {
  return `$${n.toLocaleString()}`;
}

// ─── Slider component ─────────────────────────────────────────────────────────
function Slider({ label, value, min, max, step = 1, onChange, format, hint }: {
  label: string; value: number; min: number; max: number; step?: number;
  onChange: (v: number) => void; format: (v: number) => string; hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-sm font-semibold text-slate-300">{label}</label>
        <span className="text-blue-400 font-bold text-base font-heading">{format(value)}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #06b6d4 ${pct}%, rgba(255,255,255,0.08) ${pct}%, rgba(255,255,255,0.08) 100%)`,
          }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-slate-600 text-xs">{format(min)}</span>
        {hint && <span className="text-slate-600 text-xs italic">{hint}</span>}
        <span className="text-slate-600 text-xs">{format(max)}</span>
      </div>
    </div>
  );
}

// ─── AnimatedNumber ───────────────────────────────────────────────────────────
function AnimatedNumber({ value, prefix = '$' }: { value: number; prefix?: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef(value);
  useEffect(() => {
    const target = value;
    const start = ref.current;
    const diff = target - start;
    if (Math.abs(diff) < 10) { setDisplay(target); ref.current = target; return; }
    const steps = 20;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      const eased = 1 - Math.pow(1 - i / steps, 3);
      const cur = Math.round(start + diff * eased);
      setDisplay(cur);
      if (i >= steps) { clearInterval(timer); ref.current = target; }
    }, 20);
    return () => clearInterval(timer);
  }, [value]);
  return <>{prefix}{display.toLocaleString()}</>;
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
const STEP_LABELS = ['Business', 'Your Team', 'Processes', 'Quality', 'Revenue'];

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        {STEP_LABELS.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i < step ? 'bg-blue-500 text-white' :
              i === step ? 'bg-blue-500/20 border-2 border-blue-500 text-blue-400' :
              'bg-white/5 border border-white/10 text-slate-600'
            }`}>
              {i < step ? '✓' : i + 1}
            </div>
            <span className={`text-xs hidden sm:block transition-colors ${
              i === step ? 'text-blue-400' : i < step ? 'text-slate-400' : 'text-slate-600'
            }`}>{label}</span>
          </div>
        ))}
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AuditQuiz() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(DEFAULT);
  const [showResults, setShowResults] = useState(false);

  const set = (key: keyof FormData) => (val: unknown) =>
    setData(prev => ({ ...prev, [key]: val }));

  const toggleProcess = (id: string) => {
    setData(prev => ({
      ...prev,
      processes: prev.processes.includes(id)
        ? prev.processes.filter(p => p !== id)
        : [...prev.processes, id],
    }));
  };

  const results = calculate(data);
  const TOTAL_STEPS = 5;

  const canAdvance = [
    data.industry && data.companySize,           // step 0
    data.staffCount && data.hourlyRate && data.hoursPerWeek, // step 1
    data.processes.length > 0,                   // step 2
    true,                                        // step 3
    true,                                        // step 4
  ];

  // ── RESULTS SCREEN ──────────────────────────────────────────────────────────
  if (showResults) {
    const r = results;
    const totalPct = r.totalAnnualCost > 0;

    const barData = [
      { label: 'Labour waste', value: r.annualLabourCost, savings: r.labourSavings, color: '#3b82f6' },
      { label: 'Error rework', value: r.annualErrorCost, savings: r.errorSavings, color: '#06b6d4' },
      { label: 'Complaints', value: r.annualComplaintCost, savings: r.complaintSavings, color: '#8b5cf6' },
      { label: 'Opportunity cost', value: r.annualOpportunityCost, savings: r.opportunitySavings, color: '#10b981' },
    ];
    const maxBar = Math.max(...barData.map(b => b.value));

    return (
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">Your ROI Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2" style={{ letterSpacing: '-0.02em' }}>
            You&apos;re losing{' '}
            <span className="text-red-400">{fmtFull(r.monthlyWaste)}</span>
            <span className="text-slate-400"> /month</span>
          </h2>
          <p className="text-slate-400">to manual processes — here&apos;s the full breakdown.</p>
        </div>

        {/* Hero metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Annual savings', value: fmtFull(r.totalAnnualSavings), sub: 'projected', color: 'text-emerald-400', bg: 'border-emerald-500/20 bg-emerald-500/8' },
            { label: 'ROI', value: `${r.roiPercent}%`, sub: 'return on investment', color: 'text-blue-400', bg: 'border-blue-500/20 bg-blue-500/8' },
            { label: 'Payback period', value: `${r.paybackMonths}mo`, sub: 'to break even', color: 'text-cyan-400', bg: 'border-cyan-500/20 bg-cyan-500/8' },
            { label: '5-year net value', value: fmtFull(r.fiveYearNet), sub: 'after investment', color: 'text-purple-400', bg: 'border-purple-500/20 bg-purple-500/8' },
          ].map(m => (
            <div key={m.label} className={`rounded-xl border p-4 text-center ${m.bg}`}>
              <p className={`text-2xl md:text-3xl font-bold font-heading ${m.color} mb-0.5`}>{m.value}</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide leading-tight">{m.label}</p>
              <p className="text-slate-600 text-xs mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Hours freed */}
        <div className="bg-[#0a1628] border border-yellow-500/20 rounded-xl p-4 mb-6 flex items-center gap-4">
          <span className="text-3xl">⏰</span>
          <div>
            <p className="text-white font-semibold font-heading">
              <span className="text-yellow-400">{r.hoursFreedPerYear.toLocaleString()} hours</span> freed per year
            </p>
            <p className="text-slate-400 text-sm">That&apos;s {Math.round(r.hoursFreedPerYear / data.staffCount)} hours per person — time back for growth work, not admin.</p>
          </div>
        </div>

        {/* Cost breakdown bars */}
        <div className="bg-[#0a1628] border border-white/8 rounded-xl p-5 mb-6">
          <p className="text-white font-semibold font-heading mb-4">Where your money is being lost</p>
          <div className="space-y-4">
            {barData.map(b => (
              <div key={b.label}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-slate-300 text-sm">{b.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400 text-xs line-through opacity-60">{fmtFull(b.value)}/yr</span>
                    <span className="text-emerald-400 text-sm font-semibold">→ save {fmtFull(b.savings)}</span>
                  </div>
                </div>
                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${maxBar > 0 ? (b.value / maxBar) * 100 : 0}%`, background: b.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-white/8 flex justify-between items-center">
            <span className="text-slate-400 text-sm font-semibold">Total annual waste</span>
            <span className="text-red-400 font-bold text-lg font-heading">{fmtFull(r.totalAnnualCost)}</span>
          </div>
        </div>

        {/* Investment vs savings */}
        <div className="bg-[#0a1628] border border-blue-500/20 rounded-xl p-5 mb-6">
          <p className="text-white font-semibold font-heading mb-4">Investment vs. Return</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2.5 border-b border-white/6">
              <span className="text-slate-400 text-sm">One-time automation investment</span>
              <span className="text-white font-semibold">{fmtFull(r.projectCost)}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-white/6">
              <span className="text-slate-400 text-sm">Year 1 savings</span>
              <span className="text-emerald-400 font-semibold">{fmtFull(r.totalAnnualSavings)}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-white/6">
              <span className="text-slate-400 text-sm">Year 1 net profit</span>
              <span className="text-emerald-400 font-bold">{fmtFull(r.totalAnnualSavings - r.projectCost)}</span>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <span className="text-slate-400 text-sm">5-year cumulative net value</span>
              <span className="text-purple-400 font-bold text-lg font-heading">{fmtFull(r.fiveYearNet)}</span>
            </div>
          </div>
          <p className="text-slate-600 text-xs mt-3 italic">
            * Based on industry averages. Actual results depend on your specific process complexity.
            Projects include a 30-day support window. You own the system outright — no monthly fees.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/25 rounded-xl p-6 text-center mb-4">
          <p className="text-white font-bold text-xl font-heading mb-1" style={{ letterSpacing: '-0.02em' }}>
            Ready to stop bleeding {fmt(r.monthlyWaste)}/month?
          </p>
          <p className="text-slate-400 text-sm mb-5">
            Book a free 30-minute audit call. We&apos;ll scope your exact process and give you a fixed quote.
          </p>
          <a
            href="https://calendly.com/chamal-3153/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base mb-3 w-full justify-center"
          >
            Book My Free Audit Call →
          </a>
          <p className="text-slate-600 text-xs">
            No sales pitch · Fixed quote · You own the system · {fmtFull(r.projectCost)} estimated investment
          </p>
        </div>

        {/* Retake */}
        <button
          onClick={() => { setData(DEFAULT); setStep(0); setShowResults(false); }}
          className="w-full text-center text-slate-600 text-sm mt-2 hover:text-slate-400 transition-colors"
        >
          ← Recalculate with different numbers
        </button>
      </div>
    );
  }

  // ── STEP SCREENS ────────────────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto">
      {/* Live waste ticker */}
      {(data.staffCount > 0 && data.hourlyRate > 0) && (
        <div className="mb-6 bg-red-500/8 border border-red-500/15 rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-slate-400 text-sm">Est. monthly cost of manual ops:</span>
          <span className="text-red-400 font-bold text-lg font-heading">
            <AnimatedNumber value={results.monthlyWaste} />
          </span>
        </div>
      )}

      <ProgressBar step={step} total={TOTAL_STEPS} />

      {/* ── Step 0: Business ── */}
      {step === 0 && (
        <div>
          <h3 className="text-2xl font-bold text-white font-heading mb-1" style={{ letterSpacing: '-0.02em' }}>
            Tell us about your business
          </h3>
          <p className="text-slate-400 text-sm mb-6">We&apos;ll tailor the calculation to your industry benchmarks.</p>

          <p className="text-slate-300 text-sm font-semibold mb-3">Industry</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {INDUSTRIES.map(ind => (
              <button
                key={ind.label}
                onClick={() => set('industry')(ind.label)}
                className={`text-left p-3 rounded-xl border flex items-center gap-3 transition-all duration-200 ${
                  data.industry === ind.label
                    ? 'border-blue-500/60 bg-blue-500/12 shadow-[0_0_15px_rgba(59,130,246,0.12)]'
                    : 'border-white/8 bg-white/3 hover:border-blue-500/30 hover:bg-white/6'
                }`}
              >
                <span className="text-xl flex-shrink-0">{ind.icon}</span>
                <div className="min-w-0">
                  <p className={`text-xs font-semibold truncate ${data.industry === ind.label ? 'text-blue-300' : 'text-white'}`}>{ind.label}</p>
                  <p className="text-slate-600 text-xs truncate">{ind.sub}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-slate-300 text-sm font-semibold mb-3">Company size (employees)</p>
          <div className="flex gap-2 flex-wrap">
            {SIZES.map(s => (
              <button
                key={s.label}
                onClick={() => set('companySize')(s.label)}
                className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 flex-1 min-w-[80px] ${
                  data.companySize === s.label
                    ? 'border-blue-500/60 bg-blue-500/15 text-blue-300'
                    : 'border-white/8 bg-white/3 text-slate-300 hover:border-blue-500/30'
                }`}
              >
                <span className="block">{s.label}</span>
                <span className="text-xs text-slate-500 font-normal">{s.sub}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 1: Team & Time ── */}
      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold text-white font-heading mb-1" style={{ letterSpacing: '-0.02em' }}>
            Your team &amp; time
          </h3>
          <p className="text-slate-400 text-sm mb-6">How many people do manual work, and how much does their time cost?</p>

          <Slider
            label="Staff doing manual / repetitive tasks"
            value={data.staffCount}
            min={1} max={50} step={1}
            onChange={v => set('staffCount')(v)}
            format={v => `${v} ${v === 1 ? 'person' : 'people'}`}
            hint="Include FT, PT, VAs"
          />
          <Slider
            label="Average hourly rate (AUD)"
            value={data.hourlyRate}
            min={20} max={200} step={5}
            onChange={v => set('hourlyRate')(v)}
            format={v => `$${v}/hr`}
            hint="Loaded cost inc. super"
          />
          <Slider
            label="Manual task hours per person, per week"
            value={data.hoursPerWeek}
            min={1} max={40} step={1}
            onChange={v => set('hoursPerWeek')(v)}
            format={v => `${v}h/week`}
            hint="Time on repetitive tasks only"
          />

          {/* Live labour cost preview */}
          <div className="bg-[#0a1628] border border-white/8 rounded-xl p-4 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Weekly manual labour cost</span>
              <span className="text-blue-400 font-bold">{fmtFull(data.staffCount * data.hourlyRate * data.hoursPerWeek)}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-slate-400 text-sm">Annual manual labour cost</span>
              <span className="text-red-400 font-bold text-lg font-heading">{fmtFull(data.staffCount * data.hourlyRate * data.hoursPerWeek * 52)}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 2: Processes ── */}
      {step === 2 && (
        <div>
          <h3 className="text-2xl font-bold text-white font-heading mb-1" style={{ letterSpacing: '-0.02em' }}>
            Which processes are manual?
          </h3>
          <p className="text-slate-400 text-sm mb-6">Select all that apply — more selected = more accurate estimate.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PROCESSES.map(p => {
              const active = data.processes.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => toggleProcess(p.id)}
                  className={`text-left p-3 rounded-xl border flex items-center gap-3 transition-all duration-200 ${
                    active
                      ? 'border-blue-500/60 bg-blue-500/12'
                      : 'border-white/8 bg-white/3 hover:border-blue-500/30 hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <span className={`text-sm font-medium ${active ? 'text-blue-300' : 'text-slate-300'}`}>{p.label}</span>
                  {active && (
                    <span className="ml-auto flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {data.processes.length > 0 && (
            <p className="text-blue-400 text-sm mt-4 text-center">
              {data.processes.length} process{data.processes.length > 1 ? 'es' : ''} selected
            </p>
          )}
        </div>
      )}

      {/* ── Step 3: Errors & Rework ── */}
      {step === 3 && (
        <div>
          <h3 className="text-2xl font-bold text-white font-heading mb-1" style={{ letterSpacing: '-0.02em' }}>
            Errors &amp; rework cost
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Manual processes create mistakes. Mistakes cost time and client trust.
          </p>

          <Slider
            label="Errors or mistakes per week (across all manual tasks)"
            value={data.errorsPerWeek}
            min={0} max={50} step={1}
            onChange={v => set('errorsPerWeek')(v)}
            format={v => `${v} errors`}
            hint="Wrong data, missed steps, re-dos"
          />
          <Slider
            label="Average hours to fix each error"
            value={data.hoursToFix}
            min={0.5} max={8} step={0.5}
            onChange={v => set('hoursToFix')(v)}
            format={v => `${v}h`}
            hint="Find, fix, re-send, update records"
          />
          <Slider
            label="Client complaints per month from process errors"
            value={data.complaintsPerMonth}
            min={0} max={30} step={1}
            onChange={v => set('complaintsPerMonth')(v)}
            format={v => `${v} complaints`}
            hint="Late invoices, wrong info, missed follow-up"
          />

          <div className="bg-[#0a1628] border border-red-500/15 rounded-xl p-4 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Annual error rework cost</span>
              <span className="text-red-400 font-bold">{fmtFull(Math.round(data.errorsPerWeek * data.hoursToFix * data.hourlyRate * 52))}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-slate-400 text-sm">Annual complaint handling cost</span>
              <span className="text-red-400 font-bold">{fmtFull(Math.round(data.complaintsPerMonth * 2.5 * data.hourlyRate * 12))}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 4: Revenue & Tools ── */}
      {step === 4 && (
        <div>
          <h3 className="text-2xl font-bold text-white font-heading mb-1" style={{ letterSpacing: '-0.02em' }}>
            Revenue &amp; growth opportunity
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            When your team is freed from admin, what&apos;s the revenue impact? And what do you currently pay for tools that don&apos;t talk to each other?
          </p>

          <Slider
            label="Monthly revenue generated per employee (approx.)"
            value={data.revenuePerEmployee}
            min={2000} max={50000} step={500}
            onChange={v => set('revenuePerEmployee')(v)}
            format={v => `$${(v / 1000).toFixed(1)}k`}
            hint="Total revenue ÷ headcount"
          />
          <Slider
            label="Current monthly software & tool spend"
            value={data.toolSpend}
            min={0} max={5000} step={50}
            onChange={v => set('toolSpend')(v)}
            format={v => `$${v}/mo`}
            hint="SaaS, subscriptions, manual workarounds"
          />

          <div className="bg-[#0a1628] border border-emerald-500/15 rounded-xl p-4 mt-2">
            <p className="text-slate-500 text-xs mb-2 uppercase tracking-wide font-semibold">Opportunity cost of not automating</p>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Your revenue/hour per person</span>
              <span className="text-emerald-400 font-semibold">${Math.round(data.revenuePerEmployee / 160)}/hr</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-slate-400 text-sm">Annual opportunity cost (80% of freed hours)</span>
              <span className="text-orange-400 font-bold text-lg font-heading">
                {fmtFull(Math.round(data.staffCount * data.hoursPerWeek * 0.8 * (data.revenuePerEmployee / 160) * 52))}
              </span>
            </div>
            <p className="text-slate-600 text-xs mt-2">This is revenue you&apos;re leaving on the table while your team does admin.</p>
          </div>
        </div>
      )}

      {/* ── Navigation ── */}
      <div className="flex items-center justify-between mt-8">
        {step > 0 ? (
          <button
            onClick={() => setStep(s => s - 1)}
            className="text-slate-500 text-sm hover:text-slate-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : <div />}

        {step < TOTAL_STEPS - 1 ? (
          <button
            onClick={() => setStep(s => s + 1)}
            disabled={!canAdvance[step]}
            className={`btn-primary px-6 py-3 text-sm flex items-center gap-2 transition-all ${
              !canAdvance[step] ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            Continue
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => setShowResults(true)}
            className="btn-primary px-8 py-3 text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Calculate My ROI ⚡
          </button>
        )}
      </div>

      {step === 0 && (
        <p className="text-center text-slate-600 text-xs mt-4">Takes ~2 minutes · No email required to see results</p>
      )}
    </div>
  );
}
