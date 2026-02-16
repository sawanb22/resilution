import React from 'react';
import Section from '../../../Component/Common/Section';
import Button from '../../../Component/Common/Button';

const TraditionalShortfallsSection = () => {
    const shortfalls = [
        {
            title: "LIMITED ACCESS TO CAPITAL",
            description: "Small and growing businesses struggle to raise funds through banks and traditional institutions.",
            icon: "/homepage_assets/icon_building.svg",
            iconClass: "contrast-200" // Black icon -> clearer
        },
        {
            title: "LACK OF TRANSPARENCY",
            description: "Investors receive unclear and delayed updates, making it hard to track real performance.",
            icon: "/homepage_assets/icon_user.svg",
            iconClass: "contrast-200"
        },
        {
            title: "HIGH INTERMEDIARY COSTS",
            description: "Middlemen increase fees and reduce returns for both businesses and investors.",
            icon: "/homepage_assets/icon_pay.svg",
            iconClass: "" // Already neon
        }
    ];

    return (
        <Section className="text-center" containerClassName="flex flex-col items-center">
            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-light uppercase text-[var(--brand-neon)] mb-6 tracking-widest drop-shadow-[0_0_5px_rgba(200,255,128,0.5)]">
                Why Traditional Investment Systems Fail
            </h2>
            <p className="text-gray-300 max-w-4xl mb-20 text-sm md:text-base font-light tracking-wide">
                Traditional financial markets rely on intermediaries and delayed reporting, making funding difficult for businesses and risky for investors.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
                {shortfalls.map((item, index) => (
                    <div key={index} className="bg-[var(--surface-card)] border border-gray-800 p-10 flex flex-col items-start text-left h-full shadow-lg hover:border-[var(--brand-neon)] transition-colors duration-300 group">
                        {/* Icon Box */}
                        <div className={`w-16 h-16 flex justify-center items-center mb-8 shadow-sm transition-transform group-hover:scale-110 ${item.icon === '/homepage_assets/icon_pay.svg' ? 'bg-black border border-[var(--brand-neon)]' : 'bg-[var(--brand-neon)]'}`}>
                            <img
                                src={item.icon}
                                alt={item.title}
                                className={`w-8 h-8 ${item.iconClass}`}
                            />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl md:text-2xl font-normal uppercase mb-6 tracking-wide leading-tight text-white group-hover:text-[var(--brand-neon)] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Button */}
            <Button variant="primary" className="shadow-[0_0_20px_rgba(200,255,128,0.3)]">
                View the Solution
            </Button>
        </Section>
    );
};

export default TraditionalShortfallsSection;
