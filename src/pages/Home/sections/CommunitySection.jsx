import React from 'react';

const CommunitySection = () => {
    return (
        <section className="bg-black text-white relative overflow-hidden" style={{ minHeight: '800px', padding: '100px 0' }}>

            {/* Large Outlined 'R' Background - Bottom Left */}
            <div
                className="absolute bottom-0 left-0 pointer-events-none opacity-20"
                style={{
                    width: '800px',
                    height: '800px',
                    transform: 'translate(-20%, 20%)'
                }}
            >
                <svg viewBox="0 0 500 500" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M100 50 H 300 C 380 50, 420 100, 420 180 C 420 260, 380 310, 300 310 H 200 L 350 500 H 220 L 100 350 V 500 H 50 V 50 Z" />
                    <path d="M100 100 V 260 H 300 C 340 260, 370 240, 370 180 C 370 120, 340 100, 300 100 H 100 Z" />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 md:px-16">

                {/* Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-32">
                    <div className="max-w-2xl">
                        <h2
                            className="uppercase mb-6"
                            style={{ fontSize: '48px', lineHeight: '54px', fontWeight: 500 }}
                        >
                            <span className="text-[#C8FF80]">JOIN THE RESILUTION</span>
                            <br />
                            <span className="text-[#C8FF80]">COMMUNITY</span>
                        </h2>
                        <p
                            className="text-white font-normal text-lg"
                            style={{ maxWidth: '600px', lineHeight: '28px' }}
                        >
                            Be part of a growing ecosystem shaping the future of transparent blockchain investment.
                        </p>
                    </div>

                    {/* Join Button (Top Right) */}
                    <button
                        className="bg-[#C8FF80] text-black px-8 py-4 font-normal hover:bg-[#b0e660] transition-colors rounded-none"
                        style={{ fontSize: '16px', fontWeight: 500 }}
                    >
                        Join Community
                    </button>
                </div>

                {/* Cards Row */}
                <div className="flex flex-col md:flex-row justify-end gap-8">

                    {/* Card 1: Community Channels */}
                    <div
                        className="bg-[#FAFAFA] text-black p-10 flex flex-col items-start hover:translate-y-[-5px] transition-transform duration-300 rounded-lg"
                        style={{ width: '100%', maxWidth: '400px', minHeight: '380px' }}
                    >
                        {/* Icon Group */}
                        <div className="mb-8">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#C8FF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#C8FF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#C8FF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.01 6.11683 19.01 7.005C19.01 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#C8FF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-medium mb-4">Community Channels</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Connect with other users, businesses, and investors through our official community platforms.
                        </p>
                    </div>

                    {/* Card 2: Platform Updates */}
                    <div
                        className="bg-[#FAFAFA] text-black p-10 flex flex-col items-start hover:translate-y-[-5px] transition-transform duration-300 rounded-lg"
                        style={{ width: '100%', maxWidth: '400px', minHeight: '380px' }}
                    >
                        {/* Icon Rocket */}
                        <div className="mb-8">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 16.5C5.9 15.1 6.6 13.9 6.6 13.9L2 9.3C2 9.3 3.2 10 4.6 11.4C10.7 17.5 7.4 21.6 7.4 21.6L12.7 16.3C13.2 16.6 15.3 16.8 17.2 14.9C19.9 12.2 21.6 6.8 21.6 6.8C21.6 6.8 16.2 8.5 13.5 11.2C11.6 13.2 11.8 15.2 12.1 15.7L6.8 21C6.8 21 10.9 17.7 17 11.6" stroke="#C8FF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.9 9.3L21.6 2.6" stroke="#C8FF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-medium mb-4">Platform Updates</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Get the latest news, feature launches, and ecosystem progress directly from Resilution.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default CommunitySection;
