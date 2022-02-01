import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Products from "../Products/Products";
import ProductDetail from "../ProductDetail/ProductDetail";
import Cart from "../Cart/Cart";
import OrderHistory from "../OrderHistory/OrderHistory";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <section>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderHistory />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
