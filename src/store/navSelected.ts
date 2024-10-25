import { create } from 'zustand';

interface SelectedSectionState {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

export const useSelectedSectionStore = create<SelectedSectionState>((set) => ({
  selectedSection: 'home',
  setSelectedSection: (section: string) => set({ selectedSection: section }),
}));
