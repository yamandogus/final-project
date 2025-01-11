
import { create } from "zustand";
import { CartItem } from "../services/Type";
import { persist } from "zustand/middleware";

interface CartData {
  items: CartItem[];
  total_price: number;
}

interface CartStore {
  cartData: CartData | null;
  initializeCart: (data: CartData) => void;
  updateCartData: (data: CartData) => void;
}

export const userCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartData: null,

      initializeCart: (data) =>
        set(() => ({
          cartData: data,
        })),
      updateCartData: (data) =>
        set(() => ({
          cartData: data,
        })),
    }),
    {
      name: "cart-store",
    }
  )
);
