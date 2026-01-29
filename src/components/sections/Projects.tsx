const PROJECTS = [
    {
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
        title: "Modern Family Garden",
        category: "Residential",
    },
    {
        image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
        title: "Coastal Retreat",
        category: "Landscape Design",
    },
    {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
        title: "Native Garden Restoration",
        category: "Sustainable",
    },
    {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
        title: "Outdoor Entertainment",
        category: "Hardscaping",
    },
    {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        title: "Front Yard Makeover",
        category: "Residential",
    },
    {
        image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop",
        title: "Commercial Landscape",
        category: "Commercial",
    },
];

export function Projects() {
    return (
        <section id="projects" className="section-padding bg-[#FAF8F5]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] mb-4">
                        Our Work
                    </p>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                        Recent Projects
                    </h2>
                    <p className="text-[#6B6B6B] text-lg">
                        Browse some of our latest landscape transformations across Adelaide.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${project.image}')` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-6 w-full">
                                    <span className="text-xs uppercase tracking-widest text-[#C9A227] mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="font-[family-name:var(--font-heading)] text-xl text-white font-bold">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
