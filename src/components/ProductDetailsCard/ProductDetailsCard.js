import "./ProductDetailsCard.css";
import React, { useState, useEffect } from "react";
import ProductImageBox from "../ProductImageBox/ProductImageBox";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import loading from "../../images/loading.gif";
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";

export default function ProductDetailsCard() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }, [id]);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating.rate,
      },
    });
  };

  return (
    <Container>
      <Link
        to={`/${
          product.category === "jewelery" ? "jewellery" : product.category
        }`}
        className="btn-back-arrow"
      >
        <ion-icon name="arrow-back-outline" className="back-arrow"></ion-icon>
      </Link>
      {!product && (
        <div className="loading">
          <img src={loading} alt="loading animation" />
        </div>
      )}
      {product && (
        <FlexWrapper
          className="pdt-details-wrapper flex-center-align"
          element="div"
        >
          <ProductImageBox image={product.image} />
          <FlexWrapper element="div" className="pdt-contentbox flex-dirn-col">
            <p className="pdt-title">{product.title}</p>
            <p className="pdt-description">{product.description}</p>
            <FlexWrapper element="div" className="pdt-info flex-center-align">
              <span className="pdt-rating">{product.rating.rate} ⭐️</span>
              <span className="rating-count">
                ({product.rating.count} ratings)
              </span>
              <span className="pdt-cost">${product.price}</span>
            </FlexWrapper>

            <button
              onClick={addToBasket}
              className="btn btn-cta btn-add-to-basket"
            >
              Add To Cart
            </button>
          </FlexWrapper>
        </FlexWrapper>
      )}
    </Container>
  );
}
