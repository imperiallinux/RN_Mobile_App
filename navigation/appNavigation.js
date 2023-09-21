import React from 'react';
import ScannerScreen from '../screens/ScannerScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ToDoScreen from '../screens/ToDoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const BottomTab  = createBottomTabNavigator();

export default function AppNavigation() {
    const {user} = useAuth();
    if(user){
       return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName='Welcome'
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                    if (route.name === 'Scanner') {
                        iconName = focused ? 'qr-code' : 'qr-code-outline';
                    } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                    }
                    else if (route.name === 'To Do List') {
                        iconName = focused ? 'list-circle' : 'list-circle-outline';
                        }
                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#833191',
                    tabBarInactiveTintColor: '#B397B8',
                })}
            >
                <BottomTab.Screen name="To Do List" options={{headerShown: true}} component={ToDoScreen}/>
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