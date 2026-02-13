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

interface CardPropsContent {
    price: number,
    description: string,
    title: string
}

export function CardImage({ price, description, title }: CardPropsContent) {
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
                    <Badge variant="secondary">${price}</Badge>
                </CardAction>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">Add To Cart</Button>
            </CardFooter>
        </Card>
    )
}
