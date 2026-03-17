import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../lib/blogData";

export const metadata: Metadata = {
  title: "Blog – AI Automation Insights for Small Businesses",
  description:
    "Practical guides on automating your business with AI. Real cost breakdowns, how-to articles, and case studies — written for SMB owners, not developers.",
  openGraph: {
    title: "Blog – Cost Saver AI",
    description:
      "Practical AI automation guides for small and mid-sized businesses. No hype, just actionable insights.",
    type: "website",
  },
};

const categories = ["All", "Workflow Automation", "AI Chatbots", "Business Strategy"];

export default function Blog() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="hero-dark grid-pattern py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="badge badge-blue mb-5">
              <span>✍️</span> The Cost Saver AI Blog
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white font-heading mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              No fluff. Just{" "}
              <span className="gradient-text-blue-cyan">
                actionable automation
              </span>{" "}
              guides.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Real cost breakdowns, how-to articles, and case studies written for SMB
              owners — not developers. Published weekly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            {/* Featured post */}
            <div className="mb-14">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Latest Article</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#050d1a] to-[#0d1b2e] p-10 md:p-14 flex items-center gap-6">
                  <span className="text-6xl md:text-8xl flex-shrink-0">{featured.coverEmoji}</span>
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{featured.category}</span>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-white font-heading mt-2 mb-3 group-hover:text-blue-300 transition-colors"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xl">{featured.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>{new Date(featured.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span>·</span>
                      <span>{featured.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Rest of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <span className="text-4xl mb-4">{post.coverEmoji}</span>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{post.category}</span>
                  <h3
                    className="text-lg font-bold text-slate-900 font-heading mb-3 group-hover:text-blue-600 transition-colors leading-snug"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <span className="text-blue-600 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 bg-[#050d1a] rounded-2xl p-8 md:p-12 text-center border border-white/8">
              <p className="text-2xl font-bold text-white font-heading mb-3" style={{ letterSpacing: "-0.02em" }}>
                Get automation ideas in your inbox
              </p>
              <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                New articles every week. Practical, specific, and actually useful for SMB owners.
              </p>
              <a
                href="https://calendly.com/chamal-3153/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-sm"
              >
                Book a Free Audit Instead →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
