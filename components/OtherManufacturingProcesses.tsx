import Image from "next/image";

const processes = [
  {
    title: "Forging",
    image: "/images/processor1.png",
    href: "#",
  },
  {
    title: "Fabrication",
    image: "/images/processor2.png",
    href: "#",
  },
  {
    title: "Extrusion",
    image: "/images/industries4.png",
    href: "#",
  },
  {
    title: "Machining",
    image: "/images/processor4.png",
    href: "#",
  },
];

export default function OtherManufacturingProcesses() {
  return (
    <section className="bg-[#F7F3FA] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div>
          <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
            Explore Other Manufacturing Processes
          </h2>

          <p className="mt-3 text-lg text-[#667085]">
            rivexa supports a full spectrum of manufacturing capabilities
            beyond casting.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processes.map((process) => (
            <a
              key={process.title}
              href={process.href}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-[220px]">
                <Image
                  src={process.image}
                  alt={process.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0050]/90 via-[#1A0050]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <h3 className="font-heading text-3xl font-semibold text-white">
                  {process.title}
                </h3>

                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full bg-white/90
                    transition-all duration-300
                    group-hover:translate-x-1
                  "
                >
                  <span className="text-xl text-[#331C6F]">
                    <img
                      src="/images/icons/right-arrow.svg"
                      alt="arrow"
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-[#5B49A8] via-[#2EB8B0] to-[#2DAAE2] px-8 py-12 lg:px-14">
          {/* Decorative Circles */}
          <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-white/5" />
          <div className="absolute -right-8 top-0 h-36 w-36 rounded-full bg-white/5" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-body text-sm font-semibold tracking-[3px] text-white/80 uppercase">
                Let's Talk
              </p>

              <h3 className="mt-3 font-heading text-4xl font-semibold text-white">
                Ready to source smarter?
              </h3>

              <p className="mt-3 max-w-2xl text-white/90">
                Talk to a rivexa sourcing expert and get a tailored
                manufacturing solution for your requirements.
              </p>
            </div>

            <button
              className="
                rounded-2xl
                bg-white
                px-10
                py-3
                font-semibold
                text-[#331C6F]
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Schedule a Call with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}