import React from 'react';
import Section from '../../../Component/Common/Section';
import Button from '../../../Component/Common/Button';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center pt-20 md:pt-32">
            {/* Background Waves */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/homepage_assets/hero_bg_waves.svg"
                    alt="Background Waves"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="relative z-10 w-full max-w-[1300px] px-8 md:px-16 flex flex-col items-center">

                {/* Top Headlines */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-wide text-center mb-2">
                    <span className="text-[var(--brand-neon)] drop-shadow-[0_0_10px_rgba(200,255,128,0.3)]">Financial Freedom</span>
                </h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-light uppercase tracking-wider text-center mb-12 text-gray-200">
                    Through Transparent Blockchain Investment
                </h2>

                {/* Top CTA */}
                <Button variant="secondary" className="mb-12 md:mb-0 group">
                    <span className="text-gray-200 text-lg mr-2">Get Started</span>
                    <svg className="w-4 h-4 text-gray-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Button>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 md:mt-12 items-center gap-8">

                    {/* Left Column: Text + Learn More */}
                    <div className="flex flex-col items-start justify-center order-2 md:order-1">
                        <div className="flex gap-2 mb-6">
                            <span className="w-8 h-1 bg-[var(--brand-neon)] rounded-full shadow-[0_0_8px_var(--brand-neon)]"></span>
                            <span className="w-2 h-1 bg-[var(--brand-neon)] rounded-full shadow-[0_0_8px_var(--brand-neon)]"></span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mb-8 text-left">
                            Resilution is a blockchain-powered investment platform that connects businesses and investors through real-time transparency, verified funding proposals, and automated revenue sharing.
                        </p>
                        <Button variant="primary">
                            Learn More
                        </Button>
                    </div>

                    {/* Center Column: Big R */}
                    <div className="flex justify-center items-center order-1 md:order-2 h-[300px] md:h-[500px] relative">
                        <img
                            src="/homepage_assets/hero_r_3d.svg"
                            alt="Resilution 3D Logo"
                            className="w-auto h-full max-h-[100%] object-contain drop-shadow-[0_0_30px_rgba(200,255,128,0.2)] animate-float-slow"
                        />
                    </div>

                    {/* Right Column: Cube + Card */}
                    <div className="flex flex-col items-center md:items-end justify-center order-3 relative">
                        {/* Floating Cube */}
                        <div className="mb-[-30px] z-20 relative mr-0 md:mr-10">
                            <img
                                src="/homepage_assets/hero_cube_3d.svg"
                                alt="3D Cube"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse-slow drop-shadow-[0_0_15px_rgba(200,255,128,0.4)]"
                            />
                        </div>

                        {/* Info Card */}
                        <div className="border border-[var(--brand-neon)] bg-black/60 backdrop-blur-md p-6 rounded-2xl w-full max-w-xs relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <h3 className="text-white font-bold text-lg mb-2">Blockchain Transparency</h3>
                            <div className="w-12 h-1 bg-[var(--brand-neon)] mb-4"></div>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                All transactions and performance data are recorded in real time on the blockchain for complete trust.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;
