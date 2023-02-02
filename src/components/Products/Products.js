import "./Products.css";
import React, { useEffect, useState } from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import ProductImageBox from "../ProductImageBox/ProductImageBox";
import { Link } from "react-router-dom";
import loading from "../../images/loading.gif";
import Container from "../../UI/Container/Container";
import { useStateValue } from "../../StateProvider";

export default function Products(props) {
  const [products, setProducts] = useState("");
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (event) => {
    const id = event.target.parentElement.getAttribute("data-id");
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        const pdt = json;
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: pdt.id,
            title: pdt.title,
            image: pdt.image,
            price: pdt.price,
            rating: pdt.rating.rate,
          },
        });
      });
    // dispatch the item into the data layer
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [props.category]);
  return (
    <Container>
      <Link to="/" className="btn-back-arrow">
        <ion-icon name="arrow-back-outline" className="back-arrow"></ion-icon>
      </Link>
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
                <Link
                  to={`/${props.category}/${product.id}`}
                  className="pdt-name"
                >
                  {product.title}
                </Link>
                <FlexWrapper
                  element="div"
                  className="pdt-info flex-center-align"
                >
                  <span className="pdt-rating">{product.rating.rate} ⭐️</span>
                  <span className="pdt-cost">${product.price}</span>
                  <span
                    data-id={product.id}
                    className="add-to-cart-wrapper"
                    onClick={addToBasket}
                  >
                    <ion-icon name="cart-outline"></ion-icon>
                  </span>
                </FlexWrapper>
              </FlexWrapper>
            );
          })}
        </GridWrapper>
      )}
    </Container>
  );
}
