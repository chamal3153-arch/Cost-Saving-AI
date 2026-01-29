'use client';

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
  // Pure component - no state, no effects to avoid hydration mismatch
  // Calendly auto-initializes when script loads and finds data-url attributes
  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden w-full"
      data-url={url}
      style={{ 
        minWidth: '100%',
        width: '100%',
        height: height
      }}
    />
  );
}
