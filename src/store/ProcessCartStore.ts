import { create } from 'zustand'

interface Product {
    title: string,
    id: number,
    description: string,
    price: number
}

interface CartState {
    cart: Product[]
}

const useProcessCartStore = create<CartState>((set) => {
    return ({
        cart: []
    })
})