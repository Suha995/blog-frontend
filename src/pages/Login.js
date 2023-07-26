import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <p>There is an error!</p>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <button>Login</button>
        <span>
          Don't have an account? <Link to={"/register"}>Create one now.</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
