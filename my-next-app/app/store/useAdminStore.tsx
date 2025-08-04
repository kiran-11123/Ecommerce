import { create } from 'zustand';

type AdminState = {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
};



export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,
  setIsAdmin: (value) => set({ isAdmin: value }),
}));


interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
  reset: () => set({ count: 0 }),
  setCount: (value: number) => set({ count: value }),
}));


