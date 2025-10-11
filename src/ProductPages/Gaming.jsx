import React, { useContext, useState } from "react";
import Carousel from "../component/Carousel";
import ThemeContext from "../context/themeProvder";
import CardModal from "../component/CardModal";
import products from "../data/products.json";
import CartContext from "../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";

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
    desc: "The 13th Gen. Intel® Core™ i7 processor is here. With improved hybrid core architecture.",
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
    desc: "Stay at the forefront of data transfer and connectivity solutions. Thunderbolt™ 5 delivers up to 120 Gbps of transmit bandwidth with Thunderbolt™ Bandwidth Boost.",
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
    img: "https://asset.msi.com/resize/image/global/product/product_17495443623e730f055a54ef766d257829d0be07ba.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_1749544362d81c2454586abe8239e84b138156e423.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1749544364e2abe76487a4a22b2c7998633292fbc5.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1749544364d318aae473b3f4b26143b83776736043.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_17495443670cd5fa9c9035765c2b56e2e7dcd86768.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "Stealth A16 AI+ Mercedes-AMG Motorsport A3XW",
    desc: "Powered by NVIDIA Blackwell, GeForce RTX™ 50 Series Laptop GPUs bring game-changing capabilities to gamers and creators. Equipped with a massive level of AI horsepower, the RTX 50 Series enables new experiences and next-level graphics fidelity.",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "AMD Ryzen™ AI 9 HX 370 Processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Latest GeForce RTX™ 5070 Laptop GPU 8GB GDDR7",
      "NVIDIA Studio-validated for creators; preinstalled with Studio Drivers",
      "16 QHD+ (2560x1600), 16:10, 240Hz Refresh Rate, 100% DCI-P3 (Typical), VESA DisplayHDR™ True Black 600, OLED panel",
      "19.95 mm thickness & 2.1 kg weight",
      "6-Speaker Sound System by Dynaudio",
      "99.9Whr Battery Capacity",
      "Per-Key RGB Gaming Keyboard by SteelSeries with Copilot Key",
    ],
    rating: "5.0",
    price: 1800,
  },
  {
    id: 5,
    img: "https://asset.msi.com/resize/image/global/product/product_17213735069e6700479bf8a52506d088bdb1061544.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_172137352705b2cb53f634437c3684f0acf7dfcd08.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_173753972718edd16a4f6a01c1d2f71c87e9028ee7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1721373493a21beace6ab2267b48e41effee579cc2.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1721373493a21beace6ab2267b48e41effee579cc2.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "Stealth 18 AI Studio A1V",
    desc: "The latest Intel® Core™ Ultra 9 processor 185H represents a groundbreaking advancement in processing power, ",
    stars: [
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/2000/svg",
    ],
    list: [
      "Up to the latest Intel® Core™ Ultra 9 processor 185H",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to latest GeForce RTX™ 4090 Laptop GPU 16GB GDDR6",
      "NVIDIA® GeForce RTX™ Studio Laptop",
      "18 UHD+ (3840x2400), 16:10, MiniLED, 120Hz Refresh Rate, 100% DCI-P3 (Typ.), VESA DisplayHDR™ 1000 Certified, IPS-Level panel",
      "2.89kg & 19.9mm (est.)",
      "6-Speaker Sound System by Dynaudio",
      "99.9Whr Battery Capacity",
      "IR FHD webcam with Webcam Shutter, featuring HDR & 3D Noise Reduction Plus",
    ],
    rating: "4.0",
    price: 2300,
  },
  {
    id: 6,
    img: "https://asset.msi.com/resize/image/global/product/product_168992322098c560c8d61e7361c1d135fe5b39c7f0.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_166814746668f3a78cc88ed52f5c26ddb1ccdcd62a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_166814746934a9ed401cb548221b600e76cd86ae71.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1668147469e4308356158a9ee978a81088a9313e75.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1668147471bfb422e68c23700dc0a8ce78ffb25e6d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "MSI Katana 15 B13V",
    desc: "Sharpen your game with the legendary Dragon's Blade. A fierce machine for dedicated gamers.",
    stars: [
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H Processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 with DLSS 3 and Max-Q Technologies.",
      "15.6 Full HD (1920x1080), 144 Hz Refresh Rate, IPS-Level panel",
      "Discrete Graphics mode(MUX design) for extreme performance.",
      "Exclusive Cooler Boost 5 Technology with Shared-Pipe Design",
      "4-Zone RGB Gaming Keyboard with highlighted WASD keys",
      "MSI App Player for seamless mobile and PC gaming",
      "High-Resolution Audio ready",
    ],
    rating: "4.5",
    price: 1250,
  },
  {
    id: 7,
    img: "https://asset.msi.com/resize/image/global/product/product_1710832427221ddfe311d964a72524b062853b9cf6.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_17108324276d0872836dfddeca71a41a6352ffb9df.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_166623067192bcedebe0e593705d46f080a4ba0a09.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1666230671cfcf9af85b2fed6bd4d725febb0677a6.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_16662306748071a16fe9336a450e6677396d0f9855.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "MSI Cyborg 15 A13V",
    desc: "Cyber Up! A thin and light gaming laptop with a futuristic, translucent design.",
    stars: [
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to latest GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 with DLSS 3.",
      "15.6” Full HD (1920x1080), 144 Hz Refresh Rate, IPS-Level panel (Optional)",
      "Thin & Light Body: 1.98kg weight and 21.95mm thinness.",
      "Translucent Material chassis for a see-through aesthetic",
      "Highlighted neon WASD keys for quick in-game movement",
      "Exclusive Cooler Boost Technology",
      "High-Resolution Audio ready",
    ],
    rating: "3.9",
    price: 1100,
  },
  {
    id: 8,
    img: "https://asset.msi.com/resize/image/global/product/product_168992163822a0297eadb78d9701b2c711f8fc3a90.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_1664524194335bf3913159e2ae338d03a2328fc625.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_1664524194c588c7d7dd260bb5c2af545827311643.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_16645243712e18daca22397448e77bfb07a9805d68.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_1664523795b9302978ae2b2cc4869292d68505a922.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    ],
    title: "MSI Pulse 17 B13V",
    desc: "Pulsating Power. Rule the galaxy with a sci-fi inspired, high-performance machine.",
    stars: [
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
    ],
    list: [
      "Up to Intel® Core™ i7-13700H processor (higher tier than 13620H)",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to NVIDIA® GeForce RTX™ 4070 Laptop GPU 8GB GDDR6 (higher GPU option)",
      "17.3 Thin Bezel Full HD (1920x1080), IPS-Level 144Hz panel",
      "Discrete Graphics Mode (MUX Design)",
      "CPU-GPU Share-Pipe Design for enhanced cooling",
      "4-Zone RGB Lighting Keyboard with highlighted WASD",
      "High-Resolution Audio ready",
      "MSI App Player for seamless gaming",
    ],
    rating: "4.1",
    price: 1550,
  },
  {
    id: 9,
    img: "https://asset.msi.com/resize/image/global/product/product_17115241149e715c38fa365614603a74c4780a32ba.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    smallImg: [
      "https://asset.msi.com/resize/image/global/product/product_1703836693ff8b55b4424fb493710de474680ad50e.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1711524114d44074b603aa10905955ed430a69d0a6.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1703836698892f33103efe5996c15d35670d80bf5b.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1703836696ccca03a45d721797e7e763c7fe3da03b.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    ],
    title: "MSI Thin 15 B13V",
    desc: "Deftly I Play. An iconic thin and lightweight chassis with powerful gaming performance.",
    stars: [
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
      "[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)",
    ],
    list: [
      "Up to Intel® Core™ i7-13620H processor",
      "Windows 11 Home / Windows 11 Pro MSI recommends Windows 11 Pro for business.",
      "Up to NVIDIA® GeForce RTX™ 4050 Laptop GPU 6GB GDDR6 (slightly lower GPU option)",
      "15.6 Full HD (1920x1080), 144 Hz Refresh Rate, IPS-Level panel",
      "Thin bezel design, 21.7mm thin, 1.86kg light",
      "Translucent WASD keys for visual appeal",
      "Matrix Display supports up to 2 extra displays",
      "MSI Center with exclusive gaming mode",
      "Wi-Fi 6E for enhanced streaming experience",
    ],
    rating: "4.0",
    price: 950,
  },
];

const Gaming = () => {
  //create pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const totalPages = Math.ceil(cards.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = cards.slice(indexOfFirst, indexOfLast);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div
      className={` w-full py-10 mt-[90px] m-auto${
        theme === "dark"
          ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
          : "border-gray-200 bg-white text-gray-800 shadow-sm"
      }`}
    >
      <Carousel />
      <h1 className="font-bold text-[3rem] text-center m-3 font-serif">
        Our Product
      </h1>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {currentProducts.map((card) => (
          <div
            className={`flex flex-col justify-between rounded-2xl overflow-hidden shadow-md hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-1 ${
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
                  onClick={() => addToCart(card)}
                  className={`px-4 py-2 flex items-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 
      ${
        currentPage === 1
          ? "bg-black text-white cursor-not-allowed opacity-80"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-md hover:shadow-xl hover:scale-105"
      }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 
        ${
          currentPage === i + 1
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-lg scale-105"
            : "bg-gray-800  text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:shadow-lg"
        }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 
      ${
        currentPage === totalPages
          ? "bg-black text-white cursor-not-allowed opacity-80"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-md hover:shadow-xl hover:scale-105"
      }`}
        >
          Next
        </button>
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
