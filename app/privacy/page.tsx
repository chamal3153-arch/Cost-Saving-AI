import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Cost Saver AI",
  description:
    "Privacy Policy for Cost Saver AI. Learn how we collect, use, and protect your personal information in compliance with GDPR, CCPA, PIPEDA, and LGPD.",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                Cost Saver AI ("we," "our," "us," or "Company") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, retain, and safeguard your personal information when you visit our website, use our services, or interact with our AI automation solutions.
              </p>
              <p className="mt-4">
                This policy is designed to comply with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>GDPR</strong> (General Data Protection Regulation) - Articles 13 & 14 (EU/EEA residents)</li>
                <li><strong>CCPA</strong> (California Consumer Privacy Act) - Sections 1798.100-1798.199 (California residents)</li>
                <li><strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act) - Schedule 1 principles (Canadian residents)</li>
                <li><strong>LGPD</strong> (Lei Geral de Proteção de Dados) - Articles 6-22 (Brazilian residents)</li>
              </ul>
              <p className="mt-4">
                <strong>Company Information:</strong><br />
                Cost Saver AI<br />
                Email: <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a><br />
                Data Protection Officer: Chamal Abeytuga (<a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a>)
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                2.1 Information You Provide Directly
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Business Information:</strong> Company name, job title, business requirements, industry sector</li>
                <li><strong>Service Information:</strong> Details about your automation needs, workflow descriptions, integration requirements</li>
                <li><strong>Communication Records:</strong> Messages, inquiries, consultation notes, feedback</li>
                <li><strong>Account Information:</strong> Username, password (hashed), account preferences, service history</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed by third-party payment processors)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type and version, device type, operating system, screen resolution</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, navigation paths, search queries</li>
                <li><strong>Technical Data:</strong> Log files, error reports, performance metrics, session identifiers</li>
                <li><strong>Location Data:</strong> General geographic location (country/region level) derived from IP address</li>
                <li><strong>Cookies and Tracking Technologies:</strong> See our <Link href="/cookies" className="text-blue-600 hover:text-blue-700 underline">Cookie Policy</Link> for details</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                2.3 Information from Third Parties
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Business Partners:</strong> Referral information, co-marketing data</li>
                <li><strong>Public Sources:</strong> Publicly available business information, social media profiles (when relevant to service delivery)</li>
                <li><strong>Service Providers:</strong> Analytics data, marketing attribution data</li>
              </ul>
            </section>

            {/* Legal Basis for Processing (GDPR) */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Legal Basis for Processing Personal Information
              </h2>
              <p>
                Under GDPR (Article 6), we process your personal information based on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities (e.g., marketing communications, non-essential cookies)</li>
                <li><strong>Contract Performance:</strong> To fulfill our contractual obligations and provide requested services</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws, regulations, or legal processes</li>
                <li><strong>Legitimate Interests:</strong> For our legitimate business interests, such as improving services, security, fraud prevention, and business analytics (we balance these against your rights and interests)</li>
                <li><strong>Vital Interests:</strong> To protect your or another person's vital interests (rare circumstances)</li>
              </ul>
              <p className="mt-4">
                You have the right to object to processing based on legitimate interests. See Section 11 for details on your rights.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. How We Use Your Information
              </h2>
              <p>We use your personal information for the following purposes:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                4.1 Service Delivery
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Design, develop, and deploy custom AI automation solutions</li>
                <li>Provide technical support and customer service</li>
                <li>Process transactions and manage accounts</li>
                <li>Communicate about service updates, changes, or issues</li>
                <li>Customize services to meet your specific business needs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                4.2 AI and Machine Learning Processing
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Train and improve AI models using anonymized and aggregated data</li>
                <li>Process your business data through AI agents and automation workflows</li>
                <li>Generate insights, recommendations, and automated responses</li>
                <li>Enable automated decision-making in your workflows (see Section 8 for details)</li>
                <li>Improve AI accuracy and performance through machine learning</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Note:</strong> We do not use your personal information to train third-party AI models without your explicit consent. See Section 7 for details on third-party AI tools.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                4.3 Business Operations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analyze website usage and improve user experience</li>
                <li>Conduct business analytics and reporting</li>
                <li>Prevent fraud, abuse, and security threats</li>
                <li>Enforce terms of service and legal agreements</li>
                <li>Manage business relationships and partnerships</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                4.4 Marketing and Communications
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send marketing communications (with your consent, where required)</li>
                <li>Provide newsletters, updates, and promotional materials</li>
                <li>Conduct surveys and gather feedback</li>
                <li>Personalize marketing content and recommendations</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                You can opt-out of marketing communications at any time using the unsubscribe link in emails or by contacting us.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                4.5 Legal Compliance
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comply with applicable laws, regulations, and legal processes</li>
                <li>Respond to government requests and court orders</li>
                <li>Protect our rights, property, and safety, as well as our users and others</li>
                <li>Investigate potential violations of our terms of service</li>
              </ul>
            </section>

            {/* AI/ML Data Processing Disclosures */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. AI and Machine Learning Data Processing
              </h2>
              <p>
                As an AI automation service provider, we process data through artificial intelligence and machine learning systems. This section provides transparency about our AI/ML practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                5.1 Types of AI Processing
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Natural Language Processing (NLP):</strong> Processing text, emails, documents, and communications</li>
                <li><strong>Predictive Analytics:</strong> Generating forecasts, recommendations, and insights from your data</li>
                <li><strong>Automated Decision-Making:</strong> Making decisions or taking actions based on predefined rules and AI models (see Section 8)</li>
                <li><strong>Pattern Recognition:</strong> Identifying patterns, anomalies, and trends in business data</li>
                <li><strong>Workflow Automation:</strong> Automating business processes and workflows using AI agents</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                5.2 Data Used for AI Training
              </h3>
              <p>
                We may use the following types of data to train and improve our AI models:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Anonymized Data:</strong> Data stripped of personally identifiable information</li>
                <li><strong>Aggregated Data:</strong> Statistical summaries that cannot identify individuals</li>
                <li><strong>Public Data:</strong> Publicly available information used for model training</li>
                <li><strong>Your Business Data (with consent):</strong> Only when you explicitly consent to use your data for model improvement</li>
              </ul>
              <p className="mt-4">
                <strong>We do NOT use your personal information or business data to train third-party AI models without your explicit written consent.</strong>
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                5.3 AI Model Training and Retention
              </h3>
              <p>
                When we use your data for AI model training (with your consent):
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Data is processed in secure, isolated environments</li>
                <li>Personal identifiers are removed or pseudonymized before training</li>
                <li>Trained models may retain learned patterns but not raw personal data</li>
                <li>Training data is retained for [TRAINING_DATA_RETENTION_PERIOD] or as required by law</li>
                <li>You can request deletion of your data from training datasets (see Section 11)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                5.4 AI Processing Transparency
              </h3>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Know when AI is processing your data</li>
                <li>Understand the logic behind automated decisions (see Section 8)</li>
                <li>Request human review of automated decisions</li>
                <li>Opt-out of certain AI processing activities (where technically feasible)</li>
                <li>Receive information about AI models used in your services</li>
              </ul>
            </section>

            {/* Third-Party AI Tools */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Third-Party AI Tools and Services
              </h2>
              <p>
                We integrate with third-party AI service providers to deliver our automation solutions. This section discloses how we use these services and how your data is handled.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                6.1 Third-Party AI Providers
              </h3>
              <p>We may use the following third-party AI services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>OpenAI API:</strong> For natural language processing, text generation, and language understanding</li>
                <li><strong>Anthropic (Claude API):</strong> For advanced language models and AI reasoning</li>
                <li><strong>[OTHER_AI_PROVIDER_1]:</strong> [DESCRIPTION]</li>
                <li><strong>[OTHER_AI_PROVIDER_2]:</strong> [DESCRIPTION]</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                6.2 Data Sharing with AI Providers
              </h3>
              <p>
                When we use third-party AI services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>We share only the data necessary to provide the requested service</li>
                <li>Data is transmitted securely using encryption (TLS/SSL)</li>
                <li>We use API-based integrations that process data in real-time</li>
                <li>Third-party providers are contractually obligated to protect your data</li>
                <li>We do not allow third-party providers to use your data for their own model training without your explicit consent</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                6.3 Third-Party AI Provider Policies
              </h3>
              <p>Each provider has its own privacy policy and data processing terms:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>OpenAI:</strong> <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a> | <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Data Usage Policy</a></li>
                <li><strong>Anthropic:</strong> <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a> | <a href="https://www.anthropic.com/security" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Security Policy</a></li>
                <li><strong>[OTHER_PROVIDER]:</strong> [PRIVACY_POLICY_LINK]</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                6.4 Data Processing Agreements
              </h3>
              <p>
                We have Data Processing Agreements (DPAs) or similar contracts with our AI service providers that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Limit data use to service delivery purposes</li>
                <li>Prohibit use of your data for provider's own model training (unless you consent)</li>
                <li>Require appropriate security measures</li>
                <li>Ensure compliance with applicable privacy laws</li>
                <li>Provide for data deletion upon request</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                6.5 Opting Out of Third-Party AI Processing
              </h3>
              <p>
                You can request to limit or opt-out of specific third-party AI processing by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Contacting us at <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a></li>
                <li>Specifying which AI services you want to opt-out of</li>
                <li>Understanding that opting out may limit certain service features</li>
              </ul>
            </section>

            {/* Data Retention for AI Training */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Data Retention for AI Training Models
              </h2>
              <p>
                This section explains how long we retain data used for AI model training and development.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                7.1 General Data Retention
              </h3>
              <p>We retain your personal information for the following periods:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Active Service Data:</strong> For the duration of our service relationship plus [ACTIVE_DATA_RETENTION_YEARS] years</li>
                <li><strong>Marketing Data:</strong> Until you opt-out or [MARKETING_DATA_RETENTION_YEARS] years of inactivity</li>
                <li><strong>Legal/Compliance Data:</strong> As required by applicable law (typically [LEGAL_RETENTION_YEARS] years)</li>
                <li><strong>Analytics Data:</strong> [ANALYTICS_RETENTION_MONTHS] months in aggregated, anonymized form</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                7.2 AI Training Data Retention
              </h3>
              <p>
                When your data is used for AI model training (with your consent):
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Raw Training Data:</strong> Retained for [TRAINING_DATA_RETENTION_YEARS] years or until you request deletion</li>
                <li><strong>Processed/Anonymized Training Data:</strong> May be retained longer as it cannot identify you</li>
                <li><strong>Trained Models:</strong> Models may retain learned patterns indefinitely, but we do not retain your raw personal data in models</li>
                <li><strong>Model Artifacts:</strong> Retained for [MODEL_ARTIFACT_RETENTION_YEARS] years for service continuity</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                7.3 Deletion of Training Data
              </h3>
              <p>
                You can request deletion of your data from training datasets:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Contact us at <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a></li>
                <li>We will delete your data from active training datasets within [DELETION_TIMEFRAME_DAYS] business days</li>
                <li>Note: Data already incorporated into trained models may not be fully removable, but we will stop using it for future training</li>
                <li>Anonymized/aggregated data that cannot identify you may be retained</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                7.4 Data Minimization
              </h3>
              <p>
                We follow data minimization principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>We only collect and retain data necessary for service delivery</li>
                <li>We regularly review and purge unnecessary data</li>
                <li>We anonymize data when possible to reduce retention risks</li>
                <li>We delete data when retention periods expire or upon request</li>
              </ul>
            </section>

            {/* Automated Decision-Making */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Automated Decision-Making and Profiling
              </h2>
              <p>
                Our AI automation services may involve automated decision-making. This section explains your rights and our practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                8.1 Types of Automated Decisions
              </h3>
              <p>Our services may make automated decisions in the following contexts:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Workflow Automation:</strong> Automatically routing tasks, assigning priorities, triggering actions</li>
                <li><strong>Content Processing:</strong> Categorizing emails, documents, or communications</li>
                <li><strong>Recommendations:</strong> Suggesting actions, optimizations, or next steps</li>
                <li><strong>Quality Control:</strong> Flagging errors, anomalies, or issues for review</li>
                <li><strong>Resource Allocation:</strong> Optimizing resource usage, scheduling, or capacity planning</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                8.2 Logic and Significance (GDPR Article 22)
              </h3>
              <p>
                <strong>Decision Logic:</strong> Our automated decisions are based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Predefined business rules and workflows you configure</li>
                <li>Machine learning models trained on historical patterns</li>
                <li>Real-time data analysis and pattern recognition</li>
                <li>Risk assessment algorithms (for fraud detection, if applicable)</li>
              </ul>
              <p className="mt-4">
                <strong>Significance and Consequences:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Automated decisions may affect workflow efficiency, resource allocation, and business operations</li>
                <li>Decisions are typically reversible and can be overridden by human review</li>
                <li>We provide transparency about decision criteria and allow you to customize rules</li>
                <li>You can request human review of any automated decision</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                8.3 Your Rights Regarding Automated Decisions
              </h3>
              <p>Under GDPR Article 22, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Not be subject to automated decision-making</strong> that produces legal effects or similarly significantly affects you (unless exceptions apply)</li>
                <li><strong>Obtain human intervention</strong> to review and challenge automated decisions</li>
                <li><strong>Express your point of view</strong> and contest automated decisions</li>
                <li><strong>Understand the logic</strong> behind automated decisions</li>
                <li><strong>Opt-out</strong> of certain automated decision-making processes (where technically feasible)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                8.4 Exercising Your Rights
              </h3>
              <p>
                To exercise your rights regarding automated decisions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Contact us at <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a></li>
                <li>Request information about specific automated decisions affecting you</li>
                <li>Request human review of automated decisions</li>
                <li>Request modification or disabling of automated decision-making features</li>
                <li>We will respond within [RESPONSE_TIMEFRAME_DAYS] business days</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Data Sharing and Disclosure
              </h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                9.1 Service Providers
              </h3>
              <p>We share data with trusted service providers who assist in:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Cloud hosting and infrastructure ([CLOUD_PROVIDER])</li>
                <li>AI/ML processing (OpenAI, Anthropic, etc. - see Section 6)</li>
                <li>Payment processing ([PAYMENT_PROCESSOR])</li>
                <li>Email and communication services ([EMAIL_PROVIDER])</li>
                <li>Analytics and monitoring ([ANALYTICS_PROVIDER])</li>
                <li>Customer support tools ([SUPPORT_TOOL])</li>
              </ul>
              <p className="mt-2">
                All service providers are contractually bound to protect your data and use it only for specified purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                9.2 Legal Requirements
              </h3>
              <p>We may disclose information when required by:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Laws, regulations, or legal processes</li>
                <li>Government requests or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>To investigate fraud or security issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                9.3 Business Transfers
              </h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                9.4 With Your Consent
              </h3>
              <p>
                We may share information with third parties when you provide explicit consent for specific sharing arrangements.
              </p>
            </section>

            {/* CCPA Do Not Sell */}
            <section id="do-not-sell">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Do Not Sell My Personal Information (CCPA)
              </h2>
              <p>
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                10.1 Sale of Personal Information
              </h3>
              <p>
                We do not sell personal information in the traditional sense. However, under CCPA's broad definition, sharing information with third-party analytics or advertising partners may be considered a "sale." We share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Analytics providers (Google Analytics) - only with your consent via cookie preferences</li>
                <li>Marketing partners - only with your explicit consent</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                10.2 Your Right to Opt-Out
              </h3>
              <p>
                California residents can opt-out of the "sale" of personal information by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Clicking the "Do Not Sell My Personal Information" link in our cookie banner</li>
                <li>Adjusting cookie preferences to reject Marketing and Analytics cookies</li>
                <li>Emailing us at <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a> with subject "CCPA Opt-Out Request"</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                10.3 Non-Discrimination
              </h3>
              <p>
                We will not discriminate against you for exercising your CCPA rights. You will receive the same quality of service regardless of your privacy choices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                10.4 Authorized Agents
              </h3>
              <p>
                You may designate an authorized agent to make CCPA requests on your behalf. The agent must provide proof of authorization.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence, including the United States, where our servers and service providers are located.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                11.1 EU-US Data Privacy Framework
              </h3>
              <p>
                For transfers from the European Union/European Economic Area (EU/EEA) to the United States, we rely on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>EU-US Data Privacy Framework:</strong> Our US-based service providers participate in the EU-US Data Privacy Framework, which provides adequate protection for EU personal data</li>
                <li><strong>Standard Contractual Clauses (SCCs):</strong> We use EU-approved Standard Contractual Clauses for transfers to non-Framework participants</li>
                <li><strong>Binding Corporate Rules:</strong> Where applicable, we rely on approved binding corporate rules</li>
                <li><strong>Other Adequacy Mechanisms:</strong> We use other legally recognized transfer mechanisms as appropriate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                11.2 Transfer Safeguards
              </h3>
              <p>
                We ensure appropriate safeguards for international transfers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Encryption in transit and at rest</li>
                <li>Contractual obligations requiring data protection</li>
                <li>Regular security assessments of service providers</li>
                <li>Compliance with applicable data protection laws</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                11.3 Your Rights Regarding Transfers
              </h3>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Know where your data is processed</li>
                <li>Request information about transfer safeguards</li>
                <li>Object to certain transfers (where legally permitted)</li>
                <li>Request data be processed in a specific location (subject to technical feasibility)</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                12. Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you have various rights regarding your personal information:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                12.1 GDPR Rights (EU/EEA Residents)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access (Article 15):</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification (Article 16):</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure (Article 17):</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Right to Restrict Processing (Article 18):</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability (Article 20):</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Object (Article 21):</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent (Article 7):</strong> Withdraw consent at any time</li>
                <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                12.2 CCPA Rights (California Residents)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information (subject to exceptions)</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of the "sale" of personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising rights</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                12.3 PIPEDA Rights (Canadian Residents)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request access to your personal information</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for collection, use, or disclosure</li>
                <li><strong>Right to File a Complaint:</strong> File a complaint with the Privacy Commissioner of Canada</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                12.4 LGPD Rights (Brazilian Residents)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Confirmation and Access:</strong> Confirm existence of processing and access data</li>
                <li><strong>Right to Correction:</strong> Request correction of incomplete or inaccurate data</li>
                <li><strong>Right to Anonymization/Deletion:</strong> Request anonymization or deletion of unnecessary data</li>
                <li><strong>Right to Data Portability:</strong> Request data portability to another service provider</li>
                <li><strong>Right to Deletion:</strong> Request deletion of personal data processed with consent</li>
                <li><strong>Right to Information:</strong> Obtain information about data sharing</li>
                <li><strong>Right to Revoke Consent:</strong> Revoke consent at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                12.5 Exercising Your Rights
              </h3>
              <p>
                To exercise any of these rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Email:</strong> <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a></li>
                <li><strong>Subject Line:</strong> "Privacy Rights Request - [Your Request Type]"</li>
                <li><strong>Include:</strong> Your name, email, and specific request details</li>
                <li><strong>Verification:</strong> We may request identity verification to protect your privacy</li>
                <li><strong>Response Time:</strong> We will respond within [RESPONSE_TIMEFRAME_DAYS] business days (or as required by applicable law)</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                13. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest</li>
                <li><strong>Access Controls:</strong> Limited access to personal data on a need-to-know basis</li>
                <li><strong>Security Monitoring:</strong> Continuous monitoring for security threats and vulnerabilities</li>
                <li><strong>Regular Audits:</strong> Security assessments and penetration testing</li>
                <li><strong>Incident Response:</strong> Procedures for detecting, reporting, and responding to data breaches</li>
                <li><strong>Employee Training:</strong> Regular privacy and security training for staff</li>
                <li><strong>Backup and Recovery:</strong> Secure backup systems and disaster recovery plans</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                14. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies. For detailed information, please see our{" "}
                <Link href="/cookies" className="text-blue-600 hover:text-blue-700 underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                15. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of [MINIMUM_AGE] (or the age of majority in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                16. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Posting the updated policy on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for material changes (where required by law)</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="mt-4">
                Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                17. Contact Us
              </h2>
              <p>
                If you have questions, concerns, or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Cost Saver AI</strong>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">
                    costsaverai@proton.me
                  </a>
                </p>
                <p>
                  <strong>Data Protection Officer:</strong> Chamal Abeytuga<br />
                  <strong>DPO Email:</strong> <a href="mailto:costsaverai@proton.me" className="text-blue-600 hover:text-blue-700 underline">costsaverai@proton.me</a>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                17.1 Supervisory Authority Contacts
              </h3>
              <p>You may also contact your local data protection authority:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>EU/EEA:</strong> Your local data protection authority (list: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">EDPB Members</a>)</li>
                <li><strong>UK:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Information Commissioner's Office (ICO)</a></li>
                <li><strong>Canada:</strong> <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Privacy Commissioner of Canada</a></li>
                <li><strong>Brazil:</strong> <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Autoridade Nacional de Proteção de Dados (ANPD)</a></li>
                <li><strong>California:</strong> <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">California Attorney General</a></li>
              </ul>
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
