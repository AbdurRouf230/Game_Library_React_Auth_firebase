import { Link, NavLink } from "react-router";
import logoLink from "../../assets/logo_game_dev_library.png";
import "./Navbar.css";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContexts/AuthContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [webtitle, setWebTitle] = useState(document.title);
  useEffect(() => {
    document.title = webtitle;
  }, [webtitle]);

  const links = (
    <div className="flex gap-8 text-[15px] font-semibold rounded-xl">
      <NavLink to="/" onClick={() => setWebTitle("Home")}>
        Home
      </NavLink>

      {user ? (
        <>
          <NavLink to="/profile" onClick={() => setWebTitle("Profile")}>
            Profile
          </NavLink>
          <NavLink
            to="/updateprofile"
            onClick={() => setWebTitle("Update Profile")}
          >
            Update Profile
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login" onClick={() => setWebTitle("Login")}>
            Login
          </NavLink>

          <NavLink to="/register" onClick={() => setWebTitle("Register")}>
            Register
          </NavLink>
        </>
      )}
    </div>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully signed out", {
          position: "top-left",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        toast.error("Sign out failed", {
          position: "top-left",
          autoClose: 5000,
        });
      });
  };

  const listItems = (
    <>
      <li>
        <NavLink to="/" onClick={() => setWebTitle("Home")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" onClick={() => setWebTitle("Login")}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" onClick={() => setWebTitle("Register")}>
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 shadow-sm w-11/12 mx-auto mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {listItems}
          </ul>
        </div>
        <a to={"/"} className="btn btn-ghost text-xl">
          <img
            className="w-[60px] h-[60px]"
            src={logoLink}
            alt="logo of the web"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              className="h-[40px] w-[40px] rounded-4xl"
              src={user.photoURL}
              alt="Profile"
            />
            <Link onClick={handleSignOut} className="btn bg-base-300">
              Sign out
            </Link>
          </div>
        ) : (
          <Link
            to={"/login"}
            onClick={() => setWebTitle("Login")}
            className="btn bg-base-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
