This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is configured for deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

### Deployment Steps

1. **Connect your repository to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click "Create a project" and connect your Git repository

2. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 18 or higher
   - **⚠️ IMPORTANT:** Leave the "Deploy command" field **EMPTY** - Cloudflare Pages automatically deploys after the build completes

3. **Environment variables:**
   - Add any required environment variables in the Cloudflare Pages dashboard
   - For example: `NEXT_PUBLIC_GA_ID` (if using Google Analytics)

4. **Deploy:**
   - Cloudflare Pages will automatically build and deploy on every push to your main branch
   - Preview deployments are created for pull requests

### Local Development

Run the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

This creates a static export in the `out` directory, which is ready for deployment on Cloudflare Pages.
