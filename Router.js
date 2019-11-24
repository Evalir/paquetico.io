import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
    },
    Register: {
      screen: RegisterPage,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
