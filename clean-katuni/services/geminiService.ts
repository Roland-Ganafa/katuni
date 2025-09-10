import { GoogleGenAI, GenerateVideosOperation } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set. Please create a .env.local file with your Google Gemini API key. Get your API key from https://aistudio.google.com/");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function generateAnimationVideo(
  prompt: string,
  narration: string,
  soundDescription: string,
  animationStyle: string,
  onProgress: (message: string) => void
): Promise<string> {
  let finalPrompt = prompt;

  if (animationStyle && animationStyle !== 'default') {
    finalPrompt = `Animation Style: ${animationStyle}. ${prompt}`;
  }
  
  // Temporarily disable audio features as they are not currently supported by the Gemini VEO API
  // if (soundDescription && soundDescription.trim() !== '') {
  //   finalPrompt += `\n\nAudio soundtrack: ${soundDescription.trim()}`;
  // }

  // if (narration && narration.trim() !== '') {
  //   finalPrompt += `\n\nThe character(s) in the animation should speak the following lines with a clear voice, and the audio should be perfectly synchronized with their lip movements: "${narration.trim()}"`;
  // }

  onProgress('Initiating video generation...');
  
  let operation: GenerateVideosOperation = await ai.models.generateVideos({
    model: 'veo-2.0-generate-001',
    prompt: finalPrompt,
    config: {
      numberOfVideos: 1
    }
  });

  onProgress('Processing request... This may take a few minutes.');
  let pollCount = 0;

  while (!operation.done) {
    pollCount++;
    onProgress(`Rendering frames (Attempt ${pollCount})... Please keep this page open.`);
    await delay(10000); 
    try {
      operation = await ai.operations.getVideosOperation({ operation: operation });
    } catch (e) {
      console.error("Error during polling:", e);
      throw new Error("Failed to get operation status. Please try again.");
    }
  }

  if (operation.error) {
    throw new Error(`Video generation failed with an error: ${operation.error.message}`);
  }

  if (!operation.response?.generatedVideos?.[0]?.video?.uri) {
    throw new Error('Video generation completed but returned no valid video URI.');
  }

  onProgress('Finalizing video...');
  const downloadLink = operation.response.generatedVideos[0].video.uri;
  const apiKey = process.env.API_KEY;

  const response = await fetch(`${downloadLink}&key=${apiKey}`);

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Fetch error body:", errorBody);
    throw new Error(`Failed to download video file: ${response.statusText}`);
  }

  onProgress('Creating downloadable video file...');
  const videoBlob = await response.blob();
  const videoUrl = URL.createObjectURL(videoBlob);
  
  return videoUrl;
}