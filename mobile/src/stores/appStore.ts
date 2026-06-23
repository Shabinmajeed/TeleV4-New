import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  language: string;
  setTheme: (theme: AppState['theme']) => void;
  setLanguage: (language: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'system',
  language: 'en',
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));
