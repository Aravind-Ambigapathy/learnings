"use client";

interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

interface ValueAddedServicesProps {
  data: {
    title: string;
    subtitle: string;
    services: Service[];
    ctaTitle: string;
    ctaDescription: string;
    buttonText: string;
  };
}

export default function ValueAddedServices({
  data,
}: ValueAddedServicesProps) {
  return (
    <section className="bg-gradient-to-r from-[#5B49A8] via-[#428DB0] to-[#27C6C6] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-4xl font-semibold leading-tight text-white">
            {data.title}
          </h2>

          <p className="mt-4 font-body text-white/90 leading-6">
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-2 min-h-[56px] font-body text-white/70">
                {service.description}
              </p>

              <div
                className="mt-4 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                style={{
                  backgroundColor: service.accent,
                }}
              />
            </div>
          ))}

          {/* CTA */}
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
              <h3 className="font-heading text-2xl font-semibold text-white">
                {data.ctaTitle}
              </h3>

              <p className="mt-3 text-white/80">
                {data.ctaDescription}
              </p>
            </div>

            <button
              className="
                mt-6
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
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}