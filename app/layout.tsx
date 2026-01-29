import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { CookieYesScript } from "./components/CookieYesScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tekonai.com"), // Update with your actual domain
  title: {
    default: "Cost Saver AI – AI Automation for SMBs",
    template: "%s | Cost Saver AI",
  },
  description:
    "Cost Saver AI builds done-for-you AI automation systems for small and mid-sized businesses, replacing manual workflows with custom bots, dashboards, and integrations in days, not months.",
  keywords: [
    "AI automation",
    "business automation",
    "SMB automation",
    "AI agents",
    "custom dashboards",
    "workflow automation",
    "AI consulting",
    "small business automation",
    "AI systems",
    "automation services",
  ],
  authors: [{ name: "Cost Saver AI" }],
  creator: "Cost Saver AI",
  publisher: "Cost Saver AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tekonai.com", // Update with your actual domain
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
      "Replace expensive manual work with affordable AI automation systems. Custom bots, dashboards, and integrations built in days, not months.",
    images: ["/Company logo.png"],
    creator: "@tekonai", // Update with your Twitter handle if you have one
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
  verification: {
    // Add your verification codes here when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tekonai.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* CookieYes Banner - Must load first */}
        <CookieYesScript />

        {/* Google Analytics is now loaded conditionally via analytics.ts based on consent */}

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo - Top Left */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/Company logo.png"
                    alt="Cost Saver AI"
                    width={180}
                    height={60}
                    className="h-10 md:h-14 w-auto"
                    priority
                  />
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Cost Saver AI
                  </span>
                </Link>
              </div>

              {/* Centered Navigation - Hidden on mobile, visible on tablet+ */}
              <nav className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <Link
                    href="/"
                    className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    Services
                  </Link>
                  <Link
                    href="/agents"
                    className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    AI Agents
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Get Custom Plan Button - Top Right */}
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Get a Custom Plan
                </Link>
              </div>
            </div>

            {/* Mobile Navigation - Visible on mobile only */}
            <nav className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/agents"
                  className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  AI Agents
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen relative z-10">
          <AnalyticsProvider>
        {children}
          </AnalyticsProvider>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Saver AI</h3>
                <p className="text-sm text-gray-600 mb-4">
                  AI automation systems for small and mid-sized businesses. Replace manual work with intelligent automation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <nav className="flex flex-col space-y-2">
                  <Link href="/services" className="text-sm text-gray-600 hover:text-blue-600">
                    Services
                  </Link>
                  <Link href="/agents" className="text-sm text-gray-600 hover:text-blue-600">
                    AI Agents
                  </Link>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                    Contact
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <a href="mailto:costsaverai@proton.me" className="hover:text-blue-600">
                    costsaverai@proton.me
                  </a>
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-sm text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Book a Free Consultation →
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm md:text-base text-gray-600">
                  &copy; {new Date().getFullYear()} Cost Saver AI, Inc. All Rights Reserved.
                </p>
                <nav className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-gray-600 hover:text-blue-600">
                    Cookie Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
