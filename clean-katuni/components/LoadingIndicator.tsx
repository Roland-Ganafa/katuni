
import React from 'react';

interface LoadingIndicatorProps {
  message: string;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-zinc-900/70 border border-zinc-800 rounded-lg">
      <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-gray-300 text-center">{message}</p>
      <p className="text-sm text-gray-500 mt-2 text-center">Video generation is a complex process and can take several minutes. Thank you for your patience.</p>
    </div>
  );
};
