import { tryit } from "radashi";
import { Error } from "@/types/error";
import { changePassword } from "@/services/authServices";

interface ChangePasswordError extends Error {
  password: string;
  newPassword: string;
}

export function changePasswordAction() {
  return async (_error: ChangePasswordError, credentials: FormData) => {
    const [error] = await tryit(changePassword)({
      password: credentials.get("password") as string,
      newPassword: credentials.get("newPassword") as string,
    });

    return {
      message: error?.message || "",
      password: credentials.get("password") as string,
      newPassword: credentials.get("newPassword") as string,
    };
  };
}
