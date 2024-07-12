// src/screens/SignupScreen.tsx

import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuthStore } from "../stores/authStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
    Login: undefined;
    Signup: undefined;
};

// Define the form data type
type FormData = {
    email: string;
    password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen = ({ navigation }: Props) => {
    const { control, handleSubmit } = useForm<FormData>();
    const signUp = useAuthStore((state) => state.signUp);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await signUp(data.email, data.password);
            navigation.replace("Home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Email"
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Password"
                        secureTextEntry
                    />
                )}
            />
            <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default SignupScreen;
