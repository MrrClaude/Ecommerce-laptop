import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaShoppingCart ,FaHeart} from "react-icons/fa";
import ThemeContext from "../context/themeProvder";
import CartContext from "../context/CartContext";

const CardModal = ({ product, onClose }) => {
  if (!product) return null;
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const [mainImage, setMainImage] = useState(product.img);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg z-[9999]"
          >
            ✅ Successs
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`relative w-[90%] h-[90%] overflow-y-auto rounded-3xl shadow-2xl ${
          theme === "dark"
            ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
            : "bg-white text-gray-800"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl transition"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          <div
            className={`md:w-1/2 p-6 flex flex-col items-center rounded-l-3xl ${
              theme === "dark"
                ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[300px] md:h-[500px] rounded-xl shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-8 w-full">
              {product.smallImg.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition"
                  onClick={() => setMainImage(thumb)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1
                className={`text-[2rem] font-bold ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                }`}
              >
                {product.title}
              </h1>
              <h2 className="font-semibold mb-3">{product.desc}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                High-performance product with excellent user experience.
              </p>
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

              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 block">
                ${totalPrice.toFixed(2)}
              </span>

              <div className="mb-6 flex items-center gap-4">
                <label className="text-base font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                  Quantity:
                </label>
                <div
                  className={`flex items-center border-2 rounded-full shadow-sm backdrop-blur-md overflow-hidden transition-all duration-300 ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800/60 hover:bg-gray-700/80"
                      : "border-gray-200 bg-white/80 hover:bg-gray-50/90"
                  }`}
                >
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className={`px-4 py-2 text-lg font-bold transition-all duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
                        : "text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600"
                    }`}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className={`w-16 text-center font-semibold text-lg border-0 focus:outline-none bg-transparent ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  />
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className={`px-4 py-2 text-lg font-bold transition-all duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600"
                        : "text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500"
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>
              {product.list?.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                  {product.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-md"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

              <button
                onClick={toggleWishlist}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-300 dark:bg-gray-700 dark:text-white transition"
              >
                <FaHeart
                  className={`text-xl transition-colors duration-300 ${
                    isWishlisted ? "text-red-500 " : ""
                  }`}
                />
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
