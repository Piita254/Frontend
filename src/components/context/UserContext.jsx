import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // Initialize user state from local storage or set default values
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { name: '', role: '' }; // Default user object
  });

  // Update local storage whenever user state changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // Function to clear user data
  const clearUser = () => {
    setUser({ name: '', role: '' });
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);
