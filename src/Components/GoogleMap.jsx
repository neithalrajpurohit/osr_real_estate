import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Plus,
  Minus,
  Maximize2,
  Navigation2,
  Zap,
  Star,
} from "lucide-react";

const CustomThemedGoogleMap = () => {
  // Sample locations - replace with your actual coordinates
  const locations = [
    {
      id: 1,
      name: "Noida Sector 143",
      latitude: 28.501,
      longitude: 77.4257,
    },
    {
      id: 2,
      name: "Knowledge Park II, Greater Noida",
      latitude: 28.461,
      longitude: 77.4969,
    },
    {
      id: 3,
      name: "Chi V (Chi 5), Greater Noida",
      latitude: 28.431,
      longitude: 77.506,
    },
    {
      id: 4,
      name: "Bhutani Alphathum, Sector 90, Noida",
      latitude: 28.5128,
      longitude: 77.4109,
    },
    {
      id: 5,
      name: "Luxury Villas, Sector 150, Noida",
      latitude: 28.4215,
      longitude: 77.4853,
    },
  ];
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(12);
  const [mapTheme, setMapTheme] = useState("cyber");

  // Function to open Google Maps with the selected location
  //   const openInGoogleMaps = (lat, lng, name) => {
  //     const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  //     window.open(url, "_blank");
  //   };
  //   const openInGoogleMaps = (lat, lng, name, placeId) => {
  //     const url = placeId
  //       ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  //           name
  //         )}&query_place_id=${placeId}`
  //       : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  //           name + " near " + lat + "," + lng
  //         )}`;
  //     window.open(url, "_blank");
  //   };
  const openInGoogleMaps = (lat, lng, name) => {
    const query = encodeURIComponent(`${name} near ${lat},${lng}`);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };

  // Category colors and icons with default fallback
  const categoryStyles = {
    tech: { color: "from-cyan-400 to-blue-500", icon: Zap, accent: "cyan" },
    creative: {
      color: "from-purple-400 to-pink-500",
      icon: Star,
      accent: "purple",
    },
    business: {
      color: "from-green-400 to-emerald-500",
      icon: Navigation2,
      accent: "green",
    },
    entertainment: {
      color: "from-orange-400 to-red-500",
      icon: Star,
      accent: "orange",
    },
    sports: {
      color: "from-yellow-400 to-orange-500",
      icon: Zap,
      accent: "yellow",
    },
    default: {
      color: "from-gray-400 to-gray-500",
      icon: MapPin,
      accent: "gray",
    },
  };

  // Helper function to get category style with fallback
  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const themes = {
    cyber: {
      name: "Cyber Dark",
      bg: "from-gray-900 via-blue-900 to-purple-900",
      mapBg: "from-slate-800 to-slate-900",
      streets: "border-cyan-400/30",
      accent: "cyan-400",
    },
    // neon: {
    //   name: "Neon Night",
    //   bg: "from-black via-purple-900 to-pink-900",
    //   mapBg: "from-gray-900 to-black",
    //   streets: "border-pink-400/40",
    //   accent: "pink-400",
    // },
    // forest: {
    //   name: "Forest Green",
    //   bg: "from-green-900 via-emerald-800 to-teal-900",
    //   mapBg: "from-green-800 to-green-900",
    //   streets: "border-green-300/30",
    //   accent: "green-300",
    // },
  };

  const currentTheme = themes[mapTheme];

  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      {/* Custom themed header */}
      <div
        className={`bg-gradient-to-r ${currentTheme.bg} px-6 py-4 flex items-center justify-between border-b border-white/10`}
      >
        <div className="flex items-center gap-4">
          <div className="text-white font-bold text-2xl flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-white/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            Locations
          </div>
        </div>
        {/* Theme selector */}
        {/* <div className="flex items-center gap-3">
          <select
            value={mapTheme}
            onChange={(e) => setMapTheme(e.target.value)}
            className="bg-white/10 backdrop-blur-sm text-white rounded-lg px-3 py-2 border border-white/20 text-sm"
          >
            {Object.entries(themes).map(([key, theme]) => (
              <option key={key} value={key} className="bg-gray-800">
                {theme.name}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      {/* Custom themed map container */}
      <div className="relative">
        <div
          className={`w-full h-96 bg-gradient-to-br ${currentTheme.mapBg} relative overflow-hidden`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  className={`border ${currentTheme.streets} ${
                    i % 7 === 0 ? "bg-white/5" : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Glowing street network */}
          <div className="absolute inset-0">
            {/* Main highways */}
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-1/3 shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent bottom-1/3 shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent left-1/4 shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent right-1/4 shadow-lg shadow-cyan-400/50"></div>

            {/* Glowing areas */}
            <div className="absolute top-8 right-8 w-32 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-2xl blur-sm"></div>
            <div className="absolute bottom-8 left-8 w-24 h-32 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-2xl blur-sm"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent rounded-full blur-lg"></div>
          </div>

          {/* Custom themed markers */}
          {locations.map((location, index) => {
            const categoryStyle = getCategoryStyle(location.category);
            const IconComponent = categoryStyle.icon;

            return (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 z-10 group"
                style={{
                  left: `${15 + index * 17}%`,
                  top: `${20 + (index % 2 === 0 ? 20 : 50)}%`,
                }}
                onClick={() => {
                  setSelectedLocation(location);
                  openInGoogleMaps(
                    location.latitude,
                    location.longitude,
                    location.name
                  ); // ✅ Correct keys
                }}
                onMouseEnter={() => setSelectedLocation(location)}
              >
                {/* Glowing pulse effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${categoryStyle.color} rounded-full animate-ping opacity-30 w-12 h-12 -translate-x-1/2 -translate-y-1/2`}
                ></div>

                {/* Main marker */}
                <div
                  className={`relative w-10 h-10 bg-gradient-to-br ${categoryStyle.color} rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                >
                  <IconComponent className="w-5 h-5 text-white drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-white/50 to-white/20 rounded-full"></div>
                </div>

                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800 shadow-lg">
                  {location.id}
                </div>
              </div>
            );
          })}

          {/* Enhanced info card */}
          {selectedLocation && (
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-0 max-w-sm z-20 overflow-hidden">
              <div
                className={`h-2 bg-gradient-to-r ${
                  getCategoryStyle(selectedLocation.category).color
                }`}
              ></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${
                      getCategoryStyle(selectedLocation.category).color
                    } rounded-lg flex items-center justify-center`}
                  >
                    {React.createElement(
                      getCategoryStyle(selectedLocation.category).icon,
                      { className: "w-5 h-5 text-white" }
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {selectedLocation.name}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {selectedLocation.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
                  <span>
                    {selectedLocation.lat}, {selectedLocation.lng}
                  </span>
                </div>
                <button
                  onClick={() =>
                    openInGoogleMaps(
                      location.latitude,
                      location.longitude,
                      location.name,
                      location.placeId
                    )
                  }
                  className={`flex items-center gap-3 bg-gradient-to-r ${
                    getCategoryStyle(selectedLocation.category).color
                  } text-white px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-200 w-full justify-center shadow-lg`}
                >
                  <Navigation2 className="w-4 h-4" />
                  Navigate Now
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Custom themed controls */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 z-10">
          {/* Zoom controls */}
          <div className="bg-black/50 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden">
            <button
              className="p-3 hover:bg-white/10 border-b border-white/20 block transition-colors"
              onClick={() => setZoomLevel(Math.min(zoomLevel + 1, 20))}
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
            <button
              className="p-3 hover:bg-white/10 block transition-colors"
              onClick={() => setZoomLevel(Math.max(zoomLevel - 1, 1))}
            >
              <Minus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom themed location list */}
      {/* <div
        className={`bg-gradient-to-r ${currentTheme.bg} border-t border-white/10`}
      >
        <div className="p-6">
          <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-cyan-400" />
            Featured Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => {
              const categoryStyle = getCategoryStyle(location.category);
              const IconComponent = categoryStyle.icon;

              return (
                <div
                  key={location.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  onClick={() =>
                    openInGoogleMaps(location.lat, location.lng, location.name)
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${categoryStyle.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-white text-lg">
                        {location.name}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {location.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                          {location.category}
                        </span>
                      </div>
                    </div>
                    <Navigation2 className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom status bar */}
      {/* <div
        className={`bg-gradient-to-r ${currentTheme.bg} border-t border-white/10 px-6 py-3 text-sm text-white/60 flex items-center justify-between`}
      >
        <div className="flex items-center gap-4">
          <span>🎨 Custom themed experience</span>
          <span>•</span>
          <span>Click markers to navigate</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Zoom: {zoomLevel}x</span>
          <span>•</span>
          <span className="text-cyan-400">{currentTheme.name}</span>
        </div>
      </div>  */}
    </div>
  );
};

export default CustomThemedGoogleMap;
