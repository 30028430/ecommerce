import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LpKrRGipIM4EGaKVUaffsz6QfWKexypO5o3yDZjjFuyabr6L6DBNgnAB1lbcXo4uSVZUiYILLIzBiqab8XwXPLT00fWIElQzO"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>

        <Route
            path="/orders"
            element={[<Header />, <Orders />, <h1> </h1>]}
          />

          <Route path="/" element={[<Header />, <Home />]} />

          <Route
            path="/checkout"
            element={[<Header />, <Checkout />, <h1> </h1>]}
          />

          <Route path="/login" element={[<Login />, <h1> </h1>]} />

          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
