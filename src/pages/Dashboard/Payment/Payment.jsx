import React from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Music Land | Payments</title>
      </Helmet>
      <h1 className="text-center">payment</h1>
      <Elements stripe={stripePromise}>
        <Checkout data={data} />
      </Elements>
    </div>
  );
};

export default Payment;
