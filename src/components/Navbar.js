import "./navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const user = true;
  return (
    <div className="navbar">
      <div className="links">
        <NavLink to={"/"}>Blog</NavLink>
        {/* <NavLink to={"/single"}>Single</NavLink> */}
        <NavLink to={"/write"}>Write</NavLink>
      </div>
      <div className="logo">
        <span>Daily Blog</span>
      </div>
      <div className="links">
        <NavLink to={"/login"}>Log in</NavLink>
        {/* <NavLink to={"/single"}>Single</NavLink> */}
        <NavLink to={"/register"}>Register</NavLink>
        {user && <NavLink to={"/login"}>Logout</NavLink>}
      </div>
    </div>
  );
};

export default Navbar;
