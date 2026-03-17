'use client';

import { useEffect, useRef } from 'react';

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
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({ url, height = '700px' }: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    initializedRef.current = false;

    const initWidget = () => {
      if (initializedRef.current || !containerRef.current) return;
      if (typeof window.Calendly === 'undefined') return;

      // Clear any previous embed
      containerRef.current.innerHTML = '';
      initializedRef.current = true;

      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    };

    // Already loaded — init immediately
    if (typeof window.Calendly !== 'undefined') {
      initWidget();
      return;
    }

    // Script still loading — poll until ready (max 15s)
    const interval = setInterval(() => {
      if (typeof window.Calendly !== 'undefined') {
        clearInterval(interval);
        initWidget();
      }
    }, 150);

    const timeout = setTimeout(() => clearInterval(interval), 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: '100%', width: '100%', height }}
      className="rounded-xl overflow-hidden w-full bg-white"
    />
  );
}
