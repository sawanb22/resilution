import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 md:px-16 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/">
                        <img src="/homepage_assets/resilution heading.svg" alt="Resilution" className="h-[24px]" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#hero" className="text-sm font-normal text-gray-300 hover:text-[#C8FF80] transition-colors font-['Arial']">
                        Home
                    </a>
                    <a href="#how-it-works" className="text-sm font-normal text-gray-300 hover:text-[#C8FF80] transition-colors font-['Arial']">
                        How It Works
                    </a>
                    <a href="#engine" className="text-sm font-normal text-gray-300 hover:text-[#C8FF80] transition-colors font-['Arial']">
                        Solutions
                    </a>
                    <a href="#ecosystem" className="text-sm font-normal text-gray-300 hover:text-[#C8FF80] transition-colors font-['Arial']">
                        Ecosystem
                    </a>
                    <a href="#community" className="text-sm font-normal text-gray-300 hover:text-[#C8FF80] transition-colors font-['Arial']">
                        Community
                    </a>
                    <a href="#faq" className="text-sm font-normal text-gray-300 hover:text-[#C8FF80] transition-colors font-['Arial']">
                        Resources
                    </a>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-6 py-2 bg-[#C8FF80] text-black text-sm font-medium rounded hover:bg-[#b0e660] transition-colors font-['Arial']"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};
