import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toLight: () => void;
  toDark: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  toLight: () => set({ theme: "light" }),
  toDark: () => set({ theme: "dark" }),
}));
