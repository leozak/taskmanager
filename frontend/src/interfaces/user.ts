export interface NewUserData {
  name: string;
  email: string;
  password: string;
}

export interface NewUserResponseData {
  sussess: boolean;
  message: string;
  name: string;
  email: string;
}

export interface NewUserResponse {
  data: NewUserResponseData;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  sussess: boolean;
  message: string;
  name?: string;
  email?: string;
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
}
