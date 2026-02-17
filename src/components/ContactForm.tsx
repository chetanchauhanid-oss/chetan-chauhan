"use client";

import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // DARK MODE INPUT STYLE
    // We let the text be White (default), but we make the background transparent
    // and the borders light grey so they show up on the black card.
    const inputStyle = "w-full border-b border-zinc-600 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors bg-transparent rounded-none relative z-10";

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left Side: Text (Keeps White Background) */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block text-yellow-600">
                                    Connect
                                </span>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-900">
                                    Let's Create <br /> Something <br /> Extraordinary.
                                </h2>
                            </div>

                            <p className="text-zinc-500 font-sans text-lg max-w-sm">
                                Whether it's a luxury residence or a global commercial project, our team is ready to bring your vision to life.
                            </p>

                            <div className="space-y-4 pt-8">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">Email</span>
                                    <a href="mailto:chetan.chauhan.id@gmail.com" className="text-zinc-900 font-serif text-xl hover:text-yellow-600 transition-colors">
                                        chetan.chauhan.id@gmail.com
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">Inquiries</span>
                                    <a href="tel:+919558131402" className="text-zinc-900 font-serif text-xl hover:text-yellow-600 transition-colors">
                                        (+91) 95581 31402
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Form (NOW DARK THEME) */}
                        <div className="bg-zinc-900 p-8 md:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
                            <form
                                name="inquiry"
                                method="POST"
                                action="/success.html"
                                data-netlify="true"
                                className="space-y-6"
                            >
                                <input type="hidden" name="form-name" value="inquiry" />

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputStyle}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputStyle}
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputStyle}
                                    />
                                </div>

                                {/* Dropdown Service */}
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Project Type</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={inputStyle}
                                            style={{ backgroundColor: '#18181b' }} // Dark background for dropdown options
                                        >
                                            <option value="" disabled>Select a project type...</option>
                                            <option value="Residential">Residential Design</option>
                                            <option value="Commercial">Commercial/Office</option>
                                            <option value="Hospitality">Hospitality</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your project"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={inputStyle}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-black py-4 uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all duration-300 font-bold"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
