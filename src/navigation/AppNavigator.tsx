// src/navigation/AppNavigator.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NoteTakingScreen from "../screens/NoteTakingScreen";
import SettingsScreen from "../screens/SettingsScreen";

type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="NoteTaking" component={NoteTakingScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
