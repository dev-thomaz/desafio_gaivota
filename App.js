/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './src/store' 

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/Splashscreen'
import Home from './src/screens/Home'
import Map from './src/screens/Map'
import Location_History from './src/screens/Location_History'


const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Location_History" component={Location_History} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
