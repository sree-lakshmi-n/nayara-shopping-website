import "./CheckoutProduct.css";
import React from "react";
import { useStateValue } from "../../StateProvider";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="checkout-pdt">
      <div className="checkout-pdt-image">
        <img src={props.image} />
      </div>
      <FlexWrapper className="checkout-pdt-info flex-dirn-col" element="div">
        <h2 className="checkout-pdt-title">{props.title}</h2>
        <p className="checkout-pdt-price">${props.price}</p>
        <p className="checkout-pdt-rating">{props.rating.rate}</p>
        <button
          className="btn btn-remove-from-basket"
          onClick={removeFromBasket}
        >
          Remove from Basket
        </button>
      </FlexWrapper>
    </div>
  );
}
