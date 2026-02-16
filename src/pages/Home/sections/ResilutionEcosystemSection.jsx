import React from 'react';

const ResilutionEcosystemSection = () => {
    return (
        <section className="bg-black py-24 px-8 md:px-16 text-white relative overflow-hidden">
            <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-10 w-full">

                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-normal uppercase text-[#C8FF80] mb-6 text-center tracking-wide">
                    The Resilution Ecosystem
                </h2>
                <p className="text-gray-400 text-center max-w-3xl mb-20 text-sm md:text-base font-light">
                    Resilution is more than an investment platform; it's a growing ecosystem of blockchain-powered tools designed to support businesses, investors, and communities.
                </p>

                {/* Diagram Container */}
                <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex justify-center items-end mt-10">

                    {/* Central Silver R Image */}
                    <div className="relative z-0 w-80 md:w-[500px] h-full flex items-end justify-center">
                        <img
                            src="/homepage_assets/ecosystem_r_silver.svg"
                            alt="ecosystem_r_silver.svg"
                            className="w-full h-auto object-contain max-h-[100%]"
                        />
                    </div>

                    {/* Glowing Backdrop for R */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

                    {/* Card 1: Eden AI (Top Center) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-10 border border-gray-700 bg-black/40 backdrop-blur-xl p-8 rounded-2xl hover:border-[#C8FF80]/50 transition-colors shadow-2xl">
                        <div className="flex gap-5 items-start">
                            <div className="w-12 h-12 shrink-0 bg-[#1a1a1a] rounded-full p-2.5 flex items-center justify-center border border-gray-800">
                                <img src="/homepage_assets/icon_eden.svg" alt="Eden AI" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-medium mb-3">Eden AI Assistant</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    An intelligent assistant that helps users navigate the platform, understand proposals, and access real-time insights.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: ResilPay (Left) */}
                    <div className="absolute top-[35%] left-4 md:left-0 w-full max-w-sm z-10 border border-gray-700 bg-black/40 backdrop-blur-xl p-8 rounded-2xl hover:border-[#C8FF80]/50 transition-colors hidden md:block shadow-2xl">
                        <div className="flex gap-5 items-start">
                            <div className="w-12 h-12 shrink-0 bg-[#1a1a1a] rounded-full p-2.5 flex items-center justify-center border border-gray-800">
                                <img src="/homepage_assets/icon_pay.svg" alt="ResilPay" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-medium mb-3">ResilPay</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    A secure payment and transfer system for seamless transactions within the ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: ResilMall (Right) */}
                    <div className="absolute top-[35%] right-4 md:right-0 w-full max-w-sm z-10 border border-gray-700 bg-black/40 backdrop-blur-xl p-8 rounded-2xl hover:border-[#C8FF80]/50 transition-colors hidden md:block shadow-2xl">
                        <div className="flex gap-5 items-start">
                            <div className="w-12 h-12 shrink-0 bg-[#1a1a1a] rounded-full p-2.5 flex items-center justify-center border border-gray-800">
                                <img src="/homepage_assets/icon_mall.svg" alt="ResilMall" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-medium mb-3">ResilMall</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    A decentralized marketplace connecting businesses directly with consumers.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile stacking for Cards (Visible only on small screens) */}
                <div className="grid grid-cols-1 gap-4 mt-8 md:hidden w-full">
                    {/* Repeat Card 2 Content for Mobile */}
                    <div className="border border-gray-700 bg-white/5 p-6 rounded-xl">
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 shrink-0">
                                <img src="/homepage_assets/icon_pay.svg" alt="ResilPay" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-normal mb-2">ResilPay</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    A secure payment and transfer system for seamless transactions within the ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Repeat Card 3 Content for Mobile */}
                    <div className="border border-gray-700 bg-white/5 p-6 rounded-xl">
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 shrink-0">
                                <img src="/homepage_assets/icon_mall.svg" alt="ResilMall" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-normal mb-2">ResilMall</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    A decentralized marketplace connecting businesses directly with consumers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResilutionEcosystemSection;
