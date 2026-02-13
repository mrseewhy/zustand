import { create } from 'zustand'

interface Product {
    title: string,
    id: number,
    description: string,
    price: number
}

interface CartStore {
    products: Product[],
    fetchProducts: () => Promise<void>
}


export const useCartStore = create<CartStore>((set) => (
    {
        products: [],
        fetchProducts: async () => {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            set({ products: data.products })
        }
    }
))