import React from 'react';

interface HeroProps {
    onStartCreating: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCreating }) => {
    return (
        <section className="relative text-center py-20 sm:py-32 overflow-hidden">
             {/* Ambient background gradients */}
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#91ff80] to-[#33d45d] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
                    Create Stunning Animations with AI
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                    Turn your text prompts into captivating videos. Describe your scene, choose a style, and let our AI bring your vision to life in minutes.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onStartCreating}
                        className="w-full sm:w-auto py-3 px-8 text-lg font-bold text-zinc-900 bg-lime-400 rounded-lg shadow-md hover:bg-lime-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-400/50"
                    >
                        Start Creating Now
                    </button>
                    <button type="button" className="w-full sm:w-auto py-3 px-8 text-lg font-bold bg-zinc-800 text-gray-300 rounded-lg hover:bg-zinc-700 transition-colors duration-300">
                        Explore Services
                    </button>
                </div>
            </div>
             <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#91ff80] to-[#33d45d] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </section>
    );
};