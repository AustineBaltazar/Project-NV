// ProfileNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import DetailedProfileScreen from '../screens/DetailedProfileScreen'; // Import DetailedProfile

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ headerShown: false }} // Hide the header for main profile screen
      />
      <Stack.Screen 
        name="DetailedProfile" 
        component={DetailedProfileScreen}
        options={{ headerTitle: '' }} // Show the header for the detailed profile
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
