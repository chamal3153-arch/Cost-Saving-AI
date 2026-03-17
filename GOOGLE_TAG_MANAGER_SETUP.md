# Google Tag Manager Setup Guide

## Step 1: Create Google Tag Manager Account

1. Go to: https://tagmanager.google.com/
2. Sign in with your Google account
3. Click **"Create Account"**
4. Fill in:
   - **Account Name:** Cost Saver AI (or your company name)
   - **Country:** Your country
   - **Container Name:** costsaverai.com
   - **Target Platform:** Web
5. Click **"Create"**
6. Accept the Terms of Service

## Step 2: Get Your GTM Container ID

After creating the container, you'll see your Container ID in the format: **GTM-XXXXXXX**

Copy this ID - you'll need it for the next step.

## Step 3: Add GTM Container ID to Your Website

### Option A: Environment Variable (Recommended)

1. **In Cloudflare Pages:**
   - Go to: Settings → Variables and Secrets
   - Add new variable:
     - **Name:** `NEXT_PUBLIC_GTM_ID`
     - **Value:** `GTM-XXXXXXX` (your actual GTM ID)
     - **Type:** Plaintext

2. **Locally:**
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
     ```

### Option B: Hardcode (Quick Setup)

If you want to hardcode it temporarily, edit `app/components/GoogleTagManager.tsx`:
```typescript
const GTM_ID = "GTM-XXXXXXX"; // Replace with your actual GTM ID
```

## Step 4: Set Up GA4 Tag in Google Tag Manager

1. **In Google Tag Manager:**
   - Click **"Add a new tag"**
   - Choose **"Google Analytics: GA4 Configuration"**
   - **Measurement ID:** Enter `G-718K2EQ2VM` (your GA4 ID)
   - **Triggering:** Select **"All Pages"**
   - Click **"Save"**

2. **Set Up Consent Mode (Important for Privacy):**
   - Create a new tag: **"Consent Mode"**
   - Configure default consent states:
     - `analytics_storage`: denied
     - `ad_storage`: denied
     - `ad_user_data`: denied
     - `ad_personalization`: denied
   - Set trigger: **"Consent Initialization - All Pages"**

3. **Update Consent Based on CookieYes:**
   - Create a Custom HTML tag that listens to CookieYes consent updates
   - This will update GTM consent mode when users accept cookies

## Step 5: Publish Your Container

1. Click **"Submit"** in the top right
2. Add a version name: "Initial Setup with GA4"
3. Add description: "GA4 integration with consent mode"
4. Click **"Publish"**

## Step 6: Verify It's Working

1. **Install Google Tag Assistant Chrome Extension**
   - Visit: https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk
   - Install the extension

2. **Test Your Site:**
   - Visit your website
   - Click the Tag Assistant icon
   - You should see GTM container loaded
   - You should see GA4 tag firing (after accepting cookies)

3. **Check Google Analytics:**
   - Go to: https://analytics.google.com/
   - Navigate to: Reports → Realtime
   - Visit your site and accept cookies
   - You should see your visit in Real-Time reports

## Current Setup Status

✅ GTM component created and added to layout  
✅ Email capture popup created  
✅ CTAs updated to "Get My Free Audit Now"  
✅ Cloudflare optimization guide created  
✅ robots.txt will be created for AI crawler blocking  

## Next Steps

1. Get your GTM Container ID from Google Tag Manager
2. Add it as environment variable `NEXT_PUBLIC_GTM_ID` in Cloudflare
3. Set up GA4 tag in GTM (as described above)
4. Configure Cloudflare caching and AI crawler blocking (see CLOUDFLARE_OPTIMIZATION_GUIDE.md)
5. Test everything is working

## Troubleshooting

**GTM not loading?**
- Check browser console for errors
- Verify GTM ID is correct
- Make sure environment variable is set in Cloudflare

**GA4 not tracking?**
- Verify GA4 tag is set up in GTM
- Check that consent mode is configured
- Ensure users accept analytics cookies

**Email popup not showing?**
- Clear localStorage: `localStorage.removeItem('email_capture_seen')`
- Check browser console for errors
- Verify popup component is in layout.tsx
