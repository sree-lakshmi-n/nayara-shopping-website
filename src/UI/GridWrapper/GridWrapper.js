import "./GridWrapper.css";
import React from "react";

export default function GridWrapper(props) {
  return <div className={`grid ${props.className}`}>{props.children}</div>;
}
