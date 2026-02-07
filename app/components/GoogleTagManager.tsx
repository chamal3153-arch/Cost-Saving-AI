"use client";

import { useEffect } from "react";
import Script from "next/script";

// Google Tag Manager Container ID
// Get this from: https://tagmanager.google.com/
// Format: GTM-XXXXXXX
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function GoogleTagManager() {
  useEffect(() => {
    if (GTM_ID && typeof window !== "undefined") {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    }
  }, []);

  if (!GTM_ID) {
    // Silently skip if GTM ID not set
    if (process.env.NODE_ENV === "development") {
      console.warn("GTM_ID not set. Google Tag Manager disabled.");
    }
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}
