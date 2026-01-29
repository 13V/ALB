"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span
                        className={`text-2xl font-bold font-[family-name:var(--font-heading)] transition-colors ${scrolled ? "text-[#2D5A3D]" : "text-white"
                            }`}
                    >
                        ALB
                    </span>
                    <span
                        className={`text-sm uppercase tracking-widest transition-colors ${scrolled ? "text-[#6B6B6B]" : "text-white/80"
                            }`}
                    >
                        Property
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {["Services", "Projects", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Exterior Cleaning" ? "/exterior-cleaning" : `/#${item.toLowerCase()}`}
                            className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#C9A227] ${scrolled ? "text-[#1A1A1A]" : "text-white"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/exterior-cleaning"
                        className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#C9A227] ${scrolled ? "text-[#1A1A1A]" : "text-white"
                            }`}
                    >
                        Exterior Cleaning
                    </Link>
                    <a
                        href="tel:0400000000"
                        className="btn-primary text-sm"
                    >
                        Get Quote
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#1A1A1A]" : "bg-white"
                                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#1A1A1A]" : "bg-white"
                                } ${mobileOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#1A1A1A]" : "bg-white"
                                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {["Services", "Projects", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Exterior Cleaning" ? "/exterior-cleaning" : `/#${item.toLowerCase()}`}
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-[#1A1A1A] hover:text-[#2D5A3D]"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/exterior-cleaning"
                            onClick={() => setMobileOpen(false)}
                            className="text-lg font-medium text-[#1A1A1A] hover:text-[#2D5A3D]"
                        >
                            Exterior Cleaning
                        </Link>
                        <a href="tel:0400000000" className="btn-primary text-center mt-4">
                            Get Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
