import Link from "next/link";

export function ExteriorCleaningHighlight() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Images Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop')` }} // Pressure washing image
                                />
                            </div>
                            <div className="bg-[#C9A227] h-24 w-full" />
                        </div>
                        <div className="pt-12 space-y-4">
                            <div className="bg-[#2D5A3D] h-24 w-full" />
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop')` }} // Roof/House cleaning
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] mb-4">
                            New Service Division
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                            Exterior & <br />
                            <span className="italic font-normal">Pressure Cleaning</span>
                        </h2>
                        <p className="text-[#6B6B6B] text-lg mb-8 leading-relaxed">
                            We&apos;ve expanded our expertise to offer professional exterior cleaning solutions.
                            As a dedicated division of ALB Property Maintenance & Landscapes, we provide
                            specialized soft washing and high-pressure cleaning to keep your property looking new.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="border-l-2 border-[#2D5A3D] pl-6">
                                <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide text-sm">Soft Washing</h4>
                                <p className="text-sm text-[#6B6B6B]">Gentle, low-pressure treatment for delicate surfaces like roofs and siding.</p>
                            </div>
                            <div className="border-l-2 border-[#2D5A3D] pl-6">
                                <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide text-sm">Pressure Cleaning</h4>
                                <h3 className="sr-only">High pressure cleaning</h3>
                                <p className="text-sm text-[#6B6B6B]">Powerful restoration for driveways, pathways, and hard surfaces.</p>
                            </div>
                        </div>

                        <Link href="/exterior-cleaning" className="btn-primary inline-block">
                            Explore Our Division
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
