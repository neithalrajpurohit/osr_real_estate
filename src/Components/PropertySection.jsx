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

  // Get the current visible properties (just showing 3 at a time)
  const getVisibleProperties = () => {
    let result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % properties.length;
      result.push(properties[index]);
    }
    return result;
  };

  const visibleProperties = getVisibleProperties();

  return (
    <div id="projects" className="bg-white min-h-screen p-8 ">
      <div className="flex items-center justify-center mb-16 w-full max-w-4xl mx-auto">
        <div className="h-px bg-gray-300 w-1/3"></div>
        <h1 className="text-red-600 text-4xl font-semibold mx-6 whitespace-nowrap">
          Our Projects
        </h1>
        <div className="h-px bg-gray-300 w-1/3"></div>
      </div>

      <div className="relative max-w-6xl mx-auto top-10">
        {/* Navigation Arrows */}
        <button
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 w-12 h-12 flex items-center justify-center rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft size={36} className="text-gray-500" />
        </button>

        <button
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 w-12 h-12 flex items-center justify-center rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight size={36} className="text-gray-500" />
        </button>

        {/* Property Cards Container */}
        <div className="overflow-hidden">
          <div className="flex justify-center gap-6">
            {visibleProperties.map((property) => (
              <div
                key={property.id}
                className="w-full max-w-xs min-h-[650px] rounded-lg overflow-hidden shadow-lg bg-indigo-900 text-white transition-all duration-300 flex flex-col"
              >
                <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-lg bg-indigo-900 text-white transition-all duration-300">
                  <div className="h-30 overflow-hidden flex justify-center">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-[260px] h-[160px] object-cover absolute -top-[50px] rounded-2xl"
                    />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold">{property.name}</h2>
                    <p className="text-sm text-gray-300">{property.subtitle}</p>
                    {property.subtitle2 && (
                      <p className="text-sm text-gray-300">
                        {property.subtitle2}
                      </p>
                    )}

                    <p className="mt-3 text-sm text-gray-300">
                      {property.description}
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold mb-2 text-sm text-gray-200">
                        USPs
                      </p>
                      <ul className="space-y-1 list-disc pl-5">
                        {property.amenities.map((amenity, index) => (
                          <li key={index} className="text-sm text-gray-300">
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelect(property.id)}
                    className="mt-6 w-full bg-white text-red-600 py-2 px-4 rounded-md text-center font-medium hover:bg-gray-100 transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
