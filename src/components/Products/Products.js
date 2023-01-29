import "./Products.css";
import React, { useEffect, useState } from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import ProductImageBox from "../ProductImageBox/ProductImageBox";
import { Link } from "react-router-dom";
import loading from "../../images/loading.gif";

export default function Products(props) {
  const [products, setProducts] = useState("");
  console.log(props.category);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [props.category]);
  return (
    <>
      {!products && (
        <div className="loading">
          <img src={loading} alt="loading animation" />
        </div>
      )}
      {products && (
        <GridWrapper className="products-container grid--2-cols">
          {products.map((product) => {
            return (
              <FlexWrapper
                key={product.id}
                className="pdt-wrapper flex-dirn-col"
                element="div"
              >
                <ProductImageBox image={product.image} />

                <div className="pdt-info">
                  <span className="pdt-rating">{product.rating.rate}</span>
                  <span className="pdt-cost">${product.price}</span>
                </div>
                <Link to={`/${props.category}/${product.id}`}>More info</Link>
              </FlexWrapper>
            );
          })}
        </GridWrapper>
      )}
    </>
  );
}
