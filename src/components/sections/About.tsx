export function About() {
    return (
        <section id="about" className="section-padding bg-[#2D5A3D]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative aspect-square lg:aspect-[4/5]">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop')`,
                            }}
                        />
                        {/* Gold accent box */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A227] hidden lg:block" />
                    </div>

                    {/* Content */}
                    <div className="text-white">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] mb-4">
                            About Us
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6">
                            Quality Workmanship, <br />
                            <span className="italic font-normal">Every Time</span>
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            ALB Property Maintenance & Landscapes is a family-owned business
                            dedicated to transforming outdoor spaces across Adelaide. With years
                            of experience and a passion for quality, we bring expertise and care
                            to every project.
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            From complete landscape overhauls to regular property maintenance,
                            we treat every job as if it were our own home. Our commitment to
                            excellence and customer satisfaction is what sets us apart.
                        </p>

                        <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
                            <div>
                                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#C9A227]">10+</span>
                                <p className="text-white/60 text-sm mt-1">Years Experience</p>
                            </div>
                            <div>
                                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#C9A227]">200+</span>
                                <p className="text-white/60 text-sm mt-1">Projects Completed</p>
                            </div>
                            <div>
                                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#C9A227]">100%</span>
                                <p className="text-white/60 text-sm mt-1">Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
