import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import Logo from "../Logo/Logo";
import NavCategories from "../NavCategories/NavCategories";
import NavOptions from "../NavOptions/NavOptions";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="main-nav">
      <FlexWrapper className="flex-center-align nav__top" element="nav">
        <Logo />
        <NavCategories />
        <NavOptions />
      </FlexWrapper>
    </header>
  );
}
