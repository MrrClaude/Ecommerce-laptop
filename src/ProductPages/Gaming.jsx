import React, { useContext, useState } from "react";
import Carousel from "../component/Carousel";
import ThemeContext from "../context/themeProvder";

const cards = [
  {
    id: 1,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Experience unparalleled performance with our latest gaming laptops, designed to elevate your gameplay to new heights.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "4.0",
    price: "$1200",
  },
  {
    id: 2,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Powerful yet portable — perfect for creators who need high performance anywhere they go.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "4.5",
    price: "$1450",
  },
  {
    id: 3,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Ultra-slim gaming laptop built for maximum speed and stunning visuals.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "3.8",
    price: "$999",
  },
  {
    id: 4,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Designed for serious gamers — enjoy smooth gameplay with next-gen graphics.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "5.0",
    price: "$1800",
  },
  {
    id: 5,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Performance meets affordability — the perfect gaming entry-level laptop.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "3.5",
    price: "$850",
  },
  {
    id: 6,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Sleek, modern, and powerful — perfect balance of work and play.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "4.2",
    price: "$1300",
  },
  {
    id: 7,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "Compact design with desktop-grade performance for high-end gaming.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "4.3",
    price: "$1250",
  },
  {
    id: 8,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "A stunning 4K display with unbeatable color accuracy for creative professionals.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "4.7",
    price: "$1600",
  },
  {
    id: 9,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    desc: "High refresh rate, RGB keyboard, and advanced cooling — built for performance.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    rating: "4.4",
    price: "$1400",
  },
];

const Gaming = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` w-full py-10 mt-[90px] m-auto${
        theme === "dark"
          ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
          : "border-gray-200 bg-white text-gray-800 shadow-sm"
      }`}
    >
      <Carousel />
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              theme === "dark"
                ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <a href="#">
              <img
                className="p-6 rounded-t-2xl w-full h-64 object-contain bg-transparent"
                src={card.img}
                alt="product image"
              />
            </a>
            <div className="px-6 pb-6 flex flex-col flex-grow">
              <h5 className="text-lg font-semibold mb-3 leading-snug">
                {card.desc}
              </h5>
              <div className="flex items-center mt-2.5 mb-5">
                {card.stars.map((star, idx) => (
                  <div key={idx} className="flex items-center mb-5">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns={star}
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                ))}
                <span
                  className={`ml-3 text-xs font-semibold px-2.5 py-0.5 rounded ${
                    theme === "dark"
                      ? "bg-blue-900 text-blue-300"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {card.rating}
                </span>
              </div>
              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-2xl font-bold">{card.price}</span>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  View more
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  Add to card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
