import "./NavOptions.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import { Link } from "react-router-dom";

export default function NavOptions() {
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
      option: "cart",
      icon: "cart",
    },
  ];
  return (
    <nav className="nav__options">
      <FlexWrapper
        className="nav__options-wrapper flex-center-align"
        element="ul"
      >
        {options.map((option, index) => (
          <FlexWrapper key={index} className="nav-option-item" element="ul">
            <Link to={`/${option.option}`}>
              {" "}
              <ion-icon name={`${option.icon}-outline`}></ion-icon>
            </Link>
            <span className="option-label">{option.option}</span>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </nav>
  );
}
