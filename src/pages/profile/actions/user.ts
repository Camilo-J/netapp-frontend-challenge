import { tryit } from "radashi";
import { useUserStore } from "@/store/user";
import { removeEmptyValues } from "@/utils/cleanEmptyValues";
import { Error } from "@/types/error";
import { toast } from "@/hooks/use-toast";

export function updateUserAction() {
  return async (_error: Error, userInformation: FormData) => {
    const updateUser = useUserStore.getState().updateUser;
    const [error] = await tryit(updateUser)(
      removeEmptyValues({
        lastName: userInformation.get("lastName") as string,
        name: userInformation.get("name") as string,
        username: userInformation.get("username") as string,
        email: userInformation.get("email") as string,
      })
    );

    if (error) {
      toast({
        title: "Actualización de Usuario",
        description: "Ocurrió un error al actualizar el usuario",
      });
    }

    if (!error) {
      toast({
        title: "Actualización de Usuario",
        description: "Tu usuario ha sido actualizado con éxito",
      });
    }

    return { message: error?.message || "" };
  };
}
