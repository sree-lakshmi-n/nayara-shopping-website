import React, { useEffect, useState } from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import Logo from "../Logo/Logo";
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
    <FlexWrapper className="flex-center-align nav__top" element="nav">
      <Logo />
      <nav className="nav__categories ">
        <FlexWrapper
          className="nav__categories-wrapper flex-center-align"
          element="ul"
        >
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              {category}
            </li>
          ))}
        </FlexWrapper>
      </nav>
      <nav className="nav__options">
        <FlexWrapper
          className="nav__options-wrapper flex-center-align"
          element="ul"
        >
          {options.map((option, index) => (
            <FlexWrapper key={index} className="nav-option-item" element="ul">
              <ion-icon name={`${option.icon}-outline`}></ion-icon>
              <span className="option-label">{option.option}</span>
            </FlexWrapper>
          ))}
        </FlexWrapper>
      </nav>
    </FlexWrapper>
  );
}
