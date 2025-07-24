import React, { useState } from "react";
import { images } from "../assets";
import { motion } from "framer-motion";

const CategoryHeader = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categoriesItem = [
    { name: "Laptops", image: images.laptopImage, color: "bg-blue-100" },
    { name: "Camera", image: images.photoCamera, color: "bg-purple-100" },
    { name: "Accessories", image: images.accessories, color: "bg-amber-100" },
    { name: "TV", image: images.television, color: "bg-red-100" },
    { name: "Headphones", image: images.headphone, color: "bg-green-100" },
    { name: "Storage", image: images.storage, color: "bg-indigo-100" },
    { name: "Theatre", image: images.theater, color: "bg-pink-100" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Browse Categories
        </h1>
        <p className="text-gray-600">
          Discover products by category
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categoriesItem.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(item.name)}
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300
              ${
                activeCategory === item.name
                  ? `${item.color} border-blue-500 shadow-lg scale-105`
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
              }
            `}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-3 p-2`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`font-medium text-sm md:text-base ${
              activeCategory === item.name ? "text-blue-700" : "text-gray-700"
            }`}>
              {item.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Active category indicator (optional) */}
      {activeCategory && (
        <motion.div 
          className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="font-medium text-blue-800">
            Browsing: <span className="font-bold">{activeCategory}</span>
          </h3>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryHeader;