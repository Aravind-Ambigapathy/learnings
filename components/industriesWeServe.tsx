import Image from "next/image";

const industries = [
  {
    title: "Pump & Valve Manufacturers",
    image: "/images/industries1.png",
    description:
      "Precision castings for pumps, valves, and fluid handling systems across industrial applications.",
  },
  {
    title: "Mining",
    image: "/images/mold-prep1.png",
    description:
      "Heavy-duty castings engineered to withstand extreme loads and abrasive conditions in mining operations.",
  },
  {
    title: "Oil & Gas",
    image: "/images/industries3.png",
    description:
      "Reliable cast components designed for demanding upstream, midstream, and downstream environments.",
  },
  {
    title: "Industrial Machinery",
    image: "/images/industries4.png",
    description:
      "Custom-engineered castings for machinery manufacturers requiring durability and precision.",
  },
  {
    title: "Automotive",
    image: "/images/mold-prep3.png",
    description:
      "High-quality casting solutions for vehicle components, powertrain systems, and assemblies.",
  },
  {
    title: "Construction",
    image: "/images/industries6.png",
    description:
      "Robust cast components for infrastructure, heavy equipment, and construction machinery.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-[#F7F3FA] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div>
          <h2 className="font-heading text-4xl font-bold text-[#331C6F]">
            Industries We Serve
          </h2>

          <p className="mt-3 font-semibold font-body text-lg text-[#667085]">
            Delivering verified casting solutions across six key industrial
            sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
  group
  overflow-hidden
  rounded-xl
  bg-white
  shadow-sm
  transition-all
  duration-500
  hover:-translate-y-2
  hover:shadow-xl h-max
"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0050]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {industry.title}
                  </h3>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className="
      overflow-hidden
      max-h-0
      transition-all
      duration-500
      ease-in-out
      group-hover:max-h-48
    "
              >
                <div className="bg-[#1A0050] px-4 py-3">
                  <div className="flex gap-4">
                    <div className="w-1 rounded-full bg-[#A78BFA]" />

                    <p className="font-body text-sm leading-relaxed text-white">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}