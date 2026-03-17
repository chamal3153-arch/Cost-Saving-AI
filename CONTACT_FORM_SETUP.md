# Contact Form Setup Guide

## ✅ What We've Done

I've replaced the Google Forms link with a proper embedded contact form that:
- ✅ Looks professional and matches your site design
- ✅ Works seamlessly on your static site
- ✅ Doesn't require users to leave your page
- ✅ Has proper validation and error handling

## 🔧 Setup Instructions

### Option 1: Formspree (Recommended - Easiest)

1. **Create a free account:**
   - Go to: https://formspree.io/
   - Sign up (free tier: 50 submissions/month)

2. **Create a new form:**
   - Click "New Form"
   - Name it (e.g., "Contact Form")
   - Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update the code:**
   - Open `app/components/ContactForm.tsx`
   - Find line with: `https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your actual form ID

4. **Done!** Form submissions will be emailed to you.

### Option 2: Web3Forms (Free, No Signup)

1. **Get your access key:**
   - Go to: https://web3forms.com/
   - Enter your email
   - Copy your access key

2. **Update the code:**
   - Replace the Formspree endpoint with:
   ```typescript
   const response = await fetch('https://api.web3forms.com/submit', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       access_key: 'YOUR_ACCESS_KEY',
       ...formData,
     }),
   });
   ```

### Option 3: Cloudflare Pages Functions (Advanced)

If you want to use Cloudflare's native solution, we can create a Pages Function. This requires:
- Creating a `functions` directory
- Writing a serverless function
- More setup but fully integrated with Cloudflare

## 🎨 Customization

The form is fully customizable:
- **Fields:** Add/remove fields in `ContactForm.tsx`
- **Styling:** Uses Tailwind CSS (matches your site)
- **Validation:** Built-in HTML5 validation
- **Success/Error messages:** Customizable

## 📧 Email Notifications

Both Formspree and Web3Forms will:
- Send you an email for each submission
- Include all form data
- Provide spam protection
- Store submissions (Formspree dashboard)

## 🔒 Privacy & GDPR

- Formspree: GDPR compliant, data stored securely
- Web3Forms: Privacy-focused, minimal data collection
- Both support custom privacy policies

## 💰 Pricing

- **Formspree Free:** 50 submissions/month
- **Formspree Paid:** $10/month for 1,000 submissions
- **Web3Forms:** Free, unlimited submissions

## 🚀 Next Steps

1. Choose your service (Formspree recommended)
2. Get your API key/endpoint
3. Update `ContactForm.tsx` with your endpoint
4. Test the form
5. Deploy!

The form is ready to use - just needs your API endpoint!
