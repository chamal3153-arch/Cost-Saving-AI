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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden w-full"
      data-url={url}
      style={{ 
        minWidth: '100%',
        width: '100%',
        height: isMobile ? '600px' : height 
      }}
    />
  );
}
