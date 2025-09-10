
import React from 'react';

const StarIcon = ({ className }: { className: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);

const BrandLogo = ({ name }: { name: string }) => (
    <div className="text-gray-600 font-semibold text-xl tracking-widest">{name}</div>
);

export const TrustBadges: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-gray-500 font-semibold">
                    Trusted by over 10,000+ creators and brands worldwide
                </div>
                <div className="mt-8 flex justify-center items-center flex-wrap gap-x-12 gap-y-6 opacity-70">
                    <BrandLogo name="PIXELCORP" />
                    <BrandLogo name="SYNTHWAVE" />
                    <BrandLogo name="ARTIFEX" />
                    <BrandLogo name="STORYMODE" />
                    <BrandLogo name="VISUALIZE" />
                </div>
                <div className="mt-8 flex justify-center items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-500 ml-2">4.9/5 stars from 1,200+ reviews</span>
                </div>
            </div>
        </section>
    );
};
