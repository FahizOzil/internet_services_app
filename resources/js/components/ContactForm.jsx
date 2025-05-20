import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'internet',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    // Simulate form submission
    setTimeout(() => {
      setStatus({ submitted: true, submitting: false, error: null });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'internet',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Get In Touch</h2>
          <h3 className="text-4xl font-bold mb-4 text-gray-900">We're Here To Help</h3>
          <p className="text-lg text-gray-600">Have questions or need assistance? Our team of experts is just a message away.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Image Column - Replacing the Contact Info Column */}
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow-lg">
            {/* Replace with your actual image */}
            <img
              src="/images/contact-us.jpg"
              alt="Contact us promotional image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {status.submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-6">Your message has been received. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus({ submitted: false, submitting: false, error: null })}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="service">Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="internet">Internet Service</option>
                        <option value="tv">Cable TV</option>
                        <option value="bundle">Internet + TV Bundle</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows="5"
                      placeholder="Tell us more about what you need..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                      I agree to be contacted by ConnectPro regarding my inquiry
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h4 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h4>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h5 className="font-bold text-lg mb-2">How long does installation take?</h5>
              <p className="text-gray-600">Standard installation typically takes 2-3 business days from the date of order confirmation. Premium installations may be scheduled as soon as next-day.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h5 className="font-bold text-lg mb-2">Can I bundle services for better pricing?</h5>
              <p className="text-gray-600">Yes! We offer special discounted rates when you bundle internet and TV services together. Check our bundles section for more details.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h5 className="font-bold text-lg mb-2">Is there a contract requirement?</h5>
              <p className="text-gray-600">We offer both contract and no-contract options. Choosing a 12-month contract can provide significant savings, but we also offer month-to-month plans for maximum flexibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
