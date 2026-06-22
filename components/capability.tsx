"use client";

interface CapabilityItem {
  title: string;
  subtitle: string;
  description?: string;
  border: string;
  text: string;
  iconBg?: string;
  icon: string;
}

interface CapabilityProps {
  data: {
    title: string;
    capabilities: CapabilityItem[];
  };
}

export default function Capability({
  data,
}: CapabilityProps) {
  return (
    <section className="bg-[#F7F3FA] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-heading text-4xl font-semibold text-[#331C6F]">
          {data.title}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.capabilities.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.border}`}
            >
              <div className="flex gap-4 items-center">
                <div
                  className={`h-16 w-16 rounded-2xl flex items-center justify-center ${item.iconBg || ""
                    }`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#1D1B2E]">
                    {item.title}
                  </h3>

                  <p
                    className="mt-1 font-semibold text-lg"
                    style={{ color: item.text }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.description && (
                <p className="mt-4 text-sm text-[#667085]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}