import { Routes, Route } from "react-router-dom";
import Header from "../features/Header/Header";
import Nav from "../features/Nav/Nav";
import Registration from "../features/Registration/Registration";
import Login from "../features/Login/Login";
import ProductList from "../features/ProductList/ProductList";
import ProductDetail from "../features/ProductDetail/ProductDetail";
import Cart from "../features/Cart/Cart";
import OrderHistory from "../features/OrderHistory/OrderHistory";

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
