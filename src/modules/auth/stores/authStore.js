import { defineStore } from "pinia";
import authServices from "../services/authServices";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {

    const token = ref(localStorage.getItem("access_token" || null));
    const isAuthenticated = computed(() => !!token.value);

    async function login(credentials) {
        try {
            
            const response = await authServices.login(credentials);
            localStorage.setItem("access_token", response.access_token);

        } catch (error) {
            throw error;
        }
    }

    return {
        isAuthenticated,
        login,
    }
});