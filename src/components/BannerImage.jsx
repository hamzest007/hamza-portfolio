import React from "react";
import { images } from "../assets";

const BannerImage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - 2 Small Images with hover effects */}
        <div className="flex flex-row md:flex-col gap-4">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-48 h-48">
            <img
              src={images.headphonebg}
              alt="Premium Headphones"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">Premium Audio</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-48 h-48">
            <img
              src={images.headphonebg1}
              alt="Wireless Headphones"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">Wireless Freedom</span>
            </div>
          </div>
        </div>

        {/* Right Side - Banner with Text */}
        <div className="flex-1 relative group overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images.bannerImage}
            alt="Headphones Sale"
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Text Overlay - Modern with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
            <div className="p-6 sm:p-8 lg:p-10 max-w-md">
              <span className="text-sm font-semibold text-white/80 mb-2 block">SUMMER SALE</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Mega <span className="text-blue-400">Headphones</span> Sale
              </h2>
              <p className="text-white/90 mb-6">
                Up to 50% off on premium audio gear. Limited time offer!
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;