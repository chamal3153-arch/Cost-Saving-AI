# Cloudflare Pages Setup Guide

## ✅ Proper Build Configuration

This guide provides the correct build settings for deploying a Next.js static export to Cloudflare Pages.

## Step-by-Step Configuration

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to: **Workers & Pages** → **Pages** → Your Project Name

2. **Open Project Settings**
   - Click on **Settings** in the left sidebar
   - Scroll down to **Builds & deployments** section

3. **Configure Build Settings**
   Set these exact values:
   - **Framework preset:** `Next.js (Static HTML Export)` or leave as "None"
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (leave empty)
   - **Node version:** `18` or higher (select from dropdown)
   - **Deploy command:** (LEAVE COMPLETELY EMPTY - do not enter anything)

4. **Save Changes**
   - Click **Save** or **Save and Deploy**

5. **Save Changes**
   - Click **Save** or **Save and Deploy**

6. **Trigger a New Deployment**
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest failed deployment
   - Or push a new commit to trigger a fresh deployment

## Why No Deploy Command?

- **Cloudflare Pages** automatically deploys static files after the build completes
- Pages reads from the build output directory (`out`) and serves it directly
- `wrangler deploy` is for **Cloudflare Workers** (serverless functions), NOT for Pages
- Static sites on Pages do NOT need a deploy command

## Expected Behavior

Once configured correctly:
1. ✅ Build runs: `npm run build`
2. ✅ Next.js generates static files in `out` directory
3. ✅ Cloudflare Pages automatically detects and deploys the `out` directory
4. ✅ Site goes live without errors

## Build Process

Your `package.json` has the correct build script:
```json
"build": "next build"
```

This runs Next.js build which:
- Compiles your Next.js app
- Generates static HTML files
- Outputs everything to the `out` directory (configured in `next.config.ts`)

## Troubleshooting

If you still see issues:
- Make sure the **Build output directory** is set to `out` (not `dist` or `.next`)
- Verify **Node version** is 18 or higher
- Check that all environment variables are set correctly
- Review build logs for any errors
