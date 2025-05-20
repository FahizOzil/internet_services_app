import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner-2.png"
          alt="Background"
          className="w-full h-full object-cover filter  brightness-50"
        />
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stream, Surf, and  <span className="text-blue-200">Connect Like Never Before</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg mx-auto md:mx-0">
              Blazing-fast internet speeds, crystal-clear cable TV, and exclusive bundle deals designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#partners"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Our Partners
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </a>
            </div>
            <a href="tel:+1234567890" className="mt-4 inline-block bg-blue-600 text-white font-semibold py-3 px-10 rounded hover:bg-blue-700">
               Call Now: +1 (234) 567-890
            </a>

            {/* Trust indicators */}
            <div className="flex justify-center md:justify-start space-x-6 mt-10">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-800/30">
                    <img src="/images/hero-image.jpg" alt="Hero Image" className="w-full h-full object-cover" />
                  </div>
                </div>


                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="font-bold">Fiber</div>
                    <div className="text-xs">1 Gbps</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="font-bold">Channels</div>
                    <div className="text-xs">200+</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="font-bold">Streaming</div>
                    <div className="text-xs">4K HDR</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
