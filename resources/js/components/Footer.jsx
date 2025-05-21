import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-blue-400 to-blue-700 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center space-x-2 mb-4">
                            <img className="w-[250px] h-[140px]" src="/images/logo-1.png" alt="logo" />
                        </div>
                        <p className="text-blue-100 mb-4">
                            Providing premium internet and TV services <br />
                             for homes and businesses since 2015.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-100">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#features" className="hover:text-blue-200 transition duration-300">Features</a></li>
                            <li><a href="#internet" className="hover:text-blue-200 transition duration-300">Internet</a></li>
                            <li><a href="#tv" className="hover:text-blue-200 transition duration-300">TV Packages</a></li>
                            <li><a href="#bundles" className="hover:text-blue-200 transition duration-300">Bundles</a></li>
                            <li><a href="#promos" className="hover:text-blue-200 transition duration-300">Promotions</a></li>
                        </ul>
                    </div>

                    {/* Contact - Now in third position */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-100">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <svg className="h-5 w-5 mt-1 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Connectivity Ave, Broadband City, BC 12345</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <svg className="h-5 w-5 mt-1 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>1-800-CONNECT (266-6328)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <svg className="h-5 w-5 mt-1 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>support@Internet&CableDeals.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Simplified */}
                <div className="mt-12 pt-6 border-t border-blue-400 flex justify-center">
                    <div className="text-sm text-center">
                        &copy; {currentYear} Internet & Cable Deals. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
