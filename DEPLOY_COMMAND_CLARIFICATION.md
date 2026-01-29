# ⚠️ IMPORTANT: Deploy Command Clarification

## DO NOT Enter "deploy" as the Deploy Command

**"deploy" is NOT a valid command.** It will cause your deployment to fail.

## Correct Configuration

### For Cloudflare Pages Static Sites:

**Deploy Command Field:** 
- **LEAVE IT COMPLETELY EMPTY** (blank/empty)
- Do NOT type anything
- Do NOT type "deploy"
- Do NOT type any command

### Why?

Cloudflare Pages **automatically deploys** your static site after the build completes. You don't need to tell it to deploy - it does it automatically.

## What Happens:

1. **Build runs:** `npm run build` creates files in `out` directory
2. **Cloudflare automatically detects:** The `out` directory
3. **Cloudflare automatically deploys:** Your site goes live
4. **No deploy command needed:** Pages handles it automatically

## If the Field Requires Something:

If Cloudflare's UI absolutely won't let you leave it empty (rare), you can try:
- Leave it as the default value (if there is one)
- Contact Cloudflare support
- But DO NOT enter "deploy" - that's not a valid command

## Summary

✅ **Correct:** Deploy command field = EMPTY/BLANK  
❌ **Wrong:** Deploy command field = "deploy"  
❌ **Wrong:** Deploy command field = "npx wrangler deploy"  
❌ **Wrong:** Deploy command field = any command

**Just leave it empty!**
