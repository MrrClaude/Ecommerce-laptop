import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import ThemeContext from "../context/themeProvder";
import imgLogo from "/Artboard1.png";
import Login from "./Login";
import { FaCartShopping } from "react-icons/fa6";
import {
  FaEnvelopeOpenText,
  FaHome,
  FaLaptopCode,
  FaUser,
} from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import CartContext from "../context/CartContext";

const Navbar = ({onOpenCart}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { theme, toggle } = useContext(ThemeContext);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setShowNavbar(false);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowNavbar(true);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out
        ${
          theme === "dark"
            ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white border-t border-gray-700"
            : "bg-white text-gray-800 border-t border-gray-200 shadow-sm"
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition"
          >
            <img src={imgLogo} className="h-20" alt="Logo" />
            <span
              className={`self-center text-2xl font-bold hidden md:inline ${
                theme === "dark" ? "text-indigo-700" : "text-black"
              }`}
            >
              ICT
            </span>
          </Link>

          <div className="flex items-center space-x-3 md:order-2">
            <button className="p-2 rounded-full transition" onClick={toggle}>
              {theme === "light" ? <IoSunny /> : <IoMoon />}
            </button>

            <button
              className={`px-4 py-2 text-sm font-medium  rounded-lg transition-all duration-200 
                      ${
                        theme === "dark"
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      } focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                theme === "dark"
                  ? "focus:ring-indigo-500"
                  : "focus:ring-blue-400"
              }`}
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>

            <button
              onClick={onOpenCart}
              className={`relative flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200              
                  ${
                    theme === "dark"
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  } focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                theme === "dark"
                  ? "focus:ring-green-500"
                  : "focus:ring-green-400"
              }`}
            >
              <FaCartShopping className="mr-2 text-lg" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              ☰
            </button>
          </div>

          {isSearchOpen && (
            <div className="w-full md:block md:w-auto md:order-1 mt-3 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full md:w-64 p-2 pl-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600"
              />
            </div>
          )}

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent">
              <li className="flex items-center gap-1 py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400">
                <FaHome />
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center gap-1 py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400">
                <RiInformationLine className="text-lg" />
                <Link to="/about">About</Link>
              </li>
              <li className="flex items-center gap-1 py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400">
                <HiMiniComputerDesktop className="text-lg" />
                <Link to="/gaming">Products</Link>
              </li>
              {/* <li className="relative">
                <button
                  onMouseEnter={() =>
                    window.innerWidth >= 768 && setIsDropdownOpen(true)
                  }
                 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Product ▼
                </button>
                {isDropdownOpen && (
                  <div
                    className={`absolute left-0 mt-2 w-64 border rounded-lg shadow-lg ${
                      theme === "dark"
                        ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white border-t border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <ul
                      className="grid grid-cols-2 gap-2 p-3"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <li>
                        <Link
                          to="/gaming"
                          className="block p-2 rounded hover:text-blue-700"
                        >
                          Gaming-laptop
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/business"
                          className="block p-2 rounded hover:text-blue-700"
                        >
                          Business-laptop
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/accessories"
                          className="block p-2 rounded hover:text-blue-700"
                        >
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li> */}
              <li className="flex items-center gap-1 py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400">
                <FaEnvelopeOpenText className="text-lg" />
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="flex items-center gap-1 py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400">
                <FaLaptopCode className="text-lg" />
                <Link to="/service">Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Navbar;
