import React, { useContext, useState } from "react";
import Carousel from "../component/Carousel";
import ThemeContext from "../context/themeProvder";
import CardModal from "../component/CardModal";
import products from "../data/products.json";

const cards = [
  {
    id: 1,
    img: "https://storage-asset.msi.com/global/picture/image/feature/nb/GF/Katana-17-A13V/cpu17-img.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_1689926260863cedd14444561c0cbd43df4f4a85a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_16681473981e920639408ee423893084e294154605.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_166814740381cc19d1ad47d2bf9033613ed2fcacde.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_16681474016cdd95a375490fce08243335a290aa93.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "MSI",
    desc: "The 13th Gen. Intel® Core™ i7 processor is here. With improved hybrid core architecture, 6 Performance-cores and 4 Efficient-cores, for better multitasking works and running demanding games.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "4.0",
    price: 1200,
  },
  {
    id: 2,
    img: "https://asset.msi.com/resize/image/global/product/product_1736934217d110fb74c52c89cad277b5099b2c0251.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_173864723563552d837785bb5cef1e7081f7787450.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_173693421555fc3c13855fe8b8d6981f935c2940a2.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_17369342152bae1ed947916e5ba8d6a36505251a93.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_17369342203e10a275e3b788fc916ad948efef23bd.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "Titan 18 HX Dragon Edition Norse Myth",
    desc: "Stay at the forefront of data transfer and connectivity solutions. Thunderbolt™ 5 delivers up to 120 Gbps of transmit bandwidth with Thunderbolt™ Bandwidth Boost, enabling connections to more monitors at higher resolutions and refresh rates than ever before.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Latest Intel® Core™ Ultra 9 processor 285HX",
      "Windows 11 Home / Windows 11 Pro(MSI recommends Windows 11 Pro for business.)",
      "Up to NVIDIA® GeForce RTX™ 5090 Laptop GPU 24GB GDDR7 Powered by the NVIDIA Blackwell architecture, DLSS 4, and Max-Q technologies",
      "18 UHD+ (3840x2400), 16:10, MiniLED, 120Hz Refresh Rate,100% DCI-P3 (Typ.), VESA DisplayHDR™ 1000 Certified, IPS-Level panel",
      "Magnesium-Aluminum Alloy Chassis",
      "Vapor Chamber cooler with dedicated PCIe Gen5 SSD cooling pipe",
      "Dual Thunderbolt™ 5 offers up to 120Gbps transmit bandwidth with bandwidth boost",
      "4 x SSD slots (include 1 x PCIe Gen5 SSD slot)",
      "99.9Whr Battery Capacity",
    ],
    rating: "4.5",
    price: 2150,
  },
  {
    id: 3,
    img: "https://asset.msi.com/resize/image/global/product/product_1737450989d93663953d259792385783ca033d4f84.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_17374509870f8cf5cae3e0367ec13fb2a7fb80f409.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1737450987a13b00adf41e133c02416e0c6ad52573.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_17374509898938b9cc27c5990ee2255298ebb7246f.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_173745099195e06b8f987012dc5153d1d051194921.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "Raider A18 HX A9W",
    desc: "Indulge in unmatched realism with the Mini LED 4K display's ultra-high resolution whether you are indoors, outdoors, or under direct sunlight.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to AMD Ryzen™ 9 9955HX3D Processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to NVIDIA® GeForce RTX™ 5090 Laptop GPU 24GB GDDR7.Powered by the NVIDIA Blackwell architecture, DLSS 4, and Max-Q technologies",
      "OverBoost Ultra Technology pushes the performance to the next level. Total Power up to 260W",
      "18 UHD+ (3840x2400), 16:10, MiniLED, 120Hz Refresh Rate, 100% DCI-P3 (Typ.), VESA DisplayHDR™ 1000 Certified, IPS-Level panel",
      "Cooler Boost 5 with 2 fans and 7 heat pipes and PCIe Gen5 SSD cooling design",
      "99.9Whr Battery Capacity",
      "6 Speakers sound system design by Dynaudio",
      "Mystic Light with brand new matrix lightbar design",
    ],
    rating: "3.8",
    price: 2250,
  },
  {
    id: 4,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
    ],
    title: "MSI",
    desc: "Designed for serious gamers — enjoy smooth gameplay with next-gen graphics.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "5.0",
    price: 1800,
  },
  {
    id: 5,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
    ],
    title: "MSI",
    desc: "Performance meets affordability — the perfect gaming entry-level laptop.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "3.5",
    price: 850,
  },
  {
    id: 6,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
    ],
    title: "MSI",
    desc: "Sleek, modern, and powerful — perfect balance of work and play.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "4.2",
    price: 1300,
  },
  {
    id: 7,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
    ],
    title: "MSI",
    desc: "Compact design with desktop-grade performance for high-end gaming.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "4.3",
    price: 1250,
  },
  {
    id: 8,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
    ],
    title: "MSI",
    desc: "A stunning 4K display with unbeatable color accuracy for creative professionals.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "4.7",
    price: 1600,
  },
  {
    id: 9,
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180207115102_5a7a77a607be4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdXNNUKMYMasP6nomQl6d9n7hejCTTnbwPw&s",
    ],
    title: "MSI",
    desc: "High refresh rate, RGB keyboard, and advanced cooling — built for performance.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
      "17.3 Full HD (1920x1080),144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) squeezes the performance to the extreme level.",
      "Exclusive Cooler Boost 5 Technology",
      "MSI Center with exclusive gaming mode",
      "MSI App Player for seamless gaming experience between mobile and PC",
      "High-Resolution Audio ready",
    ],
    rating: "4.4",
    price: 1400,
  },
];

const Gaming = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
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
              <h1
                className={`text-[1.5rem] font-bold ${
                  theme === "dark" ? "text-indigo-700" : "text-black"
                }`}
              >
                {card.title}
              </h1>
              <h5 className=" font-semibold mb-3 leading-snug">{card.desc}</h5>
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
                <span className="text-2xl font-bold">${card.price}</span>
                <button
                  onClick={() => setSelectedProduct(card)}
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
      {selectedProduct && (
        <CardModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Gaming;
