import { useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const element = useElements();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>36 to ngoc van</p>
              <p>hue</p>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>payment method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
