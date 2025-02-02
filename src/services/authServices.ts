import collectionClient from "./collection-client";
import { User } from "@/types/user";
import { omit } from "radashi";
import { tokenKey } from "@/constants/setting.ts";
import { Credentials } from "@/types/auth";

export async function login(credentials: Credentials) {
  const response = await collectionClient<User>("/auth/login", {
    body: { ...credentials },
  });

  sessionStorage.setItem(tokenKey, response.token as string);
  return omit(response, ["token"]);
}

export async function signup(userData: Credentials) {
  const response = await collectionClient<User>("/auth/signup", {
    body: { ...userData },
  });

  sessionStorage.setItem(tokenKey, response.token as string);
  return omit(response, ["token"]);
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
