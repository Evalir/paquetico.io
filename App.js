import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppContainer from './Router';

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
