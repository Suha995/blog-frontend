import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login-register.scss";
const Register = () => {
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
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
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
    <div className="register">
      <h2>Register</h2>
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
        <button>Register</button>
        <span>
          Already Registered? <Link to={"/login"}>Log in now.</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
