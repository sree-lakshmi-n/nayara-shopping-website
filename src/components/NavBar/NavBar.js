import React, { useEffect } from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";

export default function NavBar() {
  let categories = "";
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => (categories = json));
  }, []);
  return (
    <nav>
      <button className="logo">
        <img src={logo} alt="company logo" className="logo-img" />
      </button>
      <nav className="nav__categories">
        <ul className="nav__categories-wrapper">{categories}</ul>
      </nav>
    </nav>
  );
}
