import { tryit } from "radashi";
import { useUserStore } from "@/store/user";
import { removeEmptyValues } from "@/utils/cleanEmptyValues";
import { Error } from "@/types/error";

export function updateUserAction() {
  return async (_error: Error, credentials: FormData) => {
    const updateUser = useUserStore.getState().updateUser;
    const [error] = await tryit(updateUser)(
      removeEmptyValues({
        lastName: credentials.get("lastName") as string,
        name: credentials.get("name") as string,
        username: credentials.get("username") as string,
        email: credentials.get("email") as string,
      })
    );

    return { message: error?.message || "" };
  };
}
