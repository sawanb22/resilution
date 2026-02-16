import React from 'react';

const CreditsTokenSystemSection = () => {
    return (
        <section
            className="text-white relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #050a02 30%, #080d04 50%, #050a02 70%, #000000 100%)',
                paddingTop: '120px',
                paddingBottom: '100px',
            }}
        >

            {/* Subtle green ambient glow behind the cards area */}
            <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    width: '800px',
                    height: '400px',
                    top: '200px',
                    background: 'radial-gradient(ellipse, rgba(200, 255, 128, 0.06) 0%, transparent 70%)',
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 w-full">

                {/* Header */}
                <h2
                    className="text-center uppercase text-[#C8FF80] mx-auto px-6"
                    style={{
                        fontSize: '38px',
                        lineHeight: '42px',
                        fontWeight: 500,
                        marginBottom: '24px',
                        letterSpacing: '4px',
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Credits & Token System
                </h2>
                <p
                    className="text-center mx-auto font-normal px-6"
                    style={{
                        fontSize: '15px',
                        lineHeight: '22px',
                        maxWidth: '520px',
                        marginBottom: '90px',
                        color: 'rgba(255,255,255,0.6)',
                    }}
                >
                    Resilution combines simplicity with blockchain power through a dual economic model.
                </p>

                {/* Cards Area - Relative container for absolute center image */}
                <div className="relative w-full max-w-[1060px] mx-auto px-6 lg:px-0">

                    {/* Center 3D Token Image - Absolutely positioned, overlapping first layer */}
                    <div
                        className="hidden lg:block absolute left-1/2 -translate-x-1/2 pointer-events-none"
                        style={{
                            width: '420px',
                            height: '540px',
                            top: '-70px',
                            zIndex: 30,
                        }}
                    >
                        <img
                            src="/homepage_assets/token_box_3d.svg"
                            alt="3D Token Box"
                            className="w-full h-full object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 60px rgba(0, 0, 0, 0.85))',
                            }}
                        />
                        {/* Bottom gradient fade */}
                        <div
                            className="absolute bottom-0 left-0 right-0 pointer-events-none"
                            style={{
                                height: '180px',
                                background: 'linear-gradient(0deg, #000000 5%, rgba(0, 0, 0, 0.6) 40%, transparent 100%)',
                            }}
                        ></div>
                    </div>

                    {/* Two Cards - Flex row with gap for center image */}
                    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-[280px]">

                        {/* Left Card: Credits */}
                        <div className="relative w-full lg:w-auto" style={{ maxWidth: '340px', margin: '0 auto' }}>
                            {/* Gradient border wrapper */}
                            <div
                                className="absolute inset-0 rounded-[16px] pointer-events-none"
                                style={{
                                    padding: '1px',
                                    background: 'linear-gradient(135deg, rgba(200,255,128,0.5) 0%, rgba(200,255,128,0.15) 20%, rgba(200,255,128,0.03) 50%, rgba(200,255,128,0.15) 80%, rgba(200,255,128,0.5) 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    borderRadius: '16px',
                                }}
                            ></div>
                            <div
                                className="relative rounded-[16px] flex flex-col h-full"
                                style={{
                                    background: 'linear-gradient(160deg, #141f0a 0%, #0c1407 30%, #0a1205 60%, #0d1608 100%)',
                                    padding: '45px 30px 40px',
                                    minHeight: '440px',
                                }}
                            >
                                {/* Icon circle */}
                                <div
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        marginBottom: '20px',
                                        borderRadius: '50%',
                                        background: 'rgba(200, 255, 128, 0.12)',
                                        border: '1px solid rgba(200, 255, 128, 0.25)',
                                    }}
                                >
                                    <img
                                        src="/homepage_assets/icon_credits.svg"
                                        alt="Credits"
                                        className="w-5 h-5 object-contain"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(20%) saturate(800%) hue-rotate(30deg)' }}
                                    />
                                </div>
                                <h3
                                    className="text-white uppercase"
                                    style={{
                                        fontSize: '22px',
                                        lineHeight: '26px',
                                        fontWeight: 600,
                                        letterSpacing: '1.5px',
                                        marginBottom: '28px',
                                    }}
                                >
                                    CREDITS
                                </h3>
                                <ul
                                    className="flex-grow list-disc pl-5 space-y-2"
                                    style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontWeight: 400,
                                        maxWidth: '260px',
                                        color: 'rgba(255,255,255,0.7)',
                                    }}
                                >
                                    <li>Credits are stable, USD-pegged units designed to make participation simple and secure.</li>
                                    <li>They allow users to invest, fund businesses, and transact without worrying about crypto volatility.</li>
                                </ul>
                                <button
                                    className="flex justify-center items-center mt-8 font-medium hover:brightness-110 transition-all"
                                    style={{
                                        width: '190px',
                                        height: '44px',
                                        fontSize: '15px',
                                        background: '#C8FF80',
                                        color: '#000',
                                        border: 'none',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Learn About Credits
                                </button>
                            </div>
                        </div>

                        {/* Mobile center image (shown only on small screens) */}
                        <div className="lg:hidden flex justify-center my-4">
                            <div style={{ width: '280px', height: '350px' }} className="relative">
                                <img
                                    src="/homepage_assets/token_box_3d.svg"
                                    alt="3D Token Box"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Card: Token */}
                        <div className="relative w-full lg:w-auto" style={{ maxWidth: '340px', margin: '0 auto' }}>
                            {/* Gradient border wrapper */}
                            <div
                                className="absolute inset-0 rounded-[16px] pointer-events-none"
                                style={{
                                    padding: '1px',
                                    background: 'linear-gradient(135deg, rgba(200,255,128,0.5) 0%, rgba(200,255,128,0.15) 20%, rgba(200,255,128,0.03) 50%, rgba(200,255,128,0.15) 80%, rgba(200,255,128,0.5) 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    borderRadius: '16px',
                                }}
                            ></div>
                            <div
                                className="relative rounded-[16px] flex flex-col h-full"
                                style={{
                                    background: 'linear-gradient(160deg, #141f0a 0%, #0c1407 30%, #0a1205 60%, #0d1608 100%)',
                                    padding: '45px 30px 40px',
                                    minHeight: '440px',
                                }}
                            >
                                {/* Icon circle */}
                                <div
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        marginBottom: '20px',
                                        borderRadius: '50%',
                                        background: 'rgba(200, 255, 128, 0.12)',
                                        border: '1px solid rgba(200, 255, 128, 0.25)',
                                    }}
                                >
                                    <img
                                        src="/homepage_assets/icon_token.svg"
                                        alt="Token"
                                        className="w-5 h-5 object-contain"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(20%) saturate(800%) hue-rotate(30deg)' }}
                                    />
                                </div>
                                <h3
                                    className="text-white uppercase"
                                    style={{
                                        fontSize: '22px',
                                        lineHeight: '26px',
                                        fontWeight: 600,
                                        letterSpacing: '1.5px',
                                        marginBottom: '28px',
                                    }}
                                >
                                    $RESIL TOKEN
                                </h3>
                                <ul
                                    className="flex-grow list-disc pl-5 space-y-2"
                                    style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontWeight: 400,
                                        maxWidth: '260px',
                                        color: 'rgba(255,255,255,0.7)',
                                    }}
                                >
                                    <li>The $RESIL token powers the Resilution ecosystem through rewards, governance, and tier upgrades.</li>
                                    <li>It enables profit sharing and long-term ecosystem growth.</li>
                                </ul>
                                <button
                                    className="flex justify-center items-center mt-8 font-medium hover:brightness-110 transition-all"
                                    style={{
                                        width: '190px',
                                        height: '44px',
                                        fontSize: '15px',
                                        background: '#C8FF80',
                                        color: '#000',
                                        border: 'none',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Learn About Token
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CreditsTokenSystemSection;
