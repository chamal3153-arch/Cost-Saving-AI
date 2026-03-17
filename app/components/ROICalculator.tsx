"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [monthlyCost, setMonthlyCost] = useState(3000);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);

  const savingsRate = 0.80;
  const hourlyRate = 50;

  const monthlySavings = Math.round(monthlyCost * savingsRate);
  const annualSavings = monthlySavings * 12;
  const hoursSavedPerYear = Math.round(hoursPerWeek * 52 * 0.85);
  const timeValueSaved = Math.round(hoursSavedPerYear * hourlyRate);
  const totalAnnualValue = annualSavings + timeValueSaved;

  const formatCurrency = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;

  return (
    <section className="bg-[#050d1a] py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="badge badge-blue mx-auto mb-5">
            <span>💰</span> ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">
            How Much Could You Save?
          </h2>
          <p className="text-slate-400 text-lg">
            Drag the sliders and see your projected annual savings in real time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glass p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Inputs */}
              <div className="space-y-8">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-slate-300 text-sm font-medium font-heading">
                      Monthly manual task cost
                    </label>
                    <span className="text-white font-bold text-lg font-heading">
                      ${monthlyCost.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="250"
                    value={monthlyCost}
                    onChange={(e) => setMonthlyCost(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #06b6d4 ${((monthlyCost - 500) / 19500) * 100}%, rgba(255,255,255,0.1) ${((monthlyCost - 500) / 19500) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$500</span><span>$20,000</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-2">VAs, contractors, admin staff, manual processes</p>
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-slate-300 text-sm font-medium font-heading">
                      Hours per week on manual tasks
                    </label>
                    <span className="text-white font-bold text-lg font-heading">
                      {hoursPerWeek}h
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="80"
                    step="1"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #06b6d4 0%, #10b981 ${((hoursPerWeek - 2) / 78) * 100}%, rgba(255,255,255,0.1) ${((hoursPerWeek - 2) / 78) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>2h</span><span>80h</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-2">Data entry, reporting, emails, scheduling, etc.</p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://calendly.com/chamal-3153/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Book Your Free Audit →
                  </a>
                  <p className="text-slate-500 text-xs text-center mt-2">No commitment. 30-minute call.</p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <p className="text-slate-400 text-sm font-medium font-heading uppercase tracking-wide mb-2">
                  Your Projected Savings
                </p>

                <div className="bg-white/4 border border-white/8 rounded-xl p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Monthly savings</span>
                    <span className="text-white font-bold text-xl font-heading">
                      {formatCurrency(monthlySavings)}
                    </span>
                  </div>
                  <div className="divider-gradient" />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Annual cash savings</span>
                    <span className="text-brand-cyan font-bold text-xl font-heading">
                      {formatCurrency(annualSavings)}
                    </span>
                  </div>
                  <div className="divider-gradient" />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Hours saved per year</span>
                    <span className="text-brand-emerald font-bold text-xl font-heading">
                      {hoursSavedPerYear.toLocaleString()}h
                    </span>
                  </div>
                  <div className="divider-gradient" />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Value of time recovered</span>
                    <span className="text-slate-300 font-bold text-xl font-heading">
                      {formatCurrency(timeValueSaved)}
                    </span>
                  </div>
                </div>

                {/* Big total */}
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
                  <p className="text-slate-300 text-sm mb-1">Total annual value</p>
                  <p className="stat-number text-4xl md:text-5xl gradient-text-blue-cyan">
                    {formatCurrency(totalAnnualValue)}
                  </p>
                  <p className="text-slate-400 text-xs mt-2">
                    Based on 80% cost reduction + time value at $50/hr
                  </p>
                </div>

                <div className="flex items-start gap-2 bg-emerald-500/8 border border-emerald-500/20 rounded-lg p-3">
                  <span className="text-emerald-400 text-sm mt-0.5">✓</span>
                  <p className="text-emerald-300 text-xs leading-relaxed">
                    One-time investment. No monthly fees. You own your automation system outright.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
