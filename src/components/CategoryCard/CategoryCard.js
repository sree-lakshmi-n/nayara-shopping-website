import "./CategoryCard.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function CategoryCard(props) {
  return (
    <FlexWrapper
      className={`category-card flex-center-justify flex-center-align ${props.category
        .split(" ")
        .map((e, index) => (index === 0 ? e.split("'")[0] : e))
        .join("")}-img`}
      element="div"
    >
      <button className="btn btn-category">{props.category}</button>
    </FlexWrapper>
  );
}
