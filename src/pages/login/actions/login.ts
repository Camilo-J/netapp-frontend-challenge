import { tryit } from "radashi";
import { useUserStore } from "@/store/user";
import { Error } from "@/types/error";
import { toast } from "@/hooks/use-toast";

interface LoginError extends Error {
  email: string;
  password: string;
}

export function loginAction() {
  return async (_error: LoginError, credentials: FormData) => {
    const login = useUserStore.getState().login;

    const [error] = await tryit(login)({
      email: credentials.get("email") as string,
      password: credentials.get("password") as string,
    });

    if (error) {
      toast({
        title: "Inicio de Sesión",
        description: "Ocurrió un error al iniciar sesión",
      });
    }

    if (!error) {
      toast({
        title: "Inicio de Sesión",
        description: "Tu sesión ha sido iniciada con éxito",
      });
    }

    return {
      message: error?.message || "",
      email: (credentials.get("email") as string) || "",
      password: (credentials.get("password") as string) || "",
    };
  };
}
