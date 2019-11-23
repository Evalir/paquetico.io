import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  font-size: 24px;
  color: white;
`;

const StyledContainer = styled.View`
  margin: 0;
  padding: 0;
`;

const TopView = styled.View`
  height: 40%;
  background: #eb4459;
  margin-top: 0;
`;

const BottomView = styled.View`
  height: 100%;
  background: #f6f7fe;
`;

export default function LoginPage() {
  return (
    <StyledContainer>
      <StatusBar backgroundColor="#EB4459" barStyle="dark-content" />
      <TopView />
      <BottomView />
    </StyledContainer>
  );
}
