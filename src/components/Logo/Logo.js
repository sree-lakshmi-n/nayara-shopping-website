import "./Logo.css";
import logo from "../../images/logo.png";
import React from "react";

export default function Logo() {
  return (
    <a href="#home" className="logo">
      <img src={logo} alt="Nayara logo" className="logo-img" />
    </a>
  );
}
