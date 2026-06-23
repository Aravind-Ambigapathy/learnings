export const machiningFormData = {
    title:
        "Upload Your Engineering Drawing and Source from physically verified Indian manufacturers through rivexa's managed sourcing ecosystem, enabling",

    types: [
        {
            id: "open",
            label: "CNC Machining",
            description:
                "Best for larger, complex geometries with lower tooling cost",
        },
        {
            id: "closed",
            label: "Conventional Machining",
            description:
                "Best for high-volume precision forged components",
        },
    ],

    features: [
        {
            icon: "images/icons/casting-rivexa/container.svg",
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

export const machiningSourceData = {
    heading: "Source Better with India",
    subHeading:
        "Your trusted India sourcing partner for machining components",

    cta: {
        title: "What is Machining?",

        shortDescription:
            "Machining is a precision manufacturing process used to shape raw materials into highly accurate components. It involves removing excess material from a workpiece using advanced machine tools such as CNC machines...",

        fullDescription:
            " Machining is a precision manufacturing process used to shape raw materials into highly accurate components. It involves removing excess material from a workpiece using advanced machine tools such as CNC machines. Today, CNC machining services play a critical role across industries where tight tolerances, dimensional accuracy, and superior surface finishes are essential. Modern machining combines advanced manufacturing technologies with skilled engineering expertise. Leading CNC machining companies leverage precision CNC machining capabilities to create high-accuracy parts. A reliable CNC machining manufacturer partnered with rivexa, enables seamless access to everything from rapid prototyping and low-volume custom production to highvolume industrial manufacturing. With a strong focus on quality assurance and supplier transparency, rivexa ensures consistent delivery of precision components. Additionally, advanced capabilities allow businesses to source lightweight, corrosion-resistant parts tailored to specialized industrial and engineering applications.",

        image: "/images/casting-rivexa.png",
        imageAlt: "Machining Process",
    },
};

export const machiningSteps = [
    {
        title: "Design & Engineering",
        description: "Study of CAD (Computer-Aided Design) / engineering drawings and selection of manufacturing machines",
        image: "/images/machiningstep1.png",
    },
    {
        title: "CNC Programming",
        description: "The CAD design is translated into machine-readable instructions using CAM (Computer-Aided Manufacturing) software.",
        image: "/images/machiningstep2.png",
    },
    {
        title: "Machine Setup",
        description: "The selected material is securely mounted onto the machine, and cutting tools are configured as per requirements.",
        image: "/images/machiningstep3.png",
    },
    {
        title: "Material Removal & Machining",
        description: "Using various processes, the machine removes excess material to achieve the desired shape and dimensions.",
        image: "/images/machiningstep4.png",
    },
    {
        title: "Finishing & Surface Treatment",
        description: "After primary machining, components may undergo polishing, coating, heat treatment, or surface grinding etc.",
        image: "/images/machiningstep5.png",
    },
    {
        title: "Inspection & Quality Control",
        description: "Finished components are inspected using precision measuring instruments and quality assurance systems.",
        image: "/images/machiningstep6.png",
    },
    {
        title: "Packaging & Delivery",
        description: "Once approved, the machined components are securely packaged and prepared for domestic or global shipment.",
        image: "/images/machiningstep7.png",
    },
];

export const machiningData = {
    title: "Core Machining Processes",

    comparisonTitle: "Not sure which process fits your requirement?",

    comparisonDescription:
        "rivexa helps you compare processes and source from the right manufacturing partner.",
    comparisonFirstColumnTitle: "Feature",
    processes: [
        {
            id: "CNC-Turning",
            name: "CNC Turning",
            image: "/images/machiningcore1.png",
            bestFor:
                "Rotational precision components",

            capability: "High accuracy shafts, bushes, sleeves up to 2000 mm",

            description:
                "CNC turning which is widely used in precision CNC machining, is a process where the workpiece rotates while a cutting tool removes material to create cylindrical components such as shafts, bushings, and threaded parts",
        },

        {
            id: "closed-die",
            name: "CNC Milling / VMC",
            image: "/images/machiningcore2.png",
            bestFor:
                "Complex prismatic components",

            capability:
                "Multi-face machining with tight tolerance",

            description:
                "CNC milling, often performed on Vertical Machining Centers (VMC), involves rotating cutting tools to remove material from a stationary workpiece. It is ideal for producing complex geometries, slots, and surface features.",
        },

        {
            id: "HMC-Machining",
            name: "HMC Machining",
            image: "/images/machiningcore3.png",
            bestFor:
                "High-volume production parts",

            capability:
                "Efficient multi-side machining with fixture setup",

            description:
                "Horizontal Machining Centers (HMC) are designed for high-efficiency production of complex and heavy components. With multi-face machining capabilities, HMCs improve productivity and reduce cycle times.",
        },
        {
            id: "Grinding",
            name: "Grinding",
            image: "/images/machiningcore4.png",
            bestFor:
                "Fine finishing and dimensional control",

            capability:
                "Tolerance up to ±0.01 mm",

            description:
                "Grinding is a finishing process used to achieve extremely tight tolerances and superior surface finishes. It is commonly applied to hardened materials where high precision is critical.",
        },
        {
            id: "EDM",
            name: "EDM / Wire Cut",
            image: "/images/machiningcore5.png",
            bestFor:
                "Intricate profiles and hard materials",

            capability:
                "Precision contour cutting and tooling applications",

            description:
                "Electrical Discharge Machining (EDM) uses electrical sparks to precisely remove material from conductive workpieces. This process is ideal for intricate shapes, sharp internal corners, and hard materials.",
        },
        {
            id: "Conventional-Machining",
            name: "Conventional Machining",
            image: "/images/machiningcore5.png",
            bestFor:
                "Low-volume or repair jobs",

            capability:
                "Flexible machining for simple geometries",

            description:
                "Conventional machining involves manual or semi-automatic operations such as drilling, turning, and milling without full CNC automation. While less automated, it remains relevant for simple parts and low-volume requirements.",
        },
    ],
    comparisonColumns: [
        "CNC Machining",
        "Conventional Machining",
        "Grinding / EDM",
    ],
    comparisonRows: [
        {
            feature: "Production Volume",
            values: ["Medium–High", "Low–Medium", "Low–Medium"],
        },
        {
            feature: "Dimensional Accuracy",
            values: ["High", "Moderate", "Very High"],
        },
        {
            feature: "Surface Finish",
            values: ["Excellent", "Moderate", "Superior"],
        },
        {
            feature: "Complex Geometry",
            values: ["Excellent", "Limited", "Excellent"],
        },
    ],
};

export const machiningIndustries = {
    title: "Industries We Serve",

    subtitle:
        "Delivering verified forging solutions across key industrial sectors.",

    industries: [
        {
            title: "Pump and Valve Manufacturer",
            image: "/images/industries1.png",
            description:
                "High-strength forged components for engines, transmissions, axles, suspension systems and critical automotive applications.",
        },

        {
            title: "Engineering",
            image: "/images/machiningindus2.png",
            description:
                "Durable forged parts for heavy industrial equipment, machine tools, power transmission systems and manufacturing machinery.",
        },

        {
            title: "Steel & Heavy Engineering",
            image: "/images/machiningindus3.png",
            description:
                "Forged flanges, fittings, valves and pressure-containing components designed for demanding oil and gas environments.",
        },

        {
            title: "Industrial Manufacturing",
            image: "/images/machiningindus4.png",
            description:
                "Heavy-duty forged rolls, shafts, couplings and structural components used in steel production facilities.",
        },

        {
            title: "Automotive",
            image: "/images/machiningindus5.png",
            description:
                "Wear-resistant forged components engineered for crushers, excavators, drilling equipment and mining operations.",
        },
        {
            title: "Mining & EPC",
            image: "/images/machiningindus6.png",
            description:
                "Wear-resistant forged components engineered for crushers, excavators, drilling equipment and mining operations.",
        },
    ],
}

export const machiningMaterials = [
    {
        name: "Ferrous Alloys",
        count: 3,
        color: "#5C3DBB",
        icon: "/images/icons/material-capabilities/generated-image6.png",
        description:
            "Ferrous alloys are widely used in industries that demand strength, durability, and loadbearing performance. These materials are essential in automotive, construction, heavy machinery, energy, and infrastructure applications.",

        materials: [
            {
                name: "Steel Alloys",
                // description: "Low carbon steel with good machinability",
            },
            {
                name: "Stainless Steel",
                // description: "Medium carbon steel with higher strength",
            },
            {
                name: "Carbon Steel",
                // description: "General engineering steel for forged parts",
            },
            {
                name: "Alloy Steel",
                // description: "General engineering steel for forged parts",
            },
        ],
    },

    {
        name: "Non-Ferrous Alloys",
        count: 3,
        color: "#2A8B61",
        icon: "/images/icons/material-capabilities/generated-image3.svg",
        description:
            "Non-ferrous materials are valued for their lightweight properties, corrosion resistance, and conductivity. These materials are extensively used across aerospace, electronics, electrical, automotive, and marine industries.",

        materials: [
            {
                name: "Aluminum",
                // description: "High tensile alloy steel",
            },
            {
                name: "Brass",
                // description: "High strength and fatigue resistance",
            },
            {
                name: "Bronze",
                // description: "Chromium-molybdenum alloy steel",
            },
            {
                name: "Copper",
                // description: "Chromium-molybdenum alloy steel",
            },
            {
                name: "Titanium",
                // description: "Chromium-molybdenum alloy steel",
            },
        ],
    },

    {
        name: "Engineering Plastics",
        count: 2,
        color: "#1D1B2E",
        icon: "/images/icons/material-capabilities/generated-image7.png",
        description:
            "Engineering plastics are widely used in applications requiring lightweight, chemical resistance, and low friction properties. These materials are commonly found in medical devices, electronics, and packaging industries.",

        materials: [
            {
                name: "Nylon",
                // description: "General-purpose corrosion resistant grade",
            },
            {
                name: "Delrin",
                // description: "Enhanced corrosion resistance",
            },
            {
                name: "PTFE",
                // description: "Enhanced corrosion resistance",
            },
            {
                name: "UHMW",
                // description: "Enhanced corrosion resistance",
            },
        ],
    },
];


export const machiningCapabilities = {
    title: "Comprehensive Forging Capabilities You Can Rely On",

    capabilities: [
        {
            title: "Machines",
            subtitle: "CNC Turning, VMC, HMC, Boring, Grinding, EDM",
            border: "border-[#BFDDF2]",
            text: "#4F378B",
            iconBg: "bg-[#F2ECFC]",
            icon: "/images/icons/comprehensive-casting/container.svg",
        },

        {
            title: "Maximum Size",
            subtitle: "Up to 2000 mm (CNC Machining)",
            border: "border-[#BFDDF2]",
            text: "#1A4D6E",
            iconBg: "bg-[#EDF6FB]",
            icon: "/images/icons/comprehensive-casting/container-1.svg",
        },

        {
            title: "Dimensional Tolerance",
            subtitle: "Up to ±0.01 mm depending on process",
            border: "border-[#BFE5D0]",
            text: "#2E7D5E",
            iconBg: "bg-[#EDF9F3]",
            icon: "/images/icons/comprehensive-casting/container-2.svg",
        },

        {
            title: "Batch Size",
            subtitle: "Prototype to 10,000+ production quantity",
            border: "border-[#F2D9A6]",
            text: "#A06A00",
            iconBg: "bg-[#FFF6E8]",
            icon: "/images/icons/comprehensive-casting/container-3.svg",
        },

        {
            title: "Tooling Support",
            subtitle: "Fixture development and process engineering",
            border: "border-[#F4C5D4]",
            text: "#A1265B",
            iconBg: "bg-[#FDF0F5]",
            icon: "/images/icons/comprehensive-casting/container-4.svg",
        },

        {
            title: "Inspection",
            subtitle: "Dimensional and visual inspection before dispatch",
            border: "border-[#CBD5FF]",
            text: "#1A3A8C",
            iconBg: "bg-[#EEF2FF]",
            icon: "/images/icons/comprehensive-casting/container-5.svg",
        },
        {
            title: "Export Support",
            subtitle: "Export packaging and documentation",
            border: "border-[#CBD5FF]",
            text: "#1A3A8C",
            iconBg: "bg-[#EEF2FF]",
            icon: "/images/icons/comprehensive-casting/container-2.svg",
        },
    ],
};

export const machiningServicesData = {
    title:
        "Beyond machining: rivexa ensures integrated post-processing operations ",

    subtitle:
        "At rivexa, our capabilities go beyond machining, to deliver customized components through a complete range of value-added post-processing services. This integrated approach helps reduce vendor dependency, shorten lead times, and simplify your supply chain.",

    services: [
        {
            title: "Heat Treatment",
            description:
                "Annealing, hardening, and tempering to improve durability.",
            icon: "/images/icons/beyond-casting/container-1.svg",
            accent: "#8B7DDB",
        },

        {
            title: "Surface Finishing",
            description:
                "Grinding, polishing, and deburring to enhance surface precision.",
            icon: "/images/icons/beyond-casting/container.svg",
            accent: "#F59E0B",
        },

        {
            title: "Coating",
            description:
                "Anodizing, powder coating, and plating to add protection and finish.",
            icon: "/images/icons/beyond-casting/container-2.svg",
            accent: "#14B8A6",
        },

        {
            title: "Marking",
            description:
                "Laser marking and identification to ensures traceability.",
            icon: "/images/icons/beyond-casting/container-3.svg",
            accent: "#2563EB",
        },

        {
            title: "Assembly",
            description:
                "Partial or full assembly support for ready-to-use components.",
            icon: "/images/icons/beyond-casting/container-4.svg",
            accent: "#A855F7",
        },
        {
            title: "Packaging",
            description:
                "Export-ready packaging for safe and compliant delivery.",
            icon: "/images/icons/beyond-casting/container-4.svg",
            accent: "#A855F7",
        },
    ],

    // ctaTitle:
    //     "Ready to simplify your supply chain?",

    // ctaDescription:
    //     "Share your requirements and get a tailored post-processing quote from verified Indian manufacturers.",

    // buttonText: "Send Enquiry",
};