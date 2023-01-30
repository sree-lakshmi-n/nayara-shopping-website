import "./Login.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import logo from "../../images/logo.png";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FlexWrapper className="login flex-dirn-col" element="div">
      <Link to="/">
        <img src={logo} alt="Nayara logo" className="login-logo" />
      </Link>
      <div className="login-container">
        <h2 className="login-title">Sign-in</h2>

        <form className="login-form">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Password"
          />
          <button className="btn btn-login-submit" type="submit">
            Sign In
          </button>
          <button className="btn ">New to Nayara? Sign Up</button>
        </form>
      </div>
    </FlexWrapper>
  );
}
