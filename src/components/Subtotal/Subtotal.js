import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";

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
      alert("Sign in first");
    }
  };

  return (
    <div className="sub-total">
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
    </div>
  );
}
