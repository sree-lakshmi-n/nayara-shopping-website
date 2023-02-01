import "./FlexWrapper.css";
import React from "react";

export default function FlexWrapper(props) {
  return (
    <>
      {" "}
      {props.element === "nav" && (
        <nav className={`flex ${props.className || ""}`}>{props.children}</nav>
      )}
      {props.element === "div" && (
        <div className={`flex ${props.className || ""}`}>{props.children}</div>
      )}
      {props.element === "ul" && (
        <ul className={`flex ${props.className || ""}`}>{props.children}</ul>
      )}
      {props.element === "li" && (
        <li className={`flex ${props.className || ""}`}>{props.children}</li>
      )}
    </>
  );
}
