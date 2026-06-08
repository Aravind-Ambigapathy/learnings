"use client";

import Image from "next/image";
import { useState } from "react";

const processes = [
  {
    id: "sand",
    name: "Sand Casting",
    image: "/images/core-casting.png",
    bestFor: "Medium to very large components",
    capability: "Weight up to 3000kg, wide material range",
    description:
      "Sand casting is one of the most versatile and cost-effective metal casting methods, ideal for producing both simple and complex components in small to large sizes. The process involves pouring molten metal into molds made from specially prepared sand, which are broken away after solidification. Sand casting supports a wide range of ferrous and non-ferrous metals and is commonly used for pumps, valves, machinery parts, and heavy equipment components. It is especially valued for low tooling costs and flexibility in custom production.",
  },
  {
    id: "die",
    name: "Die Casting",
    image: "/images/core-casting2.png",
    bestFor: "High-volume aluminum or zinc components",
    capability: "Excellent repeat ability and thin wall capability up to 30 kg",
    description:
      "Aluminum die casting is a high-efficiency manufacturing process used to produce lightweight, durable, and dimensionally accurate metal components in large volumes. Molten aluminum is injected into precision steel dies under pressure, enabling the creation of complex shapes with smooth surfaces and tight tolerances. Known for its excellent strength-to-weight ratio, corrosion resistance, and thermal conductivity, aluminum die casting is widely used in automotive, electronics, aerospace and industrial equipment applications.",
  },
  {
    id: "investment",
    name: "Investment Casting",
    image: "/images/core-casting3.png",
    bestFor: "Complex geometry with tight tolerance",
    capability: "Superior surface finish and dimensional accuracy up to 50kg",
    description:
      "Investment casting, also known as lost-wax casting, is a precision casting process used to manufacture highly detailed components with excellent surface finish and dimensional accuracy. The process begins with a wax pattern coated in ceramic material to form a mold, which is then heated to remove the wax before molten metal is poured in. Investment casting is ideal for complex geometries, thin walls, and intricate designs that require minimal machining. It is widely used in aerospace, medical devices, defense, automotive, and engineering applications.",
  },
];

export default function CoreCastingProcesses() {
  const [activeTab, setActiveTab] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const process = processes[activeTab];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
          Core Casting Processes
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {processes.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setShowFullDescription(false);
              }}
              className={`rounded-full px-5 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 ${activeTab === index
                ? "bg-[#331C6F] text-white"
                : "bg-[#E8E4F2] text-[#6B6B7A] hover:bg-[#DDD5EF]"
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[320px_1fr]">
          {/* Left Card */}
          <div className="rounded-xl border border-[#D8D0E5] bg-white p-6">
            <h3 className="font-heading text-2xl font-semibold text-[#331C6F]">
              {process.name}
            </h3>

            <div className="mt-6 border-b border-[#D8D0E5] pb-4">
              <h4 className="font-semibold text-[#331C6F]">Best For</h4>
              <p className="mt-2 text-sm text-[#494551] font-semibold">
                {process.bestFor}
              </p>
            </div>

            <div className="py-4 border-b border-[#D8D0E5]">
              <h4 className=" text-[#331C6F] font-semibold">
                Typical Capability
              </h4>
              <p className="mt-2 text-sm text-[#494551] font-semibold">
                {process.capability}
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-[#331C6F]">
                What is {process.name}?
              </h4>

              <div className="pt-4">
                <h4 className="font-semibold text-[#331C6F]">
                  What is {process.name}?
                </h4>

                <p
                  className={`mt-2 text-sm font-semibold leading-6 text-[#5D6472] ${showFullDescription ? "" : "line-clamp-2"
                    }`}
                >
                  {process.description}
                </p>

                {process.description.length > 100 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="mt-2 text-sm font-semibold text-[#331C6F] hover:underline cursor-pointer"
                  >
                    {showFullDescription ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>

              {/* <button className="mt-3 text-sm font-medium text-[#331C6F] hover:underline">
                Learn more
              </button> */}
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <Image
              key={process.id}
              src={process.image}
              alt={process.name}
              width={900}
              height={500}
              className="h-full w-full object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
              Casting Process Comparison
            </h2>

            <p className="mt-3 font-semibold text-sm text-[#6B7280]">
              Choose the right process for your component requirements.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#D8D0E5] bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-[#ECE5FB]">
                  <th className="px-6 py-4 text-left text-[#331C6F]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-[#331C6F]">
                    Sand Casting
                  </th>
                  <th className="px-6 py-4 text-left text-[#331C6F]">
                    Die Casting
                  </th>
                  <th className="px-6 py-4 text-left text-[#331C6F]">
                    Investment Casting
                  </th>
                </tr>
              </thead>

              <tbody className="text-[#344054]">
                <tr className="border-t border-[#ECE5FB]">
                  <td className="px-6 py-4">
                    Typical Production Volume
                  </td>
                  <td className="px-6 py-4">Low – Medium</td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Medium – High</td>
                </tr>

                <tr className="border-t border-[#ECE5FB] bg-[#FAF9FD]">
                  <td className="px-6 py-4">Surface Finish</td>
                  <td className="px-6 py-4">Moderate</td>
                  <td className="px-6 py-4">Good</td>
                  <td className="px-6 py-4">Excellent</td>
                </tr>

                <tr className="border-t border-[#ECE5FB]">
                  <td className="px-6 py-4">Dimensional Accuracy</td>
                  <td className="px-6 py-4">Medium</td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Very High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}