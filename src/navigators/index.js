import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ForgetPassword, LoginScreen, Register, SplashScreen, WelcomeScreen, RegisterPhone, VerificationsScreen } from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
                <Stack.Screen name='RegisterPhone' component={RegisterPhone} />
                <Stack.Screen name='Verifications' component={VerificationsScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigators;