import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    color: isActive ? "#2563eb" : "#374151",
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#f3f4f6",
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>
      <NavLink to="/product" style={linkStyle}>
        Product
      </NavLink>
    </nav>
  );
};

export default Navbar;
