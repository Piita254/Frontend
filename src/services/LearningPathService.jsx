import axios from "axios";

const API_BASE_URL = "https://e-learn-ncux.onrender.com/api/learning_paths";

const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken");
  return { Authorization: `Bearer ${token}` };
};

export const getAllLearningPaths = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch learning paths");
  }
};

export const getLearningPathById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || `Failed to fetch learning path with ID ${id}`);
  }
};

export const createLearningPath = async (newPathData) => {
  try {
    const response = await axios.post(API_BASE_URL, newPathData, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create learning path");
  }
};

export const updateLearningPath = async (id, updatedPathData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedPathData, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || `Failed to update learning path with ID ${id}`);
  }
};

export const deleteLearningPath = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || `Failed to delete learning path with ID ${id}`);
  }
};
