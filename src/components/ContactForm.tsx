"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault(); // Stop the redirect!
        setSubmitting(true);
        
        const form = e.target;
        const data = new FormData(form);

        try {
            // Replace with your INQUIRY FORM ID
            const response = await fetch("https://formspree.io/f/mojnwzgr", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSucceeded(true);
                setFormData({ name: "", email: "", phone: "", service: "", message: "" }); // Clear form
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setSubmitting(false);
    };

    // LUXURY GOLD STYLE
    const inputStyle = "w-full border-b border-yellow-600 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors bg-transparent rounded-none relative z-10";

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left Side: Text */}
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
                                    <a href="mailto:contact.kias.in@gmail.com" className="text-zinc-900 font-serif text-xl hover:text-yellow-600 transition-colors">
                                        contact.kias.in@gmail.com
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

                        {/* Right Side: The Form */}
                        <div className="bg-black p-8 md:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
                            
                            {succeeded ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                                    <div className="w-16 h-16 rounded-full border-2 border-yellow-600 flex items-center justify-center text-yellow-600">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-white">Inquiry Received</h3>
                                    <p className="text-zinc-400 font-sans text-sm max-w-xs">
                                        Thank you for contacting us. Our team will review your project and get back to you shortly.
                                    </p>
                                    <button 
                                        onClick={() => setSucceeded(false)}
                                        className="mt-6 text-xs uppercase tracking-widest text-yellow-600 hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
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
                                            disabled={submitting}
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
                                            disabled={submitting}
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
                                            disabled={submitting}
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
                                                style={{ backgroundColor: '#000000', color: 'white' }}
                                                disabled={submitting}
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
                                            disabled={submitting}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full bg-yellow-600 text-black py-4 uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? "Sending..." : "Send Inquiry"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
