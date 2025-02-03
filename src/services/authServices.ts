import { Credentials, LoginResponse } from "@/types/auth";
import { tokenKey } from "@/constants/setting.ts";
import { User } from "@/types/user";
import collectionClient from "./collection-client";
import Cookies from "js-cookie";

export async function login(credentials: Credentials) {
  const { user, token, refreshToken } = await collectionClient<LoginResponse>(
    "/auth/login",
    {
      body: { ...credentials },
    }
  );

  Cookies.set(tokenKey, token);
  Cookies.set("userId", JSON.stringify(user.id));
  Cookies.set("refreshToken", refreshToken);
  return user;
}

export async function signup(userData: Partial<User>) {
  const response = await collectionClient<LoginResponse>("/auth/signup", {
    body: { ...userData },
  });

  Cookies.set("userId", JSON.stringify(response.user.id));
  Cookies.set(tokenKey, response.token);
  Cookies.set("refreshToken", response.refreshToken);
  return response.user;
}

export async function logout() {
  await collectionClient("/auth/logout", {
    method: "DELETE",
    body: { refreshToken: Cookies.get("refreshToken") },
  });

  Cookies.remove("userId");
  Cookies.remove(tokenKey);
  Cookies.remove("refreshToken");
}

export async function changePassword(credentials: Credentials) {
  await collectionClient("/auth/change-password", {
    method: "PATCH",
    body: { ...credentials },
  });
}
