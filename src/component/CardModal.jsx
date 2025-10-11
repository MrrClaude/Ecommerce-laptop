import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import ThemeContext from "../context/themeProvder";

const CardModal = ({ product, onClose }) => {
  if (!product) return null;
  const { theme } = useContext(ThemeContext);
  const [mainImage, setMainImage] = useState(product.img);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = product.price * quantity;

  const changeImage = (src) => setMainImage(src);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`relative w-[90%] h-[90%] overflow-y-auto rounded-3xl shadow-2xl
          ${
            theme === "dark"
              ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
              : "bg-white text-gray-800"
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl transition"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Images */}
          <div className={`md:w-1/2 p-6 flex flex-col items-center  rounded-l-3xl ${theme === "dark"
          ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
          : "border-gray-200 bg-white text-gray-800 shadow-sm"}`}>
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[300px] md:h-[500px]  rounded-xl shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-8 w-full">
              {product.smallImg.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition"
                  onClick={() => changeImage(thumb)}
                />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1
                className={`text-[2rem] font-bold ${
                  theme === "dark" ? "text-indigo-700" : "text-black"
                }`}
              >
                {product.title}
              </h1>
              <h2 className=" font-bold mb-3">{product.desc}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                High performance product with excellent user experience.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {product.stars.map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({product.rating})
                </span>
              </div>

              {/* Price */}
              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 block">
                ${totalPrice.toFixed(2)}
              </span>

              {/* Quantity */}
              <div className="mb-5">
                <label className="block text-sm font-medium  mb-1">
                  Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-16 text-center rounded-md border-gray-300 shadow-sm text-black focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {product.list.map((li, i) => (
                <ul key={i}>
                  <li className="list-disc opacity-50">{li}</li>
                </ul>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-md">
                <FaShoppingCart />
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-300 transition">
                <FiHeart />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardModal;
