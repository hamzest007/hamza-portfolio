import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FiChevronLeft,
  FiChevronRight,
  FiShoppingCart,
  FiStar,
  FiX,
} from "react-icons/fi";
import { addToCart } from "../store/cartSlice/cartSlice";
import { televisions } from "../constant/db";

const Television = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTv, setSelectedTv] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [autoSlide, setAutoSlide] = useState(true);
  const dispatch = useDispatch();

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, autoSlide]);

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    dispatch(addToCart(product));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? televisions.length - 1 : prev - 1));
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === televisions.length - 1 ? 0 : prev + 1));
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedTv(null);
      setIsModalClosing(false);
    }, 300);
  };

  const currentTv = televisions[currentSlide];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Premium Televisions
      </h2>

      {/* Main Slider Card */}
      {currentTv && (
        <div className="relative bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="w-full md:w-1/2 h-64 sm:h-80 relative">
            <img
              src={currentTv.image}
              alt={currentTv.model}
              className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">
              {currentTv.brand} {currentTv.model}
            </h3>
            <div className="flex items-center text-amber-500 text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(currentTv.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 text-xs sm:text-sm">
                ({currentTv.rating})
              </span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-2">
              {currentTv.features.join(", ")}
            </p>
            <div className="flex gap-2 mb-3 flex-wrap">
              {currentTv.sizes.map((size, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-gray-200 rounded bg-gray-50"
                >
                  {size}"
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xl sm:text-2xl font-bold text-green-600">
                ${currentTv.price.toFixed(2)}
              </span>
              <span className="text-base sm:text-lg line-through text-gray-400">
                ${currentTv.originalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(currentTv)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors"
            >
              <FiShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
            aria-label="Previous TV"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
            aria-label="Next TV"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Grid with Modal on Click */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {televisions.map((tv) => (
          <div
            key={tv.id}
            onClick={() => setSelectedTv(tv)}
            className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="relative h-40 sm:h-48 mb-3 sm:mb-4">
              <img
                src={tv.image}
                alt={tv.model}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h4 className="text-sm sm:text-md font-semibold mb-1 line-clamp-2">
              {tv.brand} {tv.model}
            </h4>

            <div className="flex items-center text-amber-500 text-xs sm:text-sm mb-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(tv.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
              <span className="ml-1 text-gray-500 text-xs">({tv.rating})</span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm mb-2 line-clamp-2">
              {tv.features.join(", ")}
            </p>

            <div className="flex gap-1 sm:gap-2 flex-wrap mb-2">
              {tv.sizes.map((size, i) => (
                <span
                  key={i}
                  className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 border border-gray-200 rounded bg-gray-50"
                >
                  {size}"
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <span className="text-base sm:text-lg font-bold text-gray-900">
                ${tv.price.toFixed(2)}
              </span>
              <span className="text-xs sm:text-sm line-through text-gray-500">
                ${tv.originalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={(e) => handleAddToCart(tv, e)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 sm:py-2 rounded flex justify-center items-center space-x-1 text-xs sm:text-sm transition-colors"
            >
              <FiShoppingCart size={14} />
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTv && (
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

            <div className="relative h-48 sm:h-56 mb-4">
              <img
                src={selectedTv.image}
                alt={selectedTv.model}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <h2 className="text-lg sm:text-xl font-bold mb-2">
              {selectedTv.brand} {selectedTv.model}
            </h2>
            <div className="flex items-center text-amber-500 text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(selectedTv.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">({selectedTv.rating})</span>
            </div>

            <div className="mb-3">
              <h3 className="font-medium text-sm mb-1">Key Features:</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {selectedTv.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-sm mb-1">Available Sizes:</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedTv.sizes.map((size, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border border-gray-200 rounded bg-gray-50"
                  >
                    {size}"
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-bold text-gray-900">
                  ${selectedTv.price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm line-through text-gray-500">
                  ${selectedTv.originalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={(e) => {
                  handleAddToCart(selectedTv, e);
                  closeModal();
                }}
                className="flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800 transition-colors"
              >
                <FiShoppingCart size={14} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Television;