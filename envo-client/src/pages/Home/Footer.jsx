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
          {/* About Envocare */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              ABOUT ENVOCARE
            </h3>
            <p className="text-sm text-gray-300">
              Pioneering sustainable solutions for environmental management,
              specializing in waste treatment, water purification, and
              eco-friendly initiatives.
            </p>
            <div className="my-2">
              <h3 className="text-xl font-bold my-2 text-yellow-500">
                USEFUL LINKS
              </h3>
              <div className="flex flex-col justify-start items-start text-sm space-y-2">
                {["ABOUT US", "SERVICES", "PROJECTS", "BLOG", "CONTACT US"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() =>
                        navigate(`/${link.toLowerCase().replace(" ", "")}`)
                      }
                      className="hover:text-yellow-500 cursor-pointer"
                    >
                      &gt; {link}
                    </button>
                  )
                )}
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
                  "Waste Management",
                  "Water Treatment",
                  "Environmental Consulting",
                  "Sustainable Solutions",
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
                  "FAQs",
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

          {/* Contact Details */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              CONTACT DETAILS
            </h3>
            <div className="flex items-center">
              <IoLocationOutline size={60} className="text-yellow-500" />
              <span className="m-4 text-md">
                123 Greenway Street, EcoCity, Earth
              </span>
            </div>
            <div className="flex items-center">
              <IoCallOutline size={24} className="text-yellow-500" />
              <span className="ml-4">+91 9876543210</span>
            </div>
            <div className="flex items-center">
              <MdOutlineEmail size={24} className="text-yellow-500" />
              <span className="ml-4">support@envocare.com</span>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 md:mt-10 text-gray-300 border-t border-gray-600 pt-6">
          <div className="text-lg font-bold md:mb-4 text-yellow-500">
            CONNECT WITH US
          </div>
          <div className="flex justify-center space-x-3 text-gray-300 mb-4">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-500 cursor-pointer" />
            <FaRss className="hover:text-yellow-500 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
