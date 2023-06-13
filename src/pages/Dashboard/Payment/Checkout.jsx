import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./checkout.css";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = ({ data }) => {
  const { price, classId, seats, totalEnrolled, _id } = data;
  const stripe = useStripe();
  const { user } = useAuth();
  const navigate = useNavigate();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axios
        .post("https://music-land-server.vercel.app/create-payment-intent", {
          price,
        })
        .then((res) => {
          //   console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information
      const payment = {
        transactionId: paymentIntent.id,
        date: new Date(),
        seats: seats - 1,
        payment: true,
      };

      axios
        .put(`https://music-land-server.vercel.app/payments/${_id}`, payment)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            const update = {
              totalEnrolled: totalEnrolled + 1,
              seats: seats - 1,
            };
            axios
              .put(
                `https://music-land-server.vercel.app/classUpdates/${classId}`,
                update
              )
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                  // display confirm sweet alert
                  Swal.fire("Good job!", "Payment successful", "success");
                  navigate("/dashboard/enrolled");
                  setProcessing(true);
                }
              });
          }
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Music Land | Checkout</title>
      </Helmet>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#f1961f",
                },
              },
              invalid: {
                color: "#f1961f",
              },
            },
          }}
        />
        <button
          className="btn btn-warning btn-sm mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-error ml-8">{cardError.message}</p>}
      {transactionId && (
        <p className="text-success ml-8">
          Transaction complete with transactionId : {transactionId}
        </p>
      )}
    </>
  );
};

export default Checkout;
