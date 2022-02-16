import { useState } from "react";
import axios from "axios";

function Login() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      username: email.value,
      password: password.value,
    };
    axios
      .post("http://localhost:5000/auth/login", user)
      .then((response) => {
        console.log("response", response);
        window.location = "/products";
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          setError(error.response.data);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <>
      <h2>Sign In!</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input type="email" name="email" id="email" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input type="password" name="password" id="password" required />
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="btn">
                {!error.length ? "" : <div className="error">{error}</div>}
                <input type="submit" value="Sign In!" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="third-party-login">
        <a href="http://localhost:5000/auth/google">Sign in with Google</a>
        <a href="http://localhost:5000/auth/facebook">Sign in with Facebook</a>
      </div>
    </>
  );
}

export default Login;
