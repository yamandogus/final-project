import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Address {
  title: string;
  address: string;
  city: string;
  district: string;
  firstName: string;
  lastName: string;
  phone: string;
}

interface AddressesProps {
  title: string;
  address: string;
  city: string;
  district: string;
  firstName: string;
  lastName: string;
  phone: string;
  setTitle: (payload: string) => void;
  setAddress: (payload: string) => void;
  setCity: (payload: string) => void;
  setDistrict: (payload: string) => void;
  setFirstName: (payload: string) => void;
  setLastName: (payload: string) => void;
  setPhone: (payload: string) => void;
  addresses: Address[];
  addAddress: (newAddress: Address) => void;
  removeAddress: (index: number) => void;
}

export const useAddressesStore = create(
  persist<AddressesProps>(
    (set) => ({
      title: "",
      address: "",
      city: "",
      district: "",
      firstName: "",
      lastName: "",
      phone: "",
      setTitle: (payload: string) => set({ title: payload }),
      setAddress: (payload: string) => set({ address: payload }),
      setCity: (payload: string) => set({ city: payload }),
      setDistrict: (payload: string) => set({ district: payload }),
      setFirstName: (payload: string) => set({ firstName: payload }),
      setLastName: (payload: string) => set({ lastName: payload }),
      setPhone: (payload: string) => set({ phone: payload }),
      addresses: [],
      addAddress: (newAddress: Address) =>
        set((state) => ({ addresses: [...state.addresses, newAddress] })),
      removeAddress: (index: number) =>
        set((state) => ({
          addresses: state.addresses.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "addresses-storage",
      getStorage: () => localStorage,
    }
  )
);
