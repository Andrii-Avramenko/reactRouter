import ProductList from "../components/ProductsList"
import { getProducts } from "../service"

const Products = () => {
    const products = getProducts()
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}

export default Products 