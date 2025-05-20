import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import OurPartners from './components/OurPartners';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <OurPartners/>
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

// Mount React app to DOM
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
