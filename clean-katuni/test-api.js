// Simple test script to verify Gemini API connectivity
// Run with: node test-api.js

import { GoogleGenAI } from "@google/genai";
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: '.env.local' });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable not set");
    console.error("Please check your .env.local file");
    process.exit(1);
}

console.log("API Key found. Testing connection...");

try {
    const ai = new GoogleGenAI({ apiKey });
    console.log("✅ GoogleGenAI client initialized successfully");
    console.log("✅ Environment configuration is working correctly");
} catch (error) {
    console.error("❌ Error initializing GoogleGenAI client:", error.message);
    process.exit(1);
}