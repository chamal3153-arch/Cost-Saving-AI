import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – The Team Behind Cost Saver AI",
  description:
    "Meet the founders of Cost Saver AI. We're builders who believe technology should solve business problems, not create them. Learn about our mission to make AI automation accessible to SMBs.",
  keywords: [
    "Cost Saver AI team",
    "AI automation founders",
    "business automation experts",
    "SMB automation specialists",
  ],
  openGraph: {
    title: "About Cost Saver AI – Meet Our Team",
    description:
      "Meet the founders building AI automation solutions for small and mid-sized businesses.",
    type: "website",
  },
};

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  personalNote: string;
  imageSrc: string;
  linkedinUrl?: string;
}

function TeamMember({ name, title, bio, personalNote, imageSrc, linkedinUrl }: TeamMemberProps) {
  return (
    <div className="bg-[#0a1628] border border-blue-500/15 rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 md:flex-row md:items-start">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center shrink-0 border border-white/10">
        <Image
          src={imageSrc}
          alt={name}
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-xl md:text-2xl font-bold text-white font-heading">{name}</h3>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
        <p className="text-blue-400 font-semibold text-sm mb-3 font-heading">{title}</p>
        <p className="text-slate-400 leading-relaxed mb-3 text-sm md:text-base">{bio}</p>
        <p className="text-slate-600 text-sm italic">{personalNote}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge badge-blue mx-auto mb-6">
              <span>👥</span> About Us
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              The Minds Behind{" "}
              <span className="gradient-text-blue-cyan">Cost Saver AI</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We&apos;re builders who believe technology should solve business problems, not create them.
              Based in Australia. Serving clients globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0d1b2e] border-y border-white/6 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="badge badge-blue mb-6">
              <span>🎯</span> Our Mission
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-6" style={{ letterSpacing: "-0.02em" }}>
              Enterprise automation power. SMB price tag.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg">
              <p>
                We believe small and mid-sized businesses should have access to the same automation power
                as large enterprises — without needing a full-time data team or a seven-figure budget. The tools
                exist, but they&apos;re often locked behind complexity, jargon, and consulting fluff.
              </p>
              <p>
                Cost Saver AI exists to close that gap. We turn confusing AI and automation technology into
                clear, concrete systems that plug directly into the way you already work — your CRM, your
                spreadsheets, your inbox, your finance stack.
              </p>
              <p>
                No endless retainers. No &ldquo;innovation theater.&rdquo; Just practical, done-for-you automations
                that help SMB teams win back hours every week and compete at enterprise level, on their own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-[#050d1a] py-12 border-b border-white/6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "⚡", title: "Speed Over Perfection", body: "We ship working systems in days, not months. You can iterate once it's live." },
              { icon: "🔑", title: "You Own Everything", body: "No vendor lock-in. Every workflow, every credential — yours on delivery." },
              { icon: "📊", title: "Results, Not Reports", body: "We measure success in dollars saved and hours recovered. Not slide decks." },
            ].map((v) => (
              <div key={v.title} className="bg-[#0a1628] border border-white/6 rounded-xl p-6">
                <span className="text-2xl mb-3 block">{v.icon}</span>
                <p className="text-white font-semibold font-heading mb-2">{v.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#050d1a] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <div className="badge badge-blue mx-auto mb-5">
              <span>🧑‍💻</span> Leadership
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3" style={{ letterSpacing: "-0.02em" }}>
              Practitioners, Not Consultants
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              We&apos;ve shipped real automations for real businesses. Every proposal is written by someone who&apos;s also built it.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <TeamMember
              name="Chamal Abeytunga"
              title="Co-Founder & CFO"
              bio="Chamal brings a deep background in finance and business information systems, holding a Bachelor's in Finance, a Bachelor's in Business Information Systems, and a Master's of Applied Finance. With three years of experience in the government sector, he focuses on building automations that deliver measurable financial impact and operational clarity for SMBs."
              personalNote="Loves turning messy spreadsheets into clean, automated financial systems — and unwinds with strategy games and long walks."
              imageSrc="/chamal.png"
              linkedinUrl="https://www.linkedin.com/in/chamalabeytunga/"
            />
            <TeamMember
              name="William Hale"
              title="Co-Founder"
              bio="William is an electrical engineer with both a Bachelor's and Master's in Electrical Engineering, plus three years of experience in the government sector working on complex systems. He specialises in translating real-world processes into reliable AI and automation workflows that just work."
              personalNote="Enjoys tinkering with new tools, optimising everyday routines, and exploring the outdoors."
              imageSrc="/Will hale.png"
              linkedinUrl="https://www.linkedin.com/in/william-hale-b7335228a/"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1b2e] border-t border-white/6 py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4" style={{ letterSpacing: "-0.02em" }}>
              Ready to Work With Us?
            </h2>
            <p className="text-slate-400 mb-7">
              Book a free 30-minute discovery call. We&apos;ll scope your project, calculate your ROI, and send a fixed quote — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Book Free Audit →
              </a>
              <Link
                href="/case-studies"
                className="btn-secondary text-base px-8 py-4 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-white/5"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
