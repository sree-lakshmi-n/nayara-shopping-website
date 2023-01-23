import "./FlexWrapper.css";
import React from "react";

export default function FlexWrapper(props) {
  return <div className={`flex ${props.className}`}>{props.children}</div>;
}
