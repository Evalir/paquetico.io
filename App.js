import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import AppContainer from './Router';

const StyledText = styled.Text`
  font-size: 24px;
  color: white;
`;

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: black;
`;

export default function App() {
  return <AppContainer />;
}
