"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "./countUp";

const certifications = [
    {
        title: "IATF 16949",
        subtitle: "AUTOMOTIVE QUALITY MANAGEMENT",
        logo: "/images/certificate1.png",
        accent: "#6E4BB8",
        badge: "#6E4BB8",
    },
    {
        title: "ISO 9001",
        subtitle: "QUALITY MANAGEMENT SYSTEMS",
        logo: "/images/certificate2.png",
        accent: "#1D6D88",
        badge: "#1D6D88",
    },
    {
        title: "ATEX",
        subtitle: "EXPLOSIVE ATMOSPHERE EQUIPMENT",
        logo: "/images/certificate3.png",
        accent: "#D97706",
        badge: "#D97706",
    },
    {
        title: "SA 8000",
        subtitle: "SOCIAL ACCOUNTABILITY STANDARD",
        logo: "/images/certificate4.png",
        accent: "#15803D",
        badge: "#15803D",
    },
];

const highlights = [
    "100% Verified Manufacturers",
    "Pre-audit Compliance Checks",
    "Global Export Standards",
    "Ethical Supply Chain",
];

const stats = [
    {
        value: 50,
        suffix: "%",
        label: "Verified casting manufacturers",
    },
    {
        value: 1500,
        suffix: "+",
        label: "Custom parts delivered across industries",
    },
    {
        value: 99.6,
        suffix: "%",
        label: "On-time global shipments",
    },
    {
        value: 100,
        suffix: "%",
        label: "Dimensional & visual QC before dispatch",
    },
];

export default function SupplierCertifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const [startCount, setStartCount] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
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
            className="bg-[#1A0050] py-14"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-heading text-4xl font-bold text-white">
                        Certifications of Supplier Network
                    </h2>
                </div>

                {/* Certification Cards */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {certifications.map((item, index) => (
                        <div
                            key={item.title}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/8"
                            style={{
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-contain"
                                    />
                                </div>

                                <span
                                    className="rounded-full px-4 py-1 text-xs font-semibold text-white"
                                    style={{
                                        backgroundColor: item.badge,
                                    }}
                                >
                                    CERTIFIED
                                </span>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-heading text-3xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p
                                    className="mt-2 text-sm uppercase leading-6 font-medium"
                                    style={{
                                        color: item.accent,
                                    }}
                                >
                                    {item.subtitle}
                                </p>

                                <div
                                    className="mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                                    style={{
                                        backgroundColor: item.accent,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlights */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-white/85">
                        {highlights.map((item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-4"
                            >
                                {index !== 0 && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                                )}

                                <span className="font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className=" flex justify-center">
                    <div className="max-w-4xl">
                        <div className=" mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/50 px-4 py-4  text-center transition-all duration-300 hover:bg-white/5"
                                >
                                    <div className="font-heading text-2xl font-bold text-[#FFD500]">
                                        <CountUp
                                            end={item.value}
                                            suffix={item.suffix}
                                            duration={700}
                                            start={startCount}
                                        />
                                    </div>

                                    <p className="mt-3 text-white leading-5">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}