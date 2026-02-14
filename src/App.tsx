import { CardImage } from "./components/Cards"
import { useCartStore } from "./store/CartStore"
import { useEffect } from "react"
import { useProcessCartStore } from "./store/ProcessCartStore"


const App = () => {

  const { products, fetchProducts } = useCartStore()


  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])


  return (
    <div className="w-5/6 mx-auto grid place-items-center grid-cols-2 gap-4 my-12">

      {!products && <p className="text-4xl">Loading ...</p>}
      {products && products.map((product, index) => {
        return (
          <CardImage key={product.id.toString() + index} product={product} />
        )
      })}

    </div>
  )
}

export default App