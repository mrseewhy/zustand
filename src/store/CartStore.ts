import { create } from 'zustand'

interface Product {
    name: string
}

interface CartStore {
    products: Product[]
}

const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data
}
export const useCartStore = create<CartStore>((set) => (
    {
        products: getProducts()
    }
))