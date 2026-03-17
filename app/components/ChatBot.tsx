'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface QuickReply {
  label: string;
  value: string;
}

// Bot knowledge base
const BOT_RESPONSES: Record<string, { text: string; quickReplies?: QuickReply[] }> = {
  greeting: {
    text: "Hey there 👋 I'm **Aria**, Cost Saver AI's assistant. I can help you understand what we do, estimate your ROI, or connect you with the team.\n\nWhat can I help with?",
    quickReplies: [
      { label: '💰 See pricing', value: 'pricing' },
      { label: '⏱ How long does it take?', value: 'timeline' },
      { label: '🤔 What do you build?', value: 'services' },
      { label: '📞 Book a call', value: 'book' },
    ],
  },
  pricing: {
    text: "Our projects are **fixed-price** — no retainers, no surprises.\n\n• **Starter** — $400–$1,500 (3–7 days)\n• **Growth** — $1,500–$4,500 (1–3 weeks)\n• **Enterprise** — $4,500–$10,000+ (2–6 weeks)\n\nYou own the system outright after delivery.",
    quickReplies: [
      { label: '📋 See full pricing page', value: 'pricing_page' },
      { label: '📞 Get a custom quote', value: 'book' },
      { label: '🏆 See case studies', value: 'case_studies' },
    ],
  },
  timeline: {
    text: "Speed is one of our key strengths ⚡\n\n• Simple automations: **3–7 days**\n• Multi-tool workflows: **1–3 weeks**\n• Complex AI systems: **2–6 weeks**\n\nWe give you a precise delivery date in the quote — and we stick to it.",
    quickReplies: [
      { label: '💰 What does it cost?', value: 'pricing' },
      { label: '📞 Book a free audit', value: 'book' },
    ],
  },
  services: {
    text: "We build **done-for-you AI automation systems** — no SaaS subscriptions, no generic tools. Real custom-built systems:\n\n🤖 AI Chatbots & Assistants\n📊 Custom Business Dashboards\n🔄 Workflow Automation\n📄 Document & Invoice Processing\n📱 Social Media Automation\n🧠 AI Strategy & Roadmaps",
    quickReplies: [
      { label: '📋 Full services list', value: 'services_page' },
      { label: '🏆 Real case studies', value: 'case_studies' },
      { label: '📞 Book a free audit', value: 'book' },
    ],
  },
  case_studies: {
    text: "We've delivered real results for real businesses:\n\n**Building Materials Wholesaler (AU)** — Saved $3,800/month on invoice processing. Project cost: $2,800. ROI in 22 days.\n\n**Multi-Location Dental Group (UK)** — 74% fewer admin calls. Project cost: $3,500. Live in 14 days.\n\nClient names withheld per NDA.",
    quickReplies: [
      { label: '📋 Full case studies', value: 'case_studies_page' },
      { label: '💰 What would it cost for me?', value: 'book' },
    ],
  },
  technical: {
    text: "Zero technical knowledge needed — that's the whole point 😊\n\nWe handle everything end-to-end:\n✅ Build & configure\n✅ Test & quality check\n✅ Deploy to your environment\n✅ Train your team\n✅ Full documentation\n\nYou just use the result.",
    quickReplies: [
      { label: '📞 Book a free audit', value: 'book' },
      { label: '💰 See pricing', value: 'pricing' },
    ],
  },
  tools: {
    text: "We work with **100+ platforms** — if you're using it, we can likely connect to it:\n\n⚡ Zapier · Make · n8n\n📊 Xero · QuickBooks · Airtable\n🤝 HubSpot · Salesforce · Pipedrive\n🤖 OpenAI · Claude · Gemini\n💬 Slack · Teams · Gmail\n\nDon't see your tool? Just ask.",
    quickReplies: [
      { label: '📞 Ask about my stack', value: 'book' },
      { label: '🤔 What do you build?', value: 'services' },
    ],
  },
  book: {
    text: "Great choice! 🎯 A free 30-minute audit is the best first step — we'll map your workflows, find the highest-ROI automation, and send you a fixed quote.\n\nClick below to book directly in Chamal's calendar:",
    quickReplies: [
      { label: '📅 Open Calendly →', value: 'open_calendly' },
      { label: '📧 Send us a message', value: 'open_email' },
    ],
  },
  email: {
    text: "Happy to help! Fill in the form below and we'll get back to you within one business day 👇",
    quickReplies: [],
  },
  fallback: {
    text: "Good question — that's best answered by Chamal directly 👋\n\nSend us a message below and we'll reply within one business day:",
    quickReplies: [],
  },
  pricing_page: { text: '' },
  services_page: { text: '' },
  case_studies_page: { text: '' },
  open_calendly: { text: '' },
  open_email: { text: '' },
};

// Keyword intent matching
function detectIntent(input: string): string {
  const t = input.toLowerCase();
  if (/price|cost|how much|fee|charge|expensive|afford|budget|\$/.test(t)) return 'pricing';
  if (/long|time|fast|quick|days|weeks|deadline|deliver|when/.test(t)) return 'timeline';
  if (/what|build|make|create|do|service|offer|automate/.test(t)) return 'services';
  if (/case|example|result|proof|client|customer|success/.test(t)) return 'case_studies';
  if (/technical|code|developer|programming|skill|knowledge/.test(t)) return 'technical';
  if (/tool|software|zapier|make|xero|hubspot|airtable|slack|openai|integrate/.test(t)) return 'tools';
  if (/book|call|meeting|chat|speak|calendly|schedule|audit/.test(t)) return 'book';
  if (/email|message|contact|reach|write|send/.test(t)) return 'email';
  if (/hello|hi|hey|start|help/.test(t)) return 'greeting';
  return 'fallback';
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

const TYPING_DELAY = 900;

// ── Inline contact form rendered inside the chat ──────────────────────────────
function InlineContactForm({ prefillMessage }: { prefillMessage?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(prefillMessage || '');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xbdyonwb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name || 'Website chat visitor',
          email,
          message: `[Via Aria chatbot]\n\n${message}`,
          source: 'Aria chatbot',
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-4 text-center">
        <p className="text-emerald-400 font-semibold text-sm mb-1">Message sent! ✅</p>
        <p className="text-slate-400 text-xs">We'll reply to {email} within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0d1b2e] border border-white/8 rounded-xl p-4 space-y-3">
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors"
      />
      <input
        type="email"
        placeholder="Your email *"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors"
      />
      <textarea
        placeholder="Your message *"
        required
        rows={3}
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors resize-none"
      />
      {status === 'error' && (
        <p className="text-red-400 text-xs">Something went wrong — try emailing costsaverai@proton.me directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending' || !email || !message}
        className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [showFormAfterMsgId, setShowFormAfterMsgId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const addBotMessage = useCallback((text: string, quickReplies?: QuickReply[], showForm?: boolean) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const msgId = Date.now().toString();
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'bot',
        text,
        timestamp: new Date(),
      }]);
      if (quickReplies?.length) {
        setMessages(prev => [...prev, {
          id: msgId + '_qr',
          role: 'bot',
          text: `__quickreplies__${JSON.stringify(quickReplies)}`,
          timestamp: new Date(),
        }]);
      }
      if (showForm) {
        setShowFormAfterMsgId(msgId);
      }
    }, TYPING_DELAY);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    if (!hasOpened) {
      setHasOpened(true);
      const { text, quickReplies } = BOT_RESPONSES.greeting;
      setTimeout(() => addBotMessage(text, quickReplies), 300);
    }
  };

  const handleQuickReply = (value: string) => {
    if (value === 'open_calendly') {
      window.open('https://calendly.com/chamal-3153/30min', '_blank');
      return;
    }
    if (value === 'open_email') {
      addBotMessage(
        "Fill in your details below and we'll get back to you within one business day 👇",
        [],
        true
      );
      return;
    }
    if (value === 'pricing_page') { window.location.href = '/pricing'; return; }
    if (value === 'services_page') { window.location.href = '/services'; return; }
    if (value === 'case_studies_page') { window.location.href = '/case-studies'; return; }

    const response = BOT_RESPONSES[value] || BOT_RESPONSES.fallback;
    if (response.text) {
      const showForm = value === 'email' || value === 'fallback';
      addBotMessage(response.text, response.quickReplies, showForm);
    }
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    setUserQuestion(text);
    setInputValue('');

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date(),
    }]);

    const intent = detectIntent(text);
    const response = BOT_RESPONSES[intent] || BOT_RESPONSES.fallback;
    const showForm = intent === 'fallback' || intent === 'email';
    addBotMessage(response.text, response.quickReplies, showForm);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-[90] w-[calc(100vw-2rem)] sm:w-[380px] flex flex-col"
          style={{ maxHeight: 'calc(100vh - 140px)' }}
        >
          <div
            className="flex flex-col h-full bg-[#050d1a] border border-blue-500/20 rounded-2xl shadow-2xl overflow-hidden"
            style={{ boxShadow: '0 0 0 1px rgba(59,130,246,0.1), 0 25px 50px rgba(0,0,0,0.6)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-[#0a1628] to-[#0d1b2e] border-b border-blue-500/15 flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm font-heading shadow-lg">
                  A
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#0a1628] rounded-full" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm font-heading leading-none">Aria</p>
                <p className="text-emerald-400 text-xs mt-0.5">Cost Saver AI · Online</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-white/5"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[280px] max-h-[420px]">
              {messages.map((msg) => {
                if (msg.role === 'bot' && msg.text.startsWith('__quickreplies__')) {
                  const qrs: QuickReply[] = JSON.parse(msg.text.replace('__quickreplies__', ''));
                  return (
                    <div key={msg.id} className="flex flex-wrap gap-2">
                      {qrs.map((qr) => (
                        <button
                          key={qr.value}
                          onClick={() => handleQuickReply(qr.value)}
                          className="text-xs px-3 py-1.5 rounded-full border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400/50 hover:text-blue-200 transition-all font-heading"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  );
                }

                if (msg.role === 'bot') {
                  return (
                    <div key={msg.id}>
                      <div className="flex items-end gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mb-0.5">
                          A
                        </div>
                        <div className="bg-[#0d1b2e] border border-white/8 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[80%]">
                          <p
                            className="text-slate-300 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }}
                          />
                        </div>
                      </div>
                      {/* Inline form rendered directly after the triggering message */}
                      {showFormAfterMsgId === msg.id && (
                        <div className="mt-3 ml-8">
                          <InlineContactForm prefillMessage={userQuestion} />
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={msg.id} className="flex justify-end">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]">
                      <p className="text-white text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    A
                  </div>
                  <div className="bg-[#0d1b2e] border border-white/8 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/6 bg-[#0a1628] flex-shrink-0">
              <div className="flex items-center gap-2 bg-[#0d1b2e] border border-white/10 rounded-xl px-3 py-2.5 focus-within:border-blue-500/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-slate-300 text-sm placeholder-slate-600 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 disabled:opacity-30 hover:from-blue-500 hover:to-cyan-500 transition-all"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-slate-700 text-[10px] text-center mt-1.5">Aria · AI assistant for Cost Saver AI</p>
            </div>
          </div>
        </div>
      )}

      {/* Attention bubble */}
      {showBubble && !isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-[89] bg-[#0a1628] border border-blue-500/30 rounded-2xl rounded-br-sm px-4 py-3 shadow-xl cursor-pointer max-w-[220px]"
          onClick={handleOpen}
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
        >
          <p className="text-white text-sm font-semibold font-heading mb-0.5">Got a question? 👋</p>
          <p className="text-slate-400 text-xs">I can estimate your ROI in 2 minutes</p>
          <div className="absolute -bottom-2 right-5 w-3 h-3 bg-[#0a1628] border-r border-b border-blue-500/30 rotate-45" />
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        className="fixed bottom-5 right-4 sm:right-6 z-[90] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
          boxShadow: '0 4px 24px rgba(37,99,235,0.5), 0 0 0 1px rgba(59,130,246,0.2)',
        }}
        aria-label="Chat with Aria"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {!isOpen && !hasOpened && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-blue-400" />
        )}
      </button>
    </>
  );
}
