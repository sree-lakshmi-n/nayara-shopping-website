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
        alert("Successfully signed out");
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
          <div
            onClick={handleAuthentication}
            className="header__option header__option-login"
          >
            {/* <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span> */}

            <ion-icon name="person-circle-outline"></ion-icon>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <FlexWrapper className="nav-option-item" element="div">
          <Link to="/checkout" className="cart-icon">
            {" "}
            <ion-icon name={`cart-outline`}></ion-icon>
          </Link>
          <span className="cart-total">{basket?.length}</span>
        </FlexWrapper>
      </FlexWrapper>
    </nav>
  );
}
