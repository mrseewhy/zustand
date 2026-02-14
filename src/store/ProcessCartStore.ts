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
    inc: (id: number) => void,
    dec: (id: number) => void,
    rem: (id: number) => void,
    totalPrice: () => void

}





export const useProcessCartStore = create<CartState>((set, get) => {
    return ({
        cart: [],
        addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] })),
        inc: (id) =>
            set((state) => ({
                cart: state.cart.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            })),

        dec: (id) => {
            set((state) => ({
                cart: state.cart.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ).filter(item => item.quantity > 0)
            }))
        },
        rem: (id) => {
            set(state => ({
                cart: state.cart.filter((item) =>
                    item.id !== id
                )
            }))
        },

        totalPrice: () => {
            const cart = get().cart
            return cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    })

})