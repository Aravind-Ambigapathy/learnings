"use client";

import { useEffect, useRef, useState } from "react";
import CastIron from "./icons/cast-iron";
import Steel from "./icons/steel";
import Alloys from "./icons/alloys";


interface Material {
    name: string;
    count: number;
    color: string;
    icon: React.ReactNode;
    description: string;
    materials: {
        name: string;
        description: string;
    }[];
}

interface MaterialCapabilitiesProps {
    title: string;
    materials: Material[];
}
export default function MaterialCapabilities({
    title,
    materials,
}: MaterialCapabilitiesProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);

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
                <h2 className="text-center font-heading text-4xl font-semibold text-[#331C6F]">
                   {title}
                </h2>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {materials.map((item, index) => (
                        <div
                            key={item.name}
                            onClick={() =>
                                setActiveCard(activeCard === index ? null : index)
                            }
                            className={`
    group cursor-pointer
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
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="h-14 w-14 object-contain"
                                        />
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
                                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 ${activeCard === index ? "rotate-180" : ""
                                        }`}
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
                                className={`
    overflow-hidden
    transition-all
    duration-500
    ease-in-out
    ${activeCard === index
                                        ? "max-h-[1000px] opacity-100"
                                        : "max-h-0 opacity-0"
                                    }
  `}
                            >
                                <div className="my-3 h-px bg-[#E7E2EF]" />

                                <div className="space-y-3">
                                    {item.materials.map((material) => (
                                        <div key={material.name} className="flex gap-4">
                                            <div
                                                className="mt-2 h-3 w-3 shrink-0 rounded-full"
                                                style={{ backgroundColor: item.color }}
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

                                {/* Description */}
                                <div className="mt-5 border-t border-[#E7E2EF] pt-5">
                                    <p className="text-sm leading-6 text-[#667085]">
                                        {item.description}
                                    </p>
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