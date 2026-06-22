import Image from "next/image";

interface HeroSectionProps {
  image: string;
  type?: string;
}

export default function HeroSection({
  image,
  type = "casting",
}: HeroSectionProps) {
  const serviceName =
    type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[450px] md:min-h-[550px]">
        {/* Background Image */}
        <Image
          src={image}
          alt={`${serviceName} Solutions`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[450px] md:min-h-[550px] max-w-7xl items-center justify-center px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-heading text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              rivexa {serviceName} Solutions – Your Global Sourcing
              <br />
              Platform
            </h1>

            <p className="mt-5 text-[#E8C21D] text-xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              One drawing. One platform.
              <br />
              Multiple {type} processes.
            </p>

            <button className="mt-8 rounded-lg bg-[#330086] px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-[#3e1089] hover:scale-105">
              Get Free Quote Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}