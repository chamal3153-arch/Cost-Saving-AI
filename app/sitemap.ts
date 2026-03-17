import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://costsaverai.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/services`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/pricing`,             lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/contact`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/case-studies`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/audit-quiz`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/about`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE}/newsletter`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/ai-consulting`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/privacy`,             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.20 },
    { url: `${BASE}/terms`,               lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.20 },
    { url: `${BASE}/cookies`,             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.20 },
  ]
}
