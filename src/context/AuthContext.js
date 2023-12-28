// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await fetch('https://res2e4sb2oz6ta7mlagcaelvlm0mpadg.lambda-url.us-west-1.on.aws/account/login', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login, set isAuthenticated to true
        setAuthenticated(true);
        return true; // Indicate successful login
      } else {
        // Handle login failure
        console.error('Login failed');
        return false; // Indicate login failure
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false; // Indicate login failure
    }
  };

  const logout = () => {
    // You can implement your logout logic here
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
