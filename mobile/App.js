import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./src/pages/Main";
import Profile from "./src/pages/Profile"

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          gestureEnabled: false,
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7d40e7'
          },
        }}
      >

      <Stack.Screen
        name="Home"
        component={Main}
        options={{ title: 'DevMaps' }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ title: 'Perfil no Github' }}
      />

    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}