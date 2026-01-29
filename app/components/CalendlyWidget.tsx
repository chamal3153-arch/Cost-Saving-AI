'use client';

import Script from 'next/script';

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
  return (
    <>
      {/* Load Calendly script immediately for instant loading */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="beforeInteractive"
      />
      
      {/* Calendly widget container - loads instantly */}
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden"
        data-url={url}
        style={{ minWidth, height }}
      />
    </>
  );
}
