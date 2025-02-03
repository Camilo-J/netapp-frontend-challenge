import { create } from "zustand";
import { User } from "@/types/user.ts";
import { getUser, updateUser } from "@/services/userServices.ts";
import { login, logout, signup } from "@/services/authServices.ts";
import { Credentials } from "@/types/auth.ts";

interface UserState {
  user: User | null;
  getUser: (userId: number) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  signup: (credentials: Partial<User>) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => Promise<void>;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  getUser: async (userId: number) => {
    const response = await getUser(userId);
    set({ user: response });
  },
  login: async (credentials: Credentials) => {
    const user = await login(credentials);
    set({ user });
  },
  signup: async (credentials: Partial<User>) => {
    const user = await signup(credentials);
    set({ user });
  },
  logout: async () => {
    await logout();
    set({ user: null });
  },
  updateUser: async (userData: Partial<User>) => {
    const response = await updateUser(userData);
    set({ user: response });
  },
}));
