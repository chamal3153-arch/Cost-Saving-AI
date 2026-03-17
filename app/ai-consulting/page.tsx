import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting - Find Your Perfect AI Tools | Cost Saver AI",
  description:
    "Stop overpaying for software. We match your business needs with affordable, ready-to-use AI solutions—often under $300/month. Get your AI tool audit today.",
  keywords: [
    "AI consulting",
    "AI tool matchmaking",
    "affordable AI tools",
    "AI software recommendations",
    "business AI tools",
    "AI tool audit",
    "cost-saving AI solutions",
  ],
  openGraph: {
    title: "AI Consulting - Find Your Perfect AI Tools | Cost Saver AI",
    description:
      "We match your business needs with affordable, ready-to-use AI solutions—often under $300/month.",
    type: "website",
  },
};

export default function AIConsulting() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-transparent py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-left">
              Stop Overpaying for Software. We Find Your Perfect AI Tool.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed text-left">
              We match your business needs with affordable, ready-to-use AI solutions—often under $300/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-fit min-h-[48px] touch-manipulation"
              >
                Book Your AI Tool Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              A simple 4-step process to find and implement the perfect AI tools for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                We identify your biggest time-wasters
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                We audit your current processes and software spend to find inefficiencies
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-cyan-300 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                We match you with perfect pre-built AI tools
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Our database of 500+ AI tools helps us find the perfect fit for your needs
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-yellow-300 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                We set it up & train your team
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Hands-on implementation and training so your team can use the tools effectively
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-green-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                You save money immediately
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Start seeing ROI within days, not months. Track your savings in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              Real Examples
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              See how businesses like yours are saving thousands with affordable AI tools
            </p>
          </div>

          {/* Document & Content Work */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Document & Content Work
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Desktop Table */}
                <table className="hidden md:table w-full bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Need</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">AI Solution</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time Saved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Checking document errors</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Grammarly Business</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$15/user/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2-3 hrs/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Drafting legal docs</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Harvey AI</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Free-$99/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">5-8 hrs/doc</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Marketing copy</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Jasper/Copy.ai</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$49-$99/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">10+ hrs/week</td>
                    </tr>
                  </tbody>
                </table>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Checking document errors</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Grammarly Business</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $15/user/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 2-3 hrs/week</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Drafting legal docs</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Harvey AI</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> Free-$99/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 5-8 hrs/doc</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Marketing copy</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Jasper/Copy.ai</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $49-$99/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 10+ hrs/week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operations & Admin */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Operations & Admin
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Desktop Table */}
                <table className="hidden md:table w-full bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Need</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">AI Solution</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time Saved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Processing invoices</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Rossum/Docparser</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$199-$299/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">15-20 hrs/month</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Scheduling meetings</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Calendly AI</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$20-$50/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">3-5 hrs/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Customer support</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Intercom Fin</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$0.99/answer</td>
                      <td className="px-6 py-4 text-sm text-gray-700">8-12 hrs/week</td>
                    </tr>
                  </tbody>
                </table>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Processing invoices</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Rossum/Docparser</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $199-$299/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 15-20 hrs/month</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Scheduling meetings</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Calendly AI</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $20-$50/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 3-5 hrs/week</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Customer support</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Intercom Fin</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $0.99/answer</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 8-12 hrs/week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales & Marketing */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Sales & Marketing
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Desktop Table */}
                <table className="hidden md:table w-full bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Need</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">AI Solution</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time Saved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Lead qualification</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Exceed.ai</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$299/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">10-15 hrs/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Email outreach</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Lavender</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$29-$99/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">5-7 hrs/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">Ad copy creation</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">AdCreative.ai</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$29/month</td>
                      <td className="px-6 py-4 text-sm text-gray-700">3-4 hrs/campaign</td>
                    </tr>
                  </tbody>
                </table>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Lead qualification</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Exceed.ai</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $299/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 10-15 hrs/week</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Email outreach</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> Lavender</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $29-$99/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 5-7 hrs/week</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Ad copy creation</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Solution:</strong> AdCreative.ai</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Cost:</strong> $29/month</p>
                    <p className="text-sm text-gray-600"><strong>Time Saved:</strong> 3-4 hrs/campaign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Packages Section */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              Consulting Packages
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              Choose the package that fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 flex flex-col">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                AI Tool Matchmaking Session
              </h3>
              <p className="text-lg text-gray-600 mb-4">90 Minutes</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900 mb-6">$299</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Audit of current software spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3-5 replacement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tool comparisons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Setup checklist</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book This Session
              </a>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col relative">
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Complete AI Toolbox Overhaul
              </h3>
              <p className="text-lg text-gray-600 mb-4">2 Weeks</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900 mb-6">$999</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full company software audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Replacement roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hands-on setup of 3-5 tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Team training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30-day follow-up</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book This Package
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-emerald-300 flex flex-col">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Monthly AI Efficiency Review
              </h3>
              <p className="text-lg text-gray-600 mb-4">Ongoing</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900 mb-6">$199<span className="text-lg text-gray-600">/month</span></p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monthly new tool reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continuous optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ROI tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Refresher training</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Monthly Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Savings Showcase */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
              Client Savings Showcase
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              Real results from businesses that switched to affordable AI tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Law Firm</h3>
              <p className="text-gray-600 mb-2">5 attorneys</p>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1"><span className="line-through">Before: $850/month</span></p>
                <p className="text-sm text-gray-600 mb-1">After: $248/month</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-lg font-bold text-green-700 mb-1">Savings: $7,224/year</p>
                <p className="text-sm text-green-600">+ 120 hours saved</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-cyan-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Store</h3>
              <p className="text-gray-600 mb-2">Online retailer</p>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1"><span className="line-through">Before: 25 hrs/week support</span></p>
                <p className="text-sm text-gray-600 mb-1">After: 8 hrs/week + $150/month</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-lg font-bold text-green-700 mb-1">Savings: $20,800/year</p>
                <p className="text-sm text-green-600">+ 17 hrs/week freed up</p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-yellow-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Company</h3>
              <p className="text-gray-600 mb-2">Mid-size operation</p>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1"><span className="line-through">Before: $1,200/month software</span></p>
                <p className="text-sm text-gray-600 mb-1">After: $89/month</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-lg font-bold text-green-700 mb-1">Savings: $13,332/year</p>
                <p className="text-sm text-green-600">+ Streamlined operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed">
              "Don't build what you can buy. Don't buy expensive when affordable works better."
            </p>
            <a
              href="https://calendly.com/chamal-3153/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 mb-6"
            >
              Find My Cost-Saving AI Tools
            </a>
            <p className="text-sm md:text-base text-blue-100">
              We don't sell custom solutions. We find you perfect existing tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
