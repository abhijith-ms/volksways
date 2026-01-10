# Contact Form Setup Guide

## Web3Forms Setup (Recommended)

### Step 1: Get Your Access Key
1. Visit https://web3forms.com/
2. Sign up with your email address
3. Click "Create New Form"
4. Copy your access key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Configure Environment Variable
1. Open the `.env` file in the project root
2. Replace `your_web3forms_access_key_here` with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```

### Step 3: Test the Form
1. Start the development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email for the form submission

### Step 4: Customize Email Settings (Optional)
In Web3Forms dashboard, you can:
- Set custom email templates
- Add auto-reply messages
- Configure spam protection
- Set up webhooks for integrations

## Alternative Options

### Option 2: Formspree
1. Sign up at https://formspree.io/
2. Create a new form
3. Replace the Web3Forms code with Formspree endpoint

### Option 3: Netlify Forms (if hosting on Netlify)
1. Add `netlify` attribute to form
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`

### Option 4: EmailJS (Client-side only)
1. Sign up at https://www.emailjs.com/
2. Configure email service
3. Replace form submission logic

## Current Form Features

✅ **Form Validation**: Name, email, and phone are required
✅ **Email Validation**: Checks for valid email format
✅ **Success/Error Messages**: User feedback for form submission
✅ **Loading States**: Shows "Sending..." during submission
✅ **Form Reset**: Clears form after successful submission
✅ **Responsive Design**: Works on all devices

## Form Data Collected

- **Name**: Full name of the inquirer
- **Email**: Contact email address
- **Phone**: Phone number for direct contact
- **Destination**: Preferred study destination (optional)
- **Message**: Additional information or questions (optional)

## Security Features

- Environment variables for API keys
- Client-side validation
- HTTPS form submission
- Spam protection (via Web3Forms)

## Troubleshooting

### Form not submitting?
1. Check if `.env` file has the correct access key
2. Verify internet connection
3. Check browser console for errors

### Not receiving emails?
1. Check spam/junk folder
2. Verify access key is correct
3. Check Web3Forms dashboard for submissions

### Need help?
Contact Web3Forms support or check their documentation at https://docs.web3forms.com/