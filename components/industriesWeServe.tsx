'use client'
import Image from "next/image";
import { useState } from "react";

const industries = [
  {
    title: "Pump & Valve Manufacturers",
    image: "/images/industries1.png",
    description:
      "Precision castings for pumps, valves, and fluid handling systems across industrial applications.",
  },
  {
    title: "Mining",
    image: "/images/mold-prep1.png",
    description:
      "Heavy-duty castings engineered to withstand extreme loads and abrasive conditions in mining operations.",
  },
  {
    title: "Oil & Gas",
    image: "/images/industries3.png",
    description:
      "Reliable cast components designed for demanding upstream, midstream, and downstream environments.",
  },
  {
    title: "Industrial Machinery",
    image: "/images/industries4.png",
    description:
      "Custom-engineered castings for machinery manufacturers requiring durability and precision.",
  },
  {
    title: "Automotive",
    image: "/images/mold-prep3.png",
    description:
      "High-quality casting solutions for vehicle components, powertrain systems, and assemblies.",
  },
  {
    title: "Construction",
    image: "/images/industries6.png",
    description:
      "Robust cast components for infrastructure, heavy equipment, and construction machinery.",
  },
];

export default function IndustriesWeServe() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <section className="bg-[#F7F3FA] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div>
          <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
            Industries We Serve
          </h2>

          <p className="mt-3 font-semibold font-body text-lg text-[#667085]">
            Delivering verified casting solutions across six key industrial
            sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              onClick={() =>
                setActiveCard(activeCard === index ? null : index)
              }
              className="
    group
    overflow-hidden
    rounded-xl
    bg-white
    shadow-sm
    transition-all
    duration-500
    cursor-pointer
    hover:-translate-y-2
    hover:shadow-xl
    h-max
  "
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    className={`transition-transform duration-300 ${activeCard === index ? "rotate-180" : ""
                      }`}
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="#331C6F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0050]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {industry.title}
                  </h3>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`
    overflow-hidden
    transition-all
    duration-500
    ease-in-out
    ${activeCard === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                  }
  `}
              >
                <div className="bg-[#1A0050] px-4 py-3">
                  <div className="flex gap-4">
                    <div className="w-1 rounded-full bg-[#A78BFA]" />

                    <p className="font-body text-sm leading-relaxed text-white">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}