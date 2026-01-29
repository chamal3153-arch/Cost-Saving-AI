import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy - Cost Saver AI",
  description:
    "Cookie Policy for Cost Saver AI. Learn about how we use cookies and similar tracking technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. How We Use Cookies
              </h2>
              <p>
                Cost Saver AI uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide personalized content and advertisements</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                3.1 Essential Cookies
              </h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                3.2 Analytics Cookies
              </h3>
              <p>
                We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website. These cookies help us improve our website by collecting and reporting information on how you use it.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                3.3 Marketing Cookies
              </h3>
              <p>
                These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                3.4 Preference Cookies
              </h3>
              <p>
                These cookies remember your choices (such as language preferences) to provide a more personalized experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Third-Party Cookies
              </h2>
              <p>
                We may use third-party services that set cookies on your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To analyze website usage and performance
                </li>
                <li>
                  <strong>CookieYes:</strong> To manage cookie consent preferences
                </li>
                <li>
                  <strong>Other analytics and marketing tools:</strong> As needed for our business operations
                </li>
              </ul>
              <p className="mt-4">
                These third parties may use cookies to collect information about your online activities across different websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Managing Cookies
              </h2>
              <p>
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                5.1 Browser Settings
              </h3>
              <p>You can control cookies through your browser settings:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                5.2 Cookie Consent Banner
              </h3>
              <p>
                When you first visit our website, you'll see a cookie consent banner. You can manage your cookie preferences at any time by clicking on the cookie settings link in the footer or by clearing your browser cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Impact of Disabling Cookies
              </h2>
              <p>
                If you choose to disable cookies, some features of our website may not function properly. Essential cookies are required for the website to work, so disabling all cookies may affect your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Updates to This Cookie Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <p className="mt-4">
                <strong>Email:</strong>{" "}
                <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">
                  costsaverai@proton.me
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
