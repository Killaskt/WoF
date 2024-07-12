// src/screens/LoginScreen.tsx

import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuthStore } from "../stores/authStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define the form data type
type FormData = {
    email: string;
    password: string;
};

type RootStackParamList = {
    Home: undefined;
    NoteTaking: undefined;
    Settings: undefined;
    Login: undefined;
    Signup: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
    const { control, handleSubmit } = useForm<FormData>();
    const signIn = useAuthStore((state) => state.signIn);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await signIn(data.email, data.password);
            navigation.replace("Home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
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
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("Signup")}
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

export default LoginScreen;
