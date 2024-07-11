// src/screens/SettingsScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const SettingsScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
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

export default SettingsScreen;
