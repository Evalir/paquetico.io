import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import DrawerNavigator from './src/components/Drawer';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
    },
    Register: {
      screen: RegisterPage,
    },
    Drawer: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
