import { tryit } from "radashi";
import { useUserStore } from "@/store/user";

type Error = {
  message: string;
};

export function registerAction() {
  return async (_error: Error, credentials: FormData) => {
    const signup = useUserStore.getState().signup;
    const [error] = await tryit(signup)({
      lastName: credentials.get("lastName") as string,
      name: credentials.get("name") as string,
      username: credentials.get("username") as string,
      email: credentials.get("email") as string,
      password: credentials.get("password") as string,
    });

    return { message: error?.message || "" };
  };
}
