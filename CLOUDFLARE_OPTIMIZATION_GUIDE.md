# Cloudflare Optimization Guide

## Task 4: Optimize Browser Cache TTL

### Step-by-Step Instructions:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Sign in to your account

2. **Select Your Domain**
   - Click on your domain name (costsaverai.com)

3. **Navigate to Caching**
   - In the left sidebar, click **"Caching"**
   - Or go to: **"Speed"** → **"Caching"**

4. **Configure Browser Cache TTL**
   - Scroll down to **"Browser Cache TTL"** section
   - Click on the dropdown (currently might be set to "Respect Existing Headers" or "2 hours")
   - Select: **"4 hours"** or **"8 hours"** (recommended: **"4 hours"** for better balance)
   - For maximum performance, you can select **"1 month"** but this means users won't see updates immediately

5. **Save Changes**
   - Changes are saved automatically

### Recommended Settings:
- **Browser Cache TTL:** 4 hours (good balance between performance and freshness)
- **Edge Cache TTL:** Respect Existing Headers (or set to 2 hours)

### What This Does:
- Increases how long browsers cache your static assets (images, CSS, JS)
- Reduces server requests and improves page load times
- Better user experience, especially for returning visitors

---

## Task 5: Block AI Crawlers

### Step-by-Step Instructions:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Sign in to your account

2. **Select Your Domain**
   - Click on your domain name (costsaverai.com)

3. **Navigate to Security**
   - In the left sidebar, click **"Security"**
   - Then click **"WAF"** (Web Application Firewall)

4. **Create a WAF Rule to Block AI Crawlers**

   **Option A: Using WAF Custom Rules (Recommended)**
   
   - Scroll down to **"Custom rules"**
   - Click **"Create rule"**
   - **Rule name:** "Block AI Crawlers"
   - **When incoming requests match:**
     - Field: `http.user_agent`
     - Operator: `contains`
     - Value: `GPTBot` (or use regex for multiple bots)
   - **Then:** Select `Block`
   - Click **"Deploy"**

   **Common AI Crawler User Agents to Block:**
   ```
   GPTBot
   ChatGPT-User
   CCBot
   anthropic-ai
   Claude-Web
   Google-Extended
   PerplexityBot
   YouBot
   ```

   **For Multiple Bots (Regex):**
   ```
   (GPTBot|ChatGPT-User|CCBot|anthropic-ai|Claude-Web|Google-Extended|PerplexityBot|YouBot)
   ```

   **Option B: Using robots.txt (Simpler)**
   
   - Go to your website root
   - Create/edit `public/robots.txt` file
   - Add these lines:
   ```
   User-agent: GPTBot
   Disallow: /
   
   User-agent: ChatGPT-User
   Disallow: /
   
   User-agent: CCBot
   Disallow: /
   
   User-agent: anthropic-ai
   Disallow: /
   
   User-agent: Claude-Web
   Disallow: /
   
   User-agent: Google-Extended
   Disallow: /
   
   User-agent: PerplexityBot
   Disallow: /
   
   User-agent: YouBot
   Disallow: /
   ```

5. **Verify Blocking**
   - After setting up, test by checking your server logs
   - AI crawlers should receive 403 Forbidden responses

### What This Does:
- Prevents AI companies from scraping your content for training
- Protects your intellectual property
- Reduces server load from AI crawlers
- Note: Some crawlers may still access if they ignore robots.txt, but WAF rules will block them

---

## Additional Cloudflare Optimizations (Optional)

### 1. Enable Auto Minify
- **Location:** Speed → Optimization → Auto Minify
- Enable: ✅ JavaScript, ✅ CSS, ✅ HTML
- **Benefit:** Reduces file sizes, faster loading

### 2. Enable Brotli Compression
- **Location:** Speed → Optimization → Compression
- Enable: ✅ Brotli
- **Benefit:** Better compression than gzip, smaller files

### 3. Enable HTTP/2 and HTTP/3
- **Location:** Network → Protocols
- Enable: ✅ HTTP/2, ✅ HTTP/3 (with QUIC)
- **Benefit:** Faster, more efficient connections

### 4. Enable Always Use HTTPS
- **Location:** SSL/TLS → Overview
- Set: **"Full"** or **"Full (strict)"**
- **Benefit:** Ensures all traffic is encrypted

---

## Quick Reference

**Cache TTL Settings:**
- 2 hours = More frequent updates, slower for returning users
- 4 hours = Balanced (Recommended)
- 8 hours = Better performance, less frequent updates
- 1 month = Maximum performance, users won't see updates immediately

**AI Crawler Blocking:**
- WAF Rules = More effective, blocks at edge
- robots.txt = Simpler, but crawlers can ignore it
- Best: Use both methods

---

## Need Help?

If you can't find these settings:
1. Check your Cloudflare plan (some features require paid plans)
2. Contact Cloudflare support
3. Check Cloudflare documentation: https://developers.cloudflare.com/
