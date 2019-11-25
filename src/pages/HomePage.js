/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styled from 'styled-components/native';
import CustomHeader from '../components/Header';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

export default function HomePage({ navigation }) {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <Container>
        <Text h3>Welcome to AJER Solutions!</Text>
      </Container>
    </View>
  );
}
