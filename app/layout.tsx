import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { CookieYesScript } from "./components/CookieYesScript";
import { CalendlyScript } from "./components/CalendlyScript";
import GoogleTagManager from "./components/GoogleTagManager";
import EmailCapturePopup from "./components/EmailCapturePopup";
import MobileMenu from "./components/MobileMenu";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://costsaverai.com"),
  title: {
    default: "Cost Saver AI – AI Automation for SMBs | Save 70-90% on Manual Costs",
    template: "%s | Cost Saver AI",
  },
  description:
    "Cost Saver AI builds done-for-you AI automation systems for small and mid-sized businesses. Replace manual workflows with custom bots, dashboards, and integrations. Deploy in 2-3 weeks, own it outright.",
  keywords: [
    "AI automation for small business",
    "business process automation",
    "SMB AI automation",
    "workflow automation",
    "custom AI dashboards",
    "AI consulting for business",
    "replace manual work with AI",
    "affordable AI automation",
    "AI systems for SMBs",
    "automate business processes",
    "save money with AI",
    "AI implementation services",
  ],
  authors: [{ name: "Cost Saver AI" }],
  creator: "Cost Saver AI",
  publisher: "Cost Saver AI",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://costsaverai.com",
    siteName: "Cost Saver AI",
    title: "Cost Saver AI – AI Automation for SMBs",
    description:
      "Replace expensive manual work with affordable AI automation systems. Custom bots, dashboards, and integrations built in days, not months.",
    images: [
      {
        url: "/Company logo.png",
        width: 1200,
        height: 630,
        alt: "Cost Saver AI - AI Automation for SMBs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Saver AI – AI Automation for SMBs",
    description:
      "Replace expensive manual work with affordable AI automation systems. Save 70-90% on costs. Deploy in weeks, not months.",
    images: ["/Company logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://costsaverai.com" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <GoogleTagManager />
        <CalendlyScript />
        <CookieYesScript />
        <EmailCapturePopup />

        {/* ── Sticky Header ── */}
        <header className="sticky top-0 z-50 w-full bg-[#050d1a]/95 backdrop-blur-md border-b border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18 relative">

              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src="/Company logo.png"
                    alt="Cost Saver AI"
                    width={180}
                    height={60}
                    className="h-8 sm:h-9 md:h-11 w-auto"
                    priority
                  />
                  <span
                    className="text-lg sm:text-xl font-bold gradient-text-blue-cyan font-heading hidden sm:block"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Cost Saver AI
                  </span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-1">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/services", label: "Services" },
                    { href: "/pricing", label: "Pricing" },
                    { href: "/case-studies", label: "Case Studies" },
                    { href: "/audit-quiz", label: "Free ROI Quiz" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/6"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex flex-shrink-0">
                <a
                  href="https://calendly.com/chamal-3153/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  Free Audit →
                </a>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden flex-shrink-0">
                <MobileMenu />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen relative z-10">
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </main>

        {/* ── Footer ── */}
        <footer className="bg-[#050d1a] border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

              {/* Brand col */}
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <Image src="/Company logo.png" alt="Cost Saver AI" width={140} height={46} className="h-9 w-auto" />
                  <span className="text-lg font-bold gradient-text-blue-cyan font-heading">Cost Saver AI</span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Done-for-you AI automation systems for small and mid-sized businesses. Replace manual work. Own your system.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="mailto:costsaverai@proton.me"
                    className="text-sm text-slate-400 hover:text-brand-blue transition-colors"
                  >
                    costsaverai@proton.me
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Solutions
                </h3>
                <nav className="flex flex-col space-y-2.5">
                  {[
                    { href: "/services", label: "All Services" },
                    { href: "/pricing", label: "Pricing" },
                    { href: "/case-studies", label: "Case Studies" },
                    { href: "/audit-quiz", label: "Free ROI Quiz" },
                    { href: "/newsletter", label: "Newsletter" },
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA col */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Get Started
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Book a free 30-minute audit and find out how much you can save.
                </p>
                <a
                  href="https://calendly.com/chamal-3153/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2.5 w-fit"
                >
                  Book Free Audit →
                </a>
              </div>
            </div>

            <div className="divider-gradient mb-6" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Cost Saver AI. All Rights Reserved.
              </p>
              <nav className="flex flex-wrap justify-center gap-5 text-sm">
                {[
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                  { href: "/cookies", label: "Cookie Policy" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="text-slate-500 hover:text-slate-300 transition-colors">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
