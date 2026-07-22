import { defineStore } from "pinia";
import authServices from "../services/authServices";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {

    const _user = ref(null);
    const token = ref(localStorage.getItem("access_token"));

    const isAuthenticated = computed(() => !!token.value);
    const user = computed(() => _user.value);

    async function login(credentials) {
        try {

            const response = await authServices.login(credentials);
            localStorage.setItem("access_token", response.access_token);
            token.value = response.access_token;
            await fetchUser();

            return response;

        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        try {
            await authServices.logout();
        } catch (error) {
            throw error;
        } finally {
            localStorage.removeItem("access_token");
            token.value = null;
            _user.value = null;
        }
    }

    async function fetchUser() {
        if (isAuthenticated) {
            try {
                _user.value = await authServices.me();
            } catch (error) {
                logout();
                throw error;
            }
        }
    }

    return {
        isAuthenticated,
        user,
        login,
        logout,
        fetchUser
    }
});