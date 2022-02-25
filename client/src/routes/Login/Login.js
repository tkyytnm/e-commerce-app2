import { useSelector, useDispatch } from "react-redux";
import { submitLogin, isSubmittingSelect } from "../../store/authSlice";

function Login() {
  const dispatch = useDispatch();
  const isSubmitting = useSelector(isSubmittingSelect);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      username: email.value,
      password: password.value,
    };
    dispatch(submitLogin(user));
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
                {/* {!error.length ? "" : <div className="error">{error}</div>} */}
                {isSubmitting ? "submitting" : ""}
                <input type="submit" value="Sign In!" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="third-party-login">
        <a href="/api/auth/google">Sign in with Google</a>
        <a href="/api/auth/facebook">Sign in with Facebook</a>
      </div>
    </>
  );
}

export default Login;
