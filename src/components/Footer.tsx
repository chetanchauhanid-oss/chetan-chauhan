"use client";

import { Instagram, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl tracking-tighter">
                            Chetan Chauhan<span className="text-gold">.</span>
                        </h3>
                        <p className="font-sans text-sm text-zinc-500 leading-relaxed max-w-xs transition-colors hover:text-zinc-300">
                            Chetan Chauhan Interiors is a boutique architectural firm specializing in luxury residential and commercial design. We create spaces that are as functional as they are beautiful.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/chetan-chauhan-180214kc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://wa.me/919558131402"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold transition-all duration-300"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">Quick Links</h4>
                        <ul className="space-y-4 font-sans text-sm text-zinc-400">
                            {["About Us", "Our Services", "Project Gallery", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-white transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">Contact</h4>
                        <div className="font-sans text-sm text-zinc-400 leading-relaxed space-y-4">
                            <p>
                                <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Email</span>
                                <a href="mailto:chetan.chauhan.id@gmail.com" className="hover:text-white transition-colors">chetan.chauhan.id@gmail.com</a>
                            </p>
                            <p>
                                <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Phone</span>
                                <a href="tel:+919558131402" className="hover:text-white transition-colors">(+91) 95581 31402</a>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">Newsletter</h4>
                        <p className="font-sans text-sm text-zinc-400">
                            Subscribe to stay updated on our latest projects and design insights.
                        </p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                            />
                            <button className="text-[10px] uppercase tracking-widest text-gold text-left hover:text-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-zinc-600">
                        © {new Date().getFullYear()} Chetan Chauhan Interiors. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 font-sans text-[10px] uppercase tracking-widest text-zinc-400 hover:text-gold transition-colors"
                    >
                        Back to top
                        <span className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-gold group-hover:-translate-y-1 transition-all duration-300">
                            <ArrowUp size={14} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
