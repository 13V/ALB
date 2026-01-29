"use client";

import { useState } from "react";

const TESTIMONIALS = [
    {
        quote: "ALB completely transformed our backyard. Professional, punctual, and the result exceeded our expectations. Highly recommend!",
        author: "Sarah M.",
        location: "Adelaide Hills",
    },
    {
        quote: "We've used ALB for regular maintenance for over a year now. Reliable, thorough, and our garden has never looked better.",
        author: "James T.",
        location: "Norwood",
    },
    {
        quote: "From design to completion, the team was fantastic. They listened to what we wanted and delivered exactly that. 5 stars!",
        author: "Michelle R.",
        location: "Glenelg",
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Header */}
                <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] mb-4">
                    Testimonials
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-12">
                    What Our Clients Say
                </h2>

                {/* Quote */}
                <div className="relative">
                    <svg
                        className="w-12 h-12 text-[#C9A227]/20 mx-auto mb-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <blockquote className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8 font-[family-name:var(--font-heading)] italic">
                        &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                    </blockquote>

                    <div>
                        <p className="font-bold text-[#1A1A1A]">{TESTIMONIALS[current].author}</p>
                        <p className="text-[#6B6B6B] text-sm">{TESTIMONIALS[current].location}</p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={prev}
                        className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
                        aria-label="Previous testimonial"
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
                        aria-label="Next testimonial"
                    >
                        →
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-[#C9A227]" : "bg-[#1A1A1A]/20"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
