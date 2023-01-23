import "./NavOptions.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

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
      option: "profile",
      icon: "bag",
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
            <ion-icon name={`${option.icon}-outline`}></ion-icon>
            <span className="option-label">{option.option}</span>
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </nav>
  );
}
