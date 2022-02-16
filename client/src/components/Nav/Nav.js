import { Link } from "react-router-dom";
import Logout from "./Logout/Logout";

function Nav() {
  return (
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order History</Link>
      <Logout />
      <Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link>
    </nav>
  );
}

export default Nav;
