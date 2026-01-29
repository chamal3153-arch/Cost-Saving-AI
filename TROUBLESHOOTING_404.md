# 🔍 Troubleshooting 404 Error on Cloudflare Pages

## Problem
Getting `HTTP ERROR 404` on `https://cost-saving-ai.pages.dev/`

## Quick Checks

### 1. Check Deployment Status
1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click on **Deployments** tab
3. Check the latest deployment:
   - ✅ **Success (green)** = Deployment completed
   - ❌ **Failed (red)** = Check build logs
   - ⏳ **In Progress** = Wait for it to finish

### 2. Verify Build Output Directory
In **Settings → Builds & deployments**, make sure:
- **Build output directory:** `out` (exactly this, not `/out` or `./out`)

### 3. Check Build Logs
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check the build logs:
   - Look for: `✓ Generating static pages`
   - Look for: `Route (app)` section showing all your pages
   - Look for any errors

### 4. Verify Files Were Built
In the build logs, you should see:
```
Route (app)
┌ ○ /
├ ○ /about
├ ○ /contact
...
```

And the build should complete successfully.

## Common Issues & Fixes

### Issue 1: Build Output Directory Wrong
**Symptom:** Build succeeds but site shows 404

**Fix:**
- Go to Settings → Builds & deployments
- Set **Build output directory** to: `out` (exactly, no slashes)
- Save and redeploy

### Issue 2: Deployment Failed
**Symptom:** Red X on deployment

**Fix:**
- Check build logs for errors
- Common errors:
  - Missing dependencies → Check `package.json`
  - Build command wrong → Should be `npm run build`
  - Node version too old → Set to Node 18+

### Issue 3: Deployment Still Processing
**Symptom:** Deployment shows "In Progress"

**Fix:**
- Wait 2-5 minutes for deployment to complete
- Refresh the page after deployment shows "Success"

### Issue 4: Wrong Project Name
**Symptom:** Can't find the site

**Fix:**
- Check your project name in Cloudflare Pages
- The URL should be: `https://[your-project-name].pages.dev`
- Make sure you're using the correct project name

## Step-by-Step Fix

1. **Go to Cloudflare Dashboard**
   - Workers & Pages → Pages → Your Project

2. **Check Latest Deployment**
   - Click **Deployments** tab
   - Is it successful? If not, check logs

3. **Verify Settings**
   - Click **Settings** → **Builds & deployments**
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Deploy command:** (empty)
   - **Version command:** (empty)
   - **Root directory:** (empty)

4. **Trigger New Deployment**
   - If settings are wrong, fix them and save
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest one
   - OR push a new commit to trigger deployment

5. **Wait for Deployment**
   - Wait 2-5 minutes
   - Check deployment status
   - When it shows "Success", try accessing the site

## Still Not Working?

1. **Check if `index.html` exists in build**
   - In deployment logs, look for: `out/index.html`
   - If missing, the build didn't complete properly

2. **Check Cloudflare Pages URL**
   - Make sure you're using: `https://cost-saving-ai.pages.dev`
   - Not: `https://www.cost-saving-ai.pages.dev` (no www)

3. **Clear Browser Cache**
   - Try incognito/private browsing mode
   - Or clear browser cache

4. **Check Custom Domain (if you have one)**
   - If you set up a custom domain, make sure DNS is configured correctly
   - The `.pages.dev` URL should always work

## Expected Build Output

Your build should create these files in the `out` directory:
- `index.html` (homepage)
- `about.html`
- `contact.html`
- `404.html` (error page)
- `_next/` folder (assets)
- Other static files

If these files exist, Cloudflare Pages should serve them automatically.
