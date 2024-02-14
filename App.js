// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LandingPage from './src/pages/LandingPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import RecoveryPage from './src/pages/RecoveryPage';
import RegistrationPage from './src/pages/RegisterPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage" 
        >
          <Stack.Screen options={{headerMode: true}} name="LandingPage" component={LandingPage} />
          <Stack.Screen options={{headerMode: true}} name="LoginPage" component={LoginPage} />
          <Stack.Screen options={{headerMode: true}} name="HomePage" component={HomePage} />
          <Stack.Screen options={{headerMode: true}} name="RecoveryPage" component={RecoveryPage} />
          <Stack.Screen options={{headerMode: true}} name="RegistrationPage" component={RegistrationPage} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
