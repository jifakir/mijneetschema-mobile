import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';
import { Foundation, Ionicons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#1C1C1E',
          borderColor: '#505050',
        },
        tabBarActiveTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Activity"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
          tabBarBadge: '',
          tabBarBadgeStyle: {
            marginTop: 20,
            maxWidth: 12,
            minWidth: 12,
            maxHeight: 12,
            fontSize: 8,
            lineHeight: 9,
            alignSelf: undefined,
            backgroundColor: '#F35756',
          },
        }}
        name="Notification"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
