'use client';

import { useEffect, useState } from 'react';

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use CSS media query instead of JS to avoid hydration mismatch
  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden w-full"
      data-url={url}
      style={{ 
        minWidth: '100%',
        width: '100%',
        height: mounted ? undefined : height
      }}
      data-height={height}
    />
  );
}
