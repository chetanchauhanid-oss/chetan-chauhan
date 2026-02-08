"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function IntroSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
    const xLeft = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
    const xRight = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

    return (
        <section id="about" ref={targetRef} className="relative min-h-screen bg-white py-24 overflow-hidden">
            <motion.div
                style={{ opacity, scale }}
                className="container mx-auto px-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        style={{ x: xLeft }}
                        className="relative aspect-[4/5] bg-zinc-100 overflow-hidden rounded-sm"
                    >
                        <Image
                            src="/profile/profile.png"
                            alt="Chetan Chauhan"
                            fill
                            className="object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </motion.div>

                    <motion.div
                        style={{ x: xRight }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block">
                                Philosophy
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-zinc-900">
                                Curating Spaces That Inspire Living.
                            </h2>
                        </div>

                        <p className="font-sans text-zinc-600 text-lg leading-relaxed max-w-lg">
                            With over 18 years of visionary leadership in interior design, Chetan Chauhan has mastered the art of transforming vast spaces into intimate experiences. From executing 30,000 sq. ft. ultra-luxury villas to designing high-performance corporate headquarters, his work stands at the intersection of functional elegance and timeless artistry. Now expanding from Kutch to Ahmedabad and beyond, Chetan brings a global perspective to every square foot he touches.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                            <div>
                                <span className="block font-serif text-3xl text-zinc-900">18+</span>
                                <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mt-1">Years Experience</span>
                            </div>
                            <div>
                                <span className="block font-serif text-3xl text-zinc-900">100+</span>
                                <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mt-1">Projects Delivered</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
