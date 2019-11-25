import { Header } from 'react-native-elements';
import React from 'react';
import HamburgerMenu from './HamburgerMenu';

export default function CustomHeader({ navigation }) {
  return (
    <Header
      leftComponent={<HamburgerMenu navigation={navigation} />}
      centerComponent={{ text: 'Welcome!', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}
