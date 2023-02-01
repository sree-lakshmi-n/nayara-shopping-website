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
import Container from "../../UI/Container/Container";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const [{ basket, user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/", { replace: true });
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
        if (userCredential) navigate("/", { replace: true });
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
  const signInHandler = () => {
    setErrorMsg("");
    setIsSignUp(false);
  };
  const signUpHandler = () => {
    setErrorMsg("");
    setIsSignUp(true);
  };

  return (
    <Container>
      <Link to="/" className="btn-back-arrow">
        <ion-icon name="arrow-back-outline" className="back-arrow"></ion-icon>
      </Link>
      <FlexWrapper className="login flex-dirn-col" element="div">
        <Link to="/">
          <img src={logo} alt="Nayara logo" className="login-logo" />
        </Link>
        <div className="login-container">
          <h2 className="login-title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <span className="error">{errorMsg}</span>
          <form className="login-form">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMsg("");
              }}
              placeholder="Email Address"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
              placeholder="Password"
            />
            {!isSignUp && (
              <>
                <button
                  className="btn btn-login-submit"
                  type="submit"
                  onClick={signIn}
                >
                  Sign In
                </button>
                <p>
                  New to Nayara?{" "}
                  <span onClick={signUpHandler} className="login-link">
                    Sign Up
                  </span>
                </p>
              </>
            )}
            {isSignUp && (
              <>
                <button
                  className="btn btn-login-submit"
                  type="submit"
                  onClick={signUp}
                >
                  Sign Up
                </button>
                <p>
                  Already have an account?{" "}
                  <span className="login-link" onClick={signInHandler}>
                    Sign In
                  </span>
                </p>
              </>
            )}
          </form>
        </div>
      </FlexWrapper>
    </Container>
  );
}
