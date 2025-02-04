import { PEXEL_KEY, PEXEL_URL } from "@/constants/setting";
import { SearchResponse } from "@/types/photo";
import { tryit } from "radashi";

export async function getPhotos(query: string) {
  const response = await fetch(
    `${PEXEL_URL}/search${query ? `?${query}` : ""}&per_page=16`,
    { headers: { Authorization: PEXEL_KEY } }
  );

  const [error, photosResult] = await tryit(
    async () => (await response.json()) as SearchResponse
  )();

  if (error) return [];

  return photosResult.photos;
}
