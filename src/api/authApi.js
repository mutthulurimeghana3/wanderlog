import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Login failed"
    );
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Registration failed"
    );
  }
};