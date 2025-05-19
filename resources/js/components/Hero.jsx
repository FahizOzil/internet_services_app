import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-300"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-blue-200"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your <span className="text-blue-200">Digital Experience</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg mx-auto md:mx-0">
              Blazing-fast internet speeds, crystal-clear cable TV, and exclusive bundle deals designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#plans"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-300 shadow-lg transform hover:-translate-y-1"
              >
                View Plans
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </a>
            </div>

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
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">No Contracts</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-800/30">
                    <svg className="h-24 w-24 text-white opacity-70" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm3.5 10.7l-5 3A1 1 0 017 13V7a1 1 0 011.5-.8l5 3a1 1 0 010 1.6z" />
                    </svg>
                  </div>
                </div>

                {/* Feature highlight circles */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
