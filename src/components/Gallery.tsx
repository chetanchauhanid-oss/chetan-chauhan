"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
    {
        title: "Mehta Residence",
        size: "12,000 sq. ft.",
        category: "Residential",
        image: "/projects/Residential Projects/Mehta Residence/Living.png",
    },
    {
        title: "Apex Commercial",
        size: "45,000 sq. ft.",
        category: "Commercial",
        image: "/projects/Commercial Projects/Apex/Reception.png",
    },
    {
        title: "The Villa",
        size: "30,000 sq. ft.",
        category: "Residential",
        image: "/projects/The Villa Image.png",
    },
    {
        title: "Rajhans Cinema",
        size: "20,000 sq. ft.",
        category: "Hospitality",
        image: "/projects/Hospitality Projects/Rajhans Cinema/Lobby C.jpg",
    },
    {
        title: "Gayatri Group",
        size: "15,000 sq. ft.",
        category: "Commercial",
        image: "/projects/Commercial Projects/Gayatri Group/Reception.png",
    },
];

export function Gallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    return (
        <section id="portfolio" ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="flex flex-col mb-auto mt-24 px-12 z-10">
                    <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block mb-4">
                        Selected Works
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-zinc-900">
                        A Monograph of <br /> Digital Spaces.
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-12 mt-12">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative h-[450px] w-[350px] md:h-[550px] md:w-[450px] flex-shrink-0 overflow-hidden bg-zinc-100"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop`;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                                <span className="text-gold font-sans text-[10px] uppercase tracking-widest mb-2">
                                    {project.size}
                                </span>
                                <h3 className="font-serif text-3xl">{project.title}</h3>
                                <button className="mt-4 text-[10px] uppercase tracking-[0.2em] border-b border-gold self-start pb-1">
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
