import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    try {
      const cardElement = elements.getElement(CardElement);

      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      const { data } = await axios.post("http://localhost:5000/payment", {
        amount: Math.round(totalAmount * 100), // in cents
        paymentMethodId: paymentMethod.id,
      });

      if (data.success) {
        toast.success("✅ Payment successful!");
      } else {
        toast.error("❌ Payment failed.");
      }
    } catch (err) {
      toast.error("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Complete Payment</h2>
        <p className="text-gray-600">Enter your payment details below</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Information
          </label>
          <div className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || loading}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white shadow-md transition-colors ${
            !stripe || loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Payment...
            </span>
          ) : (
            `Pay $${totalAmount.toFixed(2)}`
          )}
        </button>
      </form>

      <div className="mt-6 flex items-center justify-center space-x-2">
        <div className="flex space-x-1">
          {['visa', 'mastercard', 'amex', 'discover'].map((type) => (
            <div key={type} className="w-10 h-6 flex items-center justify-center">
              <img 
                src={`https://logo.clearbit.com/${type}.com`} 
                alt={type} 
                className="h-5 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;