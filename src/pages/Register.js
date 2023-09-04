import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../context/Context";
import "./login-register.scss";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const { user, dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const data = await res.json();
      if (!res.ok) {
        setRegisterError(data.errors.email || data.errors.password);
        return;
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (err) {
      console.error(err);
      dispatch("LOGIN_FAILURE");
    }
  };
  console.log(user);
  return (
    <div className="register">
      <h2>Register</h2>

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
          Register
        </button>
        {registerError && <div className="loginError">{registerError}</div>}
        <span>
          Already Registered? <Link to={"/login"}>Log in now.</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
