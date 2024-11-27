import { create } from "zustand";

interface ISection {
  section: string;
  setSection: (section: string) => void;
}

export const useSection = create<ISection>((set) => ({
  section: "",
  setSection: (section) => set({ section }),
}));
