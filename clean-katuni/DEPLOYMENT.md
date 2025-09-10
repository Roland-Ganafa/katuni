# Deployment Guide

This document provides instructions for deploying the Katuni application to various platforms, with specific focus on Vercel.

## Prerequisites

Before deploying, ensure you have:

1. A production-ready build of the application
2. An account with your chosen deployment platform (e.g., Vercel)
3. Your Google Gemini API key

## Building for Production

To create a production build of the application:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Deploying to Vercel

### Step 1: Prepare Your Repository

1. Ensure your code is committed and pushed to a GitHub repository
2. Make sure `.env.local` is in your `.gitignore` file (it should already be there)
3. Verify that your repository contains all necessary files except sensitive environment variables

### Step 2: Configure Vercel

1. Go to [Vercel](https://vercel.com/) and sign up or log in
2. Click "New Project"
3. Import your GitHub repository
4. In the project settings, configure the following:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Set Environment Variables

In the Vercel project settings, add your environment variables:

- `GEMINI_API_KEY` = your_actual_api_key_here

### Step 4: Deploy

Click "Deploy" and Vercel will build and deploy your application. The deployment URL will be provided once the build is complete.

## Security Considerations

When deploying to production:

1. **API Key Protection**: The current implementation exposes the API key in the client-side bundle. For production, consider implementing a backend proxy to protect your API key.

2. **HTTPS**: Ensure your deployment platform provides HTTPS encryption.

3. **CORS**: The Google Gemini API should work with proper CORS configuration.

## Troubleshooting

### Common Issues

1. **Environment Variables Not Loading**: 
   - Ensure environment variables are correctly set in Vercel project settings
   - Check that variable names match exactly (case-sensitive)

2. **Build Failures**:
   - Check the build logs in Vercel for specific error messages
   - Ensure all dependencies are properly listed in package.json

3. **Runtime Errors**:
   - Check the browser console for JavaScript errors
   - Verify that the API key is valid and has proper permissions

### Support

If you encounter issues not covered in this guide, please check the [Vercel documentation](https://vercel.com/docs) or open an issue in the repository.