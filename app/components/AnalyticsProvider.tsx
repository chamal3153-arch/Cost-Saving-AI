'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '../lib/analytics';

/**
 * Client component that tracks page views in GA4
 * Only tracks if user has consented to Analytics cookies
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      // Small delay to ensure CookieYes consent is checked
      const timer = setTimeout(() => {
        trackPageView(pathname);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
