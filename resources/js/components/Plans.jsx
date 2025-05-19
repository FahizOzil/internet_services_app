import React from 'react';

export default function OurPartners() {
  // Partner data with dummy information
  const partners = [
    {
      id: 'partner1',
      name: 'TechStream',
      description: 'Leading technology provider for streaming services',
      category: 'Technology',
      yearJoined: 2018,
      website: 'https://techstream.example.com'
    },
    {
      id: 'partner2',
      name: 'MediaNet',
      description: 'Global media and entertainment network',
      category: 'Media',
      yearJoined: 2019,
      website: 'https://medianet.example.com'
    },
    {
      id: 'partner3',
      name: 'ConnectWave',
      description: 'Infrastructure solutions for connectivity',
      category: 'Infrastructure',
      yearJoined: 2020,
      website: 'https://connectwave.example.com'
    },
    {
      id: 'partner4',
      name: 'DataFlow',
      description: 'Data management and analytics specialists',
      category: 'Data',
      yearJoined: 2021,
      website: 'https://dataflow.example.com'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Trusted Collaboration</h2>
          <h3 className="text-4xl font-bold mb-4 text-gray-900">Our Partners</h3>
          <p className="text-lg text-gray-600">
            We work with industry leaders to provide you with the best connectivity solutions and services.
          </p>
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="h-24 w-24 mb-4 flex items-center justify-center bg-white rounded-full shadow-inner p-4">
                {/* Placeholder Logo in SVG format */}
                <svg
                  className="w-full h-full text-blue-600"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {partner.id === 'partner1' && (
                    <>
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                      <path d="M30 35L70 65" stroke="currentColor" strokeWidth="4" />
                      <path d="M30 65L70 35" stroke="currentColor" strokeWidth="4" />
                    </>
                  )}
                  {partner.id === 'partner2' && (
                    <>
                      <rect x="25" y="25" width="50" height="50" rx="5" stroke="currentColor" strokeWidth="2" />
                      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
                      <circle cx="50" cy="50" r="5" fill="currentColor" />
                    </>
                  )}
                  {partner.id === 'partner3' && (
                    <>
                      <path d="M20 50C20 33.4315 33.4315 20 50 20V20C66.5685 20 80 33.4315 80 50V50C80 66.5685 66.5685 80 50 80V80C33.4315 80 20 66.5685 20 50V50Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M35 65L65 35M35 35L65 65" stroke="currentColor" strokeWidth="2" />
                    </>
                  )}
                  {partner.id === 'partner4' && (
                    <>
                      <path d="M25 30H75V70H25V30Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M40 45L60 45" stroke="currentColor" strokeWidth="3" />
                      <path d="M40 55L60 55" stroke="currentColor" strokeWidth="3" />
                      <circle cx="40" cy="45" r="5" fill="currentColor" />
                      <circle cx="60" cy="55" r="5" fill="currentColor" />
                    </>
                  )}
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h4>
              <p className="text-gray-600 text-center text-sm mb-3">{partner.description}</p>
              <div className="mt-auto">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Highlight */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 md:p-12 shadow-lg text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-10 md:w-1/3">
              <svg className="h-12 w-12 text-blue-200 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
              <p className="text-xl md:text-2xl font-medium mt-4 text-center md:text-left">Working with ConnectPro and their partners has transformed how we deliver digital services to our customers.</p>
            </div>
            <div className="md:w-2/3 bg-blue-600 bg-opacity-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h5 className="font-bold">Sarah Johnson</h5>
                  <p className="text-blue-100 text-sm">CTO, Digital Innovations Inc.</p>
                </div>
              </div>
              <p className="text-blue-100">
                "The partnership between our company and ConnectPro has been instrumental in our growth. Their reliable infrastructure and expert support have allowed us to focus on innovation rather than connectivity issues. The collaborative ecosystem of partners they've built provides end-to-end solutions that truly benefit the end consumer."
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Customized Solutions</h4>
            <p className="text-gray-600">
              Our partnerships enable us to offer tailored connectivity packages that meet your specific needs and requirements.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Enhanced Performance</h4>
            <p className="text-gray-600">
              Strategic collaborations with industry leaders ensure we deliver cutting-edge technology and optimal performance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Reliable Security</h4>
            <p className="text-gray-600">
              We partner with top security providers to ensure your connection and data remain protected at all times.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-6 py-3 transition-colors duration-300">
            Become a Partner
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-gray-600 text-sm">
            Interested in joining our partner network? Contact our partnership team today.
          </p>
        </div>
      </div>
    </section>
  );
}
