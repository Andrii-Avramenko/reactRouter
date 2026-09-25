import { useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductsList";
import { getProducts } from "../service";
import { SearchBox } from "../components/SearchBox";

const Products = () => {
  const [search, setSearch] = useSearchParams();
  const productName = search.get("name") ?? "";
  const products = getProducts();

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearch(nextParams);
  };

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase()),
  );

  return (
    <>
      <SearchBox search={productName} onChange={updateQueryString} />
      {/* <ProductList products={products}/> */}
      <ProductList products={visibleProducts} />
    </>
  );
};

export default Products;
