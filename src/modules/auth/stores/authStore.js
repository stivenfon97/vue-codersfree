import { defineStore } from "pinia";
import authServices from "../services/authServices";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {

    const token = ref(localStorage.getItem("access_token"));
    const isAuthenticated = computed(() => !!token.value);

    async function login(credentials) {
        try {

            const response = await authServices.login(credentials);
            token.value = response.access_token;
            localStorage.setItem("access_token", response.access_token);

        } catch (error) {
            throw error;
        }
    }

    function logout() {
        token.value = null;
        localStorage.removeItem("access_token");
    }

    return {
        isAuthenticated,
        login,
        logout,
    }
});