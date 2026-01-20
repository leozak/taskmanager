import axios from "axios";

import { API_URL } from "./config";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  console.log("REQUEST (config):", config);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("SUCCESS (response):", response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // console.log("ERROR (response):", error);
    console.log("ERROR (error.response.status)", error.response.status === 401);
    console.log("ERROR (!originalRequest._retry)", !originalRequest._retry);
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Tenta pegar um novo token
        const refreshToken = localStorage.getItem("refresh_token");
        const { data } = await axios.get(`${API_URL}/refresh-token`, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        console.log("REFRESH (data):", data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        return api(originalRequest);
      } catch (err) {
        console.log("REFRESH (err):", err);
      }
    }
    Promise.reject(error);
  },
);
