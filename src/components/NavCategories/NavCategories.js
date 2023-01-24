import "./NavCategories.css";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import React from "react";

export default function NavCategories(props) {
  return (
    <nav className="nav__categories ">
      <FlexWrapper
        className="nav__categories-wrapper flex-center-align"
        element="ul"
      >
        {props.categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
          </li>
        ))}
      </FlexWrapper>
    </nav>
  );
}
