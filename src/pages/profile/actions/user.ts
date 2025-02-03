import { tryit } from "radashi";
import { useUserStore } from "@/store/user";
import { removeEmptyValues } from "@/utils/cleanEmptyValues";
import { Error } from "@/types/error";

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

    return { message: error?.message || "" };
  };
}
