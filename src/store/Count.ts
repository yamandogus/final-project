import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Count{
    countBasket: number
}

interface CountProps{
    increaseCount: () => void,
    removeCount: () => void,
    resetCount: () => void
}

export const useStore = create(
    persist<Count & CountProps>(
        (set)=>({
            countBasket: 0,
            increaseCount: () => set((state)=> ({ countBasket: state.countBasket + 1})),
            removeCount: () => set((state) => ({countBasket: state.countBasket > 0 ? state.countBasket -1 : 0 })),
            resetCount: () => set(() => ({countBasket: 0})),
        }),
    {
        name: "count-basket",
        storage: createJSONStorage(()=> localStorage)
    }
))