import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import LogoImage from "../assets/logo.png";
// Mock logo for demo - replace with your actual import

// Mock icons for demo - replace with your actual react-icons imports
const FaXTwitter = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FaInstagram = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FaYoutube = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FaLinkedin = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  return (
    <div className="bg-[#2F2883] text-white w-full" id="contact">
      <div className="w-full px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-8 max-w-[1440px] mx-auto">
        {/* Left Section: Logo, Company Name, and Contact Info */}
        <div className="flex flex-col items-center sm:items-start gap-y-4 w-full md:w-auto ml-0 lg:ml-[120px]">
          {/* Block 1: Contains Logo and Company Name */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-x-5">
            <img
              src={LogoImage}
              alt="Om Sai Residency Pvt. Ltd. Logo"
              className="w-[100px] h-[80px] object-contain rounded-md shrink-0"
            />
            <h2 className="text-xl sm:text-2xl font-semibold leading-tight mt-3 sm:mt-0">
              Om Sai Residency
              <br />
              Pvt. Ltd.
            </h2>
          </div>

          {/* Block 2: Contact Details */}
          <div className="space-y-3 text-sm text-gray-200 text-center gap-[8px] sm:text-left w-full sm:max-w-md">
            <p className="flex items-start gap-2 justify-center sm:justify-start">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                Tower B, 5th Floor Unit 506/507 Bhutani Alphathum,
                <br />
                Sector 90, Noida, Uttar Pradesh 201305.
              </span>
            </p>
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <Phone className="w-4 h-4 shrink-0" />
              +91 97282 90056
            </p>
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <Mail className="w-4 h-4 shrink-0" />
              info@omsairesidency.com
            </p>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex gap-4 justify-center md:justify-end text-white text-2xl pt-0 md:pt-[170px] pr-0 lg:pr-[120px] w-full md:w-auto">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-gray-300 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
            className="hover:text-gray-300 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
