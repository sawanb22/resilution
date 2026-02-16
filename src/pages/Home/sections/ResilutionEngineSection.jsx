import React from 'react';

const ResilutionEngineSection = () => {
    const features = [
        {
            title: "Verified Proposals",
            description: "Businesses raise funding through clear and transparent investment proposals."
        },
        {
            title: "Automated Revenue Sharing",
            description: "Smart contracts distribute profits automatically based on agreed terms."
        },
        {
            title: "Real-Time Performance Data",
            description: "Product Data Chains record live business and product performance on-chain."
        }
    ];

    return (
        <section className="bg-black py-20 px-8 md:px-16 text-white relative overflow-hidden">
            <div className="max-w-[1300px] mx-auto">

                {/* Top Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
                    <h2 className="text-4xl md:text-6xl font-light uppercase tracking-wide leading-tight">
                        THE <span className="bg-[#C8FF80] text-black px-2 font-medium">RESILUTION</span><br />
                        ENGINE
                    </h2>
                    <p className="text-gray-300 max-w-lg text-lg font-light text-left md:text-right">
                        Resilution replaces traditional investment barriers with blockchain-powered transparency, automation, and trust.
                    </p>
                </div>

                {/* Main Content Area with Background Image */}
                <div className="relative w-full rounded-[40px] overflow-hidden min-h-[700px] flex items-end">
                    {/* Background Image */}
                    <img
                        src="/homepage_assets/engine_bg.jpg"
                        alt="engine_bg.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Glassmorphism Content Box */}
                    <div className="relative z-10 w-full p-4 md:p-10 lg:p-14">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20">

                            {/* Left Side: CTA */}
                            <div className="flex-1 flex flex-col justify-center items-start">
                                <h3 className="text-3xl md:text-5xl font-normal uppercase mb-8 leading-tight tracking-wide">
                                    A SMARTER WAY TO <br /> INVEST AND GROW
                                </h3>
                                <p className="text-gray-200 text-lg mb-10 font-light leading-relaxed max-w-xl">
                                    Resilution connects businesses and investors through verified proposals, real-time performance tracking, and automated revenue sharing - all powered by blockchain technology.
                                </p>
                                <button className="bg-[#C8FF80] text-black px-8 py-4 font-bold rounded-sm hover:bg-[#b0e660] transition-colors uppercase tracking-wide">
                                    Explore the Platform
                                </button>
                            </div>

                            {/* Right Side: Feature Cards */}
                            <div className="flex-1 flex flex-col gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-[#5a4d3c]/40 border border-[#8a7f6b]/50 backdrop-blur-sm p-6 rounded-xl flex items-start gap-5 hover:bg-[#5a4d3c]/60 transition-colors">
                                        {/* Checkmark Icon */}
                                        <div className="bg-[#C8FF80] rounded-sm w-8 h-8 flex-shrink-0 flex justify-center items-center mt-1">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[#e0dacc] text-xl font-normal mb-2 tracking-wide">{feature.title}</h4>
                                            <p className="text-gray-300 text-sm font-light leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ResilutionEngineSection;
