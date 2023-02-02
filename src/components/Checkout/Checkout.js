import "./Checkout.css";
import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import Container from "../../UI/Container/Container";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <Container className="checkout">
      <Link to="/" className="btn-back-arrow">
        <ion-icon name="arrow-back-outline" className="back-arrow"></ion-icon>
      </Link>
      <FlexWrapper className="checkout-left flex-dirn-col" element="div">
        <h2>Hello, {user ? user.email : "Guest"}</h2>
        <h3 className="checkout__title">Your shopping Basket</h3>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </FlexWrapper>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </Container>
  );
}
