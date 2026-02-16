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

                        {/* Language Selector - Fixed Layout */}
                        <div className="ml-6 flex items-center relative z-50">
                            <div id="google_translate_element"></div>

                            <style dangerouslySetInnerHTML={{
                                __html: `
                                /* Force the widget to be a simple inline element */
                                #google_translate_element {
                                  display: inline-block !important;
                                  width: auto !important;
                                }
                                
                                /* Style the button box */
                                .goog-te-gadget-simple { 
                                  background-color: transparent !important; 
                                  border: none !important; 
                                  padding: 0 !important;
                                  margin: 0 !important;
                                  font-size: 10px !important;
                                  display: flex !important;
                                  align-items: center !important;
                                  cursor: pointer !important;
                                  white-space: nowrap !important; /* CRITICAL: Prevents text wrapping */
                                }
                                
                                /* Style the text "Select Language" - Adaptive to scroll state */
                                .goog-te-gadget-simple span { 
                                  color: ${scrolled ? '#374151' : '#d1d5db'} !important; 
                                  font-family: inherit !important;
                                  font-weight: 500 !important;
                                  letter-spacing: 0.2em !important; 
                                  text-transform: uppercase !important;
                                  vertical-align: middle !important;
                                  transition: color 0.3s ease;
                                }
                                
                                .goog-te-gadget-simple span:hover {
                                  color: ${scrolled ? '#000000' : '#ffffff'} !important;
                                }
                                
                                /* Fix the Arrow Icon */
                                .goog-te-gadget-simple .goog-te-menu-value {
                                  margin: 0 !important;
                                  display: flex !important;
                                  align-items: center !important;
                                }
                                
                                .goog-te-gadget-simple .goog-te-menu-value span:nth-child(1) {
                                  margin-right: 4px !important; /* Space between text and arrow */
                                }
                                
                                .goog-te-gadget-simple .goog-te-menu-value span:nth-child(3) {
                                  display: none !important; /* Hide weird Google divider */
                                }
                                
                                .goog-te-gadget-simple .goog-te-menu-value img {
                                  display: none !important; /* Hide default arrow image */
                                }
                                
                                /* Hide "Powered by Google" */
                                .goog-te-gadget {
                                  color: transparent !important;
                                  font-size: 0 !important;
                                }
                              `}} />
                            <script type="text/javascript">
                                {`
                                function googleTranslateElementInit() {
                                    new google.translate.TranslateElement(
                                    {
                                        pageLanguage: 'en', 
                                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                                        autoDisplay: false
                                    }, 
                                    'google_translate_element'
                                    );
                                }
                                `}
                            </script>
                            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
                        </div>
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
