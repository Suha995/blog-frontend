import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const [isError, setIsError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(null);
    setPassError(null);
    setIsError(null);
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        setEmailError(data.errors.email);
        setPassError(data.errors.password);
        return;
      }
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setIsError("Sth went wrong" + err);
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      {isError && <span>{isError}</span>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <div className="error">{emailError}</div>}

        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passError && <div className="error">{passError}</div>}
        <button>Login</button>
        <span>
          Don't have an account? <Link to={"/register"}>Create one now.</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
