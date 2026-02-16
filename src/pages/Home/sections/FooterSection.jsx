import React from 'react';

const FooterSection = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-[1300px] mx-auto px-8 md:px-16">

                {/* Top Section: Logo, Links, Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">

                    {/* Column 1: Brand & Description */}
                    <div className="max-w-sm">
                        {/* Logo Placeholder */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#C8FF80] rounded flex items-center justify-center">
                                <span className="text-black font-bold text-xl">R</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">RESILUTION</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Redefining business funding through blockchain technology. Transparent, automated, and community-driven investment for the future.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {/* Twitter/X */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C8FF80] hover:text-black transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>
                            {/* Telegram */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C8FF80] hover:text-black transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                            </a>
                            {/* Discord */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C8FF80] hover:text-black transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" /><path d="M7 16.5c3.5 1 6.5 1 10 0" /><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" /><path d="M8.5 17c0 1 -1.5 3 -2 3c-1.5 0 -2.833 -1.667 -3.5 -3c-.667 -1.667 -.5 -5.833 1.5 -11.5c1.457 -1.015 3 -1.34 4.5 -1.5l1 2.5" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C8FF80] hover:text-black transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-wrap gap-16 lg:gap-24">

                        {/* Column 2: Platform */}
                        <div>
                            <h4 className="text-white font-semibold uppercase mb-6 tracking-wide text-sm">Platform</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Resilution Engine</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Product Data Chains</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Ecosystem</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Tokenomics</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div>
                            <h4 className="text-white font-semibold uppercase mb-6 tracking-wide text-sm">Company</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Roadmap</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Legal */}
                        <div>
                            <h4 className="text-white font-semibold uppercase mb-6 tracking-wide text-sm">Legal</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#C8FF80] transition-colors text-sm">Disclaimer</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar: Copyright & Newsletter */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Resilution. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-xs hidden md:block">Process payments securely with:</span>
                        <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                            {/* Simple payment icons placeholders if needed, or just text */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
