import { create } from 'zustand';

interface App {
  isHovering: boolean;
  setIsHovering: (val: boolean) => void;
}

export const useAppStore = create<App>((set) => ({
  isHovering: false,
  setIsHovering: (val: boolean) => {
    set({ isHovering: val });
  },
}));
