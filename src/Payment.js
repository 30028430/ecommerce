import { SportsBasketball } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import {db} from "./firebase";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [proccesing, setProccesing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log('the secret is >>>' , clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProccesing(true);
    
    const payload = await stripe
    .confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement),
        },
    })
    .then(({ paymentIntent }) => {

    //   db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
    //     basket: basket,
    //     amount: paymentIntent.amount,
    //     created: paymentIntent.created
    //   })


        setSucceeded(true);
        setError(null);
        setProccesing(false);


        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>25 pooles road</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>payment method</h3>
            <div className="payment_details">
              {}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment_pricecontainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total :{value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={proccesing || disabled || succeeded}>
                    <span> {proccesing ? <p>proccesing</p> : "Buy now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
