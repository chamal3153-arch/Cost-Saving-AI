'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use Intersection Observer to load Calendly only when widget is about to be visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before widget is visible
        threshold: 0.1,
      }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => {
      if (widgetRef.current) {
        observer.unobserve(widgetRef.current);
      }
    };
  }, [isVisible]);

  const handleScriptLoad = () => {
    // Calendly automatically initializes when script loads and finds elements with calendly-inline-widget class
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  return (
    <>
      {/* Preload Calendly script only when widget is about to be visible */}
      {isVisible && (
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={handleScriptLoad}
        />
      )}

      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className="flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300"
          style={{ minWidth, height }}
        >
          <div className="text-center p-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600 font-medium">Loading calendar...</p>
          </div>
        </div>
      )}

      {/* Calendly widget container */}
      <div
        ref={widgetRef}
        className={`calendly-inline-widget rounded-lg overflow-hidden ${isLoaded ? 'block' : 'hidden'}`}
        data-url={url}
        style={{ minWidth, height }}
      />
    </>
  );
}
