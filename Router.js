import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './src/pages/LoginPage';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginPage,
  },
});

export default createAppContainer(AppNavigator);
