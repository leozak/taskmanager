import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";

import type { AuthResponse, LoginCredentials } from "../interfaces/User";

import { API_URL } from "../services/config";

const loginRequest = async (user: LoginCredentials): Promise<AuthResponse> => {
  const params = new URLSearchParams();
  params.append("username", user.username);
  params.append("password", user.password);

  const { data } = await axios.post<AuthResponse>(
    `${API_URL}/users/login-form`,
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log(data);

  return data;
};

export const useAuthLogin = () => {
  return useMutation<AuthResponse, AxiosError, LoginCredentials>({
    mutationFn: loginRequest,

    onSuccess: (data) => {
      console.log(data);

      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("name", JSON.stringify(data.name));
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
      localStorage.setItem("refresh_token", JSON.stringify(data.refresh_token));
      console.log("Login efetuado com sucesso");
    },

    onError: (error) => {
      console.error("Erro ao fazer login:", error);
    },
  });
};
