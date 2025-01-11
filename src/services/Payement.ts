import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Payment{
    img: string;
    gram: number | undefined;
    name: string;
    aroma: string;
    price: number;
    count: number;
}

interface PaymentProps{
    img: string,
    price: number,
    name: string,
    aroma: string,
    gram: number,
    count: number,
    setImg: (payload: string) => void,
    setPrice: (payload: number) => void,
    setName: (payload: string) => void,
    setAroma: (payload: string) => void,
    setGram: (payload: number) => void,
    increaseCount: (index: number) => void,
    removeCountDrawer: (index: number)=> void,
    basketItems:Payment[],
    addBasketItems: (newItems: Payment) => void;  
    removeItems: (index: number) => void;
    clearBasket : () => void;
}

export const usePaymentStore = create(
    persist<PaymentProps>(
        (set)=>({
            img:"",
            price:0,
            name:"",
            aroma:"",
            gram:0,
            count:1,
            setImg:(payload: string) => set({img: payload}),
            increaseCount: (index: number) => set((state)=> { 
                const newBasketItems = [...state.basketItems];
                newBasketItems[index].count += 1;
                return{basketItems: newBasketItems}}),
            removeCountDrawer: (index: number) => set((state)=> { 
                const newBasketItems = [...state.basketItems];
                newBasketItems[index].count -= 1;
                return{basketItems: newBasketItems}}),
            setPrice:(payload: number) => set({price: payload}),
            setName:(payload: string) => set({name: payload}),
            setAroma: (payload: string)=> set({aroma: payload}),
            setGram:(payload: number) => set({gram:payload}),
            basketItems:[],
            addBasketItems: (newItems: Payment) =>
                set((state) => ({ 
                    basketItems: [...state.basketItems, { ...newItems, count: newItems.count }] 
                })),
            removeItems: (index : number) =>
                set((state)=>({
                    basketItems: state.basketItems.filter((_, i)=> i !== index)
                })),
            clearBasket: () => {
                set({basketItems:[]});
                localStorage.removeItem("basketItems-storage");
            }
        }),
        {
            name: "basketItems-storage",
            storage: createJSONStorage(()=> localStorage)
        }
    )
)