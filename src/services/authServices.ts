import collectionClient from "./collection-client";
import { tokenKey } from "@/constants/setting.ts";
import { Credentials, LoginResponse } from "@/types/auth";
import { User } from "@/types/user";

export async function login(credentials: Credentials) {
  const { user, token } = await collectionClient<LoginResponse>("/auth/login", {
    body: { ...credentials },
  });

  sessionStorage.setItem(tokenKey, token as string);
  sessionStorage.setItem("userId", JSON.stringify(user.id));
  return user;
}

export async function signup(userData: Partial<User>) {
  const response = await collectionClient<LoginResponse>("/auth/signup", {
    body: { ...userData },
  });

  sessionStorage.setItem(tokenKey, response.token as string);
  sessionStorage.setItem("userId", JSON.stringify(response.user.id));
  return response.user;
}

export async function logout() {
  await collectionClient("/auth/logout", { method: "DELETE" });

  sessionStorage.removeItem(tokenKey);
}

export async function changePassword(credentials: Credentials) {
  await collectionClient("/auth/change-password", {
    method: "PATCH",
    body: { ...credentials },
  });
}
