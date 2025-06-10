import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import { useNavigate } from "react-router-dom";

export default function PropertyCards({ scrollRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!scrollRef) return;
    // Optional: Scroll into view on mount if needed
  }, [scrollRef]);

  const properties = [
    {
      id: 1,
      name: "Noida Sec-143",
      subtitle: "A Promising Plot Investment Destination",
      image: product1,
      description:
        "Located on the Noida-Greater Noida Expressway, Sector 143 offers seamless connectivity, modern infrastructure, and strong future growth—making it ideal for residential plots and smart investments.",
      amenities: [
        "Direct access to Noida-Greater Noida Expressway",
        "Walking distance to Sector 143 Metro Station (Aqua Line)",
        "Close to IT parks, MNCs, and SEZs",
        "High appreciation potential near Jewar Airport corridor",
        "Surrounded by reputed schools, hospitals, and malls",
        "Green, planned layout with parks and wide roads",
        "Strong demand from both homebuyers and investors",
      ],
    },
    {
      id: 2,
      name: "Knowledge Park II",
      subtitle: "(Greater Noida)",
      image: product2,
      subtitle2: "Smart Plots. Strong Returns.",
      description:
        "A rapidly developing hub with top institutions, tech parks, and excellent connectivity, Knowledge Park 2 offers high potential for both living and investment.",
      amenities: [
        "Educational hotspot with top colleges and coaching centers.",
        "Aqua Line metro access (Knowledge Park II Station).",
        "Excellent road links via Noida-Greater Noida & Yamuna Expressways.",
        "Close to IT zones and commercial hubs.",
        "Strong rental demand from students and professionals.",
        "Proximity to upcoming Jewar Airport.",
        "Affordable plots with high appreciation potential.",
        "Planned infrastructure with wide roads and utilities.",
      ],
    },
    {
      id: 3,
      name: "Chi 5",
      subtitle: "(Greater Noida)",
      image: product3,
      subtitle2: "Smart Choice for Plot Investment",
      description:
        "Sector Chi 5 offers a peaceful, well-planned environment with rising residential demand. Its metro access, strong road connectivity, and proximity to key amenities make it ideal for home buyers and investors.",
      amenities: [
        "Premium residential sector with low-density layout",
        "Near Alpha 1 & Delta 1 Metro Stations (Aqua Line)",
        "Excellent road links via Expressways",
        "Close to schools, offices, and commercial zones",
        "High growth potential near Jewar Airport corridor",
        "Green, peaceful surroundings with wide roads",
        "Modern infrastructure and civic facilities",
        "Strong demand from end-users and investors",
      ],
    },
    {
      id: 4,
      name: "Bhutani Alphathum Sector 90",
      image: product4,
      subtitle: "Redefining Work & Lifestyle",
      description:
        "Where Business Meets Innovation. Located in the heart of Noida's commercial corridor, Bhutani Alphathum is a next-gen business hub offering world-class office spaces, premium retail, and lifestyle experiences—all under one iconic address.",
      amenities: [
        "Iconic Twin Towers with one of the world's largest rooftop infinity pools.",
        "Flexible Office Spaces – from smart suites to full-floor options.",
        "Business-Ready Ecosystem – co-working, incubation zones, and conference areas.",
        "Retail & F&B Zone – curated brands, cafes, and fine dining.",
        "Ideal for Entrepreneurs, Startups & Corporate looking for visibility and growth.",
      ],
    },
    {
      id: 5,
      name: "Luxury Villas Sector 150, Noida",
      subtitle: "Your Private Escape in the Greenest Sector",
      image: product5,
      description:
        "Spacious 4 & 5 BHK villas with private gardens, smart home features, and modern design in a secure, green community.",
      amenities: [
        "Private gardens, terraces & optional pool",
        "Smart home integration & Vastu-friendly layouts",
        "Gated community with 24x7 security",
        "Prime Location:",
        "5 mins from Noida Expressway",
        "15 mins to upcoming Jewar Airport",
        "Close to IT parks, schools & hospitals",
      ],
    },
  ];

  const handleSelect = (id) => {
    // console.log(`Selected property ${id}`);
    navigate(`/property/${id}`);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= properties.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  // Track screen size for responsive cards
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial screen size
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Get the current visible properties based on screen size
  const getVisibleProperties = () => {
    const cardsToShow =
      screenSize === "mobile" ? 1 : screenSize === "tablet" ? 2 : 3;
    let result = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % properties.length;
      result.push(properties[index]);
    }
    return result;
  };

  const visibleProperties = getVisibleProperties();

  return (
    <div id="projects" className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-center mb-8 sm:mb-12 lg:mb-16 w-full max-w-4xl mx-auto">
        <div className="h-px bg-gray-300 flex-1"></div>
        <h1 className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-semibold mx-3 sm:mx-4 lg:mx-6 whitespace-nowrap">
          Our Projects
        </h1>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows - Hidden on mobile */}
        <button
          className="absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors hidden sm:flex"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} className="lg:w-9 lg:h-9 text-gray-500" />
        </button>

        <button
          className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors hidden sm:flex"
          onClick={nextSlide}
        >
          <ChevronRight size={24} className="lg:w-9 lg:h-9 text-gray-500" />
        </button>

        {/* Property Cards Container */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:pt-16">
          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6">
            {visibleProperties.map((property) => (
              <div
                key={property.id}
                className="w-full max-w-xs sm:max-w-sm lg:max-w-xs min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] rounded-lg overflow-visible shadow-lg bg-indigo-900 text-white transition-all duration-300 flex flex-col relative pt-20 sm:pt-24 lg:pt-28"
              >
                {/* Image Container - Half outside, half inside */}
                <div className="absolute -top-8 sm:-top-12 lg:-top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-[200px] sm:w-[240px] lg:w-[260px] h-[120px] sm:h-[140px] lg:h-[160px] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
                      {property.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1">
                      {property.subtitle}
                    </p>
                    {property.subtitle2 && (
                      <p className="text-xs sm:text-sm text-gray-300">
                        {property.subtitle2}
                      </p>
                    )}

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {property.description}
                    </p>

                    <div className="mt-3 sm:mt-4">
                      <p className="font-semibold mb-2 text-xs sm:text-sm text-gray-200">
                        USPs
                      </p>
                      <ul className="space-y-1 list-disc pl-4 sm:pl-5">
                        {property.amenities
                          .slice(0, 6)
                          .map((amenity, index) => (
                            <li
                              key={index}
                              className="text-xs sm:text-sm text-gray-300 leading-tight"
                            >
                              {amenity}
                            </li>
                          ))}
                        {property.amenities.length > 6 && (
                          <li className="text-xs sm:text-sm text-gray-400 italic">
                            +{property.amenities.length - 6} more features...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelect(property.id)}
                    className="mt-4 sm:mt-6 w-full bg-white text-red-600 py-2 sm:py-2.5 px-4 rounded-md text-center text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center mt-4 space-x-4 sm:hidden">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
