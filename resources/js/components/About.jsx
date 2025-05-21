import React, { useState } from 'react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">About Internet & Cable Deals</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              Connecting Homes and Businesses Since 2010
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                At Internet & Cable Deals, we believe that reliable connectivity is essential for modern living. Our mission is to provide high-quality internet and entertainment solutions that keep you connected to what matters most.
              </p>

              <p className="text-gray-600 text-lg">
                With over a decade of experience in the telecommunications industry, we've built a reputation for exceptional service, cutting-edge technology, and customer satisfaction.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 ">Lightning Fast</h3>
                    <p className="text-gray-600 text-sm">Speeds up to 1Gbps</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Data Analytics</h3>
                    <p className="text-gray-600 text-sm">Usage insights</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Flexible Packages</h3>
                    <p className="text-gray-600 text-sm">Customizable plans</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Always available</p>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 inline-flex items-center" style={{ fontFamily: 'Cinzel, serif' }}
              >
                Get Started
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Image with Hover Effect */}
          <div className="md:w-1/2">
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Image */}
              <div
                className={`relative aspect-[4/3] bg-blue-200 transition-transform duration-700 ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
              >
                {/* Placeholder for your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-white opacity-20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* You would replace this with your actual image */}
                <img
                  src="/images/Global-TV-Service.jpg"
                  alt="Internet & Cable Deals service technician installing fiber optic cable"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Overlay that appears on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent flex items-end transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-6 transform transition-transform duration-500 ease-out delay-100">
                  <h3 className={`font-bold text-white text-xl mb-2 transition-all duration-500 ${
                    isHovered ? 'translate-y-0' : 'translate-y-10 opacity-0'
                  }`}>
                    Next-Generation Technology
                  </h3>
                  <p className={`text-blue-100 mb-2 transition-all duration-500 delay-75 ${
                    isHovered ? 'translate-y-0' : 'translate-y-10 opacity-0'
                  }`}>
                    Our state-of-the-art infrastructure delivers reliable service to thousands of satisfied customers.
                  </p>
                </div>
              </div>

              {/* Accent corner effect */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-bl-full transform transition-all duration-700 ${
                isHovered ? 'rotate-45 scale-125' : 'rotate-0'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
