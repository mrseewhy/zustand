import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { useProcessCartStore } from "../store/ProcessCartStore"



interface CardPropsContent {
    price: number,
    description: string,
    title: string,
    id: number
}

export function CardImage({ product }: CardPropsContent) {
    const { addToCart, cart, dec, inc } = useProcessCartStore()
    const cartItem = cart.find((item) => (product.id === item.id))
    const quantity = cartItem ? cartItem.quantity : 0
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0" >
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">${product.price}</Badge>
                </CardAction>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>
                    {product.description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                {quantity === 0 ? (
                    <Button onClick={() => addToCart(product)} className="w-full">Add To Cart</Button>
                ) : (
                    <div className="flex flex-row gap-4 items-center">
                        <Button onClick={() => dec(product.id)} >-</Button>
                        <span>{quantity}</span>
                        <Button onClick={() => inc(product.id)} >+</Button>
                    </div>
                )}
            </CardFooter>
        </Card >
    )
}
