const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LpKrRGipIM4EGaK4QysEiNBl70n3Erf7YGqGSFBeVE62drhlTORZ917z64imXaKih521PlsBLqZZmSwSPNLpCTM00glpFnAoo"
);

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hell0 world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recvieved boom for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// http://localhost:5001/ecomerrece/us-central1/api

exports.api = functions.https.onRequest(app);
