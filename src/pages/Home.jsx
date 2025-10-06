import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/themeProvder";
import MSILaptopFeatures from "../mini-page/MSILaptopFeatures";
import "../StyleCss/animation.css";
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZQ03VBPkcuVFGvUORHts5b-nJFR-9Gj5FQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOF89Td-0yRsmWjNz5pzhpjxjcziJ8-YOFw&s",
  "https://i.redd.it/z59df77mnkrb1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZQ03VBPkcuVFGvUORHts5b-nJFR-9Gj5FQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOF89Td-0yRsmWjNz5pzhpjxjcziJ8-YOFw&s",
  "https://i.redd.it/z59df77mnkrb1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOF89Td-0yRsmWjNz5pzhpjxjcziJ8-YOFw&s",
];

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const carouselRef = useRef(null);
  const scrollIndex = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    const interval = setInterval(() => {
      if (!carousel) return;

      const numSlides = images.length;
      scrollIndex.current = (scrollIndex.current + 1) % numSlides;

      const scrollToX = scrollIndex.current * carousel.offsetWidth;
      carousel.scrollTo({ left: scrollToX, behavior: "smooth" });
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full mt-[50px]">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://storage-asset.msi.com/event/vga/2018/dragon_center/images/info01_1.gif"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center items-start h-screen px-6 md:px-20 text-left space-y-6">
          <h1
            className={`text-4xl md:text-6xl font-extrabold ${
              theme === "dark" ? "text-indigo-700" : "text-white"
            }`}
          >
            Discover Premium Laptops <br /> Tailored for You
          </h1>
          <p
            className={`text-lg md:text-xl max-w-xl leading-relaxed ${
              theme === "dark" ? "text-gray-500" : "text-gray-300"
            } `}
          >
            Power meets elegance — explore our latest collection of laptops
            designed for performance, portability, and luxury.
          </p>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300
        ${
          theme === "dark"
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
        }
      `}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div
        className={` ${
          theme === "dark"
            ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
            : "border-gray-200 bg-white text-gray-800 shadow-sm"
        }`}
      >
        <div className="h-full py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl  px-4 md:px-8 h-full">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold lg:text-3xl">
                  Laptop Gallery
                </h2>

                <p className="hidden max-w-screen-sm md:block">
                  Explore a collection of modern and classic laptops, showcasing
                  their sleek designs and powerful features.
                </p>
              </div>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More Laptops
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {/* Laptop 1 */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://storage-asset.msi.com/event/nb/2019/content-creation/img/MSI-Content-Creation-Laptops-xs.jpg"
                  loading="lazy"
                  alt="Modern laptop"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Content Creator & Business Laptops:
                </span>
              </a>

              {/* Laptop 2 */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://www.pcworld.com/wp-content/uploads/2025/04/alienware-gaming-laptop.jpg?quality=50&strip=all"
                  loading="lazy"
                  alt="Laptop on desk"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Gaming Laptop
                </span>
              </a>

              {/* Laptop 3 */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://m.media-amazon.com/images/S/aplus-media/vc/8cf8be47-43cf-4674-bbbb-32dcbae7e72c._CR0,0,600,450_PT0_SX600__.jpg"
                  loading="lazy"
                  alt="Laptop keyboard"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Business
                </span>
              </a>

              {/* Laptop 4 */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Laptop and coffee"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Everyday Use
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold lg:text-3xl ml-[90px]">Popular</h2>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-96 md:h-80 rounded-2xl shadow-2xl p-6 space-x-8 mt-[50px] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={`snap-center flex-shrink-0 w-full max-w-md h-full rounded-xl border-2 scroll-wrapper
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        overflow-hidden cursor-pointer transform transition-transform duration-300
        hover:scale-105 hover:shadow-[0_8px_30px_rgba(99,102,241,0.6)]
        ${theme === "dark" ? "border-indigo-600 text-white" : "border-none"}
      `}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 4px 20px rgba(99, 102, 241, 0.5), inset 0 0 10px rgba(99, 102, 241, 0.3)"
                      : "0 4px 20px rgba(99, 102, 241, 0.5), inset 0 0 10px rgba(99, 102, 241, 0.3)",
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <MSILaptopFeatures />
      </div>
    </div>
  );
};

export default Home;
