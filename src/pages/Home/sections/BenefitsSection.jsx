import React from 'react';

const BenefitsSection = () => {
    return (
        <section className="bg-white py-24 px-8 md:px-16 text-black">
            <div className="max-w-[1300px] mx-auto flex flex-col items-center">

                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide mb-6 text-center">
                    BENEFITS FOR <span className="bg-[#C8FF80] px-2 font-medium">BUSINESSES & INVESTORS</span>
                </h2>
                <p className="text-gray-600 text-center max-w-3xl mb-20 text-sm md:text-base font-light">
                    Resilution creates value for both businesses seeking funding and investors looking for transparent opportunities.
                </p>

                {/* Benefits Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

                    {/* Investors Card */}
                    <div className="bg-[#EDE2E2] p-12 md:p-16 flex flex-col items-center text-center rounded-sm min-h-[600px]">
                        {/* Icon */}
                        <div className="mb-10 w-16 h-16">
                            <img
                                src="/homepage_assets/icon_user.svg"
                                alt="icon_user.svg"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-normal uppercase mb-10 tracking-widest">FOR INVESTORS</h3>

                        <ul className="text-left text-gray-800 space-y-3 mb-12 flex-grow font-light text-sm md:text-base leading-relaxed list-disc pl-5">
                            <li>Invest in verified businesses with full transparency.</li>
                            <li>Track real-time performance and product data on-chain.</li>
                            <li>Reduce risk through immutable records and smart contracts.</li>
                            <li>Receive automated profit distributions.</li>
                        </ul>

                        <button className="bg-black text-white px-10 py-4 text-sm font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm">
                            Start Investing
                        </button>
                    </div>

                    {/* Businesses Card */}
                    <div className="bg-[#EDE2E2] p-12 md:p-16 flex flex-col items-center text-center rounded-sm min-h-[600px]">
                        {/* Icon */}
                        <div className="mb-10 w-16 h-16">
                            <img
                                src="/homepage_assets/icon_building.svg"
                                alt="icon_building.svg"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-normal uppercase mb-10 tracking-widest">FOR BUSINESSES</h3>

                        <ul className="text-left text-gray-800 space-y-3 mb-12 flex-grow font-light text-sm md:text-base leading-relaxed list-disc pl-5">
                            <li>Raise capital directly from a global investor community without banks or intermediaries.</li>
                            <li>Gain trust through transparent performance data recorded on blockchain.</li>
                            <li>Automate revenue sharing and funding distribution with smart contracts.</li>
                            <li>Scale faster with community-backed investment.</li>
                        </ul>

                        <button className="bg-black text-white px-10 py-4 text-sm font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm">
                            Join As A Business
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;
