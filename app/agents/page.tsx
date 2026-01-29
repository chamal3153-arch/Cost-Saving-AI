import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents - Your Autonomous AI Team for Business Automation",
  description:
    "Deploy specialized AI agents that own key outcomes: Customer Champion, Sales Concierge, Executive Operations, Marketing Copilot, and Vertical Workflow Specialist. Built for SMBs.",
  keywords: [
    "AI agents",
    "autonomous AI",
    "business AI agents",
    "customer service AI",
    "sales AI automation",
    "marketing AI",
  ],
  openGraph: {
    title: "AI Agents - Your Autonomous AI Team | Cost Saver AI",
    description:
      "Specialized AI agents that own key business outcomes. Deploy your autonomous AI team today.",
    type: "website",
  },
};

// Detailed Service Card Component
interface DetailedServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  icon: React.ReactNode;
}

function DetailedServiceCard({
  title,
  tagline,
  description,
  outcomes,
  icon,
}: DetailedServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-blue-300 flex flex-col h-full">
      <div className="mb-6">
        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-blue-600 font-semibold mb-4">
          {tagline}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            Key Outcomes:
          </h4>
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start text-gray-700 text-sm md:text-base">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto">
        <Link href="/contact">
          <button className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Discuss This Agent →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function AgentsPage() {
  const agents = [
    {
      title: "The Customer Champion Agent",
      tagline: "The Agent that owns customer satisfaction 24/7.",
      description:
        "This AI agent handles the entire front-line customer service workflow. It doesn't just answer questions—it resolves issues end-to-end by accessing order history, processing returns, booking appointments, and providing personalized updates. It deflects repetitive tickets and escalates only complex cases to your team.",
      outcomes: [
        "Reduces customer service response time from hours to seconds",
        "Cuts support costs by deflecting up to 70% of routine inquiries",
        "Increases customer satisfaction with instant, accurate resolutions",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "The Sales Concierge Agent",
      tagline: "The Agent that qualifies and books leads while you sleep.",
      description:
        "This autonomous sales agent engages website visitors, qualifies them with intelligent questions, checks real-time calendar availability, and books qualified meetings directly into your pipeline. It nurtures warm leads with personalized follow-ups and logs all interactions directly to your CRM, ensuring no opportunity is missed.",
      outcomes: [
        "Books qualified discovery calls 24/7, increasing lead conversion",
        "Ensures 100% follow-up on inbound leads within 60 seconds",
        "Provides detailed lead profiles before your first conversation",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "The Executive Operations Agent",
      tagline: "The Agent that streamlines internal chaos and reporting.",
      description:
        "This internal operations agent automates the administrative workload that bogs down founders and managers. It compiles daily reports from multiple data sources, coordinates team schedules, manages vendor communications, drafts project briefs from meeting notes, and tracks key deliverables—acting as an always-on chief of staff.",
      outcomes: [
        "Automates 10+ hours of weekly managerial/admin work",
        "Provides a single source of truth for company performance",
        "Improves team coordination with automated reminders and updates",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "The Personalized Marketing Copilot",
      tagline: "The Agent that delivers Amazon-like personalization at SMB scale.",
      description:
        "This marketing agent analyzes customer behavior across your website and CRM to create hyper-segmented audiences. It then generates and executes personalized email campaigns, social media content, and special offers tailored to individual customer interests and lifecycle stages—turning casual buyers into loyal advocates.",
      outcomes: [
        "Increases email click-through rates with dynamic personalization",
        "Boosts customer lifetime value through targeted re-engagement",
        "Automates content creation and campaign execution",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "The Vertical Workflow Specialist",
      tagline: "The Agent that automates your industry-specific workflows.",
      description:
        "This custom-built agent tackles the unique operational challenges of your specific industry. For example, for e-commerce: it manages inventory alerts, generates restocking orders, and adjusts pricing based on demand. For professional services: it automates proposal generation, contract routing, and compliance tracking. We build it to fit your niche perfectly.",
      outcomes: [
        "Automates specialized processes that generic tools can't handle",
        "Reduces operational errors in complex, niche workflows",
        "Provides a competitive advantage through tailored automation",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your AI Team, Built for Your Business
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We develop specialized autonomous agents that own key outcomes. Discuss your needs, and we&apos;ll
              architect the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Service Category Introduction */}
      <section className="bg-transparent py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Each agent is designed to execute complete processes, not just
              single tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
            {agents.map((agent, index) => (
              <DetailedServiceCard
                key={index}
                title={agent.title}
                tagline={agent.tagline}
                description={agent.description}
                outcomes={agent.outcomes}
                icon={agent.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Partner With You
            </h2>
            <p className="text-lg text-gray-600">
              A clear, collaborative process designed to get your first agent live—and delivering ROI—fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600">Step 1</span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy Call</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We map your current process, goals, and constraints to identify where an agent can create the
                biggest impact.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600">Step 2</span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Proposal</h3>
              <p className="text-gray-700 text-sm md:text-base">
                You receive a clear proposal outlining the agent&apos;s scope, responsibilities, success metrics, and
                investment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600">Step 3</span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build &amp; Train</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We design, build, and integrate your agent into your stack—then train your team on how to use and
                govern it.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600">Step 4</span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch &amp; Support</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We launch your agent, monitor early performance, and support you through refinements to ensure it
                delivers ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Deploy Your First AI Agent?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free, no-obligation strategy session to explore your highest-ROI opportunity and get a clear
              roadmap for your first agent.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              Schedule Your Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

