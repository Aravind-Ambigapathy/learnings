import AssemblyIcon from "./icons/assembly";
import HeatTreatmentIcon from "./icons/heatTreatment";
import ImpregnationIcon from "./icons/impregnation";
import MachiningIcon from "./icons/machining";
import PackagingIcon from "./icons/packaging";


const services = [
  {
    title: "Machining",
    description:
      "CNC turning, milling, and drilling for precision finishing",
    icon: <MachiningIcon />,
    accent: "#8B7DDB",
  },
  {
    title: "Heat Treatment",
    description:
      "Annealing, normalizing, and quenching for enhanced performance",
    icon: <HeatTreatmentIcon />,
    accent: "#F59E0B",
  },
  {
    title: "Impregnation",
    description:
      "Leak-proofing solutions for porous castings",
    icon: <ImpregnationIcon />,
    accent: "#14B8A6",
  },
  {
    title: "Assembly",
    description:
      "Partial to full assembly support for ready-to-use delivery",
    icon: <AssemblyIcon />,
    accent: "#2563EB",
  },
  {
    title: "Packaging",
    description:
      "Export-ready packing for safe global transit",
    icon: <PackagingIcon />,
    accent: "#A855F7",
  },
];

export default function ValueAddedServices() {
  return (
    <section className="bg-gradient-to-r from-[#5B49A8] via-[#428DB0] to-[#27C6C6] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-4xl font-bold leading-tight text-white">
            Beyond casting: rivexa ensures
            <br />
            integrated post-processing operations
          </h2>

          <p className="mt-4 font-body text-white/90 leading-5">
            At rivexa, our capabilities go beyond casting — delivering
            customized components through a complete range of value-added
            post-processing services. This integrated approach helps reduce
            vendor dependency, shorten lead times, and simplify your supply
            chain.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                rounded-3xl
                bg-[#260E59]
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                {service.icon}
              </div>

              <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-2 min-h-[56px] font-body text-white/70">
                {service.description}
              </p>

              <div
                className="mt-3 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                style={{
                  backgroundColor: service.accent,
                }}
              />
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="
              rounded-3xl
              bg-[#330086]
              p-6
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                Ready to simplify your supply chain?
              </h3>

              <p className="mt-2 font-body text-sm text-white/80">
                Share your requirements and get a tailored
                post-processing quote from verified Indian
                manufacturers.
              </p>
            </div>

            <button
              className="
                mt-4
                rounded-2xl
                bg-white
                py-3
                font-semibold
                text-[#4B00B5]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}