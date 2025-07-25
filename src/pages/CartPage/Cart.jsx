import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiTrash2, 
  FiPlus, 
  FiMinus,
  FiChevronLeft
} from 'react-icons/fi';
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} from '../../store/cartSlice/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  // Calculate totals safely
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
    0
  );
  const shipping = subtotal > 5000 ? 0 : 200; // Free shipping over Rs 5000
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + shipping + tax;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-gray-50 rounded-xl p-12">
          <FiShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-800 mr-6"
        >
          <FiChevronLeft className="mr-1" /> Continue Shopping
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Your Shopping Cart</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size || ''}`}
              className="flex flex-col sm:flex-row border rounded-lg overflow-hidden bg-white"
            >
              <div className="sm:w-1/3 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-full h-40 object-contain"
                  loading="lazy"
                />
              </div>
              
              <div className="sm:w-2/3 p-4 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title || item.name}</h3>
                    {item.size && (
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    )}
                    {item.color && (
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                    )}
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <FiTrash2 />
                  </button>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <span className="font-medium text-gray-900">
                      {formatCurrency((item.price * item.quantity))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-red-600 hover:text-red-800 flex items-center"
            >
              <FiTrash2 className="mr-1" /> Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (18%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center"
            >
              Proceed to Checkout
            </Link>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;