import { ProcessComparisonData } from "./processComparison";

export const castingData: ProcessComparisonData = {
  title: "Core Casting Processes",

  comparisonTitle: "Not sure which process fits your requirement?",

  comparisonDescription:
    "rivexa helps you compare processes and source from the right manufacturing partner.",

  processes: [
    {
      id: "sand",
      name: "Sand Casting",
      image: "/images/castingprocess1.png",
      bestFor: "Medium to very large components",
      capability: "Weight up to 3000kg, wide material range",
      description:
        "Sand casting is one of the most versatile and cost-effective metal casting methods, ideal for producing both simple and complex components in small to large sizes. The process involves pouring molten metal into molds made from specially prepared sand, which are broken away after solidification. Sand casting supports a wide range of ferrous and non-ferrous metals and is commonly used for pumps, valves, machinery parts, and heavy equipment components. It is especially valued for low tooling costs and flexibility in custom production.",
    },
    {
      id: "die",
      name: "Die Casting",
      image: "/images/castingprocess2.png",
      bestFor: "High-volume aluminum or zinc components",
      capability: "Excellent repeat ability and thin wall capability up to 30 kg",
      description:
        "Aluminum die casting is a high-efficiency manufacturing process used to produce lightweight, durable, and dimensionally accurate metal components in large volumes. Molten aluminum is injected into precision steel dies under pressure, enabling the creation of complex shapes with smooth surfaces and tight tolerances. Known for its excellent strength-to-weight ratio, corrosion resistance, and thermal conductivity, aluminum die casting is widely used in automotive, electronics, aerospace and industrial equipment applications.",
    },
    {
      id: "investment",
      name: "Investment Casting",
      image: "/images/castingprocess3.png",
      bestFor: "Complex geometry with tight tolerance",
      capability: "Superior surface finish and dimensional accuracy up to 50kg",
      description:
        "Investment casting, also known as lost-wax casting, is a precision casting process used to manufacture highly detailed components with excellent surface finish and dimensional accuracy. The process begins with a wax pattern coated in ceramic material to form a mold, which is then heated to remove the wax before molten metal is poured in. Investment casting is ideal for complex geometries, thin walls, and intricate designs that require minimal machining. It is widely used in aerospace, medical devices, defense, automotive, and engineering applications.",
    },
  ],

  comparisonRows: [
    {
      feature: "Typical Production Volume",
      values: ["Low – Medium", "High", "Medium – High"],
    },
    {
      feature: "Surface Finish",
      values: ["Moderate", "Good", "Excellent"],
    },
    {
      feature: "Dimensional Accuracy",
      values: ["Medium", "High", "Very High"],
    },
  ],
};

export const castingIndustries = {
  title: "Industries We Serve",

  subtitle:
    "Delivering verified forging solutions across key industrial sectors.",

  industries: [
    {
      title: "Pump & Valve Manufacturers",
      image: "/images/industries1.png",
      description:
        "Precision castings for pumps, valves, and fluid handling systems across industrial applications.",
    },
    {
      title: "Mining",
      image: "/images/mold-prep1.png",
      description:
        "Heavy-duty castings engineered to withstand extreme loads and abrasive conditions in mining operations.",
    },
    {
      title: "Oil & Gas",
      image: "/images/industries3.png",
      description:
        "Reliable cast components designed for demanding upstream, midstream, and downstream environments.",
    },
    {
      title: "Industrial Machinery",
      image: "/images/industries4.png",
      description:
        "Custom-engineered castings for machinery manufacturers requiring durability and precision.",
    },
    {
      title: "Automotive",
      image: "/images/mold-prep3.png",
      description:
        "High-quality casting solutions for vehicle components, powertrain systems, and assemblies.",
    },
    {
      title: "Construction",
      image: "/images/industries6.png",
      description:
        "Robust cast components for infrastructure, heavy equipment, and construction machinery.",
    },
  ]
}

export const castingMaterials = [
  {
    name: "Cast Iron",
    count: 5,
    color: "#5C3DBB",
    icon: '/images/icons/material-capabilities/generated-image1.svg',
    description:
      "Our cast iron capabilities are engineered for applications that demand durability, wear resistance and costeffective large-scale production. Grey iron is widely used for engine blocks, housings, and machine bases due to its machinability and thermal stability. Ductile iron offers higher strength and impact resistance for automotive, piping, and structural parts. White iron, Ni-Hard, and High Chrome iron grades are ideal for abrasive and high-wear environments such as mining, cement, power, and material handling industries.",
    materials: [
      {
        name: "Grey Iron",
        description: "Excellent machinability & vibration damping",
      },
      {
        name: "Ductile Iron",
        description: "High strength with good ductility",
      },
      {
        name: "White Iron",
        description: "Extremely hard, wear-resistant surface",
      },
      {
        name: "Ni-Hard",
        description: "Nickel alloyed, superior abrasion resistance",
      },
      {
        name: "High Chrome Iron",
        description: "Corrosion & wear resistant castings",
      },
    ],
  },
  {
    name: "Steel",
    count: 5,
    color: "#215A87",
    icon: '/images/icons/material-capabilities/generated-image2.svg',
    description:
      "We offer a broad range of steel casting solutions designed for strength and corrosion resistance. Carbon steel is preferred for heavy-duty structural and industrial components requiring high load-bearing capacity. Stainless steel provides superior corrosion resistance, making it ideal for food processing, marine, and chemical industries. Manganese steel is valued for exceptional wear resistance in crushers and rail components, while Duplex and Super Duplex steels deliver outstanding performance in offshore oil & gas, and aggressive chemical environments.",
    materials: [
      {
        name: "Carbon Steel",
        description: "Versatile, high strength structural castings",
      },
      {
        name: "Stainless Steel",
        description: "Corrosion resistant, food & medical grade",
      },
      {
        name: "Manganese Steel",
        description: "Impact-hardening for mining & crushing",
      },
      {
        name: "Duplex",
        description: "Dual-phase, superior corrosion resistance",
      },
      {
        name: "Super Duplex",
        description: "Extreme chloride & corrosion resistance",
      },
    ],
  },
  {
    name: "Non-Ferrous Alloys",
    count: 3,
    color: "#2A8B61",
    icon: '/images/icons/material-capabilities/generated-image3.svg',
    description:
      "Our non-ferrous alloy casting capabilities are optimized for lightweight performance, conductivity and premium surface finish. Aluminum alloys are widely used in automotive, aerospace, and electronics for their high strength-to-weight ratio and corrosion resistance. Zinc alloys are ideal for die-cast components requiring intricate details, tight tolerances, and decorative finishes. Copper alloys are chosen for excellent thermal and electrical conductivity, corrosion resistance and long-term reliability.",
    materials: [
      {
        name: "Aluminum Alloys",
        description: "Lightweight, high strength-to-weight ratio",
      },
      {
        name: "Zinc Alloys",
        description: "Die casting grade, excellent surface finish",
      },
      {
        name: "Copper Alloys",
        description: "High conductivity, marine-grade options",
      },
    ],
  },
];

export const castingCapabilities = {
  title: "Comprehensive Casting Capabilities",

  capabilities: [
    {
      title: "Flexible Part Weights",
      subtitle: "50 g to 3000 kg",
      border: "border-[#D9C6FF]",
      text: "#4F378B",
      iconBg: "bg-[#F2ECFC]",
      icon: "/images/icons/comprehensive-casting/container.svg",
    },

    {
      title: "Dimensional Precision",
      subtitle: "ISO 8062 CT5 – CT12 tolerance range",
      border: "border-[#BFDDF2]",
      text: "#1A4D6E",
      iconBg: "bg-[#EDF6FB]",
      icon: "/images/icons/comprehensive-casting/container-1.svg",
    },

    {
      title: "Scalable Production",
      subtitle: "From prototypes to high-volume manufacturing",
      border: "border-[#C6E8D7]",
      text: "#2E7D5E",
      iconBg: "bg-[#EDF9F3]",
      icon: "/images/icons/comprehensive-casting/container-2.svg",
    },

    {
      title: "Integrated Tooling",
      subtitle: "Pattern making and die development support",
      border: "border-[#F2D9A6]",
      text: "#8C5E00",
      iconBg: "bg-[#FFF6E8]",
      icon: "/images/icons/comprehensive-casting/container-3.svg",
    },

    {
      title: "Quality Control",
      subtitle: "Dimensional and visual inspections before dispatch",
      border: "border-[#F4C5D4]",
      text: "#8C1A45",
      iconBg: "bg-[#FDF0F5]",
      icon: "/images/icons/comprehensive-casting/container-4.svg",
    },

    {
      title: "Export Enablement",
      subtitle: "Secure packaging and complete documentation",
      border: "border-[#CBD5FF]",
      text: "#1A3A8C",
      iconBg: "bg-[#EEF2FF]",
      icon: "/images/icons/comprehensive-casting/container-5.svg",
    },
  ],
};

export const castingServicesData = {
  title:
    "Beyond casting: rivexa ensures integrated post-processing operations",

  subtitle:
    "At rivexa, our capabilities go beyond casting to deliver customized components through a complete range of value-added post-processing services. This integrated approach helps reduce vendor dependency, shorten lead times, and simplify your supply chain.",

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
      title: "Impregnation",
      description:
        "Leak-proofing solutions for porous castings",
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

export const castingFormData = {
  title:
    "Upload Your Engineering Drawing and Source from physically verified Indian manufacturers through rivexa's managed sourcing ecosystem, enabling",

  types: [
    {
      id: "sand",
      label: "Sand Casting",
      description:
        "Best for larger, complex geometries with lower tooling cost",
    },
    {
      id: "die",
      label: "Die Casting",
      description:
        "Best for high-volume production with excellent dimensional accuracy",
    },
    {
      id: "investment",
      label: "Investment Casting",
      description:
        "Ideal for intricate designs requiring superior surface finish and precision",
    },
  ],

  features: [
    {
      icon: "/images/icons/casting-rivexa/container.svg",
      title: "Customized Manufacturing",
      description:
        "Through technically capable foundries matched to your specifications",
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

export const castingSourceData = {
  heading: "Source Better with India",
  subHeading:
    "Your trusted India sourcing partner for casting products",

  cta: {
    title: "What is Casting?",
    shortDescription:
      "Casting is a manufacturing process in which molten metal is poured into a mold to create components of desired shapes and sizes. It is widely used for producing...",

    fullDescription:
      "Casting is a manufacturing process in which molten metal is poured into a mold to create components of desired shapes and sizes. It is widely used for producing complex geometries that are difficult or costly to achieve through machining. Common casting methods include sand casting, aluminum die casting, and investment casting, each suited to different production needs, materials, and precision levels. Casting supports a wide range of industries such as automotive, aerospace, machinery, and construction by enabling cost-effective mass production as well as customized components.",

    image: "/images/casting-rivexa.png",
    imageAlt: "Casting Process",
  },
};