"use client";

import { useEffect, useRef, useState } from "react";

interface FormType {
    id: string;
    label: string;
    description: string;
}

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface CastingWithRivexaProps {
    data: {
        title: string;
        types: FormType[];
        features: Feature[];
    };
}

export default function CastingWithRivexa({
    data,
}: CastingWithRivexaProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [selectedType, setSelectedType] = useState(data.types[0].id);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isVisible, setIsVisible] = useState(false);

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
            { threshold: 0.2 }
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

            payload.append("castingType", selectedType);
            payload.append("businessName", formData.businessName);
            payload.append("fullName", formData.fullName);
            payload.append("email", formData.email);
            payload.append("countryCode", formData.countryCode);
            payload.append("phone", formData.phone);

            if (uploadedFile) {
                payload.append("drawing", uploadedFile);
            }

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
            className="bg-[#F8F5FC] py-20"
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#D8D2EC] bg-white text-[11px] font-medium uppercase tracking-wider text-[#5A36C8]">
                        Source From India
                    </div>

                    <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#22095B]">
                        Need a Smarter Way to Source?
                    </h2>

                    <p className="mt-4 text-[#6B7280] text-lg leading-relaxed">
                        {data.title}
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 mt-14">
                    {/* LEFT FORM */}
                    <div className="bg-white rounded-[24px] border border-[#E8E2F2] overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-[#ECE7F5]">
                            <h3 className="text-2xl font-bold text-[#22095B]">
                                Upload Your Engineering Drawing
                            </h3>

                            <p className="text-sm text-[#8F8AA6] mt-2">
                                We respond within 24 Hours · No commitment required
                            </p>
                        </div>

                        <div className="px-6 py-4">
                            <label className="text-xs uppercase tracking-wider font-semibold text-[#7A67AF]">
                                Select Category Type
                            </label>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {data.types.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setSelectedType(type.id)}
                                        type="button"
                                        className={`px-5 py-3 rounded-xl border text-sm transition-all ${selectedType === type.id
                                                ? "bg-[#EFEAFF] border-[#CFC3FF] text-[#4F2DBA]"
                                                : "bg-[#F8F7FB] border-[#E7E3F1] text-[#8B89A1]"
                                            }`}
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>

                            {/* Upload */}
                            <div className="mt-6">
                                <label className="text-xs uppercase tracking-wider font-semibold text-[#7A67AF]">
                                    Upload Drawing
                                </label>

                                <label className="block cursor-pointer">
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.dwg,.dxf,.step,.iges,.stl"
                                        onChange={handleFileChange}
                                    />

                                    <div className="mt-3 border-2 border-dashed border-[#D7CFF1] rounded-2xl px-6 py-6 text-center hover:bg-[#FAF8FF] transition">
                                        <div className="w-12 h-12 mx-auto rounded-xl bg-[#F1ECFF] flex items-center justify-center">
                                            ↑
                                        </div>

                                        <p className="mt-4 text-[#22095B] font-medium">
                                            Drag & drop or{" "}
                                            <span className="underline">
                                                browse
                                            </span>
                                        </p>

                                        <p className="mt-2 text-xs text-[#9B97AF]">
                                            Upload any file format (Maximum size: 20 MB)
                                        </p>

                                        {uploadedFile && (
                                            <p className="mt-3 text-green-600 text-sm">
                                                ✓ {uploadedFile.name}
                                            </p>
                                        )}
                                    </div>
                                </label>
                            </div>

                            {/* Form */}
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div>
                                    <input
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Business name"
                                        className="w-full h-12 rounded-xl border border-[#DDD7EE] px-4"
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
                                        placeholder="Full name"
                                        className="w-full h-12 rounded-xl border border-[#DDD7EE] px-4"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.fullName}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email ID"
                                        className="w-full h-12 rounded-xl border border-[#DDD7EE] px-4"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2 flex gap-3">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-[70px] h-12 rounded-xl border border-[#DDD7EE]"
                                    >
                                        <option>🇺🇸</option>
                                        <option>🇮🇳</option>
                                    </select>

                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Mobile number"
                                        className="flex-1 h-12 rounded-xl border border-[#DDD7EE] px-4"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="mt-6 w-full h-14 rounded-xl bg-[#4200A3] text-white font-semibold shadow-lg shadow-purple-300/40"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Get Matched to Manufacturers →"}
                            </button>

                            <p className="text-center text-xs text-[#A39CB8] mt-5">
                                No commitment required · Your data is NDA protected
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col mt-4">
                        {data.features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`pb-8 mb-8 border-b border-[#E5DFF0] last:border-b-0 last:pb-0 last:mb-0 transition-all duration-700 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 150}ms`,
                                }}
                            >
                                <div className="flex gap-5">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                    ${index === 0
                                                ? "bg-[#ECE8FF] text-[#5D4CFF]"
                                                : index === 1
                                                    ? "bg-[#DFF8F0] text-[#00A87E]"
                                                    : index === 2
                                                        ? "bg-[#E8F1FF] text-[#2F80ED]"
                                                        : "bg-[#FFF1D8] text-[#E08B1D]"
                                            }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#22095B] text-xl">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 text-[#6B7280] leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-wrap gap-3 mt-4">
                            <span className="px-4 py-2 rounded-full border border-[#DDD7EE] bg-white text-sm text-[#5B5670]">
                                ✓ 100% Verified Suppliers
                            </span>

                            <span className="px-4 py-2 rounded-full border border-[#DDD7EE] bg-white text-sm text-[#5B5670]">
                                ✓ NDA Protected
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}