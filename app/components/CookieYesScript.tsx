'use client';

import Script from 'next/script';

export function CookieYesScript() {
  const handleLoad = () => {
    // Initialize GA after CookieYes loads (only if consent given)
    if (typeof window !== 'undefined') {
      // Dynamic import to avoid SSR issues
      import('../lib/analytics').then(({ initGA }) => {
        initGA();
      });
    }
  };

  return (
    <Script
      id="cookieyes"
      strategy="afterInteractive"
      src="https://cdn-cookieyes.com/client_data/9b5ea1f62afd4a811d5a97751438d24f/script.js"
      onLoad={handleLoad}
    />
  );
}
