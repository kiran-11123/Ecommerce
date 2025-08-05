import { atom } from 'recoil';

// Stores total cart price
export const cartValue = atom<number>({
  key: 'cartValue',
  default: 0,
});

// Stores total cart item count
export const cartCount = atom<number>({
  key: 'cartCount',
  default: 0,
});
