import { Outlet } from "react-router-dom";
import { Container, Header, Logo, StyledLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo href="/">Brand Name</Logo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
