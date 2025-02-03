import collectionClient from "./collection-client";
import { User } from "@/types/user.ts";
import { omit } from "radashi";
import { tokenKey } from "@/constants/setting.ts";
import Cookies from "js-cookie";

export async function updateUser(userData: Partial<User>) {
  const userId = Cookies.get("userId");
  const response = await collectionClient<User>(`/users/${userId}`, {
    method: "PATCH",
    body: userData,
  });

  sessionStorage.setItem(tokenKey, response.token as string);
  return omit(response, ["token"]);
}

export async function getUser(userId: number) {
  const response = await collectionClient<User>(`/users/${userId}`);

  return omit(response, ["token"]);
}
