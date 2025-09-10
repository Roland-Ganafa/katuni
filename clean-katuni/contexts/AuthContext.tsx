import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  canGenerateMoreVideos: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage or session)
  useEffect(() => {
    const storedUser = localStorage.getItem('katuni_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user data', e);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate authentication
      if (email && password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const userData: User = {
          id: 'user_' + Date.now(),
          email,
          name: email.split('@')[0]
        };
        
        setUser(userData);
        localStorage.setItem('katuni_user', JSON.stringify(userData));
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate user creation
      if (name && email && password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const userData: User = {
          id: 'user_' + Date.now(),
          email,
          name
        };
        
        setUser(userData);
        localStorage.setItem('katuni_user', JSON.stringify(userData));
      } else {
        throw new Error('Please fill in all fields');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('katuni_user');
  };

  const canGenerateMoreVideos = () => {
    // In a real implementation, this would check the user's subscription plan
    // For now, we'll assume logged-in users can generate unlimited videos
    return !!user;
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    canGenerateMoreVideos
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};