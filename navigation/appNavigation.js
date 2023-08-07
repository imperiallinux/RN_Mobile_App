import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Home" options={{headerShown: true}} component={HomeScreen}/>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
                <Stack.Screen name="LogIn" options={{headerShown: false}} component={LoginScreen}/>
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}