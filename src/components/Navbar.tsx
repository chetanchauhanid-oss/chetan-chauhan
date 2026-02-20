"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react"; // Added Globe icon

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

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

    // 15 Premium Regional & International Languages
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'Hindi (हिंदी)' },
        { code: 'gu', name: 'Gujarati (ગુજરાતી)' },
        { code: 'mr', name: 'Marathi (मराठी)' },
        { code: 'ta', name: 'Tamil (தமிழ்)' },
        { code: 'te', name: 'Telugu (తెలుగు)' },
        { code: 'bn', name: 'Bengali (বাংলা)' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'it', name: 'Italian' },
        { code: 'ar', name: 'Arabic' },
        { code: 'zh-CN', name: 'Chinese' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
    ];

    // The "Remote Control" function
    const handleLanguageChange = (langCode: string) => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
            selectElement.value = langCode;
            selectElement.dispatchEvent(new Event('change')); // Tells Google to translate silently
        }
        setIsLangOpen(false); // Close the menu
    };

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
                        Chetan Chauhan<span className="text-gold text-yellow-600">.</span>
                    </motion.a>

                    {/* HIDDEN GOOGLE TRANSLATE ENGINE */}
                    <div id="google_translate_element" className="hidden" style={{ display: 'none' }}></div>
                    <script type="text/javascript" dangerouslySetInnerHTML={{
                        __html: `
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({
                                pageLanguage: 'en',
                                includedLanguages: 'en,hi,gu,mr,ta,te,bn,es,fr,de,it,ar,zh-CN,ja,ko',
                                autoDisplay: false
                            }, 'google_translate_element');
                        }
                        `
                    }} />
                    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-zinc-600 hover:text-yellow-600" : "text-zinc-300 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* LUXURY GLOBE LANGUAGE SELECTOR */}
                        <div className="relative ml-4">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-zinc-600 hover:text-yellow-600" : "text-zinc-300 hover:text-white"
                                    }`}
                            >
                                <Globe size={18} />
                                <span>Language</span>
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-4 w-56 bg-zinc-950 border border-zinc-800 shadow-2xl rounded-none overflow-hidden z-50"
                                    >
                                        <div className="max-h-80 overflow-y-auto">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => handleLanguageChange(lang.code)}
                                                    className="w-full text-left px-6 py-3 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border-b border-zinc-900 last:border-none uppercase tracking-widest"
                                                >
                                                    {lang.name}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Menu & Globe */}
                    <div className="md:hidden flex items-center gap-6">
                        {/* Mobile Globe */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`${scrolled ? "text-zinc-900" : "text-white"}`}
                            >
                                <Globe size={22} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-4 w-48 bg-zinc-950 border border-zinc-800 shadow-2xl rounded-none overflow-hidden z-50"
                                    >
                                        <div className="max-h-64 overflow-y-auto">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => { handleLanguageChange(lang.code); setIsOpen(false); }}
                                                    className="w-full text-left px-5 py-3 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border-b border-zinc-900 last:border-none uppercase tracking-widest"
                                                >
                                                    {lang.name}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Hamburger */}
                        <button
                            className={`p-2 ${scrolled ? "text-zinc-900" : "text-white"}`}
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
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
                        className="fixed inset-0 z-[60] bg-zinc-950 text-white flex flex-col items-center justify-center space-y-8"
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
                                className="font-serif text-4xl hover:text-yellow-600 transition-colors"
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
