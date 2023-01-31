import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import Logo from "../Logo/Logo";
import NavCategories from "../NavCategories/NavCategories";
import NavOptions from "../NavOptions/NavOptions";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="main-nav">
      <FlexWrapper className="flex-center-align nav__top" element="nav">
        <Logo />
        <NavCategories categories={props.categories} />
        <NavOptions />
      </FlexWrapper>
    </header>
  );
}
