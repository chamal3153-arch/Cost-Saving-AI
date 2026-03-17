export interface ServiceData {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const servicesData: ServiceData[] = [
  // Intelligent Chatbots & Assistants
  {
    id: "chatbot-24-7",
    title: "24/7 Customer Service Chatbots for Websites",
    category: "Intelligent Chatbots & Assistants",
    description: "Deploy AI-powered chatbots that provide instant customer support 24/7 on your website. These intelligent assistants handle common inquiries, provide product information, and escalate complex issues to human agents when needed.",
    features: [
      "Natural language understanding for customer queries",
      "Multi-turn conversation capabilities",
      "Integration with your CRM and support systems",
      "Customizable responses and brand voice",
      "Analytics dashboard for conversation insights"
    ],
    benefits: [
      "Reduce customer service costs by 60-80%",
      "Instant response times improve customer satisfaction",
      "Handle multiple conversations simultaneously",
      "Never miss a customer inquiry",
      "Free up your team for complex issues"
    ],
    useCases: [
      "E-commerce websites needing product support",
      "SaaS companies handling user onboarding questions",
      "Service businesses managing appointment inquiries",
      "B2B companies qualifying leads automatically"
    ]
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification & Appointment Booking Assistants",
    category: "Intelligent Chatbots & Assistants",
    description: "Automate your lead qualification process with intelligent assistants that ask the right questions, score leads, and automatically book appointments in your calendar. Perfect for sales teams that want to focus on closing deals, not qualifying prospects.",
    features: [
      "Automated lead scoring based on your criteria",
      "Calendar integration for seamless booking",
      "Qualification questionnaires",
      "CRM integration for automatic lead entry",
      "Follow-up email automation"
    ],
    benefits: [
      "Save 10+ hours per week on lead qualification",
      "Never miss a qualified lead",
      "Consistent qualification process",
      "Higher conversion rates",
      "Better sales team productivity"
    ],
    useCases: [
      "Real estate agencies qualifying property buyers",
      "Consulting firms booking discovery calls",
      "Medical practices scheduling consultations",
      "B2B sales teams qualifying enterprise leads"
    ]
  },
  {
    id: "hr-it-support",
    title: "Internal HR & IT Support Bots for Employee Questions",
    category: "Intelligent Chatbots & Assistants",
    description: "Reduce internal support tickets with AI assistants that answer common HR and IT questions instantly. Employees get immediate answers about policies, benefits, technical issues, and more, freeing your support team for complex matters.",
    features: [
      "Knowledge base integration",
      "Policy and procedure guidance",
      "IT troubleshooting assistance",
      "Ticket creation and routing",
      "Multi-language support for global teams"
    ],
    benefits: [
      "Reduce support tickets by 40-60%",
      "Instant answers improve employee satisfaction",
      "24/7 availability for remote teams",
      "Consistent policy information",
      "Lower IT/HR support costs"
    ],
    useCases: [
      "Companies with distributed teams",
      "Organizations with frequent policy questions",
      "Tech companies needing IT support",
      "Growing businesses scaling support operations"
    ]
  },
  {
    id: "multi-language-support",
    title: "Multi-language Customer Support Automation",
    category: "Intelligent Chatbots & Assistants",
    description: "Serve customers worldwide with AI assistants that communicate fluently in multiple languages. Automatically detect customer language and provide support in their preferred language, breaking down communication barriers.",
    features: [
      "Automatic language detection",
      "Support for 50+ languages",
      "Cultural context awareness",
      "Translation quality assurance",
      "Multi-language analytics"
    ],
    benefits: [
      "Expand to global markets without hiring",
      "Improve customer satisfaction internationally",
      "Reduce language barrier issues",
      "24/7 support in all languages",
      "Cost-effective global expansion"
    ],
    useCases: [
      "E-commerce businesses going global",
      "SaaS companies with international users",
      "Service businesses expanding markets",
      "Companies with diverse customer base"
    ]
  },
  {
    id: "whatsapp-messenger",
    title: "WhatsApp/Facebook Messenger Business Bots",
    category: "Intelligent Chatbots & Assistants",
    description: "Engage customers where they already are - on WhatsApp and Facebook Messenger. Deploy business bots that handle orders, answer questions, send updates, and provide customer support directly through these popular messaging platforms.",
    features: [
      "WhatsApp Business API integration",
      "Facebook Messenger integration",
      "Order processing and tracking",
      "Payment processing capabilities",
      "Rich media support (images, videos, documents)"
    ],
    benefits: [
      "Meet customers on their preferred platform",
      "Higher engagement rates than email",
      "Faster response times",
      "Automated order management",
      "Reduce customer service workload"
    ],
    useCases: [
      "E-commerce stores managing orders",
      "Restaurants taking reservations",
      "Service businesses booking appointments",
      "Retailers providing product support"
    ]
  },
  // Custom Business Dashboards
  {
    id: "kpi-dashboards",
    title: "Visual KPI Dashboards Connecting All Your Data Sources",
    category: "Custom Business Dashboards",
    description: "Create comprehensive KPI dashboards that pull data from all your business systems - CRM, accounting, marketing tools, and more. Get a unified view of your business performance in one beautiful, customizable dashboard.",
    features: [
      "Connect to 100+ data sources",
      "Real-time data synchronization",
      "Customizable KPI widgets",
      "Drag-and-drop dashboard builder",
      "Automated data refresh"
    ],
    benefits: [
      "Save hours on manual reporting",
      "Make data-driven decisions faster",
      "Identify trends and issues quickly",
      "Single source of truth for all metrics",
      "Reduce dependency on expensive BI tools"
    ],
    useCases: [
      "CEOs needing executive dashboards",
      "Sales managers tracking team performance",
      "Marketing teams monitoring campaigns",
      "Operations teams tracking efficiency"
    ]
  },
  {
    id: "sales-monitoring",
    title: "Real-time Sales & Performance Monitoring Systems",
    category: "Custom Business Dashboards",
    description: "Monitor your sales pipeline, revenue, and team performance in real-time. Get instant alerts on important metrics, track deals through the funnel, and identify bottlenecks before they impact revenue.",
    features: [
      "Real-time pipeline visualization",
      "Revenue forecasting",
      "Team performance metrics",
      "Automated alerts and notifications",
      "Historical trend analysis"
    ],
    benefits: [
      "React to issues before they become problems",
      "Improve sales forecasting accuracy",
      "Identify top performers and best practices",
      "Reduce sales cycle time",
      "Increase win rates"
    ],
    useCases: [
      "Sales teams tracking pipeline health",
      "Sales managers monitoring team performance",
      "CEOs tracking revenue goals",
      "B2B companies managing complex sales cycles"
    ]
  },
  {
    id: "automated-reporting",
    title: "Automated Reporting with AI Insights",
    category: "Custom Business Dashboards",
    description: "Replace manual report creation with AI-powered automated reports that not only show your data but also provide intelligent insights, trends, and recommendations. Get weekly or monthly reports delivered automatically.",
    features: [
      "Automated report generation",
      "AI-powered insights and recommendations",
      "Customizable report templates",
      "Scheduled email delivery",
      "PDF and Excel export options"
    ],
    benefits: [
      "Save 5-10 hours per week on reporting",
      "Get actionable insights automatically",
      "Consistent reporting format",
      "Never miss a report deadline",
      "Identify opportunities faster"
    ],
    useCases: [
      "Monthly executive reports",
      "Weekly team performance reviews",
      "Client reporting for agencies",
      "Board meeting preparation"
    ]
  },
  {
    id: "mobile-dashboards",
    title: "Mobile-friendly Dashboard Access for Teams",
    category: "Custom Business Dashboards",
    description: "Access your business dashboards anywhere, anytime with fully responsive mobile-optimized views. Your team can check metrics, review performance, and make decisions on the go.",
    features: [
      "Fully responsive mobile design",
      "Touch-optimized interactions",
      "Offline viewing capabilities",
      "Push notifications for alerts",
      "Mobile app options"
    ],
    benefits: [
      "Monitor business from anywhere",
      "Faster decision-making on the go",
      "Better team accessibility",
      "Real-time updates on mobile",
      "Improved team engagement"
    ],
    useCases: [
      "Field sales teams",
      "Remote managers",
      "Executives traveling frequently",
      "Operations teams on-site"
    ]
  },
  {
    id: "department-views",
    title: "Department-specific Views (Sales, Marketing, Operations)",
    category: "Custom Business Dashboards",
    description: "Create tailored dashboard views for each department with only the metrics that matter to them. Sales sees pipeline, Marketing sees campaign performance, Operations sees efficiency metrics - all from the same data source.",
    features: [
      "Role-based dashboard access",
      "Customizable department views",
      "Department-specific KPIs",
      "Cross-department data sharing",
      "Unified data source"
    ],
    benefits: [
      "Each team sees what matters to them",
      "Reduce information overload",
      "Improve department focus",
      "Better cross-department alignment",
      "Faster decision-making"
    ],
    useCases: [
      "Multi-department organizations",
      "Companies with specialized teams",
      "Growing businesses with clear departments",
      "Organizations needing role-based access"
    ]
  },
  // Workflow & Process Automation
  {
    id: "invoice-processing",
    title: "Invoice & Document Processing Automation",
    category: "Workflow & Process Automation",
    description: "Automate your invoice and document processing workflow. Extract data from invoices, validate information, route for approval, and enter into your accounting system automatically. Eliminate manual data entry completely.",
    features: [
      "OCR for invoice data extraction",
      "Automatic data validation",
      "Approval workflow automation",
      "Accounting system integration",
      "Exception handling for errors"
    ],
    benefits: [
      "Save 15-20 hours per week on data entry",
      "Reduce human errors",
      "Faster invoice processing",
      "Better cash flow management",
      "Audit trail for compliance"
    ],
    useCases: [
      "Accounting departments processing invoices",
      "Accounts payable automation",
      "Document-heavy businesses",
      "Companies with high invoice volumes"
    ]
  },
  {
    id: "lead-crm-automation",
    title: "Lead-to-CRM Data Entry Automation",
    category: "Workflow & Process Automation",
    description: "Automatically capture leads from your website, forms, and marketing channels and enter them into your CRM with all relevant information. No more manual copy-pasting or data entry delays.",
    features: [
      "Multi-source lead capture",
      "Automatic CRM entry",
      "Data enrichment and validation",
      "Duplicate detection",
      "Lead scoring integration"
    ],
    benefits: [
      "Never lose a lead",
      "Instant CRM updates",
      "Reduce data entry errors",
      "Faster lead response times",
      "Better lead tracking"
    ],
    useCases: [
      "Sales teams managing high lead volumes",
      "Marketing teams tracking campaign leads",
      "Businesses with multiple lead sources",
      "Companies scaling lead generation"
    ]
  },
  {
    id: "customer-onboarding",
    title: "Customer Onboarding & Follow-up Sequences",
    category: "Workflow & Process Automation",
    description: "Automate your entire customer onboarding process with personalized sequences. Send welcome emails, setup instructions, training materials, and follow-up messages automatically based on customer actions and timeline.",
    features: [
      "Automated email sequences",
      "Action-based triggers",
      "Personalized content",
      "Progress tracking",
      "Multi-channel communication"
    ],
    benefits: [
      "Consistent onboarding experience",
      "Reduce churn in first 30 days",
      "Free up team time",
      "Faster time-to-value for customers",
      "Better customer satisfaction"
    ],
    useCases: [
      "SaaS companies onboarding users",
      "Service businesses welcoming clients",
      "E-commerce stores engaging new customers",
      "B2B companies onboarding enterprise clients"
    ]
  },
  {
    id: "inventory-tracking",
    title: "Inventory Tracking & Reorder Alert Systems",
    category: "Workflow & Process Automation",
    description: "Never run out of stock or over-order with automated inventory tracking. Monitor stock levels in real-time, get alerts when items are low, and automatically generate purchase orders when thresholds are reached.",
    features: [
      "Real-time inventory tracking",
      "Automated reorder alerts",
      "Purchase order generation",
      "Multi-location inventory management",
      "Supplier integration"
    ],
    benefits: [
      "Prevent stockouts",
      "Reduce overstocking costs",
      "Automated procurement",
      "Better cash flow management",
      "Time savings on inventory management"
    ],
    useCases: [
      "Retail businesses managing stock",
      "E-commerce stores with inventory",
      "Manufacturing companies",
      "Distributors managing warehouses"
    ]
  },
  {
    id: "email-triage",
    title: "Email Triage & Smart Routing Automation",
    category: "Workflow & Process Automation",
    description: "Automatically categorize, prioritize, and route emails to the right team members. Use AI to understand email content and intent, then route to appropriate departments or individuals automatically.",
    features: [
      "AI-powered email categorization",
      "Priority scoring",
      "Automatic routing rules",
      "Spam and junk filtering",
      "Response suggestions"
    ],
    benefits: [
      "Faster email response times",
      "No emails fall through cracks",
      "Better team workload distribution",
      "Reduce manual email sorting",
      "Improve customer response quality"
    ],
    useCases: [
      "Customer service teams",
      "Sales teams managing inquiries",
      "Support departments",
      "Companies with high email volumes"
    ]
  },
  // Social Media & Content Systems
  {
    id: "content-creation",
    title: "Automated Content Creation & Scheduling",
    category: "Social Media & Content Systems",
    description: "Generate social media content automatically using AI, then schedule posts across all your platforms. Create engaging posts, captions, and hashtags that match your brand voice and posting schedule.",
    features: [
      "AI content generation",
      "Multi-platform scheduling",
      "Content calendar management",
      "Brand voice customization",
      "Hashtag research and suggestions"
    ],
    benefits: [
      "Save 10+ hours per week on content",
      "Consistent posting schedule",
      "Better engagement rates",
      "Multi-platform management",
      "Content ideas never run dry"
    ],
    useCases: [
      "Small businesses managing social media",
      "Marketing teams scaling content",
      "Agencies managing multiple clients",
      "Solo entrepreneurs building presence"
    ]
  },
  {
    id: "social-engagement",
    title: "Social Media Engagement & Response Automation",
    category: "Social Media & Content Systems",
    description: "Automatically engage with your audience by responding to comments, messages, and mentions. Use AI to craft appropriate responses that maintain your brand voice while freeing up time for strategic work.",
    features: [
      "Automated comment responses",
      "Message handling",
      "Mention monitoring",
      "Sentiment analysis",
      "Escalation to humans when needed"
    ],
    benefits: [
      "Faster response times",
      "Never miss an engagement",
      "Consistent brand voice",
      "Better customer relationships",
      "Time savings on social management"
    ],
    useCases: [
      "Brands with high engagement",
      "E-commerce stores",
      "Service businesses",
      "Companies building social presence"
    ]
  },
  {
    id: "brand-monitoring",
    title: "Brand Monitoring & Sentiment Analysis",
    category: "Social Media & Content Systems",
    description: "Monitor mentions of your brand across social media, news sites, and review platforms. Get real-time alerts when your brand is mentioned and understand the sentiment behind each mention.",
    features: [
      "Multi-platform monitoring",
      "Real-time alerts",
      "Sentiment analysis",
      "Competitor tracking",
      "Trend identification"
    ],
    benefits: [
      "Protect brand reputation",
      "Respond to issues quickly",
      "Understand customer sentiment",
      "Identify opportunities",
      "Competitive intelligence"
    ],
    useCases: [
      "Brands managing reputation",
      "Companies launching products",
      "Businesses in competitive markets",
      "Organizations handling PR"
    ]
  },
  {
    id: "competitor-tracking",
    title: "Competitor Tracking & Alert Systems",
    category: "Social Media & Content Systems",
    description: "Track your competitors' social media activity, content strategies, and engagement. Get alerts when they post, launch campaigns, or gain significant traction. Stay ahead of the competition.",
    features: [
      "Competitor activity monitoring",
      "Content analysis",
      "Engagement tracking",
      "Alert system",
      "Comparative analytics"
    ],
    benefits: [
      "Stay competitive",
      "Learn from competitor strategies",
      "Identify opportunities",
      "Benchmark performance",
      "Strategic insights"
    ],
    useCases: [
      "Marketing teams",
      "Competitive industries",
      "Businesses entering new markets",
      "Companies positioning against competitors"
    ]
  },
  {
    id: "content-repurposing",
    title: "Content Repurposing Across Platforms",
    category: "Social Media & Content Systems",
    description: "Automatically adapt your content for different social media platforms. Turn a blog post into Twitter threads, LinkedIn posts, Instagram captions, and more - all optimized for each platform's format and audience.",
    features: [
      "Multi-platform adaptation",
      "Format optimization",
      "Platform-specific best practices",
      "Bulk repurposing",
      "Content library management"
    ],
    benefits: [
      "Maximize content ROI",
      "Consistent messaging",
      "Save time on content creation",
      "Better platform optimization",
      "Reach wider audiences"
    ],
    useCases: [
      "Content creators",
      "Marketing teams",
      "Businesses with blog content",
      "Companies managing multiple platforms"
    ]
  },
  // Website & Digital Monitoring
  {
    id: "uptime-monitoring",
    title: "24/7 Website Uptime & Performance Monitoring",
    category: "Website & Digital Monitoring",
    description: "Monitor your website's uptime and performance 24/7. Get instant alerts when your site goes down, experiences slow load times, or encounters errors. Never let website issues impact your business.",
    features: [
      "24/7 uptime monitoring",
      "Performance metrics tracking",
      "Instant alert system",
      "Historical data and reports",
      "Multi-location monitoring"
    ],
    benefits: [
      "Prevent revenue loss from downtime",
      "Faster issue resolution",
      "Better user experience",
      "SEO protection",
      "Peace of mind"
    ],
    useCases: [
      "E-commerce websites",
      "SaaS platforms",
      "Business-critical websites",
      "High-traffic sites"
    ]
  },
  {
    id: "seo-tracking",
    title: "SEO Health Tracking & Optimization Alerts",
    category: "Website & Digital Monitoring",
    description: "Monitor your website's SEO health continuously. Track keyword rankings, identify technical SEO issues, monitor backlinks, and get alerts when optimization opportunities arise.",
    features: [
      "Keyword ranking tracking",
      "Technical SEO audits",
      "Backlink monitoring",
      "Competitor SEO analysis",
      "Optimization recommendations"
    ],
    benefits: [
      "Maintain search rankings",
      "Identify issues before they impact SEO",
      "Stay ahead of algorithm changes",
      "Improve organic traffic",
      "Data-driven SEO decisions"
    ],
    useCases: [
      "Businesses relying on organic traffic",
      "E-commerce stores",
      "Content-driven websites",
      "Companies competing on SEO"
    ]
  },
  {
    id: "content-updates",
    title: "Content Update Automation",
    category: "Website & Digital Monitoring",
    description: "Automatically update website content based on triggers. Update prices, inventory status, event information, and more without manual intervention. Keep your website always current.",
    features: [
      "Automated content updates",
      "Trigger-based changes",
      "Multi-page updates",
      "Scheduled content changes",
      "Version control"
    ],
    benefits: [
      "Always accurate information",
      "Reduce manual updates",
      "Prevent outdated content",
      "Better user experience",
      "Time savings"
    ],
    useCases: [
      "E-commerce with changing prices",
      "Event websites",
      "Businesses with frequent updates",
      "Multi-location businesses"
    ]
  },
  {
    id: "user-behavior",
    title: "User Behavior Analysis & Conversion Tracking",
    category: "Website & Digital Monitoring",
    description: "Understand how visitors interact with your website. Track user journeys, identify conversion bottlenecks, analyze behavior patterns, and optimize your site for better results.",
    features: [
      "User journey tracking",
      "Heatmap analysis",
      "Conversion funnel tracking",
      "Behavior pattern identification",
      "A/B test integration"
    ],
    benefits: [
      "Improve conversion rates",
      "Identify optimization opportunities",
      "Better user experience",
      "Data-driven website improvements",
      "Higher ROI on website"
    ],
    useCases: [
      "E-commerce optimization",
      "Lead generation websites",
      "SaaS signup funnels",
      "Companies optimizing conversions"
    ]
  },
  {
    id: "security-monitoring",
    title: "Security Monitoring & Anomaly Detection",
    category: "Website & Digital Monitoring",
    description: "Protect your website with automated security monitoring. Detect suspicious activity, identify potential threats, monitor for malware, and get alerts for security issues before they become problems.",
    features: [
      "Real-time threat detection",
      "Anomaly identification",
      "Malware scanning",
      "Security alerts",
      "Incident reporting"
    ],
    benefits: [
      "Prevent security breaches",
      "Early threat detection",
      "Protect customer data",
      "Maintain website trust",
      "Compliance support"
    ],
    useCases: [
      "E-commerce sites handling payments",
      "SaaS platforms with user data",
      "Businesses with sensitive information",
      "Companies needing compliance"
    ]
  },
  // Customer Experience Tools
  {
    id: "smart-booking",
    title: "Smart Booking & Scheduling Optimization",
    category: "Customer Experience Tools",
    description: "Optimize your booking and scheduling system with AI that learns from patterns. Automatically suggest optimal times, prevent double-bookings, send reminders, and handle rescheduling seamlessly.",
    features: [
      "Intelligent time slot suggestions",
      "Automated reminders",
      "Rescheduling automation",
      "Calendar integration",
      "No-show prediction"
    ],
    benefits: [
      "Reduce no-shows",
      "Optimize schedule utilization",
      "Better customer experience",
      "Time savings on scheduling",
      "Higher booking conversion"
    ],
    useCases: [
      "Service businesses",
      "Medical practices",
      "Consulting firms",
      "Beauty salons and spas"
    ]
  },
  {
    id: "personalized-communication",
    title: "Personalized Customer Communication Systems",
    category: "Customer Experience Tools",
    description: "Create personalized communication experiences for each customer. Use AI to tailor messages, recommendations, and interactions based on customer history, preferences, and behavior.",
    features: [
      "Customer segmentation",
      "Personalized messaging",
      "Behavior-based triggers",
      "Multi-channel personalization",
      "A/B testing capabilities"
    ],
    benefits: [
      "Higher engagement rates",
      "Better customer relationships",
      "Increased sales",
      "Improved customer satisfaction",
      "Higher lifetime value"
    ],
    useCases: [
      "E-commerce personalization",
      "SaaS user engagement",
      "Service businesses",
      "Companies with customer data"
    ]
  },
  {
    id: "feedback-sentiment",
    title: "Feedback Collection & Sentiment Analysis",
    category: "Customer Experience Tools",
    description: "Automatically collect customer feedback through multiple channels and analyze sentiment. Understand what customers love, what they don't, and identify trends before they become problems.",
    features: [
      "Automated feedback collection",
      "Sentiment analysis",
      "Trend identification",
      "Alert system for negative feedback",
      "Feedback dashboard"
    ],
    benefits: [
      "Understand customer satisfaction",
      "Identify issues early",
      "Improve products/services",
      "Better customer retention",
      "Data-driven improvements"
    ],
    useCases: [
      "Product companies",
      "Service businesses",
      "SaaS platforms",
      "Companies prioritizing customer experience"
    ]
  },
  {
    id: "loyalty-automation",
    title: "Loyalty Program Automation",
    category: "Customer Experience Tools",
    description: "Automate your entire loyalty program. Track points, send rewards, manage tiers, and create personalized offers automatically. Keep customers engaged and coming back.",
    features: [
      "Points tracking and management",
      "Automated reward distribution",
      "Tier management",
      "Personalized offers",
      "Program analytics"
    ],
    benefits: [
      "Increase customer retention",
      "Drive repeat purchases",
      "Better customer engagement",
      "Reduce manual program management",
      "Higher customer lifetime value"
    ],
    useCases: [
      "Retail businesses",
      "E-commerce stores",
      "Service businesses",
      "Restaurants and cafes"
    ]
  },
  {
    id: "multi-channel-support",
    title: "Multi-channel Customer Support Integration",
    category: "Customer Experience Tools",
    description: "Unify customer support across all channels - email, chat, phone, social media. Create a single view of each customer's journey and ensure consistent, high-quality support everywhere.",
    features: [
      "Unified support dashboard",
      "Cross-channel conversation history",
      "Automated routing",
      "Consistent response quality",
      "Analytics across channels"
    ],
    benefits: [
      "Better customer experience",
      "Faster issue resolution",
      "No context switching",
      "Improved support efficiency",
      "Higher customer satisfaction"
    ],
    useCases: [
      "Companies with multiple support channels",
      "E-commerce businesses",
      "SaaS platforms",
      "Service businesses"
    ]
  },
  // Internal Team Productivity
  {
    id: "meeting-transcription",
    title: "Meeting Transcription & Summarization Tools",
    category: "Internal Team Productivity",
    description: "Automatically transcribe meetings and generate summaries with key action items. Never miss important details, make meetings searchable, and ensure follow-ups happen.",
    features: [
      "Real-time transcription",
      "Automatic summarization",
      "Action item extraction",
      "Speaker identification",
      "Searchable meeting archive"
    ],
    benefits: [
      "Save time on note-taking",
      "Never miss action items",
      "Better meeting documentation",
      "Searchable meeting history",
      "Improved follow-up"
    ],
    useCases: [
      "Remote teams",
      "Companies with frequent meetings",
      "Client-facing teams",
      "Organizations needing documentation"
    ]
  },
  {
    id: "knowledge-base",
    title: "Internal Knowledge Base & Q&A Systems",
    category: "Internal Team Productivity",
    description: "Create a searchable internal knowledge base that answers employee questions instantly. Reduce repetitive questions, improve onboarding, and ensure everyone has access to the information they need.",
    features: [
      "AI-powered search",
      "Natural language Q&A",
      "Content management",
      "Usage analytics",
      "Integration with tools"
    ],
    benefits: [
      "Reduce repetitive questions",
      "Faster information access",
      "Better onboarding",
      "Consistent information",
      "Improved productivity"
    ],
    useCases: [
      "Growing companies",
      "Organizations with complex processes",
      "Remote teams",
      "Companies with high employee turnover"
    ]
  },
  {
    id: "training-onboarding",
    title: "Training & Onboarding Automation",
    category: "Internal Team Productivity",
    description: "Automate employee training and onboarding with personalized learning paths. Track progress, deliver content automatically, and ensure new hires are productive faster.",
    features: [
      "Personalized learning paths",
      "Progress tracking",
      "Automated content delivery",
      "Assessment and quizzes",
      "Completion certificates"
    ],
    benefits: [
      "Faster time-to-productivity",
      "Consistent training experience",
      "Reduce HR workload",
      "Better employee retention",
      "Scalable training programs"
    ],
    useCases: [
      "Companies hiring frequently",
      "Organizations with complex roles",
      "Remote-first companies",
      "Businesses scaling teams"
    ]
  },
  {
    id: "document-management",
    title: "Document Management & Search Systems",
    category: "Internal Team Productivity",
    description: "Organize and search all company documents effortlessly. Use AI to tag, categorize, and find documents instantly. Never waste time searching for that important file again.",
    features: [
      "AI-powered document organization",
      "Advanced search capabilities",
      "Automatic tagging",
      "Version control",
      "Access management"
    ],
    benefits: [
      "Faster document retrieval",
      "Better organization",
      "Reduce duplicate files",
      "Improved collaboration",
      "Time savings"
    ],
    useCases: [
      "Document-heavy organizations",
      "Legal and accounting firms",
      "Companies with compliance needs",
      "Organizations with shared documents"
    ]
  },
  {
    id: "team-coordination",
    title: "Team Coordination & Task Automation",
    category: "Internal Team Productivity",
    description: "Automate team coordination and task management. Assign tasks automatically, send reminders, track progress, and ensure nothing falls through the cracks.",
    features: [
      "Automated task assignment",
      "Progress tracking",
      "Reminder systems",
      "Workflow automation",
      "Team collaboration tools"
    ],
    benefits: [
      "Better task visibility",
      "Reduced manual coordination",
      "Faster project completion",
      "Improved accountability",
      "Higher team productivity"
    ],
    useCases: [
      "Project-based teams",
      "Cross-functional teams",
      "Remote teams",
      "Companies managing multiple projects"
    ]
  },
  // AI Strategy & Implementation
  {
    id: "process-audit",
    title: "Business Process Automation Audit",
    category: "AI Strategy & Implementation",
    description: "Get a comprehensive audit of your business processes to identify automation opportunities. We analyze your workflows, identify bottlenecks, and recommend where AI can have the biggest impact.",
    features: [
      "Process mapping and analysis",
      "Bottleneck identification",
      "ROI calculations",
      "Implementation roadmap",
      "Priority recommendations"
    ],
    benefits: [
      "Identify best automation opportunities",
      "Understand potential ROI",
      "Prioritize initiatives",
      "Avoid costly mistakes",
      "Strategic automation planning"
    ],
    useCases: [
      "Companies starting automation journey",
      "Businesses with manual processes",
      "Organizations wanting strategic approach",
      "Companies planning digital transformation"
    ]
  },
  {
    id: "ai-roadmap",
    title: "ROI-focused AI Implementation Roadmap",
    category: "AI Strategy & Implementation",
    description: "Get a strategic roadmap for implementing AI in your business. We prioritize initiatives based on ROI, complexity, and business impact to ensure maximum value from your AI investments.",
    features: [
      "ROI analysis for each initiative",
      "Implementation timeline",
      "Resource requirements",
      "Risk assessment",
      "Success metrics"
    ],
    benefits: [
      "Maximize ROI on AI investments",
      "Clear implementation path",
      "Manageable rollout",
      "Measure success",
      "Strategic AI adoption"
    ],
    useCases: [
      "Companies planning AI adoption",
      "Businesses wanting strategic approach",
      "Organizations with multiple opportunities",
      "Companies needing executive buy-in"
    ]
  },
  {
    id: "team-training",
    title: "Team Training & Change Management",
    category: "AI Strategy & Implementation",
    description: "Ensure successful AI adoption with comprehensive team training and change management. Help your team understand, adopt, and maximize the value of new AI tools and processes.",
    features: [
      "Customized training programs",
      "Change management support",
      "Ongoing support",
      "Best practices sharing",
      "Success measurement"
    ],
    benefits: [
      "Faster adoption",
      "Higher user satisfaction",
      "Better ROI realization",
      "Reduced resistance",
      "Long-term success"
    ],
    useCases: [
      "Companies implementing AI",
      "Organizations with change resistance",
      "Businesses scaling AI adoption",
      "Companies needing user buy-in"
    ]
  },
  {
    id: "vendor-selection",
    title: "Vendor Selection & Integration Guidance",
    category: "AI Strategy & Implementation",
    description: "Get expert guidance on selecting the right AI vendors and tools for your needs. We help you evaluate options, compare solutions, and ensure seamless integration with your existing systems.",
    features: [
      "Vendor evaluation",
      "Solution comparison",
      "Integration planning",
      "Cost analysis",
      "Recommendations"
    ],
    benefits: [
      "Choose right solutions",
      "Avoid costly mistakes",
      "Ensure compatibility",
      "Optimize costs",
      "Faster implementation"
    ],
    useCases: [
      "Companies evaluating AI tools",
      "Businesses needing integration",
      "Organizations comparing vendors",
      "Companies planning tech stack"
    ]
  },
  {
    id: "performance-tracking",
    title: "Performance Tracking & Optimization",
    category: "AI Strategy & Implementation",
    description: "Continuously monitor and optimize your AI implementations. Track performance metrics, identify improvement opportunities, and ensure your AI solutions deliver maximum value over time.",
    features: [
      "Performance dashboards",
      "ROI tracking",
      "Optimization recommendations",
      "Regular reviews",
      "Continuous improvement"
    ],
    benefits: [
      "Maximize AI value",
      "Identify improvements",
      "Measure success",
      "Ensure ROI",
      "Long-term optimization"
    ],
    useCases: [
      "Companies with AI implementations",
      "Businesses wanting to optimize",
      "Organizations measuring success",
      "Companies ensuring ROI"
    ]
  }
];
