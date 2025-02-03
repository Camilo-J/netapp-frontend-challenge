import { tryit } from "radashi";
import { useUserStore } from "@/store/user";
type Error = {
  message: string;
};

export function loginAction() {
  return async (_error: Error, credentials: FormData) => {
    const login = useUserStore.getState().login;

    const [error] = await tryit(login)({
      email: credentials.get("email") as string,
      password: credentials.get("password") as string,
    });

    return { message: error?.message || "" };
  };
}
