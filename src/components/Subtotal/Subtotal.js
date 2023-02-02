import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { Link, useNavigate } from "react-router-dom";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function Subtotal() {
  const navigate = useNavigate();
  const [{ user, basket }, dispatch] = useStateValue();
  const emptyBasket = () => {
    if (+basket.length <= 0) {
      alert("No items to be shipped!");
    } else if (user) {
      alert("Items Shipped!");
      // remove the item from the basket
      dispatch({
        type: "EMPTY_BASKET",
      });
      navigate("/", { replace: true });
    } else {
      alert("Please sign in to continue");
    }
  };

  return (
    <div className="sub-total">
      {basket.length <= 0 && (
        <FlexWrapper
          className="empty-cart-container flex-center-align"
          element="div"
        >
          <ion-icon name="cart-outline"></ion-icon>
          <FlexWrapper
            element="div"
            className="empty-cart-content flex-dirn-col"
          >
            <p> Your basket looks a little empty, let's get shopping!</p>
            <Link to="/" className="btn btn-shop-now">
              Shop Now!
            </Link>
          </FlexWrapper>
        </FlexWrapper>
      )}
      {basket.length > 0 && (
        <FlexWrapper className="sub-total-wrapper flex-dirn-col" element="div">
          <CurrencyFormat
            renderText={(value) => {
              console.log(value);
              return (
                <p>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
              );
            }}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <button className="btn btn-checkout" onClick={emptyBasket}>
            Proceed to Checkout
          </button>
        </FlexWrapper>
      )}
    </div>
  );
}
