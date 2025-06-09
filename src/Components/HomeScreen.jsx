import React from "react";
import { useRef } from "react";
import NavBar from "./NavBar";
import ImageLogo from "../assets/logo.png";
import VideoLoop from "../assets/Website.webm";
import PropertyCards from "./PropertySection";
import Amenities from "./Amenities";
import Footer from "./Footer";
import LocationServices from "./Location";
import { FeedBack } from "./FeedBack";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <video
        src={VideoLoop}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />
      <PropertyCards />
      <Amenities />
      <div className="h-0.5 bg-blue-900 mt-7" />
      <LocationServices />
      <div className="h-0.5 bg-blue-900 mt-7" />

      <FeedBack />
      <Footer />
    </div>
  );
};

export default HomeScreen;
