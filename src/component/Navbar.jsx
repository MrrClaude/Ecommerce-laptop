import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import ThemeContext from "../context/themeProvder";
import imgLogo from "/Artboard1.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { theme, toggle } = useContext(ThemeContext);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className="relative ">
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
              className={`self-center text-2xl font-bold ${
                theme === "dark" ? " text-indigo-700" : "text-black"
              }`}
            >
              ICT
            </span>
          </Link>

          <div className="flex items-center space-x-3 md:order-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-lg "
            >
              🔍
            </button>

            <button className="p-2 rounded-full transition" onClick={toggle}>
              {theme === "light" ? <IoSunny /> : <IoMoon />}
            </button>

            <button className="px-4 py-2 text-sm font-medium  rounded-lg hover:bg-blue-700 bg-blue-600">
              Login
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100  rounded-lg"
            >
              ☰
            </button>
          </div>

          {isSearchOpen && (
            <div className="w-full md:block md:w-auto md:order-1 mt-3 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full md:w-64 p-2 pl-3 text-sm border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600"
              />
            </div>
          )}

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Product ▼
                </button>
                {isDropdownOpen && (
                  <div
                    className={`absolute left-0 mt-2 w-64   border rounded-lg shadow-lg ${
                      theme === "dark"
                        ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white border-t border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <ul
                      className="grid grid-cols-2 gap-2 p-3  "
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <li>
                        <Link
                          to="/gaming"
                          className="block p-2 rounded hover:text-blue-700 "
                          
                        >
                          Gaming-laptop
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/business"
                          className="block p-2 rounded hover:text-blue-700 "
                        >
                          Business-laptop
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/accessories"
                          className="block p-2 rounded hover:text-blue-700 "
                        >
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="block py-2 px-3 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
