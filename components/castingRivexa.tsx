"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Arrow from "./icons/arrow";

const features = [
    {
        icon: '🏭',
        title: "Customized Manufacturing",
        description:
            "Customized manufacturing through technically capable foundries",
        bg: "bg-pink-100",
    },
    {
        icon: "💰",
        title: "Competitive Price Discovery",
        description:
            "Competitive price discovery through multiple tendering and negotiation",
        bg: "bg-green-100",
    },
    {
        icon: "🔍",
        title: "Inspection Facilitation",
        description:
            "Inspection facilitation for improved quality control and compliance",
        bg: "bg-blue-100",
    },
    {
        icon: "🚢",
        title: "Export-Ready Supply Chains",
        description:
            "Export-ready supply chains with logistics and documentation support",
        bg: "bg-orange-100",
    },
];

export default function CastingWithRivexa() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            className="py-14 bg-white overflow-hidden"
        >
            <div className="mx-auto max-w-6xl px-6">
                <div
                    className={`transition-all duration-700 ease-out ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-10 opacity-0"
                        }`}
                >
                    <h2 className="font-heading text-5xl font-semibold text-[#331C6F]">
                        Casting with rivexa
                    </h2>
                    <p className="mt-4 text-[#494551] font-body font-semibold">
                        Connect to verified Indian manufacturers through rivexa{`'`}s managed
                        sourcing ecosystem, enabling
                    </p>
                </div>
                <div className="grid gap-12 mt-10 lg:grid-cols-2 lg:items-center">
                    {/* Left */}
                    <div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`flex gap-4 rounded-2xl border border-[#E5DFF0] p-5 hover:-translate-y-1 hover:shadow-md
                                    transition-all duration-700 ease-out
                                    ${isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "-translate-y-12 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: `${200 + index * 120}ms`,
                                    }}
                                >
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}
                                    >
                                        {feature?.icon}
                                    </div>

                                    <div>
                                        <h3 className="font-heading text-lg font-semibold text-[#331C6F]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-1 font-body font-lg text-[#6B7280]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right */}
                    <div
                        className={`transition-all duration-1000 ease-out ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-16 opacity-0"
                            }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src="/images/casting-rivexa.png"
                                alt="Casting Process"
                                width={800}
                                height={700}
                                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 overflow-hidden rounded-3xl">
                    <div className="grid md:grid-cols-[1fr_260px]">
                        <div className="bg-[#330086] px-5 py-4 flex justify-between gap-2 items-end">
                            <div className="flex flex-col">
                                <h3 className="font-heading text-2xl text-white">
                                    What is Casting?
                                </h3>
                                {
                                    isOpen ? "" :
                                        <p className="mt-3 text-white/80">
                                            Casting is a manufacturing process in which molten metal is poured into a mold to create components of desired shapes and sizes. It is widely used for producing...
                                        </p>
                                }
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`text-white shrink-0 rounded-full flex justify-center items-center transition-transform font-semibold cursor-pointer duration-300 underline`}
                            >
                                {!isOpen ? "Learn more" : "Learn less"
                                }
                            </button>
                        </div>

                        <div className="flex items-center justify-center bg-[#4F378B] p-6">
                            <button
                                className="
                  rounded-2xl
                  bg-white
                  px-12
                  py-4
                  font-semibold
                  text-[#4500A8]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                            ? " opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="grid gap-8 md:grid-cols-3 bg-[#F8F6FC] p-6 border border-[#E5DFF0]">
                            <div className="col-span-2">
                                <p className="mt-4 text-[#494551]">
                                    Casting is a manufacturing process in which molten metal is poured into a mold to create components of desired shapes and sizes. It is widely used for producing complex geometries that are difficult or costly to achieve through machining. Common casting methods include sand casting, aluminum die casting, and investment casting, each suited to different production needs, materials, and precision levels. Casting supports a wide range of industries such as automotive, aerospace, machinery, and construction by enabling cost-effective mass production as well as customized components.
                                </p>
                            </div>

                            <div className="col-span-2 sm:col-span-1 overflow-hidden h-max rounded-2xl">
                                <Image
                                    src="/images/casting-rivexa.png"
                                    alt="Casting Process"
                                    width={300}
                                    height={200}
                                    className="w-full h-60 md:h-52 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}