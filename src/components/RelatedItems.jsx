import React, { useState } from "react";
import { relatedProducts } from "../constant/db";
import { FiStar, FiShoppingCart, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice/cartSlice";

const RelatedItems = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    dispatch(addToCart(product));
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6 px-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Related Items
        </h2>
        <button className="text-sm text-gray-500 hover:underline transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="bg-white rounded-lg shadow hover:shadow-md p-3 sm:p-4 transition-all cursor-pointer hover:-translate-y-1"
          >
            <div className="relative pb-[100%]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm sm:text-md font-medium text-gray-800 mt-3 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              {product.brand}
            </p>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-md sm:text-lg font-bold text-gray-900">
                ${product.price?.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-gray-400 line-through">
                  ${product.originalPrice?.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center text-yellow-500 text-xs sm:text-sm mb-2">
              <FiStar className="mr-1" />
              {product.rating?.toFixed(1)}
            </div>

            <div className="flex gap-1 mb-3 sm:mb-4">
              {product.colors?.map((color) => (
                <span
                  key={color}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                  aria-label={color}
                />
              ))}
            </div>

            <button
              onClick={(e) => handleAddToCart(product, e)}
              className="w-full py-1 sm:py-2 text-xs sm:text-sm bg-black text-white rounded hover:bg-gray-800 flex items-center justify-center gap-1 sm:gap-2 transition-colors"
            >
              <FiShoppingCart size={14} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${
            isModalClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 max-h-[90vh] overflow-y-auto transition-transform ${
              isModalClosing ? "scale-95" : "scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <div className="relative pb-[100%] mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded"
                loading="lazy"
              />
            </div>

            <h2 className="text-lg sm:text-xl font-bold mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              {selectedProduct.brand}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">
              {selectedProduct.description || "No additional details available."}
            </p>

            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-lg font-bold text-gray-900">
                  ${selectedProduct.price?.toFixed(2)}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${selectedProduct.originalPrice?.toFixed(2)}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  dispatch(addToCart(selectedProduct));
                  closeModal();
                }}
                className="flex items-center gap-1 text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
              >
                <FiShoppingCart size={14} />
                Add to Cart
              </button>
            </div>

            {selectedProduct.colors?.length > 0 && (
              <div className="mb-4">
                <p className="text-xs sm:text-sm text-gray-700 mb-2">Colors:</p>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((color) => (
                    <span
                      key={color}
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center text-yellow-500 text-sm">
              <FiStar className="mr-1" />
              {selectedProduct.rating?.toFixed(1)} Rating
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RelatedItems;