<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Katuni - AI Animation Video Generator

Create stunning animation videos from text prompts using Google's Gemini API.

## Prerequisites
- Node.js (v16 or higher)
- A Google AI Studio account with access to the Gemini API

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your API key:**
   - Create a Google AI Studio account at https://aistudio.google.com/
   - Generate a new API key
   - Add your API key to the [.env.local](file:///c:/Users/MSI/CascadeProjects/katuni/.env.local) file:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser to http://localhost:5173

## Features
- Generate animations from text prompts
- Multiple animation styles (anime, claymation, cartoon, etc.)
- Add narration and sound descriptions
- Download generated videos

## Deployment
To build for production:
```bash
npm run build
```

The output will be in the `dist` folder, which can be deployed to any static hosting service.

### Deploying to Vercel

This project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository (make sure to exclude `.env.local` which contains your API key)
2. Go to [Vercel](https://vercel.com/) and sign up or log in
3. Click "New Project" and import your GitHub repository
4. In the project settings, add your environment variables:
   - `GEMINI_API_KEY` = your_actual_api_key_here
5. Deploy!

Vercel will automatically detect this as a Vite project and configure the build settings accordingly.

## Security Note
For production deployments, consider implementing a backend proxy to protect your API key, as client-side API keys can be exposed.