"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block">
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
                                    <a href="mailto:chetan.chauhan.id@gmail.com" className="text-zinc-900 font-serif text-xl hover:text-gold transition-colors">
                                        chetan.chauhan.id@gmail.com
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">Inquiries</span>
                                    <a href="tel:+919558131402" className="text-zinc-900 font-serif text-xl hover:text-gold transition-colors">
                                        (+91) 95581 31402
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-100 shadow-sm relative overflow-hidden">
                            <form
                                name="inquiry"
                                method="POST"
                                action="/success.html"
                                data-netlify="true"
                                className="space-y-6"
                            >
                                {/* Essential Hidden Field */}
                                <input type="hidden" name="form-name" value="inquiry" />

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-gold transition-colors font-sans text-zinc-900"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-gold transition-colors font-sans text-zinc-900"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-gold transition-colors font-sans text-zinc-900"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Project Type</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            className="appearance-none w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-gold transition-colors font-sans rounded-none"
                                        >
                                            <option value="" disabled selected>Select project type</option>
                                            <option value="Residential">Residential Design</option>
                                            <option value="Commercial">Commercial/Office</option>
                                            <option value="Hospitality">Hospitality</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-zinc-400">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-gold transition-colors font-sans text-zinc-900 resize-none"
                                        placeholder="Tell us about your project"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-5 bg-zinc-900 text-white font-sans text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-gold transition-colors duration-500 shadow-lg shadow-zinc-200"
                                >
                                    Send Inquiry <Send size={14} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
