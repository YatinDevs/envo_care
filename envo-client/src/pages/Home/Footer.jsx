import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12 w-full px-8">
      <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Suviam Infra */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              ABOUT SUVIAM INFRA
            </h3>

            <p className="text-sm text-gray-300">
              Innovating Infrastructure, Strengthening Tomorrow. With over a
              decade of expertise, we specialize in RCC pipe manufacturing and
              large-scale infrastructure projects.
            </p>
            {/* Useful Links */}
            <div className="my-2">
              <h3 className="text-xl font-bold my-2 text-yellow-500">
                USEFUL LINKS
              </h3>
              <div className="flex flex-col justify-start items-start text-sm space-y-2">
                {[
                  "ABOUT US",
                  "PRODUCT",
                  "PROJECTS",
                  "GALLERY",
                  "BLOG",
                  "CONTACT US",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() =>
                      navigate(`/${link.toLowerCase().replace(" ", "")}`)
                    }
                    className="hover:text-yellow-500 cursor-pointer"
                  >
                    &gt; {link}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">
                OUR SERVICES
              </h3>
              <ul className="text-sm space-y-2">
                {[
                  "RCC Pipe Manufacturing",
                  "Infrastructure Development",
                  "Water Management Solutions",
                  "Sustainable Engineering",
                ].map((service) => (
                  <li
                    key={service}
                    className="hover:text-yellow-500 cursor-pointer"
                  >
                    &gt; {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">
                CUSTOMER SUPPORT
              </h3>
              <ul className="text-sm space-y-2">
                {[
                  "How to Guide",
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Contact Us",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-yellow-500 cursor-pointer"
                  >
                    &gt; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              LATEST BLOGS
            </h3>
            {[20, 30, 31].map((date) => (
              <div className="mb-4" key={date}>
                <div className="flex space-x-4">
                  <div className="bg-gray-800 p-3 text-center w-12 rounded-md">
                    <span className="block font-bold text-yellow-500">
                      {date}
                    </span>
                    <span className="block text-sm text-gray-400">MAR</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Blog title first</p>
                    <span className="text-sm text-gray-400">By Admin / 28</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media & Contact */}
          <div className="text-center">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">
                CONTACT DETAILS
              </h3>
              <div className="w-full">
                <iframe
                  title="Google Map"
                  className="w-full h-62 text-2xl rounded-md border border-gray-300 shadow-sm"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3397927308296!2d73.9549263749955!3d20.76456478074188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea3e79b15e27%3A0x30e792c6a7cbcb3e!2sGat%20No.%20211%2C%20At%20Post%3A%20Savaki(Lo)%2C%20Tal-Deola%2C%20Dist-Nashik!5e0!3m2!1sen!2sin!4v1707568399102!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>{" "}
              <div className="flex items-center">
                <IoLocationOutline size={60} className="text-yellow-500" />
                <span className="m-4 text-md ">
                  Gat No. 211, At Post: Savaki(Lo), Tal-Deola, Dist-Nashik,
                  Maharashtra.
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 md:mt-10 text-gray-300 border-t border-gray-600 pt-6">
          <div className="text-lg font-bold md:mb-4 text-yellow-500">
            CONNECT WITH US
          </div>
          <div className="flex items-center">
            <IoCallOutline size={24} className="text-yellow-500" />
            <span className="ml-4">+91 9403455116 / +91 9403455280</span>
          </div>
          <div className="flex items-center">
            <MdOutlineEmail size={24} className="text-yellow-500" />
            <span className="ml-4">suviaminfra@gmail.com</span>
          </div>
          <div>
            <div className="flex justify-center space-x-3 text-gray-300 mb-4">
              <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
              <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-yellow-500 cursor-pointer" />
              <FaRss className="hover:text-yellow-500 cursor-pointer" />
              <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
              <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            </div>{" "}
          </div>
        </div>
        {/* Rich System Solutions */}
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
