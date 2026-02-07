# How to Add Environment Variables in Cloudflare Pages

## Method 1: Through Cloudflare Dashboard (Recommended)

### Step-by-Step Instructions:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Sign in to your account

2. **Navigate to Pages**
   - Click on **"Workers & Pages"** in the left sidebar
   - Click on **"Pages"**
   - Click on your project name (likely "Cost-Saving-AI" or similar)

3. **Find Settings**
   - Look for **"Settings"** tab in the top navigation or left sidebar
   - Click on **"Settings"**

4. **Look for Environment Variables Section**
   - Scroll down in Settings
   - Look for sections like:
     - **"Environment Variables"**
     - **"Builds & deployments"** → then look for **"Environment Variables"**
     - **"Variables"**
     - **"Environment"**

5. **If You Still Can't Find It:**
   - Try clicking on **"Builds & deployments"** first
   - Then look for **"Environment Variables"** within that section
   - Or try **"Functions"** → **"Environment Variables"**

## Method 2: Using Cloudflare API (If Dashboard Doesn't Work)

If you can't find the Environment Variables section in the dashboard, you can use the Cloudflare API:

### Prerequisites:
1. Get your Cloudflare API Token:
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Click **"Create Token"**
   - Use **"Edit Cloudflare Workers"** template
   - Or create custom token with **"Cloudflare Pages:Edit"** permission
   - Copy the token

2. Get your Account ID:
   - Found in Cloudflare Dashboard URL: `https://dash.cloudflare.com/[ACCOUNT_ID]/pages`
   - Or in the right sidebar of your dashboard

3. Get your Project Name:
   - From Cloudflare Pages dashboard (your project name)

### API Call:

Use this curl command (replace placeholders):

```bash
curl -X PATCH "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/pages/projects/{PROJECT_NAME}" \
  -H "Authorization: Bearer {YOUR_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{
    "deployment_configs": {
      "production": {
        "env_vars": {
          "NEXT_PUBLIC_GA_ID": {
            "value": "G-718K2EQ2VM"
          }
        }
      },
      "preview": {
        "env_vars": {
          "NEXT_PUBLIC_GA_ID": {
            "value": "G-718K2EQ2VM"
          }
        }
      }
    }
  }'
```

Or use a tool like Postman or Insomnia to make the API call.

## Method 3: Alternative - Hardcode for Static Sites (Not Recommended)

Since Google Analytics ID is public anyway, you could temporarily hardcode it in the code, but this is not ideal for production.

## Visual Guide Locations:

The Environment Variables section might be located in one of these places:

**Option A:**
```
Settings → Environment Variables
```

**Option B:**
```
Settings → Builds & deployments → Environment Variables
```

**Option C:**
```
Settings → Functions → Environment Variables
```

**Option D:**
```
Settings → Variables
```

## Still Can't Find It?

1. **Check your Cloudflare plan** - Some features might require a paid plan
2. **Try a different browser** - Sometimes UI elements don't load properly
3. **Check if you have the right permissions** - Make sure you're an admin/owner
4. **Contact Cloudflare support** - They can help you locate it

## After Adding the Variable:

1. **Redeploy your site** - Either:
   - Push a new commit to trigger automatic deployment
   - Or manually trigger a deployment from the Deployments tab

2. **Verify it's working:**
   - Check build logs to see if the variable is available
   - Visit your site and check browser console
   - Check Google Analytics Real-Time reports
