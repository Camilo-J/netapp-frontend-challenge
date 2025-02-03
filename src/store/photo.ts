import { create } from "zustand";
import { Photo } from "@/types/photo";
import { getPhotos } from "@/services/photoServices";

interface PhotoState {
  photos: Photo[];
  searchTerm: string;
  setPhotos: (photos: string) => Promise<void>;
  setSearchTerm: (searchTerm: string) => void;
  resetValues: () => void;
}

export const usePhotoStore = create<PhotoState>()((set) => ({
  photos: [],
  searchTerm: "",
  setSearchTerm: (searchTerm: string) => {
    set({ searchTerm });
  },
  setPhotos: async (searchTerms) => {
    const photos = await getPhotos(searchTerms);
    set({ photos });
  },
  resetValues: () => {
    set({ photos: [], searchTerm: "" });
  },
}));
