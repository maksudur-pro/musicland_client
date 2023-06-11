import React from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectClass from "../../../Hooks/useSelectClass";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const data = useLoaderData();
  const price = parseFloat(data.price);
  return (
    <div>
      <h1 className="text-center">payment</h1>
      <Elements stripe={stripePromise}>
        <Checkout price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
