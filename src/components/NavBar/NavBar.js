import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";

export default function NavBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const options = [
    {
      option: "profile",
      icon: "person",
    },
    {
      option: "wishlist",
      icon: "heart",
    },
    {
      option: "profile",
      icon: "bag",
    },
  ];
  return (
    <nav className="nav__top">
      <button className="logo">
        <img src={logo} alt="company logo" className="logo-img" />
      </button>
      <nav className="nav__categories">
        <ul className="nav__categories-wrapper">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="nav__options">
        <ul className="nav__options-wrapper">
          {options.map((option, index) => (
            <li key={index} className="nav-option-item">
              <ion-icon name={`${option.icon}-outline`}></ion-icon>
              <span className="option-label">{option.option}</span>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
}
