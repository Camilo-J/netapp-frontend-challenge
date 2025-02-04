import { tryit } from "radashi";
import { Error } from "@/types/error";
import { changePassword } from "@/services/authServices";
import { toast } from "@/hooks/use-toast";

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

    if (error) {
      toast({
        title: "Cambio de Contraseña",
        description: "Ocurrió un error al cambiar la contraseña",
      });
    }

    if (!error) {
      toast({
        title: "Cambio de Contraseña",
        description: "Tu contraseña ha sido cambiada con éxito",
      });
    }

    return {
      message: error?.message || "",
      password: credentials.get("password") as string,
      newPassword: credentials.get("newPassword") as string,
    };
  };
}
