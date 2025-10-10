import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { FaCartPlus } from "react-icons/fa6";

const Business = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="py-10 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Our Business Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  ${product.price.toFixed(2)}
                </span>
                <div className="gap-2 flex">
                  <button className=" bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg transition-colors duration-300">
                    Views
                  </button>
                  <button className="  bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg transition-colors duration-300">
                    <FaCartPlus />
                    <span className="hidden sm:inline">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
