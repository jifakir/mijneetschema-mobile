import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OnboardingScreen } from '../screens';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={OnboardingScreen}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={HomeNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
