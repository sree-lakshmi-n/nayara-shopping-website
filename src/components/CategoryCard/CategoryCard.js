import "./CategoryCard.css";
import React from "react";

export default function CategoryCard(props) {
  return (
    <div
      className={`category-card ${props.category
        .split(" ")
        .map((e, index) => (index === 0 ? e.split("'")[0] : e))
        .join("")}-img`}
    >
      <button className="btn">{props.category}</button>
    </div>
  );
}
