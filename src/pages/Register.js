import { Link } from "react-router-dom";
import "./login-register.scss";
const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <p>There is an error!</p>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input type="password" required />
        <button>Register</button>
        <span>
          Already Registered? <Link to={"/login"}>Log in now.</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
