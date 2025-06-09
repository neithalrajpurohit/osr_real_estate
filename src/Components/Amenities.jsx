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
    // Main container for the amenities section.
    // max-w-6xl: sets maximum width.
    // mx-auto: centers the content.
    // py-5: adds vertical padding.
    <div className="mt-[50px]">
      <div className="max-w-6xl mx-auto py-5">
        <h1 className="text-4xl font-bold text-center mb-16">
          <span className="text-indigo-900">We Offer Luxurious </span>
          <span className="text-red-600">Amenities Just For You!</span>
        </h1>

        {/* Amenities Grid: Displays a grid of amenities. */}
        {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-4: responsive column layout. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, index) => {
            // Calculate row and column for border logic.
            const row = Math.floor(index / 4);
            const col = index % 4;

            // Add right border if not in the last column.
            const borderRight = col < 3 ? "border-r" : "";
            // Add bottom border if in the first row (for a 2-row grid, this applies to the first row only).
            // If you have more than 2 rows and want borders between all rows, this logic would need adjustment.
            const borderBottom = row === 0 ? "border-b" : "";

            // Conditional styling for highlighted items.
            const bgColor = amenity.highlighted ? "bg-indigo-900" : "bg-white";
            const textColor = amenity.highlighted ? "text-white" : "";
            const descriptionColor = amenity.highlighted
              ? "text-gray-200"
              : "text-gray-600";

            return (
              // Individual amenity item.
              <div
                key={amenity.id}
                className={`relative flex flex-col items-center text-center p-6 ${borderRight} ${borderBottom} border-gray-300 ${bgColor} ${textColor}`}
              >
                <div className="mb-4 h-16 w-16 flex items-center justify-center">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className={`text-sm ${descriptionColor}`}>
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider line: Spans the full width of its container. */}
        {/* If this container is not full width, the line won't span the screen. */}
        {/* To make it span the entire screen width, it should be outside containers with max-width or padding. */}
        {/* For now, adding w-full makes it span the width of its current parent (max-w-6xl). */}
        {/* If you want it truly full screen width, this div needs to be moved outside the "max-w-6xl mx-auto" container. */}
      </div>

      <div className="h-0.5 bg-blue-900 mt-7 w-full" />

      {/* Trust Section: Displays an image and text content. */}
      {/* flex flex-row: arranges image and text side-by-side. */}
      {/* my-[20px]: adds vertical margin. */}
      <div className="flex flex-col md:flex-row my-[20px] items-center md:items-start max-w-6xl mx-auto py-5">
        <img
          src={trustimage}
          className="w-full md:w-[500px] rounded-2xl mb-6 md:mb-0 md:mr-8"
          alt="Trust representation"
        />
        <div className="flex flex-col text-center md:text-left" id="about">
          <h1 className="text-red-500 text-6xl sm:text-8xl">OSR</h1>
          <h1 className="text-[#2f2883] text-5xl sm:text-7xl mt-2">
            We Build Trust
          </h1>
          <p className="text-[#2f2883] text-lg sm:text-[20px] mt-[25px]">
            At OSR, we don’t just build structures—we create spaces where dreams
            take root. With more than one and half decade of experience,
            delivered many successful projects on-time, and the trust of
            thousands of families, we’ve grown not just in numbers, but in
            purpose. Guided by integrity and a vision for lasting value, OSR
            stands as a name people believe in—because we build with heart, not
            just bricks.
          </p>
        </div>
      </div>

      {/* Statistics Section: Displays key statistics. */}
      {/* flex flex-wrap: allows items to wrap on smaller screens. */}
      {/* justify-center items-center lg:justify-between: responsive alignment. */}
      <div className="flex flex-wrap justify-center items-center lg:justify-between py-8">
        {statistics.map((stat) => (
          <div key={stat.id} className="text-center px-4 sm:px-8 md:px-12 py-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-indigo-900 mb-3">
              {stat.number}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-red-600 font-medium">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
