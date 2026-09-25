import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./components/Mission";
import Team from "./components/team";
import Reviews from "./components/Reviews";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/404";
import { SharedLayout } from "./components/SharedLayout";

// const StyledLink = styled(NavLink)`
//   color: tomato;
//   margin: 20px;
//   font-size: 24px;
//   text-decoration: none;
//   text-transform: uppercase;
//   font-weight: 600;

//   &.active {
//     color: green;
//   }
// `;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<ProductDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
