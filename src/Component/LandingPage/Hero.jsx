import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-black">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-5xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                    <span className="text-sm text-gray-300 font-medium">Available for new projects</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-macro text-white leading-tight tracking-tight mb-8">
                    WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-white">DIGITAL</span> <br />
                    EXPERIENCES
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                    We transform ideas into exceptional digital products. Specializing in branding, web design, and development for ambitious companies.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-brand-neon text-black font-bold rounded-full hover:bg-[#b0ff4d] transition-all transform hover:scale-105 flex items-center gap-2">
                        Start a Project
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm group">
                        <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                        </span>
                        View Showreel
                    </button>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-50">
                <div className="flex gap-12 animate-marquee whitespace-nowrap text-white/20 font-macro text-4xl">
                    {/* Simple marquee placeholder */}
                    <span>DESIGN • DEVELOPMENT • BRANDING • STRATEGY • </span>
                    <span>DESIGN • DEVELOPMENT • BRANDING • STRATEGY • </span>
                    <span>DESIGN • DEVELOPMENT • BRANDING • STRATEGY • </span>
                </div>
            </div>
        </section>
    );
};
