import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - The Team Behind Cost Saver AI",
  description:
    "Meet the founders of Cost Saver AI. We're builders who believe technology should solve business problems, not create them. Learn about our mission to make AI automation accessible to SMBs.",
  keywords: [
    "Cost Saver AI team",
    "AI automation founders",
    "business automation experts",
    "SMB automation specialists",
  ],
  openGraph: {
    title: "About Cost Saver AI - Meet Our Team",
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
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center shrink-0">
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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h3>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
        <p className="text-blue-600 font-semibold mb-3">{title}</p>
        <p className="text-gray-700 leading-relaxed mb-3">{bio}</p>
        <p className="text-gray-500 text-sm italic">{personalNote}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Minds Behind Cost Saver AI
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're builders who believe technology should solve business problems, not create them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe small and mid-sized businesses should have access to the same automation power
              as large enterprises—without needing a full-time data team or a seven-figure budget. The tools
              exist, but they&apos;re often locked behind complexity, jargon, and consulting fluff.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cost Saver AI exists to close that gap. We turn confusing AI and automation technology into
              clear, concrete systems that plug directly into the way you already work—your CRM, your
              spreadsheets, your inbox, your finance stack.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No endless retainers. No &quot;innovation theater.&quot; Just practical, done-for-you automations
              that help SMB teams win back hours every week and compete at enterprise level, on their own terms.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Cost Saver AI is led by practitioners who have shipped real automations for real businesses—not just
              slide decks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            <TeamMember
              name="Chamal Abeytunga"
              title="Co-Founder & CFO"
              bio="Chamal brings a deep background in finance and business information systems, holding a Bachelor's in Finance, a Bachelor's in Business Information Systems, and a Master's of Applied Finance. With three years of experience in the government sector, he focuses on building automations that deliver measurable financial impact and operational clarity for SMBs."
              personalNote="Loves turning messy spreadsheets into clean, automated financial systems—and unwinds with strategy games and long walks."
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
    </>
  );
}
