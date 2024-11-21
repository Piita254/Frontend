import axios from "axios";

const API_URL = "https://e-learn-ncux.onrender.com//api/auth"; // API base URL

/**
 * Sends a login request to the API.
 * @param {Object} credentials - User credentials (e.g., { email, password }).
 * @returns {Object} - Response data containing the user and token.
 */
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

/**
 * Sends a signup request to the API.
 * @param {Object} userData - User data for registration.
 * @returns {Object} - Response data containing the new user.
 */
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

/**
 * Fetches the authenticated user's profile.
 * @returns {Object} - Response data containing the user profile.
 */
export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch profile");
  }
};
