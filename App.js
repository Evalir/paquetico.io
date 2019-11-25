import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppContainer from './Router';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}
