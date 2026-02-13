"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
    {
        project: "3 BHK Premium Duplex",
        client: "Rajesh Patel",
        text: "When we bought our duplex, I was very confused about how to make it look 'premium' without making it look like a hotel lobby. Chetanbhai didn’t just design a house; he gave us a home. His 18 years of experience really shows in the way he handles space planning. He knew exactly where we needed storage and where we needed open space. The finishing is top-notch, and even after a year, everything looks brand new. He is a thorough gentleman and a true professional."
    },
    {
        project: "3 BHK Duplex (Creative & Nature-inspired)",
        client: "Kuldeep Parmar",
        text: "My brief to Chetan was very difficult—I wanted a modern home but with the soul of nature. I didn't want typical glossy interiors. I am amazed at how he visualized my thoughts. He brought in so much natural light and used earthy textures that walking into my home feels like a retreat now. Every corner has a creative touch that starts a conversation when guests come over. If you want a designer who actually listens rather than just imposing his own ideas, Chetan is the man."
    },
    {
        project: "5 BHK High-End Bungalow",
        client: "Ravi M.",
        text: "Handling a large 5 BHK bungalow is not easy because every family member has a different requirement. My parents wanted something traditional, my kids wanted something funky, and I wanted pure luxury. Chetan managed to balance everyone’s wish-list perfectly. The grandeur of the bungalow is intact, yet it feels warm and cozy. He respected our budget and delivered the project on time, which is rare in this industry. Highly recommended for big luxury projects."
    },
    {
        project: "4,500 Sq. Ft. Farmhouse",
        client: "Anand Parmar",
        text: "For our farmhouse, we didn't want the usual city-apartment look. We wanted a place where we could disconnect and relax. Chetan created a vibe that is just magical. The way he utilized the 4,500 sq. ft. area is brilliant—it’s spacious for our big family gatherings but intimate enough when it's just us. It has become our pride in Kutch. His team works very efficiently, and the material quality suggests this farmhouse will last for generations."
    },
    {
        project: "840 Sq. Ft. Shipping Company Office",
        client: "Jeetu L.",
        text: "In the shipping business, efficiency is everything. We had a limited space of 840 sq. ft., and we needed to fit a lot of staff and files without it looking cluttered. Chetan Chauhan turned this challenge into an opportunity. He designed the office in such a smart way that it actually looks much bigger than it is. The layout is professional, the lighting is perfect for working long hours, and our clients are always impressed when they visit. A fantastic job done!"
    },
    {
        project: "320 Sq. Ft. Boutique Office",
        client: "Neha Agrawal",
        text: "I was honestly worried that 320 sq. ft. would feel like a box or a cubicle. But Chetan completely changed my perspective on small spaces. He designed my boutique office with such elegance that every inch is utilized beautifully. It’s chic, functional, and has so much character. I love coming to work every day just because of the ambience he created. He proved that you don't need a massive area to make a massive impact. Thank you, Chetan Sir!"
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block">
                            Client Stories
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-white">
                            Kind Words from <br /> our Clients.
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 border border-zinc-800 flex items-center justify-center rounded-full text-white hover:bg-gold hover:border-gold transition-all duration-300 group"
                        >
                            <ChevronLeft size={20} className="group-hover:text-zinc-950" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 border border-zinc-800 flex items-center justify-center rounded-full text-white hover:bg-gold hover:border-gold transition-all duration-300 group"
                        >
                            <ChevronRight size={20} className="group-hover:text-zinc-950" />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[400px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-zinc-900 p-12 md:p-16 border border-zinc-800 relative shadow-2xl">
                                    <Quote className="absolute top-10 right-10 text-gold/10" size={100} />

                                    <div className="space-y-8 relative z-10">
                                        <p className="text-zinc-300 font-sans text-xl md:text-2xl leading-relaxed italic font-light">
                                            "{testimonials[currentIndex].text}"
                                        </p>

                                        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                            <div>
                                                <h4 className="font-serif text-2xl text-white mb-1">
                                                    {testimonials[currentIndex].client}
                                                </h4>
                                                <span className="text-gold font-sans text-xs uppercase tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                                                    {testimonials[currentIndex].project}
                                                </span>
                                            </div>

                                            <div className="flex gap-2">
                                                {testimonials.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrentIndex(i)}
                                                        className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === i ? "bg-gold w-8" : "bg-zinc-800"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
