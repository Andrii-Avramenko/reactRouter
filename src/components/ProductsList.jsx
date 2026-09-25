import { CardWrapper, Container, ProductName } from "./ProductsList.styled";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  console.log(products)
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default ProductList;
