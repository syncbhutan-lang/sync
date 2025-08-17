import React, { useEffect, useRef } from 'react';

// Animated Logo Component
const AnimatedLogo = () => {
  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-s" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(59, 130, 246)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgb(34, 197, 94)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M 25 50 Q 50 10 75 50 Q 50 90 25 50 Z"
          stroke="url(#gradient-s)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="origin-center animate-spin-slow"
          transform="rotate(180 50 50)"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgb(229, 231, 235)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 75 50 Q 50 90 25 50"
          stroke="url(#gradient-s)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="origin-center animate-spin-slow-reverse"
          transform="rotate(0 50 50)"
        />
      </svg>
    </div>
  );
};

// Intersection Observer Hook for scroll-based animations
const useAnimateOnScroll = () => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-element');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elementsToAnimate.forEach(element => { observer.observe(element); });
  }, []);
};

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md transition-shadow duration-300">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" className="flex items-center space-x-2">
        <AnimatedLogo />
        <div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 block">SYNC</span>
          <span className="text-xs text-gray-500 font-medium">Systems & Network Computing</span>
        </div>
      </a>
      <div className="space-x-8 hidden md:flex font-semibold text-gray-600">
        <a href="#about" className="hover:text-blue-600 transition-colors duration-300">About Us</a>
        <a href="#services" className="hover:text-blue-600 transition-colors duration-300">Services</a>
        <a href="#why-us" className="hover:text-blue-600 transition-colors duration-300">Why SYNC?</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
      </div>
      <button className="md:hidden text-gray-900 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </nav>
  </header>
);

// Hero Section Component
const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 lg:p-12 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-green-100 animate-pulse-light">
    <div className="relative z-10 space-y-8 max-w-4xl mx-auto animate-on-scroll">
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Seamless Solutions for a <span className="text-blue-600">Connected Future.</span>
        </h1>
        <p className="text-md lg:text-xl font-medium text-gray-600 max-w-2xl mx-auto">
          SYNC is your trusted partner in building robust, integrated, and scalable ICT solutions.
          We turn complex challenges into simple, connected results.
        </p>
      </div>
      <a href="#contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-1">
        Get a Free Consultation
      </a>
    </div>
  </section>
);

// About Section Component
const About = () => (
  <section id="about" className="container mx-auto px-6 py-16 space-y-24 lg:space-y-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-6 animate-on-scroll">
        <div className="w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-900">About SYNC</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At SYNC, we are more than just a technology provider; we are a dedicated partner in Bhutan's digital journey. Our mission is to bridge the gap between complex technological challenges and practical, user-friendly solutions. We understand that a truly modern and efficient system is one where every component works in perfect harmony, delivering seamless experiences and connected results.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are committed to integrity, innovation, and excellence in all that we do. Our team of experts brings a deep understanding of the local landscape combined with global best practices to empower businesses, government agencies, and organizations to thrive in the digital age.
        </p>
      </div>
      <div className="relative flex items-center justify-center animate-on-scroll">
        <div class="w-full h-80 lg:h-96 bg-gray-200 rounded-3xl"></div>
      </div>
    </div>
  </section>
);

// Services Section Component
const Services = () => (
  <section id="services" className="container mx-auto px-6 py-16 space-y-12">
    <div className="text-center mb-12 animate-on-scroll">
      <h2 className="text-4xl font-bold text-gray-900">Our Comprehensive Services</h2>
      <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
        We provide a full suite of ICT solutions tailored to your unique needs, ensuring every aspect of your technology infrastructure is integrated and efficient.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Digital Governance", desc: "Expert consultation and implementation for government digitalization projects.", color: "blue" },
        { title: "Network & Infrastructure", desc: "From secure network design to server management, we build robust foundations.", color: "green" },
        { title: "Custom Software Development", desc: "Crafting bespoke applications and web portals that automate your workflows.", color: "purple" },
        { title: "Cybersecurity & Data Privacy", desc: "Protecting your digital assets with comprehensive security audits.", color: "red" },
        { title: "IT Support & Maintenance", desc: "Proactive maintenance and responsive support to ensure systems run smoothly.", color: "yellow" },
        { title: "Cloud Solutions", desc: "Implementing scalable and secure cloud infrastructure to enhance collaboration.", color: "cyan" },
      ].map((service, index) => (
        <div key={index} className={`p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll`} style={{ animationDelay: `${index * 0.1}s` }}>
          <h3 className={`text-2xl font-bold mb-2 text-${service.color}-600`}>{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Why Us Section Component
const WhyUs = () => (
  <section id="why-us" className="container mx-auto px-6 py-16 space-y-12 text-center">
    <div className="mb-12 animate-on-scroll">
      <h2 className="text-4xl font-bold text-gray-900">Why Choose SYNC?</h2>
      <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
        We are more than a service provider; we are your strategic technology partner.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Local Expertise", desc: "As a Bhutanese company, we have a deep understanding of the local market." },
        { title: "Client-Centric Approach", desc: "Your goals are our priority. We work closely with you to create tailored solutions." },
        { title: "Commitment to Excellence", desc: "We are passionate about delivering the highest quality in every project." },
      ].map((prop, index) => (
        <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
          <h3 className="text-2xl font-bold text-blue-600 mb-2">{prop.title}</h3>
          <p className="text-gray-600">{prop.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Contact Section Component
const Contact = () => (
  <section id="contact" className="container mx-auto px-6 py-16 space-y-12 text-center">
    <div className="mb-12 animate-on-scroll">
      <h2 className="text-4xl font-bold text-gray-900">Let's Build Something Great</h2>
      <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
        Ready to start your digital transformation? Get in touch with us today.
      </p>
    </div>
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 animate-on-scroll">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <input type="text" id="name" name="name" placeholder="Your Name" required
                 className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 placeholder-gray-500" />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Your Email" required
                 className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 placeholder-gray-500" />
        </div>
        <div>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required
                    className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 placeholder-gray-500"></textarea>
        </div>
        <div>
          <button type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50">
            Send Message
          </button>
        </div>
      </form>
    </div>
    <div className="mt-12 text-center space-y-2 text-gray-600">
      <p>Email: <a href="mailto:info@sync.bt" className="hover:underline">info@sync.bt</a></p>
      <p>Phone: <a href="tel:+975-XXX-XXXX" className="hover:underline">+975-XXX-XXXX</a></p>
      <p>Address: Thimphu, Bhutan</p>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-100 text-center py-8 mt-24">
    <p className="text-sm text-gray-500">&copy; 2025 SYNC. All Rights Reserved.</p>
  </footer>
);

export default App;
