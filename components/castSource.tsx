import Image from "next/image";
import Link from "next/link";

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

const processes = [
    {
        title: "Sand Casting",
        image: "/images/sand-cast.png",
        href: "#",
    },
    {
        title: "Investment Casting",
        image: "/images/investment-casting.png",
        href: "#",
    },
    {
        title: "Die Casting",
        image: "/images/die-casting.png",
        href: "#",
    },
];

export default function CastSourcePromise() {
    return (
        <section className="bg-[#F7F2FA] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h2 className="font-heading text-4xl font-bold text-[#331C6F]">
                        The CastSource Promise
                    </h2>

                    <p className="mt-4 text-[#494551] font-semibold font-body">
                        Upload your engineering drawings and let us handle the rest. Your
                        trusted India sourcing partner for casting products delivered at
                    </p>
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

                <p className="mt-8 text-center font-body text-[#364153] font-semibold">
                    End-to-end managed sourcing through verified manufacturers for
                </p>

                {/* Casting Types */}
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {processes.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className="group overflow-hidden rounded-2xl border border-[#D8D0E5] bg-white"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex items-center justify-between p-5">
                                <h3 className="font-heading text-lg font-semibold text-[#331C6F]">
                                    {item.title}
                                </h3>

                                <img
                                    src="/images/icons/right-arrow.svg"
                                    alt="arrow"
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}