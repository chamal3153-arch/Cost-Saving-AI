import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Cost Saver AI",
  description:
    "Terms of Service for Cost Saver AI. Read our terms and conditions for using our AI automation services.",
};

export default function TermsOfService() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the services of Cost Saver AI ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Services Description
              </h2>
              <p>
                Cost Saver AI provides AI automation services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom AI agents and automation systems</li>
                <li>Business intelligence dashboards</li>
                <li>Workflow automation and integration services</li>
                <li>Consultation and strategy services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Use of Services
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                3.1 Acceptable Use
              </h3>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                3.2 Prohibited Activities
              </h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations in your jurisdiction</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Cost Saver AI and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Payment Terms
              </h2>
              <p>
                Payment terms will be specified in individual service agreements or proposals. All fees are non-refundable unless otherwise stated in writing. You are responsible for any applicable taxes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Service Availability
              </h2>
              <p>
                We strive to provide reliable services but do not guarantee uninterrupted or error-free operation. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Cost Saver AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Cost Saver AI from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Termination
              </h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use our services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
