import create from "zustand";

interface IIsCurrentScreen {
  selectedCurrentScreen: string;
  setSelectedCurrentScreen: (selectedCurrentScreen: string) => void;
}

export const useIsCurrentScreen = create<IIsCurrentScreen>((set) => ({
    selectedCurrentScreen: "",
    setSelectedCurrentScreen: (selectedCurrentScreen) => set({ selectedCurrentScreen }),
  }));
