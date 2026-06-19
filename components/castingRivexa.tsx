"use client";

import { useEffect, useRef, useState } from "react";

const features = [
    {
        icon: <img src="/images/icons/casting-rivexa/container.svg" alt="" />,
        title: "Customized Manufacturing",
        description:
            "Through technically capable foundries matched to your specifications",
    },
    {
        icon: <img src="/images/icons/casting-rivexa/container-1.svg" alt="" />,
        title: "Competitive Price Discovery",
        description:
            "Multiple tendering and negotiation for optimal cost outcomes",
    },
    {
        icon: <img src="/images/icons/casting-rivexa/container-2.svg" alt="" />,
        title: "Inspection Facilitation",
        description:
            "Improved quality control and compliance at every production stage",
    },
    {
        icon: <img src="/images/icons/casting-rivexa/container-3.svg" alt="" />,
        title: "Export-Ready Supply Chains",
        description:
            "End-to-end logistics and documentation support for global delivery",
    },
];

const castingTypes = {
    sand: {
        label: "Sand Casting",
        description:
            "Best for larger, complex geometries with lower tooling cost",
    },
    die: {
        label: "Die Casting",
        description:
            "Best for high-volume production with excellent dimensional accuracy",
    },
    investment: {
        label: "Investment Casting",
        description:
            "Ideal for intricate designs requiring superior surface finish and precision",
    },
};

export default function CastingWithRivexa() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [selectedCasting, setSelectedCasting] =
        useState<keyof typeof castingTypes>("sand");

    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        businessName: "",
        fullName: "",
        email: "",
        countryCode: "+1",
        phone: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const allowedExtensions = [
            "pdf",
            "dwg",
            "dxf",
            "step",
            "iges",
            "stl",
        ];

        const extension = file.name
            .split(".")
            .pop()
            ?.toLowerCase();

        if (!extension || !allowedExtensions.includes(extension)) {
            alert(
                "Only PDF, DWG, DXF, STEP, IGES and STL files are allowed."
            );
            return;
        }

        setUploadedFile(file);
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.businessName.trim()) {
            newErrors.businessName = "Business name is required";
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            setIsSubmitting(true);

            const payload = new FormData();

            payload.append("castingType", selectedCasting);
            payload.append("businessName", formData.businessName);
            payload.append("fullName", formData.fullName);
            payload.append("email", formData.email);
            payload.append("countryCode", formData.countryCode);
            payload.append("phone", formData.phone);

            if (uploadedFile) {
                payload.append("drawing", uploadedFile);
            }

            // Replace with your API
            await fetch("/api/enquiry", {
                method: "POST",
                body: payload,
            });

            alert("Enquiry submitted successfully!");

            setFormData({
                businessName: "",
                fullName: "",
                email: "",
                countryCode: "+1",
                phone: "",
            });

            setUploadedFile(null);
        } catch (error) {
            console.error(error);
            alert("Failed to submit enquiry.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-[#F5F1FA]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2
                    className={`text-3xl font-semibold text-[#2B1464] transition-all duration-700 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                        }`}
                >
                    Upload Your Engineering Drawing and Source from
                    physically verified Indian manufacturers through
                    rivexa&apos;s managed sourcing ecosystem, enabling
                </h2>

                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 mt-12 relative">
                    {/* FORM */}
                    <div className="bg-white rounded-3xl p-8 border border-[#E8E2F2] shadow-sm">
                        <label className="text-xs font-semibold tracking-wider text-[#7B61B3] uppercase">
                            Select Casting Type
                        </label>

                        <div className="flex flex-wrap gap-3 mt-3">
                            {Object.entries(castingTypes).map(([key, item]) => (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() =>
                                        setSelectedCasting(
                                            key as keyof typeof castingTypes
                                        )
                                    }
                                    className={`px-5 py-3 rounded-xl border transition-all ${selectedCasting === key
                                        ? "border-[#F4B15F] bg-[#FFF4E7] text-[#D87D13]"
                                        : "border-[#E3DDF0] text-[#8B84A5]"
                                        }`}
                                >
                                    ● {item.label}
                                </button>
                            ))}
                        </div>

                        <p className="mt-3 text-sm text-[#D87D13]">
                            {castingTypes[selectedCasting].description}
                        </p>

                        {/* Upload */}
                        <div className="mt-8">
                            <label className="text-xs font-semibold tracking-wider text-[#7B61B3] uppercase">
                                Upload Drawing
                            </label>

                            <label className="cursor-pointer block">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.dwg,.dxf,.step,.iges,.stl"
                                    onChange={handleFileChange}
                                />

                                <div className="mt-3 border-2 border-dashed border-[#D9CFF0] rounded-2xl p-12 text-center hover:bg-[#FAF8FF] transition-colors">
                                    <div className="w-12 h-12 mx-auto rounded-xl bg-[#F2ECFC] flex items-center justify-center text-xl">
                                        ↑
                                    </div>

                                    <p className="mt-4 font-medium text-[#2B1464]">
                                        Drag & Drop or Browse
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        PDF, DWG, DXF, STEP, IGES, STL
                                    </p>

                                    {uploadedFile && (
                                        <p className="mt-3 text-sm text-green-600 font-medium">
                                            ✓ {uploadedFile.name}
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>

                        {/* Inputs */}
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div>
                                <input
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    placeholder="Business name*"
                                    className="w-full h-12 rounded-xl border border-[#E3DDF0] px-4"
                                />
                                {errors.businessName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.businessName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full name*"
                                    className="w-full h-12 rounded-xl border border-[#E3DDF0] px-4"
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email ID*"
                                    className="w-full h-12 rounded-xl border border-[#E3DDF0] px-4"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <div className="flex gap-3">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="h-12 rounded-xl border border-[#E3DDF0] px-3"
                                    >
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+91">🇮🇳 +91</option>
                                    </select>

                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number*"
                                        className="flex-1 h-12 rounded-xl border border-[#E3DDF0] px-4"
                                    />
                                </div>

                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="mt-5 w-full h-12 rounded-xl bg-[#3F008D] text-white font-semibold disabled:opacity-50"
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Send Enquiry →"}
                        </button>

                        <p className="text-center text-sm text-[#8B84A5] mt-4">
                            No commitment required · Response within 24 hours
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="sticky top-24 space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`bg-white rounded-2xl border border-[#E8E2F2] p-6 flex gap-4
transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-24 opacity-0"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 200}ms`,
                                }}
                            >
                                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#F6F3FB]">
                                    {feature.icon}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-[#2B1464]">
                                        {feature.title}
                                    </h3>

                                    <p className="text-[#6B7280] mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}