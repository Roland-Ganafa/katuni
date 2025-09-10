import React from 'react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-zinc-800 text-lime-400">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
        </div>
        <p className="mt-4 text-gray-400">{description}</p>
    </div>
);

const FilmIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>;
const MicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4m14-14l-2.293 2.293a1 1 0 000 1.414L18 16l4 4" /></svg>;
const QualityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18M19 3v18M3 16V8a4 4 0 014-4h10a4 4 0 014 4v8M3 16a4 4 0 004 4h10a4 4 0 004-4M3 16h18" /></svg>;


export const Features: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Powerful Features, Simple Interface
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Everything you need to create stunning animations, no experience required.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FeatureCard 
                        icon={<FilmIcon />}
                        title="Diverse Animation Styles"
                        description="From anime to claymation, sketch to cyberpunk, select the perfect aesthetic from a vast library to match your vision."
                    />
                     <FeatureCard 
                        icon={<MicIcon />}
                        title="Voice & Sound Control (Planned)"
                        description="Bring your characters to life with custom narration and describe the perfect audio landscape to immerse your audience. (Coming in future updates)"
                    />
                     <FeatureCard 
                        icon={<QualityIcon />}
                        title="High-Quality Output"
                        description="Generate crisp, high-resolution videos perfect for social media, presentations, or any creative project you can dream of."
                    />
                     <FeatureCard 
                        icon={<SparklesIcon />}
                        title="Simple & Intuitive"
                        description="No complex software or animation skills required. If you can describe it, you can create it in just a few clicks."
                    />
                </div>
            </div>
        </section>
    );
};