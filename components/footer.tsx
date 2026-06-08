import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  "Home",
  "Value Added Services",
  "Resources",
  "FAQ",
  "Case Studies & E-Book",
  "About us",
  "Contact us",
];

const industrialGoods = [
  "Coating",
  "Forging",
  "Machining",
  "Fabrication",
  "Extrusion",
  "Casting",
  "Metal Components",
];

const textiles = [
  "Fashion & Home Textiles",
  "Uniforms",
  "Men's Apparel",
  "Women's Apparel",
  "Bags & Accessories",
  "Home Textiles",
  "Footwear",
  "Leather",
  "Sleep & Innerwear",
];

const companyLinks = [
  "About mjunction",
  "Privacy Policy",
  "Terms & Conditions",
  "Code of Conduct",
  "Sitemap",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#07162F] via-[#1A2750] to-[#332D60] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-white.svg"
              alt="Rivexa"
              width={180}
              height={60}
            />

            <p className="mt-8 text-[#A8B0C5] leading-8">
              The trusted gateway to India sourcing. Backed by
              25 years of mjunction expertise
              (Tata Steel-SAIL JV).
            </p>

            <div className="mt-8 space-y-4">
              {[
                "25 Years Expertise",
                "Verified Suppliers",
                "85+ Countries",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#293B7A]">
                    ★
                  </div>

                  <span className="text-[#DCE3F3]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column */}
          <FooterColumn
            title="Quick Links"
            color="bg-[#7A5AF8]"
            items={quickLinks}
          />

          <FooterColumn
            title="Industrial Goods"
            color="bg-[#FF6A00]"
            items={industrialGoods}
          />

          <FooterColumn
            title="Textiles & Apparel"
            color="bg-[#D946EF]"
            items={textiles}
          />

          <FooterColumn
            title="Company"
            color="bg-[#00D4AA]"
            items={companyLinks}
          />
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Contact Row */}
        <div className="grid gap-6 md:grid-cols-3">
          <ContactCard
            icon="✉"
            label="Email Us"
            value="support@rivexa.com"
          />

          <ContactCard
            icon="📞"
            label="Call Us"
            value="+91 123 456 7890"
          />

          <ContactCard
            icon="📍"
            label="Location"
            value="Kolkata, India"
          />
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[#A8B0C5]">
            © 2026 Rivexa by mjunction. All rights reserved. |
            A Tata Steel-SAIL Joint Venture
          </p>

          <div className="flex gap-3">
            {["in", "𝕏", "f", "▶", "◎"].map((icon) => (
              <button
                key={icon}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#38507C] text-[#A8B0C5] transition-all duration-300 hover:border-white hover:text-white"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  color,
  items,
}: {
  title: string;
  color: string;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className={`h-8 w-1 rounded-full ${color}`} />

        <h3 className="font-heading text-2xl font-semibold">
          {title}
        </h3>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-[#A8B0C5] transition hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#293B7A] text-xl">
        {icon}
      </div>

      <div>
        <p className="text-sm text-[#A8B0C5]">
          {label}
        </p>

        <p className="text-xl font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}