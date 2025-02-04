import { create } from "zustand";
import { Photo } from "@/types/photo";
import { getPhotos } from "@/services/photoServices";

interface PhotoState {
  photos: Photo[];
  searchTerm: string;
  filterSelected: string;
  setPhotos: (photos: string) => Promise<void>;
  setSearchTerm: (searchTerm: string) => void;
  setFilterSelected: (filterSelected: string) => void;
  resetValues: () => void;
}

export const usePhotoStore = create<PhotoState>()((set) => ({
  photos: [],
  searchTerm: "",
  filterSelected: "",
  setSearchTerm: (searchTerm: string) => {
    set({ searchTerm });
  },
  setFilterSelected: (filterSelected: string) => {
    set({ filterSelected });
  },
  setPhotos: async (searchTerms) => {
    const photos = await getPhotos(searchTerms);
    set({ photos });
  },
  resetValues: () => {
    set({ photos: [], searchTerm: "", filterSelected: "" });
  },
}));
