import React from 'react';
import { Navbar } from '../../Component/LandingPage/Navbar';
import { Hero } from '../../Component/LandingPage/Hero';
import { Features } from '../../Component/LandingPage/Features';
import { Footer } from '../../Component/LandingPage/Footer';

const FigmaLanding = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-brand-neon selection:text-black font-arial">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default FigmaLanding;
