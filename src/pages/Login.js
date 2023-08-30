import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setloginError] = useState(null);
  const { user, dispatch, error, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloginError(null);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) {
        setloginError(data.errors.email || data.errors.password);
        return;
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      // window.location.href = "/"; // you don't need it any more because the the context changed and it
      //causes every other component that access it to rerender so the app will rerender
    } catch (err) {
      console.error(err);
      dispatch("LOGIN_FAILURE");
    }
  };
  console.log(error);
  console.log(user);
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={isFetching ? { cursor: "not-allowed" } : null}>
          Login
        </button>
        {loginError && <div className="loginError">{loginError}</div>}
        <span>
          Don't have an account? <Link to={"/register"}>Create one now.</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
