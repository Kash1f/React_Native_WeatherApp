import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';

export default function Navigation() {

    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}