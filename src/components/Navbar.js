import "./navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const user = true;
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span>Daily Blog</span>
        </div>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          {/* <NavLink to={"/single"}>Single</NavLink> */}
          <NavLink to={"/write"}>New Blog</NavLink>
          {user && <NavLink to={"/login"}>Logout</NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
