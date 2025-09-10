import React, { useState } from 'react';

const faqData = [
    {
        question: "What is Katuni?",
        answer: "Katuni is an AI-powered platform that transforms your text descriptions into stunning, animated videos. Simply describe your scene, choose a style, and our AI will bring your vision to life."
    },
    {
        question: "How long does it take to generate a video?",
        answer: "Video generation is a complex process. While simple animations can be ready in a few minutes, more detailed prompts may take longer. We'll provide progress updates during the generation process."
    },
    {
        question: "What kind of prompts work best?",
        answer: "Be descriptive! The more detail you provide about characters, actions, setting, and mood, the better the AI can interpret your vision. Try to paint a picture with your words."
    },
    {
        question: "Can I use the generated videos commercially?",
        answer: "Yes, all videos you create are yours to use for both personal and commercial projects, royalty-free."
    },
    {
        question: "Do I need any animation experience?",
        answer: "Absolutely not! Katuni is designed for everyone, from complete beginners to experienced creators. If you can write a sentence, you can create an animation."
    },
    {
        question: "Why don't the videos include audio?",
        answer: "Currently, the Gemini VEO video generation API does not include audio in generated videos. We're working on implementing audio features in future updates, including voice synthesis and soundtrack integration."
    }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-2"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className="transform transition-transform duration-300">
                    <svg className={`w-6 h-6 text-gray-500 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="pb-5 px-2 text-gray-400">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};