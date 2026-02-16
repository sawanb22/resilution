import React from 'react';

const HowItWorksSection = () => {
    const steps = [
        {
            step: "Step 1",
            title: "ONBOARD & VERIFY",
            description: "Users complete secure identity verification to ensure platform trust and compliance.",
            icon: "/homepage_assets/icon_step_1.svg"
        },
        {
            step: "Step 2",
            title: "SUBMIT OR DISCOVER",
            description: "Businesses publish funding proposals while investors explore opportunities.",
            icon: "/homepage_assets/icon_step_2.svg"
        },
        {
            step: "Step 3",
            title: "FUND & TRACK",
            description: "Investments are securely handled and performance is tracked in real time.",
            icon: "/homepage_assets/icon_step_3.svg"
        },
        {
            step: "Step 4",
            title: "EARN AUTOMATICALLY",
            description: "Smart contracts distribute profits automatically based on results.",
            icon: "/homepage_assets/icon_step_4.svg"
        }
    ];

    return (
        <section className="bg-white py-24 px-8 md:px-16 text-black">
            <div className="max-w-[1300px] mx-auto flex flex-col items-center">

                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide mb-6 text-center">
                    HOW <span className="bg-[#C8FF80] px-2 font-medium">RESILUTION WORKS</span>
                </h2>
                <p className="text-gray-600 text-center max-w-3xl mb-24 text-sm md:text-base font-light">
                    A simple and transparent process that connects businesses and investors through blockchain technology.
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {steps.map((item, index) => (
                        <div key={index} className="bg-[#F8F5F5] p-8 rounded-sm h-full flex flex-col items-center text-center relative hover:shadow-lg transition-shadow duration-300">

                            {/* Step Number */}
                            <span className="absolute top-6 left-6 text-xs text-gray-500 font-medium">
                                {item.step}
                            </span>

                            {/* Ripple Icon Container */}
                            <div className="relative w-40 h-40 flex justify-center items-center mb-8 mt-4">
                                {/* Outer Circle */}
                                <div className="absolute w-full h-full rounded-full border border-[#C8FF80]/30"></div>
                                {/* Middle Circle */}
                                <div className="absolute w-28 h-28 rounded-full border border-[#C8FF80]/60"></div>
                                {/* Inner Circle (Solid) */}
                                <div className="w-16 h-16 rounded-full bg-[#C8FF80] flex justify-center items-center z-10 shadow-sm">
                                    <img
                                        src={item.icon}
                                        alt={`${item.step} icon`}
                                        className="w-8 h-8 text-black object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-normal uppercase mb-4 tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;
