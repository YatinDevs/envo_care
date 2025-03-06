import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { navLogo } from "../../../public/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [mobileMargin, setMobileMargin] = useState(120);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
        setMobileMargin(70);
      } else {
        setHideTopBar(false);
        setMobileMargin(120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-white relative">
      {/* Top Bar - Animated Disappearance on Scroll */}
      <div
        className={`bg-gradient-to-r from-orange-900 to-orange-700 text-gray-200 flex flex-wrap justify-between items-center px-4 md:px-10 py-2 text-sm transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full z-50`}
      >
        <ContentWrapper>
          <div className="flex space-x-4">
            <a href="mailto:mail@startuprr.com" className="hover:underline">
              envocares@gmail.com
            </a>
            <span className="hidden md:block mx-2">|</span>
            <a href="tel:9403455280" className="hover:underline">
              +91 9970436943
            </a>
          </div>
        </ContentWrapper>
      </div>

      {/* Main Navbar */}
      <nav>
        <div
          style={{ top: hideTopBar ? "0" : "40px" }}
          className={`fixed top-0 rounded-b-full left-0 w-full bg-gradient-to-r from-orange-900 via-orange-700 to-orange-600 text-gray-100 shadow-md px-4 md:px-10 py-3 flex justify-between items-center transition-all duration-500 z-40`}
        >
          <div
            className="flex items-center space-x-4 cursor-pointer max-w-[1440px]"
            onClick={() => navigate(`/`)}
          >
            <div className="p-2 rounded-full mx-10">
              <img
                className="h-12 md:h-20 object-cover rounded-2xl shadow-md  active:scale-95"
                src={navLogo}
                alt="Envocare"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 text-md font-semibold mr-10 ">
            {[
              "HOME",
              "ABOUT US",
              "SERVICES",
              "PROJECTS",
              "BLOG",
              "CONTACT US",
            ].map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  navigate(`/${item.toLowerCase().replace(" ", "")}`)
                }
                className="hover:text-green-900 cursor-pointer transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-orange-400 px-3 py-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Framer Motion for Smooth Transition */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed z-20 top-0 left-0 w-full shadow-md rounded-b-xl bg-gradient-to-b from-orange-900 via-orange-800 to-orange-700 px-4 py-4 lg:hidden space-y-4"
            style={{ marginTop: `${mobileMargin}px` }}
          >
            {[
              "ABOUT US",
              "PRODUCT",
              "GALLERY",
              "PROJECTS",
              "BLOG",
              "CONTACT US",
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  navigate(`/${item.toLowerCase().replace(" ", "")}`);
                  toggleMenu();
                }}
                className="block w-full text-left text-gray-100 font-semibold p-2 hover:bg-orange-600 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
