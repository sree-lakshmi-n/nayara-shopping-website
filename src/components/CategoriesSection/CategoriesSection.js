import "./CategoriesSection.css";
import React from "react";
import Container from "../../UI/Container/Container";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoriesSection(props) {
  return (
    <section className="categories-section">
      <Container className="catergories-wrapper">
        {props.categories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </Container>
    </section>
  );
}
