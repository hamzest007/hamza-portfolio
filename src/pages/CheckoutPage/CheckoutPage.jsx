import React from "react";
import CheckoutForm from "../../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Q50nZF9Pl2efIFCJFYE2TUwsiMrfgONmxaJM4ATMrd18QG2ab3KbChIef1h61av1q0uV1WgfS7qBt8tV3Gj8Rb500tUME39eU");

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;
