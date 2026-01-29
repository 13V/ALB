import Link from "next/link";

const SERVICE_AREAS = [
    "Adelaide CBD",
    "Adelaide Hills",
    "Norwood",
    "Glenelg",
    "Burnside",
    "Unley",
    "Prospect",
    "North Adelaide",
];

export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                                ALB
                            </span>
                            <span className="text-sm uppercase tracking-widest text-white/60">
                                Property
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            High-quality, fully custom outdoor services across Adelaide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-white/60">
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-white/60">
                            <li>Landscape Design</li>
                            <li>Property Maintenance</li>
                            <li>Hardscaping</li>
                            <li>Irrigation Systems</li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Service Areas</h4>
                        <ul className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                            {SERVICE_AREAS.map((area) => (
                                <li key={area}>{area}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
                    <p>© {new Date().getFullYear()} ALB Property Maintenance & Landscapes. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a
                            href="https://www.facebook.com/people/ALB-property-maintenance-landscapes/61583929508879/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#C9A227] transition-colors"
                        >
                            Facebook
                        </a>
                        <a href="tel:0400000000" className="hover:text-[#C9A227] transition-colors">
                            Call Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
