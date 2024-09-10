import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Payment{
    img: string;
    gram: number | undefined;
    name: string;
    aroma: string;
    price: number;
}

interface PaymentProps{
    img: string,
    price: number,
    name: string,
    aroma: string,
    gram: number,
    setImg: (payload: string) => void,
    setPrice: (payload: number) => void,
    setName: (payload: string) => void,
    setAroma: (payload: string) => void,
    setGram: (payload: number) => void,
    basketItems:Payment[],
    addBasketItems: (newItems: Payment) => void;  
    removeItems: (index: number) => void;
}

export const usePaymentStore = create(
    persist<PaymentProps>(
        (set)=>({
            img:"",
            price:0,
            name:"",
            aroma:"",
            gram:0,
            setImg:(payload: string) => set({img: payload}),
            setPrice:(payload: number) => set({price: payload}),
            setName:(payload: string) => set({name: payload}),
            setAroma: (payload: string)=> set({aroma: payload}),
            setGram:(payload: number) => set({gram:payload}),
            basketItems:[],
            addBasketItems: (newItems: Payment) =>
                set((state)=>({ basketItems: [...state.basketItems, newItems]})),
            removeItems: (index : number) =>
                set((state)=>({
                    basketItems: state.basketItems.filter((_, i)=> i !== index)
                }))
        }),
        {
            name: "basketItems-storage",
            getStorage: () => localStorage,
        }
    )
)