// src/navigation/AppNavigator.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "../stores/authStore";
import HomeScreen from "../screens/HomeScreen";
import NoteTakingScreen from "../screens/NoteTakingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
    Login: undefined;
    Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isAuthenticated ? "Home" : "Login"}
            >
                {isAuthenticated ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen
                            name="NoteTaking"
                            component={NoteTakingScreen}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Signup" component={SignupScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
