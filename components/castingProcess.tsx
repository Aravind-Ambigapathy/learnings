"use client";

import Image from "next/image";
import { useState } from "react";

interface Process {
  id: string;
  name: string;
  image: string;
  bestFor: string;
  capability: string;
  description: string;
}

interface ComparisonRow {
  feature: string;
  values: string[];
}

interface CoreProcessProps {
  data: {
    title: string;
    comparisonTitle: string;
    comparisonDescription: string;
    processes: Process[];
    comparisonRows: ComparisonRow[];
  };
}

export default function CoreProcess({
  data,
}: CoreProcessProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [showFullDescription, setShowFullDescription] =
    useState(false);

  const process = data.processes[activeTab];

  return (
    <section className="bg-white py-14 mb-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
          {data.title}
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {data.processes.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setShowFullDescription(false);
              }}
              className={`rounded-full px-5 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 ${
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
        <div
          className={`my-6 grid gap-4 transition-all duration-500 ${
            showFullDescription
              ? "lg:grid-cols-[500px_1fr]"
              : "lg:grid-cols-[320px_1fr]"
          }`}
        >
          {/* Left Card */}
          <div className="rounded-xl border border-[#D8D0E5] bg-white p-6">
            <h3 className="font-heading text-2xl font-semibold text-[#331C6F]">
              {process.name}
            </h3>

            <div className="mt-6 border-b border-[#D8D0E5] pb-4">
              <h4 className="font-semibold text-[#331C6F]">
                Best For
              </h4>
              <p className="mt-2 text-sm text-[#494551] font-semibold">
                {process.bestFor}
              </p>
            </div>

            <div className="py-4 border-b border-[#D8D0E5]">
              <h4 className="font-semibold text-[#331C6F]">
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

              <p
                className={`mt-2 text-sm font-semibold leading-6 text-[#5D6472] ${
                  showFullDescription ? "" : "line-clamp-2"
                }`}
              >
                {process.description}
              </p>

              <button
                onClick={() =>
                  setShowFullDescription(
                    !showFullDescription
                  )
                }
                className="mt-2 text-sm font-semibold text-[#331C6F] hover:underline"
              >
                {showFullDescription
                  ? "Read Less"
                  : "Read More"}
              </button>
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

        {/* Comparison */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold text-[#331C6F]">
              {data.comparisonTitle}
            </h2>

            <p className="mt-3 font-semibold text-sm text-[#6B7280]">
              {data.comparisonDescription}
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#D8D0E5] bg-white">
            <table className="min-w-full">
              <thead>
                <tr className="bg-[#ECE5FB]">
                  <th className="px-6 py-4 text-left text-[#331C6F]">
                    Feature
                  </th>

                  {data.processes.map((item) => (
                    <th
                      key={item.id}
                      className="px-6 py-4 text-left text-[#331C6F]"
                    >
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="text-[#344054]">
                {data.comparisonRows.map(
                  (row, rowIndex) => (
                    <tr
                      key={row.feature}
                      className={`border-t border-[#ECE5FB] ${
                        rowIndex % 2 === 1
                          ? "bg-[#FAF9FD]"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 font-medium">
                        {row.feature}
                      </td>

                      {row.values.map(
                        (value, valueIndex) => (
                          <td
                            key={valueIndex}
                            className="px-6 py-4"
                          >
                            {value}
                          </td>
                        )
                      )}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}