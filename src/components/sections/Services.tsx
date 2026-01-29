const SERVICES = [
    {
        icon: "🌿",
        title: "Landscape Design",
        description:
            "Custom garden designs tailored to your property. From concept to completion, we create outdoor spaces that inspire.",
    },
    {
        icon: "🏠",
        title: "Property Maintenance",
        description:
            "Regular lawn care, hedge trimming, and garden upkeep to keep your property looking pristine year-round.",
    },
    {
        icon: "🔨",
        title: "Hardscaping",
        description:
            "Patios, retaining walls, pathways, and outdoor structures built with quality materials that last.",
    },
    {
        icon: "💧",
        title: "Irrigation Systems",
        description:
            "Smart watering solutions to keep your gardens healthy while saving water and reducing costs.",
    },
    {
        icon: "✨",
        title: "Exterior Cleaning",
        description:
            "Professional soft washing and pressure cleaning to keep your property's exterior looking its absolute best.",
    },
];

export function Services() {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] mb-4">
                        What We Do
                    </p>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                        Our Services
                    </h2>
                    <p className="text-[#6B6B6B] text-lg">
                        From complete landscape transformations to regular maintenance, we offer
                        a full range of services to meet your outdoor needs.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-[#FAF8F5] hover:bg-[#2D5A3D] transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-4xl mb-6 block">{service.icon}</span>
                            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-[#6B6B6B] group-hover:text-white/80 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
