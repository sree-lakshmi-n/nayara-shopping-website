import "./Footer.css";
import React from "react";
import Logo from "../Logo/Logo";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function Footer() {
  return (
    <FlexWrapper className="footer flex-center-align " element="div">
      {" "}
      <Logo />
      <p className="copyright">
        Copyright &copy; 2023 by Nayara, Inc. All rights reserved.
      </p>
    </FlexWrapper>
  );
}
