import "./ProductCard.css";
import React from "react";

export default function ProductCard(props) {
  return (
    <div className="pdt-card">
      <div className="pdt-imagebox">
        <img src={props.product.image} alt="product snapshot" />
      </div>
      <div className="pdt-contentbox">
        <p className="pdt-title">{product.title}</p>
        <div className="cta-wrapper">
          <span className="price"></span>
          <span className="btn-add-to-basket"></span>
        </div>
      </div>
    </div>
  );
}
