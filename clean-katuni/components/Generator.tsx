import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { generateAnimationVideo } from '../services/geminiService';
import { LoadingIndicator } from './LoadingIndicator';
import { VideoPlayer } from './VideoPlayer';

interface GeneratorProps {
  onVideoGenerated?: () => void;
}

const animationStyles = [
    { value: 'default', label: 'Default' },
    { value: 'anime', label: 'Anime' },
    { value: 'claymation', label: 'Claymation' },
    { value: 'cartoon', label: 'Cartoon' },
    { value: 'pixel_art', label: 'Pixel Art' },
    { value: '3d_render', label: '3D Render' },
    { value: 'watercolor', label: 'Watercolor' },
];

const examplePrompts = [
    'A dragon flying over a medieval castle at dawn.',
    'A serene underwater scene with colorful coral and fish.',
    'A steampunk city with intricate clockwork mechanisms.',
    'A robot exploring a lush, alien jungle.',
];

export const Generator: React.FC<GeneratorProps> = ({ onVideoGenerated }) => {
    const { user } = useAuth();
    const [prompt, setPrompt] = useState('');
    const [narration, setNarration] = useState('');
    const [soundDescription, setSoundDescription] = useState('');
    const [animationStyle, setAnimationStyle] = useState('default');

    const [isLoading, setIsLoading] = useState(false);
    const [progressMessage, setProgressMessage] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [hasGenerated, setHasGenerated] = useState(false);

    const handleProgress = (message: string) => {
        setProgressMessage(message);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError('Please enter a prompt to generate a video.');
            return;
        }

        // If user is not logged in and has already generated a video, prevent further generation
        if (!user && hasGenerated) {
            setError('Please sign up to generate more videos. You can generate one video for free as a trial.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setVideoUrl(null);
        setProgressMessage('Warming up the AI...');

        try {
            const url = await generateAnimationVideo(
                prompt,
                narration,
                soundDescription,
                animationStyle,
                handleProgress
            );
            setVideoUrl(url);
            setHasGenerated(true);
            if (onVideoGenerated) {
                onVideoGenerated();
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            // Provide more specific guidance for API key issues
            if (errorMessage.includes('API_KEY environment variable not set')) {
                setError(`API Configuration Error: ${errorMessage}`);
            } else {
                setError(`Video generation failed: ${errorMessage}`);
            }
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleReset = () => {
        // If user is not logged in, prevent resetting to generate more videos
        if (!user) {
            alert('Please sign up to generate more videos. You can generate one video for free as a trial.');
            return;
        }
        
        setVideoUrl(null);
        setError(null);
        setPrompt('');
        setNarration('');
        setSoundDescription('');
        setAnimationStyle('default');
    }

    if (isLoading) {
        return (
            <section className="w-full max-w-4xl mx-auto py-16 px-4">
                <LoadingIndicator message={progressMessage} />
            </section>
        )
    }

    if (videoUrl) {
        return (
            <section className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center gap-8">
                <VideoPlayer src={videoUrl} />
                {!user && (
                    <div className="p-4 bg-blue-900/30 rounded-lg text-center max-w-2xl">
                        <h3 className="text-xl font-bold text-blue-300 mb-2">Enjoy Your Free Trial!</h3>
                        <p className="text-blue-200 mb-4">
                            You've generated your first video! Sign up now to generate unlimited videos and access all features.
                        </p>
                        <button 
                            onClick={() => alert('Please use the Sign Up button in the navigation bar to create an account.')}
                            className="py-2 px-6 text-lg font-bold text-zinc-900 bg-lime-400 rounded-lg hover:bg-lime-500 transition-colors duration-300"
                        >
                            Sign Up for Full Access
                        </button>
                    </div>
                )}
                {user && (
                    <button 
                        onClick={handleReset}
                        className="py-3 px-8 text-lg font-bold bg-zinc-800 text-gray-300 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
                    >
                        Create Another Animation
                    </button>
                )}
            </section>
        )
    }

    return (
        <section className="w-full max-w-2xl mx-auto py-16 px-4">
            <div className="text-center mb-10">
                 <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
                    Describe Your Vision
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                    Fill in the details below to generate your animation.
                </p>
                {!user && (
                    <div className="mt-4 p-3 bg-yellow-900/30 rounded-lg text-sm text-yellow-300">
                        <p>Free trial: Generate one video. Sign up for unlimited access!</p>
                    </div>
                )}
                <div className="mt-4 p-3 bg-blue-900/30 rounded-lg text-sm text-blue-300">
                    <p>Note: Generated videos currently do not include audio. Audio features are in development.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
                        Prompt <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the animation you want to create..."
                        required
                        className="w-full h-24 p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
                    />
                     <div className="mt-3 text-sm">
                        <p className="text-gray-400 mb-2">
                            Need inspiration? Try an example:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {examplePrompts.map((example, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setPrompt(example)}
                                    className="px-3 py-1 bg-zinc-700/50 text-gray-300 rounded-full text-xs hover:bg-zinc-700 transition-colors"
                                >
                                    {example}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="animationStyle" className="block text-sm font-medium text-gray-300 mb-2">
                            Animation Style
                        </label>
                        <select
                            id="animationStyle"
                            value={animationStyle}
                            onChange={(e) => setAnimationStyle(e.target.value)}
                            className="w-full p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
                        >
                            {animationStyles.map(style => (
                                <option key={style.value} value={style.value}>{style.label}</option>
                            ))}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="sound" className="block text-sm font-medium text-gray-300 mb-2">
                            Sound Description (Planned Feature)
                        </label>
                        <input
                            type="text"
                            id="sound"
                            value={soundDescription}
                            onChange={(e) => setSoundDescription(e.target.value)}
                            placeholder="e.g., Epic orchestral music, jungle sounds"
                            className="w-full p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
                            disabled
                        />
                        <p className="mt-1 text-xs text-gray-500">Audio support coming in future updates</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="narration" className="block text-sm font-medium text-gray-300 mb-2">
                        Narration (Planned Feature)
                    </label>
                    <textarea
                        id="narration"
                        value={narration}
                        onChange={(e) => setNarration(e.target.value)}
                        placeholder="Enter dialogue or narration for the video."
                        className="w-full h-20 p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
                        disabled
                    />
                    <p className="mt-1 text-xs text-gray-500">Voice synthesis support coming in future updates</p>
                </div>

                {error && <p className="text-red-500 text-center bg-red-900/30 p-3 rounded-md">{error}</p>}

                <div className="text-center pt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto py-3 px-12 text-lg font-bold text-zinc-900 bg-lime-400 rounded-lg shadow-md hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-400/50"
                    >
                        {isLoading ? 'Generating...' : 'Generate Animation'}
                    </button>
                </div>
            </form>
        </section>
    );
};