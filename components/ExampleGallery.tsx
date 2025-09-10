import React from 'react';

const examples = [
  {
    prompt: "A futuristic cityscape at sunset, with flying cars.",
    imageUrl: "https://images.unsplash.com/photo-1519563202821-2d21714197e8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    prompt: "A cute, fluffy cat astronaut floating in space.",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    prompt: "An enchanted forest with glowing mushrooms and fairies.",
    imageUrl: "https://images.unsplash.com/photo-1462212210333-339616b46b2f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    prompt: "A high-speed chase between a sports car and a motorcycle on a coastal road.",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const ExampleGallery: React.FC = () => {
    return (
        <section id="gallery" className="py-16 sm:py-20 bg-zinc-950">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        See What's Possible
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Get inspired by animations created with Katuni.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {examples.map((example, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
                            <img src={example.imageUrl} alt={example.prompt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                                <p className="text-white text-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{example.prompt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};