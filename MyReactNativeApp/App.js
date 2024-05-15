import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/screens/LandingPage';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';  
import CreateResourceScreen from './src/screens/CreateResourceScreen';
import DetailViewScreen from './src/screens/DetailViewScreen';
import ResourceListScreen from './src/screens/ResourceListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginScreen} />     
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ResourceListScreen" component={ResourceListScreen} />
        <Stack.Screen name="DetailViewScreen" component={DetailViewScreen} />
        <Stack.Screen name="CreateResourceScreen" component={CreateResourceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
