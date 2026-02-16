import React from 'react';

const RoadmapSection = () => {
    const phases = [
        {
            phase: 'Phase 1',
            title: 'FOUNDATION',
            items: [
                'Core investment platform launch',
                'Business onboarding & verification',
                'Eden AI assistant live',
                'Credits & token system setup',
            ],
        },
        {
            phase: 'Phase 2',
            title: 'ECOSYSTEM EXPANSION',
            items: [
                'ResilPay payment system',
                'ResilMall marketplace',
                'Enhanced transparency tools',
                'Community growth programs',
            ],
        },
        {
            phase: 'Phase 3',
            title: 'ADVANCED FEATURES',
            items: [
                'Staking and rewards system',
                'Token governance launch',
                'Advanced analytics dashboard',
                'Insurance modules',
            ],
        },
        {
            phase: 'Phase 4',
            title: 'GLOBAL SCALE',
            items: [
                'International expansion',
                'Enterprise partnerships',
                'Regulatory optimization',
                'Large-scale ecosystem adoption',
            ],
        },
    ];

    return (
        <section className="text-black relative overflow-hidden" style={{ background: '#F5F5F0', padding: '80px 0 100px' }}>

            {/* Content Container */}
            <div className="max-w-[1300px] mx-auto px-8 md:px-16">

                {/* Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-20">
                    <h2 className="uppercase" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: 500 }}>
                        Product{' '}
                        <span
                            className="inline-block px-3 py-1"
                            style={{ background: '#C8FF80' }}
                        >
                            Roadmap
                        </span>
                    </h2>
                    <p
                        className="text-gray-600 font-normal lg:text-right"
                        style={{ fontSize: '14px', lineHeight: '20px', maxWidth: '350px' }}
                    >
                        Our phased development plan focuses on building a transparent, scalable, and community-driven investment ecosystem.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Phase Labels */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-4">
                        {phases.map((p, i) => (
                            <div key={i} className="text-xs uppercase tracking-wider text-gray-500 font-medium" style={{ fontSize: '12px' }}>
                                {p.phase}
                            </div>
                        ))}
                    </div>

                    {/* Progress Line with Dots */}
                    <div className="relative h-6 mb-8 flex items-center">
                        {/* Line */}
                        <div className="absolute left-0 right-0 h-[2px] bg-[#C8FF80]" style={{ top: '50%', transform: 'translateY(-50%)' }}></div>

                        {/* Dots */}
                        <div className="grid grid-cols-4 w-full relative z-10">
                            {phases.map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-[#C8FF80] border-2 border-[#C8FF80] shadow-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical Divider Lines + Phase Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-gray-300">
                        {phases.map((p, i) => (
                            <div
                                key={i}
                                className={`pt-8 pr-6 ${i > 0 ? 'md:border-l border-gray-300' : ''}`}
                            >
                                <h3
                                    className="text-black uppercase mb-4"
                                    style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 600 }}
                                >
                                    {p.title}
                                </h3>
                                <ul className="space-y-2">
                                    {p.items.map((item, j) => (
                                        <li
                                            key={j}
                                            className="text-gray-600 flex items-start gap-2"
                                            style={{ fontSize: '13px', lineHeight: '18px' }}
                                        >
                                            <span className="mt-1 shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default RoadmapSection;
