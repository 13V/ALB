import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function ExteriorCleaningPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Sub-Hero Section */}
                <section className="relative py-20 md:py-32 bg-[#2D5A3D] overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.3em] mb-6 text-[#C9A227]">
                                Service Division | ALB Property Maintenance & Landscapes
                            </p>
                            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-white mb-8">
                                Exterior Cleaning & <br />
                                <span className="italic font-normal text-white/90">Pressure Washing</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 mb-0">
                                Professional restoration and maintenance services for your home&apos;s exterior surfaces.
                            </p>
                        </div>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-[#C9A227] rotate-12 transform origin-bottom-right" />
                    </div>
                </section>

                {/* Detailed Services */}
                <section className="section-padding bg-white">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                            <div>
                                <div className="relative aspect-video overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop')` }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A1A] mb-6">
                                    Soft Washing Specialists
                                </h2>
                                <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
                                    Standard high-pressure washing can often damage delicate surfaces like render, timber, and older roofing tiles. Our Soft Washing method uses specialized, biodegradable solutions and low-pressure water to safely remove mold, algae, and dirt without the risk of damage.
                                </p>
                                <ul className="space-y-4">
                                    {['Roof cleaning & moss removal', 'House washing (render & weatherboard)', 'Gutter whitening', 'Timber deck & fence cleaning'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-[#1A1A1A] font-medium">
                                            <span className="w-2 h-2 bg-[#C9A227] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="relative aspect-video overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1200&auto=format&fit=crop')` }}
                                    />
                                </div>
                            </div>
                            <div className="lg:order-1">
                                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A1A] mb-6">
                                    High-Pressure Cleaning
                                </h2>
                                <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
                                    For tough jobs like driveways, brickwork, and concrete pathways, our commercial-grade high-pressure equipment delivers a deep clean that standard garden hoses simply can&apos;t match. We restore your hard surfaces to their former glory.
                                </p>
                                <ul className="space-y-4">
                                    {['Driveway & pathway restoration', 'Concrete & brick cleaning', 'Oil stain treatment', 'Pool surround cleaning'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-[#1A1A1A] font-medium">
                                            <span className="w-2 h-2 bg-[#C9A227] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Branding Reassurance */}
                <section className="py-16 bg-[#FAF8F5] border-t border-b border-[#E5E5E5]">
                    <div className="container mx-auto text-center px-6">
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A1A] mb-4">
                            Part of the ALB Property Care Ecosystem
                        </h3>
                        <p className="text-[#6B6B6B] max-w-2xl mx-auto">
                            Our exterior cleaning division operates with the same professional standards and attention to detail as our landscaping and maintenance teams. One point of contact for all your property needs.
                        </p>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    );
}
