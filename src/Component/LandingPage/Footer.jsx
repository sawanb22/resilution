import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10 pt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-macro text-white mb-6 tracking-wider">RESILUTION</h2>
                    <p className="text-gray-400 max-w-sm mb-8">
                        Building the future of digital experiences with precision, creativity, and code.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon hover:text-black transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon hover:text-black transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon hover:text-black transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-neon hover:text-black transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-6 text-brand-neon">Company</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-6 text-brand-neon">Legal</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Resilution. All rights reserved.
            </div>
        </footer>
    );
};
