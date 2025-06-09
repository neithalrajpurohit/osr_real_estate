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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("ekigu");
    try {
      const name = formData.name;
      const email = formData.email;

      const phoneNo = formData.phone;

      const landSize = formData.landSize;

      const payload = {
        name: name,
        email: email,
        phoneNo: phoneNo,
        requiredLandSize: landSize,
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
      setLoading(false);
      if (res.data?.success) {
        toast.success("Feedback submitted successfully");
      } else {
        toast.error("Failed to submit");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    // Handle form submission here
  };

  return (
    <div className="min-h-screen mb-[30px]">
      {/* Header */}
      <div className="text-center py-8 px-4 bg-white">
        <div className="mb-6">
          <div className="inline-block">
            <img src={osr} className="w-[100px]" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Unlock <span className="text-red-500 text-4xl ">High Returns</span>{" "}
          with Plots in Noida, Greater Noida & Jewar
        </h1>

        <p className="text-xl text-gray-700 mb-2">
          Near metro stations and key landmarks – flexible financing and
          exclusive offers
          <span className="text-[#2746c4] font-semibold"> available now!</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Video Section Header */}
            <div className="bg-[#d6e1f8] rounded-[30px] pt-2 overflow-hidden">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 px-4 rounded-t-xl pt-2">
                Explore Noida Plots – Live Tour Inside{" "}
                <span className="text-[#2746c4]">Watch this video</span>
              </h2>
              <div className="h-80 flex items-center rounded-b-[30px] overflow-hidden justify-center">
                <video
                  src={VideoLoop}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="w-[600px] h-auto object-fill rounded-b-2xl"
                />
              </div>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#e9eefa] p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <img src={icon1} className="w-[60px]" />
                </div>
                <h3 className="font-bold text-black text-sm">Expressway</h3>
                <p className="text-xs font-bold text-black">Connectivity</p>
              </div>

              <div className="bg-[#e9eefa] p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <img src={icon8} className="w-[60px]" />
                </div>
                <h3 className="font-bold text-black text-sm">Flexible</h3>
                <p className="text-xs text-gray-700">Investment</p>
              </div>

              <div className="bg-[#e9eefa] p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <img src={icon5} className="w-[60px]" />
                </div>
                <h3 className="font-bold text-black text-sm">Smart City</h3>
                <p className="text-xs text-gray-700">Design</p>
              </div>

              <div className="bg-[#e9eefa] p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <img src={roi} className="w-[60px]" />
                </div>
                <h3 className="font-bold text-black text-sm">High ROI</h3>
                <p className="text-xs text-gray-700">Potential</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#dce2f6] rounded-xl max-w-lg p-4 py-8 px-6">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Phone No <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone No"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Required land Size <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
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
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full flex justify-center items-center gap-5  disabled:opacity-50 bg-[#0f0d67] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-md transition duration-300 text-lg"
              >
                {loading && <Loader2 className="animate-spin" />}
                ENQUIRE NOW
              </button>
            </div>
            <div className="mt-6 mb-[10px]">
              <div className="flex rounded-md overflow-hidden mx-[20px]">
                <div className="bg-yellow-400 w-[80%] py-1"></div>
                <div className="bg-gray-300 flex-1 py-1"></div>
              </div>
              <div className="text-center py-3 rounded-md">
                <p className="font-bold text-xl text-black">
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
