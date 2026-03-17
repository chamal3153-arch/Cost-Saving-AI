/**
 * Cloudflare Pages Deploy Command Fix Script
 * 
 * This script removes the deploy command from your Cloudflare Pages project
 * using the Cloudflare API.
 * 
 * Prerequisites:
 * 1. Get your Cloudflare API token from: https://dash.cloudflare.com/profile/api-tokens
 * 2. Create a token with "Cloudflare Pages:Edit" permission
 * 3. Get your Account ID from Cloudflare Dashboard
 * 4. Get your Project Name from Cloudflare Pages
 * 
 * Usage:
 * 1. Install dependencies: npm install node-fetch
 * 2. Set environment variables:
 *    - CLOUDFLARE_API_TOKEN=your_token_here
 *    - CLOUDFLARE_ACCOUNT_ID=your_account_id
 *    - CLOUDFLARE_PROJECT_NAME=your_project_name
 * 3. Run: node fix-cloudflare-deploy.js
 */

// Note: This requires node-fetch or you can use curl/Postman instead
// For security, we'll provide instructions rather than running this directly

console.log(`
To fix the deploy command via Cloudflare API:

1. Get your Cloudflare API Token:
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Create token with "Cloudflare Pages:Edit" permission

2. Get your Account ID:
   - Found in Cloudflare Dashboard URL or right sidebar

3. Get your Project Name:
   - From Cloudflare Pages dashboard

4. Use this API call (replace placeholders):
   
   PATCH https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects/{project_name}
   
   Headers:
   - Authorization: Bearer {your_api_token}
   - Content-Type: application/json
   
   Body:
   {
     "deployment_configs": {
       "production": {
         "env_vars": {}
       },
       "preview": {
         "env_vars": {}
       }
     }
   }

   Note: The deploy_command is removed by not including it in the request.

Alternatively, use the Cloudflare Dashboard (easier):
1. Go to Pages → Your Project → Settings
2. Find "Deploy command" field
3. Clear it completely
4. Save
`);
