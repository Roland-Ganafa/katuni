import React from 'react';

const StepCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg border border-zinc-800">
        <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-zinc-800 text-lime-400">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const PenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const PaletteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;


export const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Bring your ideas to life in just three simple steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <StepCard 
                        icon={<PenIcon />}
                        title="1. Describe Your Scene"
                        description="Start with a simple text prompt. Let your imagination run wild and describe the world you want to create."
                   />
                    <StepCard 
                        icon={<PaletteIcon />}
                        title="2. Customize Your Style"
                        description="Choose from a wide range of animation styles, add narration, and describe the perfect soundtrack."
                   />
                   <StepCard 
                        icon={<DownloadIcon />}
                        title="3. Generate & Download"
                        description="Our AI gets to work. In just a few minutes, your animation is ready to watch, download, and share."
                   />
                </div>
            </div>
        </section>
    );
};
