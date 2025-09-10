import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface SignupProps {
  onSwitchToLogin: () => void;
  onSignupSuccess: () => void;
}

export const Signup: React.FC<SignupProps> = ({ onSwitchToLogin, onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      await signup(name, email, password);
      onSignupSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
    }
  };

  return (
    <section className="w-full max-w-md mx-auto py-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
          Create Account
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Sign up to start creating amazing animations
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full p-3 bg-zinc-800 border-2 border-zinc-700 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
          />
        </div>

        {error && <p className="text-red-500 text-center bg-red-900/30 p-3 rounded-md">{error}</p>}

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto flex items-center justify-center mx-auto py-3 px-12 text-lg font-bold text-zinc-900 bg-lime-400 rounded-lg shadow-md hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-400/50"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-lime-400 hover:text-lime-300 font-medium focus:outline-none"
          >
            Sign in
          </button>
        </p>
      </div>
    </section>
  );
};