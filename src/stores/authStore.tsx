// src/stores/authStore.ts

import create from "zustand";
import { supabase } from "../api/supabaseClient";

interface AuthState {
    isAuthenticated: boolean;
    user: any;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    signIn: async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error("SignIn Error:", error);
                throw error;
            }
            console.log("SignIn Data:", data);
            set({ isAuthenticated: true, user: data.user });
        } catch (error) {
            console.error("Network Request Failed:", error);
        }
    },
    signOut: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error("SignOut Error:", error);
                throw error;
            }
            set({ isAuthenticated: false, user: null });
        } catch (error) {
            console.error("Network Request Failed:", error);
        }
    },
    signUp: async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) {
                console.error("SignUp Error:", error);
                throw error;
            }
            console.log("SignUp Data:", data);
            set({ isAuthenticated: true, user: data.user });
        } catch (error) {
            console.error("Network Request Failed:", error);
        }
    },
}));
