import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = NavigationContainer(
   createStackNavigator({
      Main,
      Profile,
   }),
);

export default Routes;