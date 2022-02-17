import axios from "axios";

const Logout = () => {
  const handleClick = (e) => {
    axios
      .post("/api/auth/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
