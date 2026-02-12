import { create } from "zustand";

interface CountStore {
    count: number,
    inc: () => void;
    dec: () => void;
}

export const useCountStore = create<CountStore>((set) => ({
    count: 1,
    inc: () => set((state) => {

        return { count: state.count + 1 }

    }),
    dec: () => set((state) => {
        let newCount = state.count;
        if (newCount <= 0) {
            newCount = 0

        } else {
            newCount = newCount - 1
        }

        return { count: newCount }
    })

}))