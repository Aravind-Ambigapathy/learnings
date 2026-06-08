import Image from "next/image";
import CountUp from "@/components/countUp";

export default function HeroSection() {
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

    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="relative pb-6 h-max md:h-[700px]">
                <Image
                    src="/images/home-banner1.png"
                    alt="Casting Solutions"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Content */}
                <div className="relative z-10 mx-auto px-6 lg:px-12 pt-16 lg:pt-20 bg-black/5">
                    <div className=" w-full lg:max-w-4xl">
                        <h1 className="font-heading text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                            rivexa Casting Solutions –
                            <br />
                            Your Global Sourcing
                            <br />
                            Platform
                        </h1>

                        <p className="mt-5 text-[#E8C21D] text-2xl font-body md:text-4xl font-semibold leading-snug">
                            One drawing. One platform.
                            <br />
                            Multiple casting processes.
                        </p>

                        <button className="mt-8 rounded-lg bg-[#330086] hover:bg-[#3e1089] px-5 py-3 text-white font-medium transition-all duration-100 hover:scale-105 ">
                            Send Enquiry
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className=" z-20 w-full flex justify-center my-8 px-6">
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

                                    <div className="mt-2 whitespace-pre-line text-sm text-gray-700">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}