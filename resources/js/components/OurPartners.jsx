import React from 'react';

export default function OurPartners() {
  // Updated partner data with real companies
  const partners = [
    {
      id: 'partner1',
      name: 'EarthLink',
      description: 'Authorized Reseller for high-speed internet services',
      category: 'Internet Provider',
      yearJoined: 2018,
      website: 'https://earthlink.com'
    },
    {
      id: 'partner2',
      name: 'Frontier',
      description: 'Fiber optic internet and digital services provider',
      category: 'Telecommunications',
      yearJoined: 2019,
      website: 'https://frontier.com'
    },
    {
      id: 'partner3',
      name: 'Kinetic',
      description: 'High-speed internet and network solutions',
      category: 'Internet Provider',
      yearJoined: 2020,
      website: 'https://kinetic.com'
    },
    {
      id: 'partner4',
      name: 'Spectrum',
      description: 'Cable television, internet and phone service provider',
      category: 'Telecommunications',
      yearJoined: 2021,
      website: 'https://spectrum.com'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Trusted Collaboration</h2>
          <h3 className="text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Cinzel, serif' }}>Our Partners</h3>
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
              {/* Increased the size of the logo container */}
              <div className="h-32 w-40 mb-4 flex items-center justify-center bg-white rounded-lg shadow-inner p-2">
                {/* Partner Logo Images */}
                {partner.id === 'partner1' && (
                  <img
                    src="/images/earthlink-logo.jpg"
                    alt="EarthLink logo"
                    className="w-full h-full object-contain "
                  />
                )}
                {partner.id === 'partner2' && (
                  <img
                    src="/images/frontier-logo.jpeg"
                    alt="Frontier logo"
                    className="w-full h-full object-contain"
                  />
                )}
                {partner.id === 'partner3' && (
                  <img
                    src="/images/kinetic-logo.jpeg"
                    alt="Kinetic logo"
                    className="w-full h-full object-contain"
                  />
                )}
                {partner.id === 'partner4' && (
                  <img
                    src="/images/spectrum-logo.jpeg"
                    alt="Spectrum logo"
                    className="w-full h-full object-contain"
                  />
                )}
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
      </div>
    </section>
  );
}
