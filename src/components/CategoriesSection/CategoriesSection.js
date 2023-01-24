import "./CategoriesSection.css";
import React from "react";
import Container from "../../UI/Container/Container";

export default function CategoriesSection(props) {
  return (
    <section className="categories-section">
      <Container className="catergories-wrapper">
        {props.categories.map((category) => {
          return (
            <div className="category-card jewellery-img">
              <button className="btn">jewellery</button>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
