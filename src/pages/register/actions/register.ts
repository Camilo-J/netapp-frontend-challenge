import { tryit } from "radashi";
import { useUserStore } from "@/store/user";
import { Error } from "@/types/error";
import { toast } from "@/hooks/use-toast";

interface RegisterError extends Error {
  lastName: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export function registerAction() {
  return async (_error: RegisterError, credentials: FormData) => {
    const signup = useUserStore.getState().signup;
    const [error] = await tryit(signup)({
      lastName: credentials.get("lastName") as string,
      name: credentials.get("name") as string,
      username: credentials.get("username") as string,
      email: credentials.get("email") as string,
      password: credentials.get("password") as string,
    });

    if (error) {
      toast({
        title: "Registro de Usuario",
        description: "Ocurrió un error al registrar el usuario",
      });
    }

    if (!error) {
      toast({
        title: "Registro de Usuario",
        description: "Tu usuario ha sido registrado con éxito",
      });
    }

    return {
      message: error?.message || "",
      lastName: credentials.get("lastName") as string,
      name: credentials.get("name") as string,
      username: credentials.get("username") as string,
      email: credentials.get("email") as string,
      password: credentials.get("password") as string,
    };
  };
}
