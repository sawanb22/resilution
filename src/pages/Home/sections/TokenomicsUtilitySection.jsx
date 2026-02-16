import React from 'react';

const TokenomicsUtilitySection = () => {
    return (
        <section className="bg-black text-white relative overflow-hidden" style={{ minHeight: '1000px', paddingTop: '80px', paddingBottom: '120px' }}>

            {/* Green wave pattern at bottom */}
            <div
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{ height: '200px' }}
            >
                <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                    {[...Array(12)].map((_, i) => (
                        <path
                            key={i}
                            d={`M0 ${200 - i * 8} Q 360 ${160 - i * 10}, 720 ${180 - i * 8} T 1440 ${200 - i * 8}`}
                            stroke="#C8FF80"
                            strokeWidth="1"
                            strokeOpacity={0.15 + i * 0.03}
                            fill="none"
                        />
                    ))}
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 md:px-16">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h2
                        className="text-[#C8FF80] uppercase"
                        style={{ fontSize: '36px', lineHeight: '36px', fontWeight: 500 }}
                    >
                        Tokenomics & Utility
                    </h2>
                    <button
                        className="border border-[#C8FF80] text-[#C8FF80] px-8 py-3 font-normal hover:bg-[#C8FF80] hover:text-black transition-colors mt-4 md:mt-0"
                        style={{ fontSize: '16px' }}
                    >
                        Learn More
                    </button>
                </div>

                {/* Subtitle */}
                <p
                    className="text-white font-normal mb-16"
                    style={{ fontSize: '14px', lineHeight: '20px', maxWidth: '500px' }}
                >
                    The $RESIL token is designed to drive platform growth, reward participation, and ensure long-term ecosystem sustainability.
                </p>

                {/* Cards + Central Coin Grid */}
                <div className="relative" style={{ minHeight: '600px' }}>

                    {/* Central 3D Coin - Absolute centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={{ width: '400px', height: '400px' }}>
                        <img
                            src="/homepage_assets/tokenomics_coin.svg"
                            alt="Resilution Token Coin"
                            className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(200,255,128,0.15)]"
                        />
                    </div>

                    {/* 2x2 Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[420px] gap-y-12 relative z-10">

                        {/* Top Left: Access & Tiers */}
                        <div
                            className="bg-[#0a0f05] border border-[#2a3a1a] rounded-[18px] p-8 hover:border-[#C8FF80]/50 transition-colors"
                            style={{ minHeight: '220px' }}
                        >
                            <h3
                                className="text-[#C8FF80] uppercase mb-4"
                                style={{ fontSize: '24px', lineHeight: '24px', fontWeight: 500 }}
                            >
                                Access & Tiers
                            </h3>
                            <p
                                className="text-white font-normal"
                                style={{ fontSize: '14px', lineHeight: '20px' }}
                            >
                                $RESIL tokens unlock premium features, higher investment limits, and advanced platform tools through tier-based access.
                            </p>
                        </div>

                        {/* Top Right: Rewards System */}
                        <div
                            className="bg-[#0a0f05] border border-[#2a3a1a] rounded-[18px] p-8 hover:border-[#C8FF80]/50 transition-colors"
                            style={{ minHeight: '220px' }}
                        >
                            <h3
                                className="text-[#C8FF80] uppercase mb-4"
                                style={{ fontSize: '24px', lineHeight: '24px', fontWeight: 500 }}
                            >
                                Rewards System
                            </h3>
                            <ul className="text-white font-normal list-disc pl-5 space-y-2" style={{ fontSize: '14px', lineHeight: '20px' }}>
                                <li>Users earn $RESIL through investments, platform participation, and ecosystem contributions.</li>
                                <li>Automated smart contracts distribute rewards transparently.</li>
                            </ul>
                        </div>

                        {/* Bottom Left: Staking */}
                        <div
                            className="bg-[#0a0f05] border border-[#2a3a1a] rounded-[18px] p-8 hover:border-[#C8FF80]/50 transition-colors"
                            style={{ minHeight: '220px' }}
                        >
                            <h3
                                className="text-[#C8FF80] uppercase mb-4"
                                style={{ fontSize: '24px', lineHeight: '24px', fontWeight: 500 }}
                            >
                                Staking
                            </h3>
                            <p className="text-white font-semibold mb-3" style={{ fontSize: '14px', lineHeight: '20px' }}>
                                Stake $RESIL tokens to receive:
                            </p>
                            <ul className="text-white font-normal list-disc pl-5 space-y-2" style={{ fontSize: '14px', lineHeight: '20px' }}>
                                <li>Reduced platform fees</li>
                                <li>Priority access to deals</li>
                                <li>Additional rewards</li>
                            </ul>
                        </div>

                        {/* Bottom Right: Governance */}
                        <div
                            className="bg-[#0a0f05] border border-[#2a3a1a] rounded-[18px] p-8 hover:border-[#C8FF80]/50 transition-colors"
                            style={{ minHeight: '220px' }}
                        >
                            <h3
                                className="text-[#C8FF80] uppercase mb-4"
                                style={{ fontSize: '24px', lineHeight: '24px', fontWeight: 500 }}
                            >
                                Governance
                            </h3>
                            <p
                                className="text-white font-normal"
                                style={{ fontSize: '14px', lineHeight: '20px' }}
                            >
                                Token holders can vote on platform upgrades, ecosystem decisions, and future developments.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default TokenomicsUtilitySection;
