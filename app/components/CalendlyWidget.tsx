'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: object;
        utm?: object;
      }) => void;
    };
  }
}

interface CalendlyWidgetProps {
  url: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    initializedRef.current = false;
    setLoaded(false);
    setTimedOut(false);

    const initWidget = () => {
      if (initializedRef.current || !containerRef.current) return;
      if (typeof window.Calendly === 'undefined') return;
      containerRef.current.innerHTML = '';
      initializedRef.current = true;
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
      // Listen for Calendly's own event that fires when the embed is ready
      const onReady = (e: MessageEvent) => {
        if (e.data?.event === 'calendly.profile_page_viewed' ||
            e.data?.event === 'calendly.event_type_viewed') {
          setLoaded(true);
          window.removeEventListener('message', onReady);
        }
      };
      window.addEventListener('message', onReady);
      // Fallback: show after 3s even if event never fires
      setTimeout(() => setLoaded(true), 3000);
    };

    if (typeof window.Calendly !== 'undefined') {
      initWidget();
      return;
    }

    const interval = setInterval(() => {
      if (typeof window.Calendly !== 'undefined') {
        clearInterval(interval);
        initWidget();
      }
    }, 150);

    // 12s hard timeout — show fallback link
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setTimedOut(true);
    }, 12000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [url]);

  // Hard fallback — Calendly script failed to load
  if (timedOut) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-[#0a1628] rounded-xl border border-white/8">
        <span className="text-4xl mb-4">📅</span>
        <p className="text-white font-semibold font-heading mb-2">Booking calendar didn&apos;t load</p>
        <p className="text-slate-400 text-sm mb-6">Open it directly in a new tab — takes 30 seconds.</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-8 py-3"
        >
          Open Booking Page →
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      {/* Skeleton loader — shown until Calendly fires its ready event */}
      {!loaded && (
        <div className="absolute inset-0 z-10 bg-[#0a1628] flex flex-col items-center justify-center gap-4 rounded-xl">
          <div className="w-10 h-10 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
          <p className="text-slate-400 text-sm">Loading booking calendar…</p>
        </div>
      )}
      {/* Responsive height: taller on desktop, compact on mobile */}
      <div
        ref={containerRef}
        className="w-full"
        style={{
          minWidth: '100%',
          height: 'clamp(580px, 80vh, 740px)',
          background: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      />
    </div>
  );
}
