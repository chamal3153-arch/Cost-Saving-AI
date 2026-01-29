'use client';

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({ 
  url, 
  minWidth = '320px', 
  height = '700px' 
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Ensure Calendly is initialized when component mounts
    // Script is already loaded in layout head, so widget should appear instantly
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      // Calendly auto-initializes when it finds elements with calendly-inline-widget class
      // No manual initialization needed
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden"
      data-url={url}
      style={{ minWidth, height }}
    />
  );
}
