import React from 'react';
import { Icon } from 'react-native-elements';

export default function HamburgerMenu({ navigation }) {
  return (
    <Icon
      color="#fff"
      name="menu"
      onPress={() => navigation.toggleDrawer()}
    />
  );
}
