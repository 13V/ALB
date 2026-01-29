export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2400&auto=format&fit=crop')`,
                }}
            />

            {/* Overlay */}
            <div className="hero-overlay absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-[#C9A227]">
                    Adelaide&apos;s Trusted Landscaping Experts
                </p>

                <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                    Transform Your <br />
                    <span className="italic font-normal">Outdoor Space</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                    High-quality, fully custom landscaping and property maintenance services.
                    We bring your outdoor vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary">
                        Get Free Quote
                    </a>
                    <a href="#projects" className="btn-outline">
                        View Our Work
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
