import { tryit } from "radashi";
import { usePhotoStore } from "@/store/photo";

type Error = {
  message: string;
};

export function searchPhotosAction() {
  return async (_error: Error, value: FormData) => {
    const searchPhotos = usePhotoStore.getState().setPhotos;

    const queryValue = value.get("search") as string;
    const [error] = await tryit(searchPhotos)(`query=${queryValue}`);

    return { message: error?.message || "" };
  };
}
