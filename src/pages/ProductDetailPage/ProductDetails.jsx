import React from "react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice/cartSlice";
import { deals, relatedProducts, televisions } from "../../constant/db";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Combine all product arrays into one
  const allProducts = [...deals, ...relatedProducts, ...televisions];

  // Find the product by matching id as a string
  const product = allProducts.find((item) => String(item.id) === String(id));

  // If product not found, show message
  if (!product) {
    return <div className="text-center py-10 text-red-500 font-semibold text-xl">Product not found!</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img src={product.image} alt={product.title} className="w-full rounded-xl object-cover max-h-[500px]" />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold text-green-600">Price: Rs. {product.price}</p>
          <p className="text-sm text-gray-500">Rating: ⭐ {product.rating}</p>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FiShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
