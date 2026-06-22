export const forgingData = {
  title: "Core Forging Processes",

  comparisonTitle: "Not sure which process fits your requirement?",

  comparisonDescription:
    "rivexa helps you compare processes and source from the right manufacturing partner.",

  processes: [
    {
      id: "open-die",
      name: "Open Die Forging",
      image: "/images/forgingcore1.png",
      bestFor:
        "Large, simple geometry, high-strength parts",

      capability: "Weight up to 5000 kg",

      description:
        "Open die forging is a metal shaping process where heated metal is deformed between flat dies without being fully enclosed. This method is widely used for producing large forged components with high strength and improved grain structure. It is especially suitable for: custom forgings, heavy industrial parts and applications requiring high structural integrity and durability. Since the metal is not confined within a die, the process allows for flexibility in shaping but may require secondary machining to achieve precise dimensions.",
    },

    {
      id: "closed-die",
      name: "Closed Die Forging",
      image: "/images/forgingcore2.png",
      bestFor:
        "High-volume precision components",

      capability:
        "Up to 300 kg, tight tolerances",

      description:
        "Closed die forging, also known as impression die forging, involves compressing heated metal within precisionengineered dies to achieve specific shapes and dimensions. This process is ideal for manufacturing highvolume, complex forged parts with excellent accuracy. Key advantages include- tight tolerances and repeatability and minimal post-processing. Closed die forging is commonly used in applications where consistency and performance are critical, such as automotive, aerospace, and industrial components.",
    },

    {
      id: "ring-rolling",
      name: "Ring Rolling",
      image: "/images/forgingcore3.png",
      bestFor:
        "Seamless rings",

      capability:
        "High integrity and material efficiency",

      description:
        "Ring rolling is a specialized forging process used to produce seamless rolled rings by expanding a pre-forged metal ring between rotating rolls. This technique ensures uniform grain flow and superior mechanical properties. It is widely used for applications requiring high strength-to-weight ratio and large-diameter rings with consistent thickness and structure. Compared to traditional machining or casting, ring rolling offers material efficiency and enhanced performance, making it ideal for high-stress applications.",
    },
  ],

  comparisonRows: [
    {
      feature: "Volume",
      values: ["Low", "High", "Medium"],
    },
    {
      feature: "Size",
      values: ["Large", "Small - Medium", "Large Diameter Rings"],
    },
    {
      feature: "Finish",
      values: ["Moderate", "Good", "Good"],
    },
    {
      feature: "Accuracy",
      values: ["Low - Medium", "High", "High"],
    },
    {
      feature: "Tooling",
      values: ["Low", "High", "Medium"],
    }
  ],
};

export const forgingIndustries = {
  title: "Industries We Serve",

  subtitle:
    "Delivering verified forging solutions across key industrial sectors.",

  industries: [
    {
      title: "Automotive Components",
      image: "/images/forging-industry1.png",
      description:
        "High-strength forged components for engines, transmissions, axles, suspension systems and critical automotive applications.",
    },

    {
      title: "Industrial Machinery",
      image: "/images/forging-industry2.png",
      description:
        "Durable forged parts for heavy industrial equipment, machine tools, power transmission systems and manufacturing machinery.",
    },

    {
      title: "Oil & Gas Equipment",
      image: "/images/forging-industry3.png",
      description:
        "Forged flanges, fittings, valves and pressure-containing components designed for demanding oil and gas environments.",
    },

    {
      title: "Steel Plants",
      image: "/images/forging-industry4.png",
      description:
        "Heavy-duty forged rolls, shafts, couplings and structural components used in steel production facilities.",
    },

    {
      title: "Mining Equipment",
      image: "/images/forging-industry5.png",
      description:
        "Wear-resistant forged components engineered for crushers, excavators, drilling equipment and mining operations.",
    },
  ],
}

export const forgingMaterials = [
  {
    name: "Carbon Steel",
    count: 3,
    color: "#5C3DBB",
    icon: "/images/icons/material-capabilities/generated-image2.svg",
    description:
      "Carbon steel is a cost-effective and versatile material widely used in forging for structural applications. It offers a good balance of strength and durability, making it ideal for industrial components.",

    materials: [
      {
        name: "C20",
        // description: "Low carbon steel with good machinability",
      },
      {
        name: "C45",
        // description: "Medium carbon steel with higher strength",
      },
      {
        name: "EN8",
        // description: "General engineering steel for forged parts",
      },
    ],
  },

  {
    name: "Alloy Steel",
    count: 3,
    color: "#2A8B61",
    icon: "/images/icons/material-capabilities/generated-image4.png",
    description:
      "Alloy steel is engineered to deliver toughness and wear resistance under demanding conditions. It is commonly used in high-load, high-performance applications and heavy machinery components.",

    materials: [
      {
        name: "EN19",
        // description: "High tensile alloy steel",
      },
      {
        name: "EN24",
        // description: "High strength and fatigue resistance",
      },
      {
        name: "4140",
        // description: "Chromium-molybdenum alloy steel",
      },
    ],
  },

  {
    name: "Stainless Steel",
    count: 2,
    color: "#5C3DBB",
    icon: "/images/icons/material-capabilities/generated-image5.png",
    description:
      "Stainless steel grades provide corrosion resistance and durability, making them suitable for harsh and moisture-prone environments. They are widely used in applications where longevity is critical.",

    materials: [
      {
        name: "304",
        // description: "General-purpose corrosion resistant grade",
      },
      {
        name: "316",
        // description: "Enhanced corrosion resistance",
      },
    ],
  },

  {
    name: "Non-Ferrous Metals",
    count: 3,
    color: "#215A87",
    icon: "/images/icons/material-capabilities/generated-image3.svg",
    description:
      "Non-ferrous metals are valued for their lightweight properties, conductivity and corrosion resistance. They are ideal for industries requiring high thermal or electrical performance.",

    materials: [
      {
        name: "Aluminum",
        // description: "Lightweight with excellent strength-to-weight ratio",
      },
      {
        name: "Brass",
        // description: "Good machinability and corrosion resistance",
      },
      {
        name: "Copper",
        // description: "High electrical and thermal conductivity",
      },
    ],
  },

  {
    name: "Special Alloys",
    count: 2,
    color: "#2A8B61",
    icon: "/images/icons/material-capabilities/generated-image1.svg",
    description:
      "Special alloys are designed for extreme operating conditions, offering exceptional performance in high-temperature, high-pressure and corrosive environments where reliability is non-negotiable.",

    materials: [
      {
        name: "Nickel Alloys",
        // description: "Excellent heat and corrosion resistance",
      },
      {
        name: "Titanium",
        // description: "High strength with low weight",
      },
    ],
  },
];

export const forgingCapabilities = {
  title: "Comprehensive Forging Capabilities You Can Rely On",

  capabilities: [
    {
      title: "Part Weight",
      subtitle: "0.2 kg – 5000 kg",
      border: "border-[#BFDDF2]",
      text: "#4F378B",
      iconBg: "bg-[#F2ECFC]",
      icon: "/images/icons/comprehensive-casting/container.svg",
    },

    {
      title: "Tolerance",
      subtitle: "±0.3 mm to ±5 mm",
      border: "border-[#BFDDF2]",
      text: "#1A4D6E",
      iconBg: "bg-[#EDF6FB]",
      icon: "/images/icons/comprehensive-casting/container-1.svg",
    },

    {
      title: "Production Volume",
      subtitle: "Prototype to high-volume",
      border: "border-[#BFE5D0]",
      text: "#2E7D5E",
      iconBg: "bg-[#EDF9F3]",
      icon: "/images/icons/comprehensive-casting/container-2.svg",
    },

    {
      title: "Tooling",
      subtitle: "Die design & development",
      border: "border-[#F2D9A6]",
      text: "#A06A00",
      iconBg: "bg-[#FFF6E8]",
      icon: "/images/icons/comprehensive-casting/container-3.svg",
    },

    {
      title: "Inspection",
      subtitle: "Dimensional & visual inspection + NDT",
      border: "border-[#F4C5D4]",
      text: "#A1265B",
      iconBg: "bg-[#FDF0F5]",
      icon: "/images/icons/comprehensive-casting/container-4.svg",
    },

    {
      title: "Export Readiness",
      subtitle: "Packaging & documentation",
      border: "border-[#CBD5FF]",
      text: "#1A3A8C",
      iconBg: "bg-[#EEF2FF]",
      icon: "/images/icons/comprehensive-casting/container-5.svg",
    },
  ],
};

export const forgingServicesData = {
  title:
    "Beyond forging: rivexa ensures integrated post-processing operations",

  subtitle:
    "At rivexa, our capabilities go beyond forging to deliver customized components through a complete range of value-added post-processing services. This integrated approach helps reduce vendor dependency, shorten lead times, and simplify your supply chain.",

  services: [
    {
      title: "Machining",
      description:
        "CNC turning, milling, and drilling for precision finishing",
      icon: "/images/icons/beyond-casting/container.svg",
      accent: "#8B7DDB",
    },

    {
      title: "Heat Treatment",
      description:
        "Annealing, normalizing, and quenching for enhanced performance",
      icon: "/images/icons/beyond-casting/container-1.svg",
      accent: "#F59E0B",
    },

    {
      title: "Straightening",
      description:
        "For large length items also",
      icon: "/images/icons/beyond-casting/container-2.svg",
      accent: "#14B8A6",
    },

    {
      title: "Assembly",
      description:
        "Partial to full assembly support for ready-to-use delivery",
      icon: "/images/icons/beyond-casting/container-3.svg",
      accent: "#2563EB",
    },

    {
      title: "Packaging",
      description:
        "Export-ready packing for safe global transit",
      icon: "/images/icons/beyond-casting/container-4.svg",
      accent: "#A855F7",
    },
  ],

  ctaTitle:
    "Ready to simplify your supply chain?",

  ctaDescription:
    "Share your requirements and get a tailored post-processing quote from verified Indian manufacturers.",

  buttonText: "Send Enquiry",
};

export const forgingFormData = {
  title:
    "Upload Your Engineering Drawing and Source from physically verified Indian manufacturers through rivexa's managed sourcing ecosystem, enabling",

  types: [
    {
      id: "open",
      label: "Open Die Forging",
      description:
        "Best for larger, complex geometries with lower tooling cost",
    },
    {
      id: "closed",
      label: "Closed Die Forging",
      description:
        "Best for high-volume precision forged components",
    },
  ],

  features: [
    {
      icon: "images/icons/casting-rivexa/container.svg",
      title: "Customized Manufacturing",
      description:
        "Through technically capable forging partners matched to your specifications",
    },
    {
      icon: "/images/icons/casting-rivexa/container-1.svg",
      title: "Competitive Price Discovery",
      description:
        "Multiple tendering and negotiation for optimal cost outcomes",
    },
    {
      icon: "/images/icons/casting-rivexa/container-2.svg",
      title: "Inspection Facilitation",
      description:
        "Improved quality control and compliance at every production stage",
    },
    {
      icon: "/images/icons/casting-rivexa/container-3.svg",
      title: "Export-Ready Supply Chains",
      description:
        "End-to-end logistics and documentation support for global delivery",
    },
  ],
};

export const forgingSourceData = {
  heading: "Source Better with India",
  subHeading:
    "Your trusted India sourcing partner for forged components",

  cta: {
    title: "What is Forging?",

    shortDescription:
      "Forging is a metal forming process where compressive forces are used to shape heated metal into strong and durable components. It is widely used for producing...",

    fullDescription:
      "Forging is a manufacturing process in which metal is shaped through localized compressive forces, typically using hammers, presses, or dies. The process improves the grain structure of the material, resulting in superior strength, toughness, and fatigue resistance compared to cast or machined parts. Common forging methods include open die forging, closed die forging, and ring rolling. Forged components are extensively used in automotive, aerospace, oil & gas, power generation, mining, and heavy engineering applications where reliability and mechanical performance are critical.",

    image: "/images/casting-rivexa.png",
    imageAlt: "Forging Process",
  },
};