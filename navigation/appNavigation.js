import React from 'react';
import ScannerScreen from '../screens/ScannerScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const BottomTab  = createBottomTabNavigator();

export default function AppNavigation() {
    const {user} = useAuth();
    if(user){
       return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName='Welcome'>
                <BottomTab.Screen name="Scanner" options={{headerShown: true}} component={ScannerScreen}/>
                <BottomTab.Screen name="Settings" options={{headerShown: true}} component={SettingsScreen}/>
            </BottomTab.Navigator>
        </NavigationContainer>
        ) 
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Scanner" options={{headerShown: true}} component={ScannerScreen}/>
                    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
                    <Stack.Screen name="LogIn" options={{headerShown: false}} component={LoginScreen}/>
                    <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        ) 
    }
    
}