import React from "react";
import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.webp";
import icon4 from "../assets/icon4.webp";
import icon5 from "../assets/icon5.webp";
import icon6 from "../assets/icon6.webp";
import icon7 from "../assets/icon7.webp";
import icon8 from "../assets/icon8.webp";
import trustimage from "../assets/trustimage.png";

const Amenities = () => {
  // Array of amenity objects, each with id, title, description, highlighted status, and image.
  const amenities = [
    {
      id: 1,
      title: "Prime Expressway Frontage",
      description: "Enjoy unmatched visibility and seamless access",
      highlighted: false,
      image: icon1,
    },
    {
      id: 2,
      title: "Metro Connectivity At Your Doorstep",
      description: "Convenient access to major metro stations",
      highlighted: true,
      image: icon2,
    },
    {
      id: 3,
      title: "Surrounded By Prestigious Universities",
      description: "A vibrant community of students and professionals",
      highlighted: false,
      image: icon3,
    },
    {
      id: 4,
      title: "Close To Sports & Leisure Landmarks",
      description: "Live near iconic stadiums and entertainment zones",
      highlighted: false,
      image: icon4,
    },
    {
      id: 5,
      title: "Residential & Commercial Neighbourhood",
      description: "An ecosystem of modern living and business",
      highlighted: false,
      image: icon5,
    },
    {
      id: 6,
      title: "Proximity To Upcoming Film City",
      description: "Benefit from future development and growth potential",
      highlighted: false,
      image: icon6,
    },
    {
      id: 7,
      title: "Free Property Mutation",
      description: "Enjoy hassle-free ownership with no extra costs",
      highlighted: false,
      image: icon7,
    },
    {
      id: 8,
      title: "Smart Investment With Lifestyle Perks",
      description: "Free gifts and registry offers (T&C Apply)",
      highlighted: true,
      image: icon8,
    },
  ];

  // Array of statistic objects, each with id, number, and description.
  const statistics = [
    {
      id: 1,
      number: "5000+",
      description: "Trusted Customers",
    },
    {
      id: 2,
      number: "27+",
      description: "Delivered Projects",
    },
    {
      id: 3,
      number: "15+",
      description: "Yrs of Experience",
    },
    {
      id: 4,
      number: "3+",
      description: "Branch offices",
    },
  ];

  return (
    <div className="mt-8 sm:mt-12 lg:mt-[50px]">
      {/* Main container with responsive padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Responsive heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <span className="text-indigo-900">We Offer Luxurious </span>
          <span className="text-red-600">Amenities Just For You!</span>
        </h1>

        {/* Responsive Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {amenities.map((amenity, index) => {
            // Calculate responsive border logic
            const isTablet = index < 4 || (index >= 4 && index < 8); // For 2-row layout on tablet
            const isDesktop = Math.floor(index / 4) === 0; // First row on desktop
            const colPosition = index % 4;
            const tabletColPosition = index % 2;

            // Desktop borders (4 columns)
            const desktopBorderRight = colPosition < 3 ? "lg:border-r" : "";
            const desktopBorderBottom = isDesktop ? "lg:border-b" : "";

            // Tablet borders (2 columns)
            const tabletBorderRight =
              tabletColPosition === 0 ? "sm:border-r lg:border-r-0" : "";
            const tabletBorderBottom =
              index < 6 ? "sm:border-b lg:border-b-0" : "";

            // Mobile borders
            const mobileBorderBottom =
              index < 7 ? "border-b sm:border-b-0" : "";

            // Conditional styling for highlighted items
            const bgColor = amenity.highlighted ? "bg-indigo-900" : "bg-white";
            const textColor = amenity.highlighted ? "text-white" : "";
            const descriptionColor = amenity.highlighted
              ? "text-gray-200"
              : "text-gray-600";

            return (
              <div
                key={amenity.id}
                className={`relative flex flex-col items-center text-center p-4 sm:p-6 
                  ${mobileBorderBottom} ${tabletBorderRight} ${tabletBorderBottom} 
                  ${desktopBorderRight} ${desktopBorderBottom} ${bgColor} ${textColor}
                  border-gray-300 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]
                  hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="mb-3 sm:mb-4 h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex items-center justify-center">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 leading-tight">
                  {amenity.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${descriptionColor} leading-relaxed`}
                >
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-width divider */}
      <div className="h-0.5 bg-blue-900 mt-4 sm:mt-6 lg:mt-7 w-full" />

      {/* Trust Section with responsive layout */}
      <div className="flex flex-col lg:flex-row my-8 sm:my-12 lg:my-[20px] items-center lg:items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="w-full lg:w-auto mb-6 lg:mb-0 lg:mr-8 flex-shrink-0">
          <img
            src={trustimage}
            className="w-full max-w-md mx-auto lg:max-w-none lg:w-[400px] xl:w-[500px] rounded-2xl"
            alt="Trust representation"
          />
        </div>

        <div
          className="flex flex-col text-center lg:text-left flex-grow"
          id="about"
        >
          <h1 className="text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-bold">
            OSR
          </h1>
          <h1 className="text-[#2f2883] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold mt-2">
            We Build Trust
          </h1>
          <p className="text-[#2f2883] text-base sm:text-lg lg:text-lg xl:text-[20px] mt-4 sm:mt-6 lg:mt-[25px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            At OSR, we don't just build structures—we create spaces where dreams
            take root. With more than one and half decade of experience,
            delivered many successful projects on-time, and the trust of
            thousands of families, we've grown not just in numbers, but in
            purpose. Guided by integrity and a vision for lasting value, OSR
            stands as a name people believe in—because we build with heart, not
            just bricks.
          </p>
        </div>
      </div>

      {/* Responsive Statistics Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-indigo-900 mb-2 sm:mb-3">
                {stat.number}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-red-600 font-medium leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
