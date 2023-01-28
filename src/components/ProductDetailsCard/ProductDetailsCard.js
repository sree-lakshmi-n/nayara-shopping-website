import "./ProductDetailsCard.css";
import React from "react";

export default function ProductDetailsCard() {
  return (
    <div className="pdt-details-wrapper">
      <div className="pdt-imagebox">
        <img src="" alt="product snapshot" />
      </div>
      <div className="pdt-contentbox">
        <span className="category-tag"></span>
        <p className="pdt-title">{product.title}</p>
        <p className="pdt-description">{product.description}</p>
        <div className="ratings-wrapper">
          <span className="rating"></span>
          <span className="rating-count"></span>
        </div>
        <div className="cta-wrapper">
          <span className="price"></span>
          <span className="btn-add-to-basket"></span>
        </div>
      </div>
    </div>
  );
}
