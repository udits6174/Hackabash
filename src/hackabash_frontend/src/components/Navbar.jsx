import React from 'react';
import { NavLink } from "react-router-dom";
import "../../assets/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <NavLink exact to="/" className="nav-logo">
            <img src="hackabash_logo.png" alt="Logo" />
            {/* <img src="https://i.imgur.com/fK9OhNg.png" alt="logo"/> */}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
