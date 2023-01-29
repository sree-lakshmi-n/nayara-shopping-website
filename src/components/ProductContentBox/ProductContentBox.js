import "./ProductContentBox.css";
import React from "react";

export default function ProductContentBox(props) {
  return (
    <div key={props.product.id} className="pdt-wrapper">
      <div className="pdt-image-wrapper">
        <img src={props.product.image} alt="product" />
      </div>
      <p className="pdt-title">{props.product.title}</p>
      <p className="pdt-description">{props.product.description}</p>
    </div>
  );
}
