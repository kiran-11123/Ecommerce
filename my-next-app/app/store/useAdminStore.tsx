import { create } from 'zustand';

type AdminState = {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
};



export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,
  setIsAdmin: (value) => set({ isAdmin: value }),
}));
