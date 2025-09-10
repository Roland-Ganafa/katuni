import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">Your Animation is Ready!</h2>
      <div className="p-3 bg-blue-900/30 rounded-lg text-sm text-blue-300 max-w-2xl w-full">
        <p>Note: Generated videos currently do not include audio. Audio features are in development.</p>
      </div>
      <video
        src={src}
        controls
        autoPlay
        loop
        className="w-full max-w-2xl rounded-lg shadow-2xl border-2 border-zinc-800 aspect-video"
      >
        Your browser does not support the video tag.
      </video>
      <a
        href={src}
        download="katuni-video.mp4"
        className="inline-flex items-center justify-center py-2 px-5 text-base font-bold text-zinc-900 bg-lime-400 rounded-lg shadow-md hover:bg-lime-500 disabled:opacity-50 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-400/50"
      >
        <DownloadIcon />
        Download Video
      </a>
    </div>
  );
};