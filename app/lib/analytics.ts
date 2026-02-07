// app/lib/analytics.ts
// Google Analytics 4 integration with CookieYes consent management
// Full privacy compliance: GDPR, CCPA, PIPEDA, LGPD

// Google Analytics Measurement ID
// You can set this via environment variable NEXT_PUBLIC_GA_ID or it will use the hardcoded value below
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-718K2EQ2VM';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    cookieyes: {
      getConsent: () => ConsentState | null;
      setConsent: (consent: ConsentState) => void;
    };
  }
}

export interface ConsentState {
  necessary: 'yes' | 'no';
  analytics: 'yes' | 'no';
  marketing: 'yes' | 'no';
  timestamp?: number;
  expiry?: number;
}

let gaLoaded = false;

/**
 * Initialize Google Analytics with Consent Mode v2
 * Default state: denied (privacy-first approach)
 * Updates based on cookie consent
 */
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    // Silently skip if GA ID not set (no console warning in production)
    if (process.env.NODE_ENV === 'development') {
      console.warn('GA_MEASUREMENT_ID not set. Analytics disabled.');
    }
    return;
  }

  if (typeof window === 'undefined') return;

  // Initialize Consent Mode v2 with default denied state
  initializeConsentMode();

  // Check if CookieYes is loaded
  if (window.cookieyes) {
    updateConsentMode();
  } else {
    // Wait for CookieYes to load
    window.addEventListener('cookieyes_consent_update', handleConsentUpdate);
    
    // Also check periodically if CookieYes loads
    const checkInterval = setInterval(() => {
      if (window.cookieyes) {
        clearInterval(checkInterval);
        updateConsentMode();
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 5000);
  }
};

/**
 * Initialize Consent Mode v2 with default denied state
 * This ensures GA4 doesn't collect data until consent is given
 */
const initializeConsentMode = () => {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Set default consent state to denied (privacy-first)
  window.dataLayer.push({
    'gtag': {
      'consent': {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'granted', // Always granted for security
        'wait_for_update': 500, // Wait 500ms for consent update
      }
    }
  });

  // Load gtag.js script (but it won't collect data until consent is granted)
  if (!document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.onerror = () => {
      console.error('Failed to load Google Analytics script');
    };
    document.head.appendChild(script1);
  }

  // Initialize gtag function
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  
  // Configure GA4 with privacy-compliant settings
  gtag('config', GA_MEASUREMENT_ID, {
    // IP Anonymization (required for GDPR)
    anonymize_ip: true,
    
    // Disable Google Signals (privacy-first)
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    
    // Disable User ID (privacy-first)
    user_id: null,
    
    // Data retention: 14 months (configured in GA4 admin, but documented here)
    // retention: 14, // This is set in GA4 admin, not in code
    
    // Custom dimensions (non-PII only)
    custom_map: {
      // Example: track page type without personal data
      // 'page_type': 'page_type',
      // 'content_category': 'content_category',
    },
    
    // Exclude internal traffic (configured via IP filters in GA4 admin)
    // This is handled in GA4 admin settings, not in code
    
    // Bot filtering (enabled in GA4 admin)
    // This is handled in GA4 admin settings, not in code
  });

  gaLoaded = true;
  console.log('Google Analytics 4 initialized with Consent Mode v2 (default: denied).');
};

/**
 * Handle consent updates from CookieYes
 */
const handleConsentUpdate = () => {
  if (typeof window === 'undefined' || !window.cookieyes) return;
  updateConsentMode();
};

/**
 * Update Consent Mode based on CookieYes consent state
 */
const updateConsentMode = () => {
  if (typeof window === 'undefined' || !window.cookieyes || !window.gtag) return;
  
  const consent = window.cookieyes.getConsent();
  
  if (!consent) {
    // No consent yet, keep default denied state
    return;
  }

  // Map CookieYes consent to GA4 Consent Mode
  const consentMode = {
    'ad_storage': consent.marketing === 'yes' ? 'granted' : 'denied',
    'ad_user_data': consent.marketing === 'yes' ? 'granted' : 'denied',
    'ad_personalization': consent.marketing === 'yes' ? 'granted' : 'denied',
    'analytics_storage': consent.analytics === 'yes' ? 'granted' : 'denied',
    'functionality_storage': consent.necessary === 'yes' ? 'granted' : 'denied',
    'personalization_storage': consent.marketing === 'yes' ? 'granted' : 'denied',
    'security_storage': 'granted', // Always granted
  };

  // Update consent state
  window.gtag('consent', 'update', consentMode);

  if (consent.analytics === 'yes') {
    console.log('Analytics consent granted. GA4 tracking enabled.');
  } else {
    console.log('Analytics consent denied. GA4 tracking disabled.');
  }
};

/**
 * Track page views (only if analytics consent is given)
 * Automatically anonymizes any potential PII in URLs
 */
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const consent = window.cookieyes?.getConsent();
  if (consent && consent.analytics === 'yes') {
    // Sanitize URL to remove any potential PII
    const sanitizedUrl = sanitizeUrl(url);
    
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: sanitizedUrl,
      // Ensure privacy settings are maintained
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }
};

/**
 * Track custom events (only if analytics consent is given)
 * Automatically removes PII from event parameters
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const consent = window.cookieyes?.getConsent();
  if (consent && consent.analytics === 'yes') {
    // Sanitize event parameters to remove PII
    const sanitizedParams = sanitizeEventParams(eventParams || {});
    
    window.gtag('event', eventName, sanitizedParams);
  }
};

/**
 * Sanitize URL to remove potential PII
 * Removes email addresses, phone numbers, and other identifiers
 */
const sanitizeUrl = (url: string): string => {
  let sanitized = url;
  
  // Remove email addresses
  sanitized = sanitized.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[email]');
  
  // Remove phone numbers
  sanitized = sanitized.replace(/[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}/g, '[phone]');
  
  // Remove potential user IDs (long numeric strings)
  sanitized = sanitized.replace(/\/[0-9]{8,}\//g, '/[id]/');
  
  return sanitized;
};

/**
 * Sanitize event parameters to remove PII
 * Removes email, phone, name, address, and other personal identifiers
 */
const sanitizeEventParams = (params: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};
  const piiPatterns = [
    /email/i,
    /phone/i,
    /name/i,
    /address/i,
    /ssn/i,
    /social.*security/i,
    /credit.*card/i,
    /password/i,
    /username/i,
    /user.*id/i,
  ];

  for (const [key, value] of Object.entries(params)) {
    // Skip if key suggests PII
    const isPII = piiPatterns.some(pattern => pattern.test(key));
    
    if (isPII) {
      // Replace with generic identifier
      sanitized[key] = '[redacted]';
    } else if (typeof value === 'string') {
      // Check if value contains email or phone
      if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value)) {
        sanitized[key] = '[email]';
      } else if (/[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}/.test(value)) {
        sanitized[key] = '[phone]';
      } else {
        sanitized[key] = value;
      }
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
};

/**
 * Set custom dimensions (non-PII only)
 * Use this for tracking business metrics without personal data
 */
export const setCustomDimension = (dimensionName: string, value: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const consent = window.cookieyes?.getConsent();
  if (consent && consent.analytics === 'yes') {
    // Ensure value doesn't contain PII
    const sanitizedValue = sanitizeEventParams({ value }).value;
    
    window.gtag('set', {
      [dimensionName]: sanitizedValue,
    });
  }
};
