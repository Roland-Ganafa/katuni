import React from 'react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onShowAuth?: () => void;
}

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-8 w-8 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
            Katuni
        </span>
    </div>
);

export const Navbar: React.FC<NavbarProps> = ({ onShowAuth }) => {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" aria-label="Homepage">
                           <Logo />
                        </a>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-300 hidden sm:inline">Welcome, {user.name}</span>
                                <button 
                                    type="button" 
                                    onClick={logout}
                                    className="px-4 py-2 text-gray-300 hover:text-lime-400 transition-colors font-medium"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <>
                                <button 
                                    type="button" 
                                    onClick={onShowAuth}
                                    className="px-4 py-2 text-gray-300 hover:text-lime-400 transition-colors font-medium"
                                >
                                    Log In
                                </button>
                                <button 
                                    type="button" 
                                    onClick={onShowAuth}
                                    className="px-4 py-2 text-zinc-900 bg-lime-400 rounded-md hover:bg-lime-500 transition-colors shadow-sm font-bold"
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};