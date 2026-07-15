import apiClient from "@/api/axiosConfig";

export default {
  async login(credentials) {
    try {
      const response = await apiClient.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async logout() {
    try {
      const response = await apiClient.post("/auth/logout");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async refresh(token) {
    try {
      const response = await apiClient.post("/auth/refresh", { token });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async me(credentials) {
    try {
      const response = await apiClient.post("/auth/me", credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
