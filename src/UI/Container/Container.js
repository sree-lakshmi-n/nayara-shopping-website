import "./Container.css";
import React from "react";

export default function Container() {
  return <div className={`container ${props.className}`}>{props.children}</div>;
}
