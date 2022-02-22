import { useDispatch } from "react-redux";
import { submitLogout } from "../../common/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(submitLogout())}>Logout</button>;
};

export default Logout;
