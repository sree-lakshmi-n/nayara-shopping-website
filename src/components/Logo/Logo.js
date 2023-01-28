import "./Logo.css";
import logo from "../../images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Nayara logo" className="logo-img" />
    </Link>
  );
}
