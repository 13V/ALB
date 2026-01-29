"use client";

import { useState } from "react";

export function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error("Form error:", error);
        }
    };

    return (
        <section id="contact" className="section-padding bg-[#FAF8F5]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] mb-4">
                            Get In Touch
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                            Ready to Transform <br />Your Property?
                        </h2>
                        <p className="text-[#6B6B6B] text-lg mb-8">
                            Contact us today for a free quote. We service all areas across
                            Adelaide and surrounds.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-bold text-[#1A1A1A]">Phone</p>
                                    <a href="tel:0400000000" className="text-[#2D5A3D] hover:underline">
                                        0400 000 000
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✉️</span>
                                <div>
                                    <p className="font-bold text-[#1A1A1A]">Email</p>
                                    <a href="mailto:info@albproperty.com.au" className="text-[#2D5A3D] hover:underline">
                                        info@albproperty.com.au
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <p className="font-bold text-[#1A1A1A]">Service Area</p>
                                    <p className="text-[#6B6B6B]">Adelaide & Surrounds</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 shadow-lg">
                        {submitted ? (
                            <div className="text-center py-12">
                                <span className="text-5xl mb-4 block">✅</span>
                                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-[#6B6B6B]">
                                    We&apos;ll be in touch within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />

                                <div>
                                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-[#E0E0E0] focus:border-[#2D5A3D] focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 border border-[#E0E0E0] focus:border-[#2D5A3D] focus:outline-none transition-colors"
                                        placeholder="0400 000 000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-[#E0E0E0] focus:border-[#2D5A3D] focus:outline-none transition-colors"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-[#E0E0E0] focus:border-[#2D5A3D] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Get Free Quote
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
