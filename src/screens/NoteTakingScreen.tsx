// src/screens/NoteTakingScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "NoteTaking">;

const NoteTakingScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>Note Taking Screen</Text>
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

export default NoteTakingScreen;
