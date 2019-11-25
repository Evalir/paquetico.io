/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StatusBar, Picker } from 'react-native';
import { Text, Header } from 'react-native-elements';
import styled from 'styled-components/native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CompaniesPage from '../pages/CompaniesPage';
import HomePage from '../pages/HomePage';

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomePage,
  },
  Companies: {
    screen: CompaniesPage,
  } });

export default createAppContainer(DrawerNavigator);
