import { create } from 'zustand'

interface Product {
    title: string,
    id: number,
    description: string,
    price: number
}

interface CartItem extends Product {
    quantity: number
}
interface CartState {
    cart: CartItem[]
    addToCart: (product: Product) => void,
    quantity: number

}





export const useProcessCartStore = create<CartState>((set) => {
    return ({
        cart: [],
        addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] })),
        quantity: 1
    })
})