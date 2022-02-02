import { useState } from "react";
import axios from "axios";

function Registration() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    axios
      .post("http://localhost:5000/auth/register", user)
      .then((response) => {
        console.log(response);
        window.location = "/products";
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input type="name" name="name" id="name" required />
              </td>
            </tr>
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
                <input type="submit" value="Sign Up!" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Registration;
