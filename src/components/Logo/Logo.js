import "./Logo.css";
import logo from "../../images/logo.png";
import React from "react";

export default function Logo() {
  return (
    <button className="logo">
      <img src={logo} alt="company logo" className="logo-img" />
    </button>
  );
}
