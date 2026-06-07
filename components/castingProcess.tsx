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
      "Sand casting is one of the most versatile and cost-effective metal casting methods.",
  },
  {
    id: "die",
    name: "Die Casting",
    image: "/images/core-casting2.png",
    bestFor: "High volume production",
    capability: "Excellent dimensional accuracy",
    description:
      "Die casting delivers high precision parts with excellent surface finish.",
  },
  {
    id: "investment",
    name: "Investment Casting",
    image: "/images/core-casting3.png",
    bestFor: "Complex intricate components",
    capability: "Very high precision and finish",
    description:
      "Investment casting is ideal for complex geometries and premium finishes.",
  },
];

export default function CoreCastingProcesses() {
  const [activeTab, setActiveTab] = useState(0);

  const process = processes[activeTab];

  return (
    <section className="bg-[#F7F3FA] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="font-heading text-4xl font-bold text-[#331C6F]">
          Core Casting Processes
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {processes.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === index
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
            <h3 className="font-heading text-2xl font-bold text-[#331C6F]">
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

              <p className="mt-2 text-sm font-semibold leading-6 text-[#5D6472]">
                {process.description}
              </p>

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
        <div className="mt-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-[#331C6F]">
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