# Cloudflare Pages Setup Guide

## ⚠️ IMPORTANT: Remove Deploy Command

Your Cloudflare Pages project is currently configured with a deploy command (`npx wrangler deploy`), which is causing deployment failures. **This must be removed** because Cloudflare Pages automatically deploys static sites after the build completes.

## Step-by-Step Fix

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to: **Pages** → Your Project Name

2. **Open Project Settings**
   - Click on **Settings** in the left sidebar
   - Scroll down to **Builds & deployments** section

3. **Remove the Deploy Command**
   - Find the **"Deploy command"** field
   - **Delete/clear everything** in this field (leave it completely empty)
   - **DO NOT** enter any command here

4. **Verify Build Settings**
   Make sure these settings are correct:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (leave empty or set to `/`)
   - **Deploy command:** (MUST BE EMPTY)

5. **Save Changes**
   - Click **Save** or **Save and Deploy**

6. **Trigger a New Deployment**
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest failed deployment
   - Or push a new commit to trigger a fresh deployment

## Why This Happens

- `wrangler deploy` is for **Cloudflare Workers** (serverless functions)
- **Cloudflare Pages** automatically deploys static files after the build
- Pages reads from the build output directory (`out`) and serves it directly
- No deploy command is needed for static sites

## Expected Behavior After Fix

Once the deploy command is removed:
1. ✅ Build runs: `npm run build`
2. ✅ Build completes successfully
3. ✅ Pages automatically deploys the `out` directory
4. ✅ Site goes live without errors

## Troubleshooting

If you still see issues:
- Make sure the **Build output directory** is set to `out` (not `dist` or `.next`)
- Verify **Node version** is 18 or higher
- Check that all environment variables are set correctly
- Review build logs for any errors
