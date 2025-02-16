import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signIn = async (credentials) => {
    try {
      // Your sign in logic here
      const mockUser = {
        id: '123',
        name: credentials.name || 'User',
        email: credentials.email,
        phone: credentials.phoneNumber,
      };

      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      return mockUser;
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const sendOTP = async (phoneNumber) => {
    try {
      const response = await authAPI.sendOTP(phoneNumber);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

  const verifyOTP = async (phoneNumber, otp) => {
    try {
      const response = await authAPI.verifyOTP(phoneNumber, otp);
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(user));
      setUser(user);
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      sendOTP,
      verifyOTP
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 