import "./ProductDetailsCard.css";
import React, { useState, useEffect } from "react";
import ProductImageBox from "../ProductImageBox/ProductImageBox";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

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
    <>
      {!product && <div>Loading...</div>}
      {product && (
        <div className="pdt-details-wrapper">
          <ProductImageBox image={product.image} />
          <div className="pdt-contentbox">
            <span className="category-tag">{product.category}</span>
            <p className="pdt-title">{product.title}</p>
            <p className="pdt-description">{product.description}</p>
            <div className="ratings-wrapper">
              <span className="rating">{product.rating.rate}</span>
              <div className="product__rating">
                {Array(Math.round(product.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <p>🌟</p>
                  ))}
              </div>
              <span className="rating-count">{product.rating.count}</span>
            </div>
            <div className="cta-wrapper">
              <span className="price">{product.price}</span>
              <button onClick={addToBasket} className="btn-add-to-basket">
                <ion-icon name="cart-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
