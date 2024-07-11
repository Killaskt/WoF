// src/screens/HomeScreen.tsx

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define the types for your navigation stack
type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
};

// Define the props for HomeScreen using NativeStackScreenProps
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Note Taking"
                onPress={() => navigation.navigate("NoteTaking")}
            />
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate("Settings")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScreen;
