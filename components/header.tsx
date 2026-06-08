"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div
          className={`font-heading text-2xl font-semibold ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          rivexa
        </div>

        <nav>
          <ul className="flex items-center gap-8">
            {["Home", "Industrial Goods", "Casting"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-black"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}