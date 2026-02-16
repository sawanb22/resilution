import React from 'react';

const TokenDistributionSection = () => {
    // Pie chart data
    const segments = [
        { label: 'Community & Ecosystem', percentage: 48, color: '#C8FF80' },
        { label: 'Investors', percentage: 25, color: '#8FBF5A' },
        { label: 'Operations & Network', percentage: 15, color: '#6A9940' },
        { label: 'Team & Advisors', percentage: 12, color: '#4A7328' },
    ];

    // Calculate SVG pie chart paths
    const createPieSlice = (startAngle, endAngle, radius, cx, cy) => {
        const startRad = (startAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;
        const x1 = cx + radius * Math.cos(startRad);
        const y1 = cy + radius * Math.sin(startRad);
        const x2 = cx + radius * Math.cos(endRad);
        const y2 = cy + radius * Math.sin(endRad);
        const largeArc = endAngle - startAngle > 180 ? 1 : 0;
        return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    };

    const radius = 180;
    const cx = 200;
    const cy = 200;
    let currentAngle = 0;

    const slices = segments.map((seg) => {
        const startAngle = currentAngle;
        const sweepAngle = (seg.percentage / 100) * 360;
        const endAngle = startAngle + sweepAngle;
        const midAngle = startAngle + sweepAngle / 2;
        const midRad = (midAngle - 90) * Math.PI / 180;
        const labelRadius = radius * 0.6;
        const labelX = cx + labelRadius * Math.cos(midRad);
        const labelY = cy + labelRadius * Math.sin(midRad);
        const path = createPieSlice(startAngle, endAngle, radius, cx, cy);
        currentAngle = endAngle;
        return { ...seg, path, labelX, labelY, midAngle };
    });

    return (
        <section className="bg-black text-white relative overflow-hidden" style={{ minHeight: '800px', padding: '80px 0' }}>

            {/* Content Container */}
            <div className="max-w-[1300px] mx-auto px-8 md:px-16">

                {/* Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
                    <h2
                        className="text-[#C8FF80] uppercase"
                        style={{ fontSize: '36px', lineHeight: '36px', fontWeight: 500 }}
                    >
                        Token Distribution
                    </h2>
                    <p
                        className="text-white font-normal lg:text-right"
                        style={{ fontSize: '14px', lineHeight: '20px', maxWidth: '400px' }}
                    >
                        A balanced allocation model designed to prioritize ecosystem growth, long-term alignment, and platform sustainability.
                    </p>
                </div>

                {/* Main Content: Pie Chart + Labels */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side: Pie Chart with Labels */}
                    <div className="relative flex-shrink-0" style={{ width: '500px', height: '500px' }}>

                        {/* SVG Pie Chart */}
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            {/* Pie Slices */}
                            {slices.map((slice, i) => (
                                <g key={i}>
                                    <path
                                        d={slice.path}
                                        fill={slice.color}
                                        stroke="#000000"
                                        strokeWidth="2"
                                    />
                                    {/* Percentage Label on slice */}
                                    <text
                                        x={slice.labelX}
                                        y={slice.labelY}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill={i === 0 ? '#000000' : '#000000'}
                                        fontSize="18"
                                        fontWeight="600"
                                    >
                                        {slice.percentage}%
                                    </text>
                                </g>
                            ))}
                        </svg>

                        {/* Label: Investors (top-left) */}
                        <div className="absolute text-center" style={{ top: '20px', left: '-30px', width: '180px' }}>
                            <h4 className="text-[#C8FF80] uppercase text-sm font-medium mb-1" style={{ fontSize: '14px' }}>Investors</h4>
                            <p className="text-gray-400 text-xs" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                Combined allocation across strategic, private, and public funding rounds.
                            </p>
                        </div>

                        {/* Label: Team & Advisors (left) */}
                        <div className="absolute text-center" style={{ top: '280px', left: '-60px', width: '180px' }}>
                            <h4 className="text-[#C8FF80] uppercase text-sm font-medium mb-1" style={{ fontSize: '14px' }}>Team & Advisors</h4>
                            <p className="text-gray-400 text-xs" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                Core contributors and advisors, subject to long-term vesting schedules.
                            </p>
                        </div>

                        {/* Label: Operations & Network (bottom-left) */}
                        <div className="absolute text-center" style={{ bottom: '-30px', left: '60px', width: '200px' }}>
                            <h4 className="text-[#C8FF80] uppercase text-sm font-medium mb-1" style={{ fontSize: '14px' }}>Operations & Network</h4>
                            <p className="text-gray-400 text-xs" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                Platform operations, infrastructure, validator incentives, and network support.
                            </p>
                        </div>

                        {/* Label: Community & Ecosystem (right) */}
                        <div className="absolute" style={{ top: '100px', right: '-180px', width: '200px' }}>
                            <h4 className="text-[#C8FF80] uppercase text-sm font-medium mb-1" style={{ fontSize: '14px' }}>Community & Ecosystem</h4>
                            <p className="text-gray-400 text-xs" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                Rewards, incentives, ecosystem growth, and user participation programs.
                            </p>
                        </div>

                    </div>

                    {/* Right Side: Description + CTA */}
                    <div className="flex flex-col items-start lg:items-start gap-8 lg:mt-auto lg:pb-10">
                        <p
                            className="text-gray-400 font-normal"
                            style={{ fontSize: '14px', lineHeight: '20px', maxWidth: '350px' }}
                        >
                            Detailed allocation breakdown and vesting schedules are available in the Resilution Litepaper.
                        </p>
                        <button
                            className="bg-[#C8FF80] border border-[#C8FF80] text-black font-normal hover:bg-[#b0e660] transition-colors flex items-center gap-3 px-6 py-3"
                            style={{ fontSize: '16px' }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Resilution Litepaper
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default TokenDistributionSection;
