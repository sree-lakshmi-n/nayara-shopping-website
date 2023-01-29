import "./ProductImageBox.css";
import React from "react";

export default function ProductImageBox(props) {
  return (
    <div className="pdt-image-wrapper">
      <img src={props.image} alt="product" className="pdt-img" />
    </div>
  );
}
