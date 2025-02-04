import { User } from "./user";

export interface Credentials {
  email: string;
  password: string;
}

export interface ChangePassword {
  password: string;
  newPassword: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}
