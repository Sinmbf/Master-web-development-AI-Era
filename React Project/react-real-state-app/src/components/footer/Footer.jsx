import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="SidhaaMakan Logo" className="w-10" />
              <span className="text-white text-2xl font-bold">SidhaaMakan</span>
            </Link>

            <p className="text-sm leading-6 text-gray-400">
              Find your dream property with ease. Buy, rent, or sell homes with
              trusted real estate experts.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                to="/list"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Properties
              </Link>

              <Link
                to="/about"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-5">
              Property Types
            </h2>

            <div className="flex flex-col gap-3">
              <Link
                to="/list"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Apartments
              </Link>

              <Link
                to="/list"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Villas
              </Link>

              <Link
                to="/list"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Commercial
              </Link>

              <Link
                to="/list"
                className="hover:text-[#fece51] transition-colors duration-300"
              >
                Offices
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-5">
              Contact Us
            </h2>
            <p>+9779865135874</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 SidhaaMakan. All rights reserved.</p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-[#fece51] transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#fece51] transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
