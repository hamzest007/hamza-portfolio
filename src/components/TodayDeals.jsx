import React, { useState, useEffect } from 'react';
import { FiClock, FiChevronRight, FiShoppingCart, FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice/cartSlice';
import { deals } from '../constant/db';

const TodayDeals = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState({});
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isDealActive, setIsDealActive] = useState(true);

  // Countdown Timer Logic
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 6); // 6-hour deal

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        setIsDealActive(false);
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Filter valid deals with price values
  const validDeals = deals.filter(
    (deal) =>
      typeof deal.dealPrice === 'number' &&
      typeof deal.originalPrice === 'number'
  );

  const calculateDiscountPercentage = (original, deal) => {
    return Math.round(((original - deal) / original) * 100);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedDeal(null);
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <section className="bg-white py-8 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex items-center gap-2 text-red-600 font-semibold text-lg sm:text-xl">
          <FiClock className="text-xl" />
          <span>Today's Best Deals</span>
        </div>
        <button className="text-sm text-red-600 hover:underline flex items-center gap-1 transition-colors">
          View All <FiChevronRight />
        </button>
      </div>

      {/* Countdown */}
      <div className="mb-6 sm:mb-8 text-center text-base sm:text-lg font-medium text-gray-700 bg-red-50 py-2 px-4 rounded-lg">
        {isDealActive ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-pulse">🔥</span>
            Ends in: <span className="font-bold">{timeLeft.hours}h</span>{' '}
            <span className="font-bold">{timeLeft.minutes}m</span>{' '}
            <span className="font-bold">{timeLeft.seconds}s</span>
            <span className="animate-pulse">🔥</span>
          </span>
        ) : (
          <span className="text-gray-500">Deal has ended</span>
        )}
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {validDeals.map((deal) => (
          <div
            key={deal.id}
            onClick={() => setSelectedDeal(deal)}
            className="border border-gray-100 rounded-lg p-3 sm:p-4 hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 relative"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {calculateDiscountPercentage(deal.originalPrice, deal.dealPrice)}% OFF
            </div>

            <div className="relative h-40 sm:h-48 mb-3 sm:mb-4">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm sm:text-md font-medium text-gray-800 mb-1 line-clamp-2">
              {deal.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">{deal.brand}</p>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                ${deal.dealPrice.toFixed(2)}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ${deal.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                Save ${(deal.originalPrice - deal.dealPrice).toFixed(2)}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(deal));
              }}
              className={`flex items-center justify-center gap-2 w-full py-1.5 sm:py-2 text-xs sm:text-sm ${
                isDealActive
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white rounded transition-colors`}
              disabled={!isDealActive}
            >
              <FiShoppingCart size={14} />
              {isDealActive ? 'Add to Cart' : 'Deal Expired'}
            </button>
          </div>
        ))}
      </div>

      {/* Deal Modal */}
      {selectedDeal && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${
            isModalClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 max-h-[90vh] overflow-y-auto transition-transform ${
              isModalClosing ? 'scale-95' : 'scale-100'
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
                src={selectedDeal.image}
                alt={selectedDeal.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-lg sm:text-xl font-bold">{selectedDeal.title}</h2>
                <p className="text-sm text-gray-600">{selectedDeal.brand}</p>
              </div>
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                {calculateDiscountPercentage(
                  selectedDeal.originalPrice,
                  selectedDeal.dealPrice
                )}
                % OFF
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">{selectedDeal.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  ${selectedDeal.dealPrice.toFixed(2)}
                </span>
                <span className="text-sm sm:text-md text-gray-500 line-through">
                  ${selectedDeal.originalPrice.toFixed(2)}
                </span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                  Save $
                  {(selectedDeal.originalPrice - selectedDeal.dealPrice).toFixed(2)}
                </span>
              </div>

              {isDealActive && (
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Hurry!</span> Deal ends in{' '}
                  <span className="font-bold">{timeLeft.hours}h {timeLeft.minutes}m</span>
                </div>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(selectedDeal));
                closeModal();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2 text-sm ${
                isDealActive
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white rounded transition-colors`}
              disabled={!isDealActive}
            >
              <FiShoppingCart size={16} />
              {isDealActive ? 'Add to Cart' : 'Deal Expired'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TodayDeals;