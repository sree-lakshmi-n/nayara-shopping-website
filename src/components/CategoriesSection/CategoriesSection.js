import "./CategoriesSection.css";
import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";

export default function CategoriesSection(props) {
  return (
    <section className="categories-section">
      <GridWrapper className="categories-wrapper grid--2-cols">
        {props.categories.map((category, index) => {
          return <CategoryCard category={category} key={index} />;
        })}
      </GridWrapper>
    </section>
  );
}
