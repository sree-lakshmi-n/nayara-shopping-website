import "./NavCategories.css";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import React, { useEffect, useState } from "react";

export default function NavCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <nav className="nav__categories ">
      <FlexWrapper
        className="nav__categories-wrapper flex-center-align"
        element="ul"
      >
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
          </li>
        ))}
      </FlexWrapper>
    </nav>
  );
}
