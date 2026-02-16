import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Globe, Zap, Shield } from 'lucide-react';

const features = [
    {
        icon: <Palette className="w-6 h-6" />,
        title: "UI/UX Design",
        description: "Crafting intuitive and visually stunning interfaces that users love.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Development",
        description: " robust and scalable code.",
        colSpan: "col-span-1",
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Performance",
        description: "Optimized for speed and search engines.",
        colSpan: "col-span-1",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Reach",
        description: "Connecting you with audiences worldwide.",
        colSpan: "col-span-1 md:col-span-2",
    },
];

export const Features = () => {
    return (
        <section className="py-20 bg-surface-card text-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-macro mb-6">OUR <span className="text-brand-neon">EXPERTISE</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We bring a wealth of experience across various digital disciplines to help your business grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors ${feature.colSpan}`}
                        >
                            <div className="w-12 h-12 rounded-full bg-brand-neon/10 flex items-center justify-center text-brand-neon mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
