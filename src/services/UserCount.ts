import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Count{
    userCartBasket: number
}

interface CountProps{
    increaseCountUserCart: () => void,
    removeCountUserCart: () => void,
    decreaseCountUserCart:()=>void,
}

const locaUserCart = localStorage.getItem("login-user-carts");
const locaUserCartParse = locaUserCart && JSON.parse(locaUserCart)
const locaUserCartCount = locaUserCartParse?.data?.items?.length || 0
console.log(locaUserCartCount);

export const useStoreUserCart = create(
    persist<Count & CountProps>(
        (set)=>({
            userCartBasket: locaUserCartCount? locaUserCartCount : 0,
            increaseCountUserCart: () => set((state)=> ({ userCartBasket: state.userCartBasket + 1})),
            decreaseCountUserCart: () => set((state)=> ({ userCartBasket: state.userCartBasket - 1})),
            removeCountUserCart: () => set((state) => ({userCartBasket: state.userCartBasket > 0 ? state.userCartBasket -1 : 0 }))
        }),
    {
        name: "count-basket",
        storage: createJSONStorage(()=> localStorage)
    }
))