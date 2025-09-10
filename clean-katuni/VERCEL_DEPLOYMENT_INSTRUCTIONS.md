# How to Deploy Katuni to Vercel

Follow these step-by-step instructions to deploy your Katuni application to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (free available at [vercel.com](https://vercel.com/))
3. Your Google Gemini API key

## Step 1: Prepare Your Code

1. Ensure all your changes are committed:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. Verify that `.env.local` is in your `.gitignore` file (it should already be there)

## Step 2: Connect Vercel to Your Repository

1. Go to [vercel.com](https://vercel.com/) and sign in/up
2. Click "New Project"
3. Import your GitHub repository:
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub account
   - Select the repository containing your Katuni project

## Step 3: Configure Project Settings

Vercel should automatically detect this as a Vite project. Confirm the following settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

If any settings are incorrect, click "Edit" to adjust them.

## Step 4: Add Environment Variables

1. In the "Environment Variables" section, add your Google Gemini API key:
   - Name: `GEMINI_API_KEY`
   - Value: Your actual API key from Google AI Studio

2. Click "Add" to save the variable

## Step 5: Deploy

1. Click "Deploy"
2. Wait for the build process to complete (usually takes 1-2 minutes)
3. Once complete, you'll see:
   - "Congratulations!" message
   - Your deployment URL (e.g., `https://your-project.vercel.app`)

## Step 6: Test Your Deployment

1. Visit your deployment URL
2. Try generating a video to ensure everything works correctly
3. Check the browser console for any errors if issues occur

## Troubleshooting

### Common Issues

1. **API Key Issues**:
   - Ensure your `GEMINI_API_KEY` environment variable is correctly set
   - Verify your API key is valid and has proper permissions

2. **Build Failures**:
   - Check the build logs in Vercel for specific error messages
   - Ensure all dependencies are properly listed in package.json

3. **Runtime Errors**:
   - Check the browser console for JavaScript errors
   - Verify that all environment variables are correctly configured

### Updating Your Deployment

To update your deployed application:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update application"
   git push origin main
   ```
3. Vercel will automatically detect the changes and deploy a new version

## Security Best Practices

1. **Never commit API keys** to version control
2. Always use environment variables for sensitive data
3. Monitor your API usage in the Google Cloud Console
4. Consider implementing a backend proxy for production applications to protect your API key

## Support

If you encounter issues:
1. Check the [Vercel documentation](https://vercel.com/docs)
2. Review your project's build logs in the Vercel dashboard
3. Open an issue in your repository if it's a code-related problem