import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

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
        className={`bg-gradient-to-r from-blue-700 to-blue-800 text-transparent bg-clip-text flex flex-wrap justify-between items-center px-4 md:px-10 py-2 text-sm transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full z-50`}
      >
        <ContentWrapper>
          <div className="flex space-x-4">
            <a href="mailto:mail@startuprr.com" className="hover:underline">
              suviaminfra@gmail.com
            </a>
            <span className="hidden md:block mx-4">|</span>
            <a href="tel:9403455280" className="hover:underline">
              9403455116
            </a>
          </div>
        </ContentWrapper>
      </div>

      {/* Main Navbar */}
      <nav>
        <div
          style={{ top: hideTopBar ? "0" : "40px" }}
          className={`fixed top-0 left-0 w-full bg-gradient-to-r from-white via-blue-100 to-blue-200 text-blue-900 text-md shadow-md px-4 md:px-10 py-3 flex justify-between items-center transition-all duration-500 z-40`}
        >
          <div
            className="flex items-center space-x-4 cursor-pointer max-w-[1440px]"
            onClick={() => navigate(`/`)}
          >
            <div className="bg-blue-900 p-2 rounded-full">
              <img
                className="w-10 h-10 object-cover"
                src="src/assets/logo3.png"
                alt="Suviam Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">SUVIAM</span>
              <span className="text-sm text-gray-600">
                Empowering Innovation
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-md font-semibold">
            {[
              "ABOUT US",
              "PRODUCT",
              "GALLERY",
              "PROJECTS",
              "BLOG",
              "CONTACT US",
            ].map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  navigate(`/${item.toLowerCase().replace(" ", "")}`)
                }
                className="hover:text-blue-700 cursor-pointer transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-700 px-3 py-2">
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
            className="fixed z-20 top-0 left-0 w-full shadow-md rounded-b-xl bg-gradient-to-b from-white via-blue-100 to-blue-200 px-4 py-4 md:hidden space-y-4"
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
                className="block w-full text-left text-blue-900 font-semibold p-2 hover:bg-blue-200 rounded transition duration-300"
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
