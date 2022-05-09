import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Registration from "../routes/Registration/Registration";
import Login from "../routes/Login/Login";
import ProductList from "../routes/ProductList/ProductList";
import ProductDetail from "../routes/ProductDetail/ProductDetail";
import Cart from "../routes/Cart/Cart";
import OrderHistory from "../routes/OrderHistory/OrderHistory";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <section>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<OrderHistory />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
