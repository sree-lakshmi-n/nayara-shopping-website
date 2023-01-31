import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import logo from "../../images/logo.png";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import { useStateValue } from "../../StateProvider";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [{ basket, user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMsg(
          errorCode
            .split("/")[1]
            .split("-")
            .map((e) => e[0].toUpperCase() + e.substring(1))
            .join(" ")
        );
      });
  };
  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (userCredential) navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(
          errorCode
            .split("/")[1]
            .split("-")
            .map((e) => e[0].toUpperCase() + e.substring(1))
            .join(" ")
        );
        // ..
      });
  };

  return (
    <FlexWrapper className="login flex-dirn-col" element="div">
      <Link to="/">
        <img src={logo} alt="Nayara logo" className="login-logo" />
      </Link>
      <div className="login-container">
        <h2 className="login-title">Sign-in</h2>
        <span className="error">{errorMsg}</span>
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="btn btn-login-submit"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <button className="btn" onClick={signUp}>
            New to Nayara? Sign Up
          </button>
        </form>
      </div>
    </FlexWrapper>
  );
}
