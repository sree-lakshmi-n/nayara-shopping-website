import "./Products.css";
import React, { useEffect, useState } from "react";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  console.log(props.category);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [props.category]);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className="pdt-wrapper">
            <div className="pdt-image-wrapper">
              <img src={product.image} alt="product" />
            </div>
            <p className="pdt-title">{product.title}</p>
            <p className="pdt-description">{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}
