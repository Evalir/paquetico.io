/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setValues = (u, p) => {
    setUsername(u);
    setPassword(p);
  };
  const value = { username, password, setValues };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
