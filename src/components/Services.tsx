"use client";

import { motion } from "framer-motion";
import { Compass, Home, Landmark, PencilRuler, ShieldCheck, Sparkles } from "lucide-react";

const services = [
    {
        title: "Residential Architecture",
        description: "Creating bespoke living spaces that reflect your personality and elevate your lifestyle.",
        icon: Home,
    },
    {
        title: "Commercial Design",
        description: "Designing productive and inspiring environments for modern businesses and retail spaces.",
        icon: Landmark,
    },
    {
        title: "Interior Curation",
        description: "Metric-driven interior design that balances aesthetics with functional excellence.",
        icon: Sparkles,
    },
    {
        title: "Sustainable Planning",
        description: "Eco-conscious architectural solutions that harmonize with the natural environment.",
        icon: Compass,
    },
    {
        title: "Project Management",
        description: "Comprehensive oversight from initial concept to the final handover, ensuring absolute quality.",
        icon: ShieldCheck,
    },
    {
        title: "BIM & 3D Visualization",
        description: "High-fidelity digital models and renderings to visualize your space before construction.",
        icon: PencilRuler,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background radial gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />

            <div className="container mx-auto px-8 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block">
                            Our Expertise
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
                            A Symphony of Form <br className="hidden md:block" /> and Function.
                        </h2>
                    </div>
                    <p className="text-zinc-400 font-sans text-sm tracking-widest uppercase max-w-[200px] leading-relaxed">
                        Crafting the future of luxury living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-500"
                        >
                            <service.icon className="w-8 h-8 text-gold mb-8 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="font-serif text-xl mb-4 text-white group-hover:text-gold transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 font-sans text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Expertise Bar */}
                <div className="mt-20 p-8 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { label: "Design Accuracy", value: 98 },
                            { label: "Project Efficiency", value: 92 },
                            { label: "Material Quality", value: 100 },
                            { label: "Client Satisfaction", value: 95 },
                        ].map((stat, i) => (
                            <div key={stat.label} className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">{stat.label}</span>
                                    <span className="text-gold font-serif">{stat.value}%</span>
                                </div>
                                <div className="h-[1px] w-full bg-zinc-800 relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stat.value}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                                        className="absolute inset-y-0 left-0 bg-gold"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
