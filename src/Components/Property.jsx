import React from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import NavBar from "./NavBar";

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
    plotsize: ["50 Gaj", "100 Gaj"],
    price: "18,000 / Gaj",
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
    plotsize: ["50 Gaj", "100 Gaj", "200 Gaj"],
    price: "25,000 / Gaj",
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
    plotsize: ["50 Gaj", "100 Gaj"],
    price: "18,000 / Gaj",
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
    plotsize: ["200 unit", "532 unit", "1064 unit"],
    price: "9,000 / sq.ft",
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
    plotsize: ["1 Acre"],
    price: "65lakhs",
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div className="p-4 md:p-10">Property not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-[68px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left Content */}
          <div className="flex-1 order-2 md:order-1">
            <div className="rounded-lg p-4 sm:p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {property.name}
              </h1>
              <p className="text-red-500 text-lg mb-4">{property.subtitle}</p>
              {property.subtitle2 && (
                <p className="text-red-500 text-lg mb-4">
                  {property.subtitle2}
                </p>
              )}

              <p className="text-gray-700 mb-6 leading-relaxed">
                {property.description}
              </p>

              <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                Available Plots:
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {property.plotsize.map((item) => (
                  <button
                    key={item}
                    className="bg-indigo-900 text-white px-6 py-2 rounded-full font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                Price ₹{property.price}
              </h3>

              <button className="bg-white border-2 border-red-500 text-red-500 px-8 py-3 rounded-full font-medium hover:bg-red-50 transition-colors">
                Select
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-64 md:h-[432px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
