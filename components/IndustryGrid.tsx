
"use client";

import Image from "next/image";
import { useState } from "react";

interface Industry {
  title: string;
  image: string;
  description: string;
}

interface IndustryGridProps {
  data: {
    title: string;
    subtitle: string;
    industries: Industry[];
  };
}

export default function IndustryGrid({
  data,
}: IndustryGridProps) {
  const [activeCard, setActiveCard] = useState<number | null>(
    null
  );

  return (
    <section className="bg-[#F7F3FA] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
            {data.title}
          </h2>

          <p className="mt-3 font-semibold font-body text-lg text-[#667085]">
            {data.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.industries.map((industry, index) => (
            <div
              key={industry.title}
              onClick={() =>
                setActiveCard(
                  activeCard === index ? null : index
                )
              }
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-sm
                transition-all h-max
                duration-500
                cursor-pointer
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0050]/80 via-[#1A0050]/10 to-transparent" />

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    className={`transition-transform duration-300 ${activeCard === index
                        ? "rotate-180"
                        : ""
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

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5">
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
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="bg-[#1A0050] px-5 py-4">
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