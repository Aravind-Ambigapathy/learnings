"use client";

import { useState } from "react";
import Weight from "./icons/weight";
import Dimention from "./icons/dimention";
import Scalable from "./icons/scalable";
import Tooling from "./icons/tooling";
import Quality from "./icons/quality";
import Enablement from "./icons/enablement";

const capabilities = [
    {
        title: "Flexible Part Weights",
        subtitle: "50 g to 3000 kg",
        description:
            "From miniature components to massive structural castings across all process types.",
        border: "border-[#D9C6FF]",
        text: "#4F378B",
        icons: <img src='/images/icons/comprehensive-casting/container.svg' />
    },
    {
        title: "Dimensional Precision",
        subtitle: "ISO 8062 CT5 – CT12 tolerance range",
        description:
            "International tolerance standards maintained across foundry partners.",
        border: "border-[#BFDDF2]",
        text: "#1A4D6E",
        icons: <img src='/images/icons/comprehensive-casting/container-1.svg' />
    },
    {
        title: "Scalable Production",
        subtitle: "From prototypes to high-volume manufacturing",
        description:
            "5 pieces to 50,000+ runs with consistent quality.",
        border: "border-[#C6E8D7]",
        text: "#2E7D5E",
        icons: <img src='/images/icons/comprehensive-casting/container-2.svg' />
    },
    {
        title: "Integrated Tooling",
        subtitle: "Pattern making and die development support",
        description:
            "End-to-end support from pattern making to die development.",
        border: "border-[#F2D9A6]",
        text: "#8C5E00",
        icons: <img src='/images/icons/comprehensive-casting/container-3.svg' />
    },
    {
        title: "Quality Control",
        subtitle: "Dimensional and visual inspections before dispatch",
        description:
            "Dimensional checks, inspections and certifications before shipment.",
        border: "border-[#F4C5D4]",
        text: "#8C1A45",
        icons: <img src='/images/icons/comprehensive-casting/container-4.svg' />
    },
    {
        title: "Export Enablement",
        subtitle: "Secure packaging and complete documentation",
        description:
            "Export-ready packaging, customs documentation and logistics support.",
        border: "border-[#CBD5FF]",
        text: "#1A3A8C",
        icons: <img src='/images/icons/comprehensive-casting/container-5.svg' />
    },
];


function Capability() {
    return (
        <section className="bg-[#F7F3FA] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center font-heading text-4xl font-semibold text-[#331C6F]">
                    Comprehensive Casting Capabilities
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map((item) => (
                        <div
                            key={item.title}
                            className={`rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.border}`}
                        >
                            <div className="flex gap-3">
                                <section className={`h-14 w-14 flex justify-center items-center rounded`}
                                >
                                    {item.icons}
                                </section>
                                <section>
                                    <h3 className="font-heading text-xl font-semibold text-black">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 font-semibold "
                                        style={{ color: item.text }}>
                                        {item.subtitle}
                                    </p>
                                </section>
                            </div>

                            {/* <p className="mt-4 text-sm text-gray-600">
                                {item.description}
                            </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Capability