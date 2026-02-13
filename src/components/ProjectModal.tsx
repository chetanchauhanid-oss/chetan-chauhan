"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface Project {
    id: string;
    title: string;
    size: string;
    category: string;
    description: string;
    featuredImage: string;
    images: string[];
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setLightboxIndex(null);
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const nextImage = useCallback(() => {
        if (lightboxIndex !== null && project) {
            setLightboxIndex((lightboxIndex + 1) % project.images.length);
        }
    }, [lightboxIndex, project]);

    const prevImage = useCallback(() => {
        if (lightboxIndex !== null && project) {
            setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length);
        }
    }, [lightboxIndex, project]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex !== null) {
                if (e.key === "ArrowRight") nextImage();
                if (e.key === "ArrowLeft") prevImage();
                if (e.key === "Escape") setLightboxIndex(null);
            } else if (isOpen && e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, isOpen, onClose, nextImage, prevImage]);

    if (!project) return null;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white overflow-hidden rounded-sm shadow-2xl flex flex-col"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 p-2 bg-zinc-900 text-white rounded-full hover:bg-gold transition-colors duration-300"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                    <div className="lg:col-span-1 space-y-8">
                                        <div className="space-y-4">
                                            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block">
                                                {project.category}
                                            </span>
                                            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-900">
                                                {project.title}
                                            </h2>
                                        </div>

                                        <p className="text-zinc-500 font-sans text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.images.map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="relative aspect-square overflow-hidden bg-zinc-100 group cursor-zoom-in"
                                                    onClick={() => setLightboxIndex(i)}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${project.title} - Image ${i + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.src = `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop`;
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="text-white text-[10px] uppercase tracking-widest font-sans bg-zinc-900/50 px-3 py-1 backdrop-blur-sm">view larger</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #18181b; /* zinc-900 */
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #D4AF37; /* Gold */
                  border-radius: 0px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #c4a031;
                }
              `}</style>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {lightboxIndex !== null && project && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black flex items-center justify-center"
                    >
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-8 right-8 z-[120] text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[120] text-white/50 hover:text-white transition-colors bg-black/20 p-4 rounded-full"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[120] text-white/50 hover:text-white transition-colors bg-black/20 p-4 rounded-full"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full items-center justify-center flex"
                            >
                                <Image
                                    src={project.images[lightboxIndex]}
                                    alt={`${project.title} full view`}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 font-sans text-xs tracking-widest uppercase bg-zinc-900/50 px-4 py-2 backdrop-blur-sm rounded-full">
                            {lightboxIndex + 1} / {project.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
