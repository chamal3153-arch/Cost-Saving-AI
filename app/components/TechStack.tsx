const tools = [
  // Row 1 - Automation platforms
  { name: "Zapier", color: "#FF4A00", bg: "rgba(255,74,0,0.12)", icon: "⚡" },
  { name: "Make.com", color: "#6D00CC", bg: "rgba(109,0,204,0.12)", icon: "🔄" },
  { name: "n8n", color: "#EA4B71", bg: "rgba(234,75,113,0.12)", icon: "🔗" },
  { name: "Power Automate", color: "#0078D4", bg: "rgba(0,120,212,0.12)", icon: "🤖" },
  // Row 2 - AI / data
  { name: "OpenAI", color: "#10a37f", bg: "rgba(16,163,127,0.12)", icon: "🧠" },
  { name: "Anthropic", color: "#d97706", bg: "rgba(217,119,6,0.12)", icon: "✦" },
  { name: "Google AI", color: "#4285F4", bg: "rgba(66,133,244,0.12)", icon: "🔮" },
  { name: "Perplexity", color: "#20B2AA", bg: "rgba(32,178,170,0.12)", icon: "🔍" },
  // Row 3 - Business tools
  { name: "Xero", color: "#13B5EA", bg: "rgba(19,181,234,0.12)", icon: "📊" },
  { name: "HubSpot", color: "#FF7A59", bg: "rgba(255,122,89,0.12)", icon: "🎯" },
  { name: "Salesforce", color: "#00A1E0", bg: "rgba(0,161,224,0.12)", icon: "☁️" },
  { name: "Airtable", color: "#2D7FF9", bg: "rgba(45,127,249,0.12)", icon: "📋" },
  // Row 4 - Comms
  { name: "Slack", color: "#4A154B", bg: "rgba(74,21,75,0.18)", icon: "💬" },
  { name: "Google Sheets", color: "#0F9D58", bg: "rgba(15,157,88,0.12)", icon: "📈" },
  { name: "Notion", color: "#FFFFFF", bg: "rgba(255,255,255,0.08)", icon: "📝" },
  { name: "Microsoft Teams", color: "#5059C9", bg: "rgba(80,89,201,0.12)", icon: "👥" },
];

// Duplicate for seamless loop
const doubled = [...tools, ...tools];

export default function TechStack() {
  return (
    <section className="bg-[#0d1b2e] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest font-heading mb-2">
            Integrates with your existing tools
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
            Works with 100+ Platforms
          </h2>
        </div>
      </div>

      {/* Scrolling marquee — full-bleed */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d1b2e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d1b2e] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-2.5 flex items-center gap-2.5 px-5 py-3 rounded-full border whitespace-nowrap"
              style={{
                background: tool.bg,
                borderColor: `${tool.color}30`,
              }}
            >
              <span className="text-lg">{tool.icon}</span>
              <span
                className="text-sm font-semibold font-heading"
                style={{ color: tool.color === "#FFFFFF" ? "#e2e8f0" : tool.color }}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="text-slate-500 text-sm">
          Don&apos;t see your tool?{" "}
          <a
            href="https://calendly.com/chamal-3153/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Book a free call
          </a>{" "}
          — we likely integrate with it.
        </p>
      </div>
    </section>
  );
}
