"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <motion.a
                        href="#"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`font-serif text-xl md:text-2xl tracking-tighter ${scrolled ? "text-zinc-900" : "text-white"
                            }`}
                    >
                        Chetan Chauhan<span className="text-gold">.</span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-zinc-600 hover:text-gold" : "text-zinc-300 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden p-2 ${scrolled ? "text-zinc-900" : "text-white"}`}
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-zinc-900 text-white flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            className="absolute top-8 right-8 p-2 text-zinc-400 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className="font-serif text-4xl hover:text-gold transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
