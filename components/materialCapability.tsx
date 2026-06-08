"use client";

import { useEffect, useRef, useState } from "react";
import CastIron from "./icons/cast-iron";
import Steel from "./icons/steel";
import Alloys from "./icons/alloys";

const materials = [
    {
        name: "Cast Iron",
        count: 5,
        color: "#5C3DBB",
        icon: <CastIron />,
        materials: [
            {
                name: "Grey Iron",
                description: "Excellent machinability & vibration damping",
            },
            {
                name: "Ductile Iron",
                description: "High strength with good ductility",
            },
            {
                name: "White Iron",
                description: "Extremely hard, wear-resistant surface",
            },
            {
                name: "Ni-Hard",
                description: "Nickel alloyed, superior abrasion resistance",
            },
            {
                name: "High Chrome Iron",
                description: "Corrosion & wear resistant castings",
            },
        ],
    },
    {
        name: "Steel",
        count: 5,
        color: "#215A87",
        icon: <Steel />,
        materials: [
            {
                name: "Carbon Steel",
                description: "Versatile, high strength structural castings",
            },
            {
                name: "Stainless Steel",
                description: "Corrosion resistant, food & medical grade",
            },
            {
                name: "Manganese Steel",
                description: "Impact-hardening for mining & crushing",
            },
            {
                name: "Duplex",
                description: "Dual-phase, superior corrosion resistance",
            },
            {
                name: "Super Duplex",
                description: "Extreme chloride & corrosion resistance",
            },
        ],
    },
    {
        name: "Non-Ferrous Alloys",
        count: 3,
        color: "#2A8B61",
        icon: <Alloys />,
        materials: [
            {
                name: "Aluminum Alloys",
                description: "Lightweight, high strength-to-weight ratio",
            },
            {
                name: "Zinc Alloys",
                description: "Die casting grade, excellent surface finish",
            },
            {
                name: "Copper Alloys",
                description: "High conductivity, marine-grade options",
            },
        ],
    },
];

export default function MaterialCapabilities() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white py-14"
        >
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center font-heading text-4xl font-bold text-[#331C6F]">
                    Material Capabilities for Diverse Industries
                </h2>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {materials.map((item, index) => (
                        <div
                            key={item.name}
                            className={`
    group
    rounded-3xl border border-[#E5E0F0] bg-white p-6
    transition-all duration-500 ease-out h-max
    hover:-translate-y-1 hover:shadow-xl
    ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                }
  `}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                borderBottom: `5px solid ${item.color}`,
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                                        style={{
                                            backgroundColor: `${item.color}15`,
                                        }}
                                    >
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3
                                            className="font-heading text-lg font-semibold"
                                            style={{
                                                color: item.color,
                                            }}
                                        >
                                            {item.name}
                                        </h3>

                                        <p className=" text-[#7A7A8C]">
                                            {item.count} materials
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-180"
                                    style={{
                                        backgroundColor: `${item.color}15`,
                                        color: item.color,
                                    }}
                                >
                                    <svg
                                        width="14"
                                        height="8"
                                        viewBox="0 0 14 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 7L7 1L13 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="
    overflow-hidden
    max-h-0
    opacity-0
    transition-all
    duration-500
    ease-in-out
    group-hover:max-h-[500px]
    group-hover:opacity-100
  "
                            >
                                <div className="my-3 h-px bg-[#E7E2EF]" />

                                <div className="space-y-3 pb-2">
                                    {item.materials.map((material) => (

                                        <div
                                            key={material.name}
                                            className="flex gap-4"
                                        >
                                            <div
                                                className="mt-2 h-3 w-3 shrink-0 rounded-full"
                                                style={{
                                                    backgroundColor: item.color,
                                                }}
                                            />

                                            <div>
                                                <h4 className="font-heading text-md text-[#1D1B2E]">
                                                    {material.name}
                                                </h4>

                                                <p className="font-body text-sm text-[#667085]">
                                                    {material.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-2xl bg-[#EFE7FC] p-6">
                    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                        <div>
                            <h3 className="font-heading text-xl text-[#331C6F]">
                                Not sure which material fits your application?
                            </h3>

                            <p className="mt-1 text-[#6B7280]">
                                Share your drawing and our technical team will recommend the
                                right alloy and process.
                            </p>
                        </div>

                        <button className="rounded-xl bg-[#3B0098] px-8 py-3 text-white transition-all duration-300 hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}