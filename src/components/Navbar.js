import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  console.log(user);
  return (
    <div className="navbar">
      <div className="links">
        <NavLink to={"/"}>Blog</NavLink>

        {user && <NavLink to={"/write"}>Write</NavLink>}
      </div>
      <div className="logo">
        <span>Daily Blog</span>
      </div>
      <div className="links">
        {user ? (
          <>
            <NavLink to={`/user/${user._id}`}>{user.email}</NavLink>
            <NavLink
              to={"/login"}
              onClick={() => {
                dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Log in</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
