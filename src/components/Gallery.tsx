"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function Gallery() {
    const [activeTab, setActiveTab] = useState<"Residential" | "Commercial">("Residential");
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProjects = projects.filter(p => p.category === activeTab);

    const openModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="portfolio" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block">
                            Selected Works
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-white">
                            A Monograph of <br /> Digital Spaces.
                        </h2>
                    </div>

                    <div className="flex gap-4 p-1">
                        {(["Residential", "Commercial"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-10 py-4 text-xs font-sans uppercase tracking-[0.2em] transition-all duration-500 rounded-sm italic ${activeTab === tab
                                    ? "bg-[#D4AF37] text-zinc-950 font-bold shadow-lg shadow-gold/20 hover:bg-[#c4a031]"
                                    : "bg-transparent text-white border border-white hover:bg-white/10"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => openModal(project)}
                                className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 cursor-pointer border border-zinc-800"
                            >
                                <Image
                                    src={project.featuredImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                                    <h3 className="font-serif text-3xl">{project.title}</h3>
                                    <button className="mt-4 text-[10px] uppercase tracking-[0.2em] border-b border-gold self-start pb-1">
                                        View Project
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
