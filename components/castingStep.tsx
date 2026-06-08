"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
    {
        title: "Pattern Making",
        description:
            "The casting process begins with creating a pattern that defines the shape and dimensions of the final component.",
        image: "/images/casting-process1.png",
    },
    {
        title: "Mold Preparation",
        description:
            "The mold is prepared based on the casting method.",
        image: "/images/casting-process2.png",
        methods: [
            {
                title: "Sand Casting",
                description:
                    "Sand molds are used for larger or less complex parts.",
                image: "/images/mold-prep1.png",
            },
            {
                title: "Die Casting",
                description:
                    "Molten aluminum is injected under pressure into steel molds.",
                image: "/images/mold-prep2.png",
            },
            {
                title: "Investment Casting",
                description:
                    "A wax pattern is coated with ceramic material to create highly accurate components.",
                image: "/images/mold-prep3.png",
            },
        ],
    },
    {
        title: "Metal Pouring or Injection",
        description:
            "Once the mold is ready, molten metal is poured or injected into the mold cavity.",
        image: "/images/casting-process3.png",
    },
    {
        title: "Solidification & Cooling",
        description:
            "The metal is allowed to cool and solidify into the required shape.",
        image: "/images/casting-process4.png",
    },
    {
        title: "Mold Removal",
        description:
            "After solidification, the cast component is removed from the mold.",
        image: "/images/casting-process5.png",
    },
    {
        title: "Cleaning & Finishing",
        description:
            "Excess material is removed, and the component undergoes surface finishing and cleaning processes.",
        image: "/images/casting-process6.png",
    },
    {
        title: "Inspection & Quality Check",
        description:
            "The final component is inspected to ensure dimensional accuracy, structural integrity, and overall quality.",
        image: "/images/casting-process7.png",
    },
];
export default function CastingProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const currentStep = steps[activeStep - 1];
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setActiveStep((prev) =>
                    prev === steps.length ? 1 : prev + 1
                );

                setIsAnimating(false);
            }, 250);
        }, 4000);

        return () => clearInterval(timer);
    }, []);
    return (
        <section className="bg-gradient-to-tl from-[#0F172BF2] via-[#4A3587E5] to-[#0F172BF2] py-14">
            <div className="mx-auto max-w-7xl px-6">
                <p className="text-sm font-semibold font-body uppercase tracking-[3px] text-white/70">
                    Step by Step
                </p>

                <h2 className="mt-3 font-heading text-4xl font-semibold text-white">
                    The Casting Process
                </h2>

                {/* Tabs */}
                <div className="mt-7 flex flex-wrap gap-3">
                    {steps.map((step, index) => (
                        <button
                            key={step.title}
                            onClick={() => setActiveStep(index + 1)}
                            className={`rounded-full border px-5 flex cursor-pointer py-2 text-sm transition-all
              ${activeStep === index + 1
                                    ? "border-transparent border-2 bg-[#D8C6FF] text-[#331C6F]"
                                    : "border-white/25 text-white hover:border-white"
                                }`}
                        >
                            <span className={`mr-2 text-white rounded-full h-5 w-5 flex justify-center items-center text-xs ${activeStep - 1 === index ? ' bg-[#1A0050]' : 'bg-white/15'}`}>
                                {index + 1}
                            </span>
                            {step.title}
                        </button>
                    ))}
                </div>

                <div className="mt-5 border-t border-white/20 pt-5">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Image */}
                        <div>
                            <div className="relative overflow-hidden rounded-3xl bg-white/10">
                                <Image
                                    src={currentStep.image}
                                    alt={currentStep.title}
                                    width={700}
                                    height={500}
                                    className="w-full object-center"
                                />
                                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black/30 to-transparent ">
                                    <div className="absolute left-5 top-5 rounded-full bg-[#D8C6FF] px-4 py-2 text-xs font-semibold text-[#331C6F]">
                                        Step {activeStep} / 7
                                    </div>
                                </div>

                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        onClick={() =>
                                            setActiveStep((prev) =>
                                                prev === 1 ? steps.length : prev - 1
                                            )
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white cursor-pointer"
                                    >
                                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.0629 1.11328L1.11328 6.0629L6.0629 11.0125" stroke="white" strokeWidth="2.22733" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </button>

                                    <button
                                        onClick={() =>
                                            setActiveStep((prev) =>
                                                prev === steps.length ? 1 : prev + 1
                                            )
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white cursor-pointer"
                                    >
                                        <div className="rotate-180">
                                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.0629 1.11328L1.11328 6.0629L6.0629 11.0125" stroke="white" strokeWidth="2.22733" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-sm uppercase tracking-[3px] text-white/70">
                                Step {activeStep} of {steps.length}
                            </p>

                            <h3
                                className={`mt-2.4 font-heading text-2xl font-semibold text-white transition-all duration-300 ${isAnimating
                                    ? "translate-y-4 opacity-0"
                                    : "translate-y-0 opacity-100"
                                    }`}
                            >
                                {currentStep.title}
                            </h3>

                            <p
                                className={`mt-3 text-white/80 font-body transition-all duration-300 ${isAnimating
                                    ? "translate-y-4 opacity-0"
                                    : "translate-y-0 opacity-100"
                                    }`}
                            >
                                {currentStep.description}
                            </p>

                            <div className="mt-5 space-y-4">
                                {currentStep.methods && (
                                    <div
                                        className={`mt-8 space-y-4 transition-all duration-500 ${isAnimating
                                            ? "translate-y-4 opacity-0"
                                            : "translate-y-0 opacity-100"
                                            }`}
                                    >
                                        {currentStep.methods.map((method) => (
                                            <div
                                                key={method.title}
                                                className="flex gap-4 rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm"
                                            >
                                                <Image
                                                    src={method.image}
                                                    alt={method.title}
                                                    width={90}
                                                    height={70}
                                                    className="rounded-lg min-h-32 min-w-28 object-cover -p-2 -my-2"
                                                />

                                                <div className="flex flex-col justify-center items-start">
                                                    <h4 className="font-heading text-lg text-white">
                                                        {method.title}
                                                    </h4>

                                                    <p className="mt-1 text-sm font-body text-white/70">
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() =>
                                    setActiveStep((prev) =>
                                        prev === steps.length ? 1 : prev + 1
                                    )
                                }
                                className="mt-4 cursor-pointer text-white transition hover:translate-x-1"
                            >
                                Next: {steps[activeStep % steps.length].title} →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="mt-12 flex justify-center gap-2">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index + 1)}
                            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${activeStep === index + 1
                                    ? "w-8 bg-white"
                                    : "w-2 bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}