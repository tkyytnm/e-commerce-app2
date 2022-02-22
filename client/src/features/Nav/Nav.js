import { Link } from "react-router-dom";
import Logout from "./Logout/Logout";
import { isLoggedInSelect, userNameSelect } from "../common/authSlice";
import { useSelector } from "react-redux";

function Nav() {
  const isLoggedIn = useSelector(isLoggedInSelect);
  const userName = useSelector(userNameSelect);
  return (
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order History</Link>

      {isLoggedIn ? (
        <>
          <span>{userName}</span>
          <Logout />
        </>
      ) : (
        <>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sign in</Link>
        </>
      )}
    </nav>
  );
}

export default Nav;
