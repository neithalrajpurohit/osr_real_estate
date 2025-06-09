import React from "react";
import LogoImage from "../assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#2F2883] text-white w-full" id="contact">
      <div className="w-full px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-8 max-w-[1440px] mx-auto">
        {/* Left Section: Logo, Company Name, and Contact Info */}
        {/* This main container for the left section stacks its children vertically. */}
        {/* items-center for mobile (content centered), sm:items-start for larger screens (content aligned to the left). */}
        {/* gap-y-4 provides vertical spacing between the "Logo+Name" block and the "Contact Info" block. */}
        <div className="flex flex-col items-center sm:items-start gap-y-4 w-full md:w-auto ml-[120px]">
          {/* Block 1: Contains Logo and Company Name */}
          {/* On mobile (default flex-col): Logo is above Company Name, both centered. */}
          {/* On sm screens and up (sm:flex-row): Logo is to the left of Company Name, vertically centered. */}
          {/* gap-x-5 provides horizontal spacing between Logo and Company Name on sm+ screens. */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-x-5">
            <img
              src={LogoImage}
              alt="Om Sai Residency Pvt. Ltd. Logo"
              className="w-[100px] h-[80px] object-contain rounded-md shrink-0"
            />
            {/* mt-3 for spacing when stacked on mobile, sm:mt-0 to reset when side-by-side */}
            <h2 className="text-xl sm:text-2xl font-semibold leading-tight mt-3 sm:mt-0">
              Om Sai Residency
              <br />
              Pvt. Ltd.
            </h2>
          </div>

          {/* Block 2: Contact Details */}
          {/* This block appears directly underneath the "Logo and Company Name" block. */}
          {/* space-y-3 provides vertical spacing between the contact items (address, phone, email). */}
          {/* text-center sm:text-left ensures text alignment matches the H2 on different screen sizes. */}
          {/* w-full allows text to wrap, sm:max-w-md constrains width on larger screens for better readability. */}
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
        <div className="flex gap-4 justify-end text-white text-2xl pt-[170px] pr-[120px]">
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
            href="https://www.youtube.com" // Standard YouTube URL
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
    // </div>
  );
};

export default Footer;
