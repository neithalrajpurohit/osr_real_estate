import React from "react";
// import location from "../assets/location.webp";
import GoogleMapWithMarkers from "./GoogleMap";

const LocationServices = () => {
  return (
    <div className="px-6 py-10 flex flex-col md:flex-row max-w-6xl mx-auto  rounded-md">
      {/* Left - Text Content */}
      <div className="md:w-1/2 space-y-2 mt-[20px]">
        <h2 className="text-xl font-semibold text-[#2F2883] mb-4">
          Location Advantages
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Prime Location – Noida, Greater Noida & Jewar</li>
          <li>Metro-Connected – Close to major stations</li>
          <li>Education Hub – Near top universities</li>
          <li>Surrounded by Landmarks – Stadiums, MNCs & commercial zones</li>
          <li>High-Growth Zone – Excellent ROI & future-ready</li>
          <li>Next to Upcoming Film City – Strategic development hotspot</li>
          <li>Everything Within Reach – Walk to all essential amenities</li>
          <li>Smart Financing – Low down payment & full loan support</li>
        </ul>
      </div>

      {/* Right - Placeholder for Image/Map */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
        {/* Reserve space for image/map */}

        {/* <img src={location} className="w-[400px] object-contain" /> */}
        <GoogleMapWithMarkers />
        {/* </div> */}
      </div>
    </div>
  );
};

export default LocationServices;
