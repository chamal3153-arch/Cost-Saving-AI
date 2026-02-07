# Google Analytics Setup Guide

## Your Google Analytics Measurement ID
**G-718K2EQ2VM**

## Step 1: Local Development Setup

Create a file named `.env.local` in the project root directory with the following content:

```
NEXT_PUBLIC_GA_ID=G-718K2EQ2VM
```

**Important:** The `.env.local` file is already in `.gitignore`, so it won't be committed to GitHub.

## Step 2: Cloudflare Pages Setup

1. Go to your Cloudflare Pages dashboard: https://dash.cloudflare.com/
2. Select your project: **Cost-Saving-AI**
3. Navigate to: **Settings** → **Environment Variables**
4. Click **Add variable**
5. Add the following:
   - **Variable name:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-718K2EQ2VM`
   - **Environment:** Select **Production** (and **Preview** if you want it in preview deployments too)
6. Click **Save**
7. **Redeploy** your site (or wait for the next automatic deployment)

## Step 3: Verify It's Working

After deployment:

1. Visit your website
2. Open browser console (F12)
3. Accept analytics cookies in the cookie banner
4. You should see: "Google Analytics 4 initialized with Consent Mode v2"
5. Check Google Analytics Real-Time reports: https://analytics.google.com/

## Features Already Configured

✅ Google Analytics 4 with Consent Mode v2  
✅ Cookie consent integration (CookieYes)  
✅ Privacy-compliant (GDPR, CCPA, PIPEDA, LGPD)  
✅ Automatic page view tracking  
✅ PII sanitization  
✅ IP anonymization  

## Troubleshooting

- **Not seeing data?** Make sure you've accepted analytics cookies
- **Still not working?** Check browser console for errors
- **Environment variable not working?** Make sure you redeployed after adding it in Cloudflare
