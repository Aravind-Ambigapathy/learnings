import Image from "next/image";

const steps = [
    {
        title: "Gating & Risering Design",
        description:
            "Optimized flow and solidification to reduce internal defects",
        color: "#4F378B",
        icon: <img src='/images/icons/defect-free-casting/container.svg' />,
    },
    {
        title: "Casting Simulation",
        description:
            "Digital validation to prevent defects before production",
        color: "#1A4D6E",
        icon: <img src='/images/icons/defect-free-casting/container-1.svg' />,
    },
    {
        title: "Process Control",
        description:
            "Precision-controlled melting and pouring conditions",
        color: "#C45E00",
        icon: <img src='/images/icons/defect-free-casting/container-2.svg' />,
    },
    {
        title: "Raw Material Control",
        description:
            "Strictly verified material chemistry for uniform output",
        color: "#1A6E5E",
        icon: <img src='/images/icons/defect-free-casting/container-3.svg' />,
    },
    {
        title: "In-Process Inspection",
        description:
            "Real-time monitoring to maintain quality at every step",
        color: "#2E7D5E",
        icon: <img src='/images/icons/defect-free-casting/container-4.svg' />,
    },
];

export default function DefectFreeCasting() {
    return (
        <section className="bg-[#F7F3FA] py-16">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
                        Defect-Free Casting Practices Through Quality Control
                    </h2>

                    <p className="mt-4 text-[#667085]">
                        A disciplined, stage-by-stage approach that eliminates
                        defects at the source — not after the fact.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-12 grid gap-12 lg:grid-cols-[380px_1fr] lg:items-center">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-7 top-8 bottom-8 w-px bg-[#E7E2EF]" />

                        <div className="space-y-6">
                            {steps.map((step) => (
                                <div
                                    key={step.title}
                                    className="group relative flex gap-4"
                                >
                                    {/* Icon */}
                                    <div
                                        className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                                      
                                    >
                                        <span
                                            className="text-xl"
                                            style={{ color: step.color }}
                                        >
                                            {step.icon}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3
                                            className="font-heading text-xl font-semibold"
                                            style={{
                                                color: step.color,
                                            }}
                                        >
                                            {step.title}
                                        </h3>

                                        <p className="mt-1 text-[#667085]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/images/quality-control.png"
                                alt="Quality Control Casting"
                                width={900}
                                height={650}
                                className="w-full max-h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}