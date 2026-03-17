import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllSlugs, blogPosts } from "../../lib/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Cost Saver AI",
      url: "https://costsaverai.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        suppressHydrationWarning
      />

      {/* Hero */}
      <section className="hero-dark grid-pattern py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <Link href="/blog" className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Blog
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{post.category}</span>
            </div>

            <div className="flex items-start gap-5 mb-5">
              <span className="text-5xl flex-shrink-0">{post.coverEmoji}</span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                {post.title}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

              {/* Main content */}
              <article
                className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:text-slate-900 prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:text-slate-800 prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5
                  prose-li:text-slate-600 prose-li:leading-relaxed
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-ol:space-y-2 prose-ul:space-y-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA box */}
                <div className="bg-[#050d1a] rounded-2xl p-6 border border-white/8 sticky top-24">
                  <p className="text-white font-bold font-heading text-lg mb-2" style={{ letterSpacing: "-0.01em" }}>
                    Ready to automate this?
                  </p>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                    Book a free 30-minute audit. We&apos;ll scope your exact process and give you a fixed quote.
                  </p>
                  <a
                    href="https://calendly.com/chamal-3153/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-3 text-center block"
                  >
                    Book Free Audit →
                  </a>
                  <div className="mt-4 space-y-2">
                    {["Free 30-min call", "Fixed quote upfront", "No obligation"].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-slate-500">
                        <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quiz CTA */}
                <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl p-6 border border-cyan-500/20">
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Free 2-Min Quiz</p>
                  <p className="text-white font-bold font-heading text-base mb-2" style={{ letterSpacing: "-0.01em" }}>
                    How much could you save?
                  </p>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Answer 5 quick questions and get a personalised ROI estimate for your business.
                  </p>
                  <Link
                    href="/audit-quiz"
                    className="btn-secondary text-sm py-2.5 text-center block border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200"
                  >
                    Take the Quiz →
                  </Link>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-[#f8fafc] py-12 md:py-16 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-900 font-heading mb-7" style={{ letterSpacing: "-0.01em" }}>
                More Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-3xl mb-3 block">{p.coverEmoji}</span>
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{p.category}</span>
                    <h3 className="text-base font-bold text-slate-900 font-heading mt-1 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.readingTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
