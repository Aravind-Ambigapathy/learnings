"use client";
import { useEffect, useRef, useState } from "react";
import Quality from "./icons/quality";
import QualityWhite from "./icons/qualitywhite";

const traditional = [
    {
        title: "Unverified Foundries",
        description: "Requires manual visits and verification",
    },
    {
        title: "Limited Design Support",
        description: "Struggles with complex 2D/3D designs",
    },
    {
        title: "Fragmented Logistics",
        description: "You handle the complex paperwork",
    },
    {
        title: "Opaque Tracking",
        description: "Difficult to verify material quality",
    },
    {
        title: "Fragmented Processes",
        description: "Finishing and assembly outsourced",
    },
    {
        title: "Remote Oversight",
        description: "Reliability depends on the word of supplier",
    },
    {
        title: "Generic Support",
        description: "Communication may lack deep technical knowledge",
    },
    {
        title: "Variable Timelines",
        description: "Manual workflows and gaps may lead to delays",
    },
];

const rivexa = [
    {
        title: "Pre-audited Foundries",
        description: "Instant access to vetted manufacturers",
    },
    {
        title: "Design-based Sourcing",
        description: "Seamless integration of 2D/3D designs",
    },
    {
        title: "Full Logistics & Paperwork",
        description: "A managed, end-to-end sourcing support",
    },
    {
        title: "Quality Reports & Traceability",
        description: "Total transparency with quality checks",
    },
    {
        title: "In-house Finishing + Assembly",
        description: "Managed and integrated services",
    },
    {
        title: "On-ground Testing",
        description: "Physical, on-site testing and verification",
    },
    {
        title: "Industry Expert SPOC",
        description: "A dedicated expert to manage your needs",
    },
    {
        title: "Fast TAT via Managed Workflow",
        description: "Streamlined, tech-enabled processes to minimize lead time",
    },
];

export default function WhyRivexa() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <section ref={sectionRef} className="bg-white py-14">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <h2
                    className={`font-heading text-center text-4xl font-semibold text-[#331C6F]
    transition-all duration-1000 ease-out
    ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                        }`}
                >
                    Traditional Vendor Search vs Sourcing with rivexa
                </h2>

                {/* Comparison */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Traditional */}
                    <div
                        className={`transition-all duration-1000 ease-out
    ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-16 opacity-0"
                            }`}
                    >
                        <div className="rounded-2xl bg-[#F4F4F5] px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E5E5]">
                                    <div className="h-5 w-5">
                                        <Quality height={20} width={20} />
                                    </div>
                                </div>

                                <h3 className="font-heading text-xl text-[#555]">
                                    Traditional Vendor Search
                                </h3>
                            </div>
                        </div>

                        <div className="mt-4 space-y-3">
                            {traditional.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`rounded-2xl border border-[#E8E8E8] bg-white p-5
    transition-all duration-100 hover:shadow-md hover:border-2
    ${isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-20 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: `${300 + index * 60}ms`,
                                    }}
                                >
                                    <div className="flex gap-3">
                                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E5E5E5] text-xs text-[#888]">
                                            ✕
                                        </div>

                                        <div>
                                            <h4 className="font-heading text-lg text-[#444]">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-[#9A9A9A]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rivexa */}
                    <div
                        className={`transition-all duration-1000 delay-200 ease-out
    ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-16 opacity-0"
                            }`}
                    >
                        <div className="rounded-2xl bg-[#330086] px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                                    <QualityWhite />
                                </div>

                                <h3 className="font-heading text-2xl text-white">
                                    Sourcing with rivexa
                                </h3>
                            </div>
                        </div>

                        <div className="mt-4 space-y-3">
                            {rivexa.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`rounded-2xl border border-[#E7DDFB] bg-[#FAF8FF] p-5
    transition-all duration-100
    hover:-translate-y-1 hover:shadow-lg
    ${isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-20 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: `${300 + index * 60}ms`,
                                    }}
                                >
                                    <div className="flex gap-3">
                                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5C3DBB] text-xs text-white">
                                            ✓
                                        </div>

                                        <div>
                                            <h4 className="font-heading text-lg text-[#331C6F]">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-[#667085]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div
                    className={`mt-10 rounded-3xl bg-[#F1EBFC] p-6
    transition-all duration-1000 delay-500
    ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h3 className="font-heading text-2xl text-[#330086]">
                                Make the smarter sourcing choice.
                            </h3>

                            <p className="mt-2 text-[#667085]">
                                Join hundreds of global buyers who've moved from fragmented
                                vendor search to rivexa's managed ecosystem.
                            </p>
                        </div>

                        <button
                            className="
                rounded-2xl
                bg-[#330086]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
              "
                        >
                            Start Sourcing with rivexa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}