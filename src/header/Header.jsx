import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-10 justify-center bg-sky-300 text-2xl p-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-red-400 rounded-lg px-2 text-white" : ""
        }
      >
        Home
      </NavLink>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
