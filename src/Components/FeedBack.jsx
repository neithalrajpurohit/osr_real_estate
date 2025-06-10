import React, { useState } from "react";
import osr from "../assets/osr2.webp";
import VideoLoop from "../assets/propertyVideos.mp4";
import icon1 from "../assets/icon1.webp";
import icon8 from "../assets/icon8blue.webp";
import icon5 from "../assets/icon5.webp";
import roi from "../assets/roi.webp";
import axios from "axios";
import { ENQUIRY_SERVER_URL } from "../Constants";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    landSize: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation - Indian phone number (10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    // Land size validation
    if (!formData.landSize) {
      newErrors.landSize = "Please select required land size";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.landSize &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))
    );
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill all fields correctly");
      return;
    }

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phoneNo: formData.phone.trim(),
        requiredLandSize: formData.landSize,
      };

      setLoading(true);

      const res = await axios.post(ENQUIRY_SERVER_URL, payload, {
        headers: { "Content-Type": "application/json" },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        landSize: "",
      });
      setErrors({});
      setLoading(false);

      if (res.data?.success) {
        toast.success("Feedback submitted successfully");
      } else {
        toast.error("Failed to submit");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen mb-4 sm:mb-6 lg:mb-8">
      {/* Header */}
      <div className="text-center py-4 sm:py-6 lg:py-8 px-4 bg-white">
        <div className="mb-4 sm:mb-6">
          <div className="inline-block">
            <img
              src={osr}
              className="w-16 sm:w-20 lg:w-24 xl:w-[100px]"
              alt="OSR Logo"
            />
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 px-2">
          Unlock{" "}
          <span className="text-red-500 text-2xl sm:text-3xl lg:text-4xl">
            High Returns
          </span>{" "}
          with Plots in Noida, Greater Noida & Jewar
        </h1>

        <p className="text-sm sm:text-base lg:text-xl text-gray-700 mb-2 px-2 max-w-4xl mx-auto">
          Near metro stations and key landmarks – flexible financing and
          exclusive offers
          <span className="text-[#2746c4] font-semibold"> available now!</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Video Section Header */}
            <div className="bg-[#d6e1f8] rounded-2xl sm:rounded-[30px] pt-2 overflow-hidden">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-3 px-3 sm:px-4 pt-2">
                Explore Noida Plots – Live Tour Inside{" "}
                <span className="text-[#2746c4]">Watch this video</span>
              </h2>
              <div className="h-48 sm:h-64 lg:h-80 flex items-center rounded-b-2xl sm:rounded-b-[30px] overflow-hidden justify-center">
                <video
                  src={VideoLoop}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="w-full h-full object-cover sm:object-fill rounded-b-2xl"
                />
              </div>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-[#e9eefa] p-3 sm:p-4 rounded-lg text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  <img
                    src={icon1}
                    className="w-10 sm:w-12 lg:w-[60px]"
                    alt="Expressway"
                  />
                </div>
                <h3 className="font-bold text-black text-xs sm:text-sm">
                  Expressway
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-black">
                  Connectivity
                </p>
              </div>

              <div className="bg-[#e9eefa] p-3 sm:p-4 rounded-lg text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  <img
                    src={icon8}
                    className="w-10 sm:w-12 lg:w-[60px]"
                    alt="Flexible Investment"
                  />
                </div>
                <h3 className="font-bold text-black text-xs sm:text-sm">
                  Flexible
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-700">
                  Investment
                </p>
              </div>

              <div className="bg-[#e9eefa] p-3 sm:p-4 rounded-lg text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  <img
                    src={icon5}
                    className="w-10 sm:w-12 lg:w-[60px]"
                    alt="Smart City"
                  />
                </div>
                <h3 className="font-bold text-black text-xs sm:text-sm">
                  Smart City
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-700">Design</p>
              </div>

              <div className="bg-[#e9eefa] p-3 sm:p-4 rounded-lg text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  <img
                    src={roi}
                    className="w-10 sm:w-12 lg:w-[60px]"
                    alt="High ROI"
                  />
                </div>
                <h3 className="font-bold text-black text-xs sm:text-sm">
                  High ROI
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-700">
                  Potential
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#dce2f6] rounded-xl w-full max-w-lg mx-auto lg:mx-0 p-4 sm:p-6 lg:py-8 lg:px-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm sm:text-base ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm sm:text-base ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  Phone No <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit phone number"
                  maxLength="10"
                  className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm sm:text-base ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  Required land Size <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white text-sm sm:text-base ${
                      errors.landSize ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  >
                    <option value="">- Select -</option>
                    <option value="100-200">50 Gaz</option>
                    <option value="200-300">100 Gaz</option>
                    <option value="300-500">200 Gaz</option>
                    <option value="500+">More than 200 Gaz</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.landSize && (
                  <p className="text-red-500 text-xs mt-1">{errors.landSize}</p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading || !isFormValid()}
                className={`w-full flex justify-center items-center gap-3 sm:gap-5 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 ${
                  loading || !isFormValid()
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-[#0f0d67] hover:bg-blue-800 cursor-pointer"
                } text-white`}
              >
                {loading && (
                  <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                )}
                ENQUIRE NOW
              </button>
            </div>

            <div className="mt-4 sm:mt-6 mb-2 sm:mb-[10px]">
              <div className="flex rounded-md overflow-hidden mx-2 sm:mx-4 lg:mx-[20px]">
                <div className="bg-yellow-400 w-[80%] py-1"></div>
                <div className="bg-gray-300 flex-1 py-1"></div>
              </div>
              <div className="text-center py-2 sm:py-3 rounded-md">
                <p className="font-bold text-base sm:text-lg lg:text-xl text-black">
                  Only 4 Plots Left{" "}
                  <span className="text-blue-600">Hurry Up!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
