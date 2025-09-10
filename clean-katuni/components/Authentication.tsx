import React, { useState } from 'react';
import { Login } from './Login';
import { Signup } from './Signup';

interface AuthenticationProps {
  onAuthSuccess: () => void;
}

export const Authentication: React.FC<AuthenticationProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      {isLogin ? (
        <Login onSwitchToSignup={switchToSignup} onLoginSuccess={onAuthSuccess} />
      ) : (
        <Signup onSwitchToLogin={switchToLogin} onSignupSuccess={onAuthSuccess} />
      )}
    </div>
  );
};