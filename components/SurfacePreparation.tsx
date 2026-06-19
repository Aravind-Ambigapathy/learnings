"use client";

import { useState } from "react";

const tabs = [
    "Surface Preparation & Finishing",
    "Inspection & Quality Control",
];

const surfacePreparation = [
    {
        title: "Shot Blasting",
        description: "Removal of sand and scale",
        icon: <img src='/images/icons/surface-preparation/container.svg' />,
    },
    {
        title: "Grinding & Deburring",
        description: "Edge finishing and fettling",
        icon: <img src='/images/icons/surface-preparation/container-1.svg' />,
    },
    {
        title: "Painting",
        description: "Protective industrial coating",
        icon: <img src='/images/icons/surface-preparation/container-2.svg' />,
    },
    {
        title: "Powder Coating",
        description: "Durable corrosion protection",
        icon: <img src='/images/icons/surface-preparation/container-3.svg' />,
    },
    {
        title: "Electroplating",
        description: "Functional coating",
        icon: <img src='/images/icons/surface-preparation/container-4.svg' />,
    },
    {
        title: "Chemical Conversion Coating",
        description:
            "Metal surface protection",
        icon: <img src='/images/icons/surface-preparation/container-5.svg' />,
    },
];

const qualityControl = [
    {
        title: "Dimensional Inspection",
        description: "CMM, height gauges, micrometers",
        badge: "Precision",
        badgeColor: "bg-[#EEE7FC] text-[#5C3DBB]",
    },
    {
        title: "Material Testing",
        description: "Spectrometer, hardness testing, micro structure",
        badge: "Lab",
        badgeColor: "bg-[#E8F4FC] text-[#2B6A94]",
    },
    {
        title: "Non-Destructive Testing",
        description:
            "Dye penetrant (DPT), ultrasonic testing (UT), X-Ray",
        badge: "NDT",
        badgeColor: "bg-[#FFF1E5] text-[#D97706]",
    },
    {
        title: "Visual Inspection",
        description: "Surface defect identification",
        badge: "Visual",
        badgeColor: "bg-[#E7F8F1] text-[#15803D]",
    },
    {
        title: "Process Monitoring",
        description:
            "Melting temperature and chemical composition control",
        badge: "In-Process",
        badgeColor: "bg-[#FCE7F3] text-[#BE185D]",
    },
    {
        title: "Documentation",
        description:
            "Inspection reports and material test certificates",
        badge: "Reports",
        badgeColor: "bg-[#E8EEFF] text-[#1D4ED8]",
    },
];

export default function SurfacePreparation() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-white py-14">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
                    Surface Preparation, Finishing &
                    Quality Control
                </h2>

                <p className="mt-3 text-lg text-[#667085]">
                    Superior finishing. Uncompromising quality.
                    Enhanced performance.
                </p>

                {/* Tabs */}
                <div className="mt-6 inline-flex rounded-2xl bg-[#F0EAFB] p-2">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`
                rounded-xl px-6 py-3
                font-medium transition-all duration-300
                ${activeTab === index
                                    ? "bg-[#4F378B] text-white shadow"
                                    : "text-[#4F378B]"
                                }
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {activeTab === 0
                        ? surfacePreparation.map((item) => (
                            <div
                                key={item.title}
                                className="
            rounded-3xl
            border-2 border-[#E6E0F0]
            bg-white
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
                            >
                                <div className="flex gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F2ECFC] text-2xl">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 className="font-heading text-lg font-semibold text-[#1D1B2E]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-[#667085]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : qualityControl.map((item) => (
                            <div
                                key={item.title}
                                className="
            rounded-3xl
            border-2 border-[#E6E0F0]
            bg-white
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-heading font-semibold text-lg text-[#1D1B2E]">
                                        {item.title}
                                    </h3>

                                    {/* <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${item.badgeColor}`}
                                    >
                                        {item.badge}
                                    </span> */}
                                </div>

                                <div className="my-4 h-px bg-[#ECE7F3]" />

                                <p className="font-body text-[#667085]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                </div>

                {/* CTA */}
                <div className="mt-8 overflow-hidden rounded-3xl">
                    <div className="grid md:grid-cols-[1fr_260px]">
                        <div className="bg-[#330086] px-5 py-4">
                            <h3 className="font-heading text-2xl text-white">
                                End-to-end quality — from melt to dispatch.
                            </h3>

                            <p className="mt-3 text-white/80">
                                Every component undergoes rigorous in-process
                                and pre-dispatch inspection by our quality team.
                            </p>
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
                </div>
            </div>
        </section>
    );
}