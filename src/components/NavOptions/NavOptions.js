import "./NavOptions.css";
import React, { useEffect, useState } from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

export default function NavOptions(props) {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        console.log("Sign-out successful.");
      });
    }
  };

  return (
    <nav className="nav__options">
      <FlexWrapper
        className="nav__options-wrapper flex-center-align"
        element="ul"
      >
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user}
            </span>
            <br />
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <FlexWrapper className="nav-option-item" element="ul">
          <Link to="/checkout">
            {" "}
            <ion-icon name={`cart-outline`}></ion-icon>
          </Link>
          <span className="cart-total">{basket?.length}</span>
          <span className="option-label">Cart</span>
        </FlexWrapper>
      </FlexWrapper>
    </nav>
  );
}
