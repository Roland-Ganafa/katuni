import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExampleGallery } from './components/ExampleGallery';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { Generator } from './components/Generator';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Authentication } from './components/Authentication';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [showGenerator, setShowGenerator] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [hasGeneratedVideo, setHasGeneratedVideo] = useState(false);

  const handleStartCreating = () => {
    if (user || !hasGeneratedVideo) {
      setShowGenerator(true);
    } else {
      setShowAuth(true);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    setShowGenerator(true);
  };

  const handleAuthClose = () => {
    setShowAuth(false);
  };

  const handleVideoGenerated = () => {
    setHasGeneratedVideo(true);
    if (!user) {
      // After generating one video, show signup prompt
      setTimeout(() => {
        setShowAuth(true);
        setShowGenerator(false);
      }, 2000);
    }
  };

  const handleShowAuth = () => {
    setShowAuth(true);
  };

  // If user is authenticated and wants to create, show generator
  if (showGenerator) {
    return (
      <div className="bg-zinc-950 text-white min-h-screen">
        <Navbar onShowAuth={handleShowAuth} />
        <Generator onVideoGenerated={handleVideoGenerated} />
        <Footer />
      </div>
    );
  }

  // If user is not authenticated but wants to sign in/up, show auth modal
  if (showAuth) {
    return (
      <div className="bg-zinc-950 text-white min-h-screen">
        <Navbar onShowAuth={handleShowAuth} />
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={handleAuthClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Authentication onAuthSuccess={handleAuthSuccess} />
          </div>
        </div>
        <main>
          <Hero onStartCreating={handleStartCreating} />
          <HowItWorks />
          <Features />
          <ExampleGallery />
          <FAQ />
          <TrustBadges />
        </main>
        <Footer />
      </div>
    );
  }

  // Default: show landing page
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar onShowAuth={handleShowAuth} />
      <main>
        <Hero onStartCreating={handleStartCreating} />
        <HowItWorks />
        <Features />
        <ExampleGallery />
        <FAQ />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;