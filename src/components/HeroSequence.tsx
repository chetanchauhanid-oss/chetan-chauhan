"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function HeroSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalFrames = 192;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `/hero/Frame- (${i}).jpg`;
            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useEffect(() => {
        const render = () => {
            if (canvasRef.current && images.length > 0) {
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) {
                    const index = Math.floor(frameIndex.get());
                    const image = images[index - 1];
                    if (image && image.complete) {
                        const canvasWidth = canvasRef.current.width;
                        const canvasHeight = canvasRef.current.height;
                        const imgWidth = image.width;
                        const imgHeight = image.height;
                        const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
                        const x = (canvasWidth - imgWidth * ratio) / 2;
                        const y = (canvasHeight - imgHeight * ratio) / 2;

                        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                        ctx.drawImage(image, x, y, imgWidth * ratio, imgHeight * ratio);
                    }
                }
            }
        };

        const unsubscribe = frameIndex.onChange(render);

        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                render();
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full"
                />

               {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="space-y-6 px-6 flex flex-col items-center"
                    >
                        {/* Name has a subtle invisible shadow to pop against the bright marble, but no dark box */}
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white drop-shadow-2xl">
                            CHETAN<br />CHAUHAN
                        </h1>
                        
                        {/* The sleek, isolated glassmorphism pill purely for the subtext */}
                        <div className="inline-block px-8 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
                            <p className="font-sans text-sm md:text-base tracking-[0.2em] text-yellow-600 uppercase">
                                Architectural Excellence • Interior Design
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Loading Indicator */}
                {imagesLoaded < totalFrames && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="text-white font-sans text-sm tracking-widest uppercase">
                            Loading Experience {Math.round((imagesLoaded / totalFrames) * 100)}%
                        </div>
                    </div>
                )}

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-yellow-600 to-transparent animate-pulse" />
                </div>
            </div>
        </div>
    );
}
