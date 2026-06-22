'use client'
import Image from "next/image";
import CountUp from "./countUp";
import { useState } from "react";
// import Link from "next/link";

const promises = [
    {
        icon: "/images/icons/quality.svg",
        title: "Right Quality",
        bg: "bg-violet-100",
    },
    {
        icon: "/images/icons/cost.svg",
        title: "Right Price",
        bg: "bg-emerald-100",
    },
    {
        icon: "/images/icons/time.svg",
        title: "Right Time",
        bg: "bg-sky-100",
    },
];

// const processes = [
//     {
//         title: "Sand Casting",
//         image: "/images/sand-cast.png",
//         href: "https://www.rivexa.com/industrial-goods/casting/sand-casting",
//     },
//     {
//         title: "Investment Casting",
//         image: "/images/investment-casting.png",
//         href: "https://www.rivexa.com/industrial-goods/casting/investment-casting",
//     },
//     {
//         title: "Die Casting",
//         image: "/images/die-casting.png",
//         href: "https://www.rivexa.com/industrial-goods/casting/aluminium-die-casting",
//     },
// ];
const stats = [
    {
        value: 900,
        suffix: "+",
        label: "Suppliers\nOnboarded",
    },
    {
        value: 7,
        suffix: "+",
        label: "Years average\nExport Experience",
    },
    {
        value: 88,
        suffix: "%",
        label: "RFQ Response Rate",
    },
    {
        value: 8,
        suffix: "",
        label: "Countries Served",
    },
    {
        value: 100,
        suffix: "%",
        label: "Verified Manufacturers",
    },
];


interface SourcePromiseProps {
    data: {
        heading: string;
        subHeading: string;
        cta: {
            title: string;
            shortDescription: string;
            fullDescription: string;
            image: string;
            imageAlt: string;
        };
    };
}
export default function CastSourcePromise({
    data,
}: SourcePromiseProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="bg-[#F7F2FA] py-8">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
                        Source Better with India
                    </h2>

                </div>

                {/* Promise Cards */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {promises.map((item) => (
                        <div
                            key={item.title}
                            className="flex items-center gap-4 rounded-xl border bg-white border-[#D8D0E5]  px-5 py-4 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div
                                className={` h-10 w-10 rounded-lg `}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={18}
                                    className="h-full w-full"
                                    height={18}
                                />
                            </div>

                            <span className="font-medium font-body text-[#331C6F]">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-lg font-body text-[#364153] font-semibold">
                    Your trusted India sourcing partner for casting products
                </p>

                {/* Stats */}
                <div className=" z-20 w-full flex justify-center my-8 md:px-6">
                    <div className="rounded-3xl bg-white/30 z-20 w-full p-5 max-w-5xl">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 w-full">
                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-xl bg-white p-5 text-center shadow-sm hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <div className="font-heading text-3xl font-semibold text-[#330086]">
                                        <CountUp
                                            start={true}
                                            end={item.value}
                                            suffix={item.suffix}
                                        />
                                    </div>

                                    <div className="mt-2 font-semibold whitespace-pre-line text-sm text-gray-700">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* CTA */}
                <div className="mt-8 overflow-hidden rounded-3xl">
                    <div className="grid md:grid-cols-[1fr_260px]">
                        <div className="bg-[#330086] px-5 py-4 flex justify-between gap-2 items-end">
                            <div className="flex flex-col">
                                <h3 className="font-heading text-2xl text-white">
                                    {data.cta.title}
                                </h3>
                                {
                                    isOpen ? "" :
                                        <p className="mt-3 text-white/80">
                                            {data.cta.shortDescription}
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
                                    {data.cta.fullDescription}
                                </p>
                            </div>

                            <div className="col-span-2 sm:col-span-1 overflow-hidden h-max rounded-2xl">
                                <Image
                                    src={data.cta.image}
                                    alt={data.cta.imageAlt}
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