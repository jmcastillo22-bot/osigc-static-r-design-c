"use client";

import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 text-white font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed w-full z-50 p-6 bg-purple-900 shadow-lg bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 tracking-tight transition duration-300 hover:scale-105">osigc-static</a>
          <div className="space-x-8 text-xl font-semibold hidden md:flex">
            <a href="#services" className="text-blue-300 hover:text-white transition duration-300 transform hover:scale-105">Services</a>
            <a href="#about" className="text-blue-300 hover:text-white transition duration-300 transform hover:scale-105">About Us</a>
            <a href="#contact" className="text-blue-300 hover:text-white transition duration-300 transform hover:scale-105">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center p-8 overflow-hidden pt-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-800 opacity-90"></div>
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400 drop-shadow-lg">
            Innovate. Transform. Excel.
          </h1>
          <p className="text-2xl md:text-3xl text-blue-200 mb-12 font-light max-w-3xl mx-auto">
            Leading the charge in strategic consulting for a dynamic future.
          </p>
          <a href="#services" className="inline-block px-14 py-7 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75">
            Discover Our Impact
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-purple-900 relative overflow-hidden">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white drop-shadow-md">Our Expertise Unleashed</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-10 rounded-3xl shadow-xl border border-blue-600 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">Strategic Visioning</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Crafting roadmaps that redefine market leadership and sustainable growth for unparalleled success.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-10 rounded-3xl shadow-xl border border-blue-600 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">Digital Transformation</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Implementing cutting-edge technologies to revolutionize operations and elevate customer experience.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-10 rounded-3xl shadow-xl border border-blue-600 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">Operational Excellence</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Optimizing processes for peak efficiency and measurable results, driving profitability and growth.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-10 rounded-3xl shadow-xl border border-blue-600 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">Market Innovation</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Identifying and capitalizing on emerging trends to create new market opportunities and competitive edges.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-10 rounded-3xl shadow-xl border border-blue-600 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">Data-Driven Insights</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Leveraging big data analytics to unlock powerful insights and inform strategic, impactful decisions.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-10 rounded-3xl shadow-xl border border-blue-600 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">Organizational Agility</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Building flexible and resilient organizational structures ready for future challenges and rapid adaptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-bl from-purple-950 to-indigo-950 relative overflow-hidden">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white drop-shadow-md">About osigc-static</h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              At <span className="font-semibold text-blue-300">osigc-static</span>, we are architects of transformation. With a relentless focus on innovation and measurable outcomes, we partner with visionary leaders to navigate complex challenges and unlock unprecedented growth. Our expertise spans strategic planning, digital innovation, and operational excellence, all delivered with a dynamic and results-driven approach.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We believe in creating sustainable impact, empowering organizations to thrive in an ever-evolving global landscape.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl flex items-center justify-center p-8 border-4 border-cyan-500 transform rotate-3 hover:rotate-0 transition duration-500">
              <span className="text-5xl md:text-6xl font-extrabold text-white text-opacity-90 leading-tight tracking-wide">
                Driving <br />
                Future <br />
                Growth
              </span>
              <div className="absolute inset-0 bg-blue-400 opacity-10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-purple-900 relative overflow-hidden">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white drop-shadow-md">Let's Build the Future Together</h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-800 to-indigo-800 p-12 rounded-3xl shadow-2xl border border-blue-600">
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Ready to elevate your business? Reach out to osigc-static today for a strategic partnership that delivers impactful results.
            </p>
            <form className="space-y-8 text-left">
              <div>
                <label htmlFor="name" className="block text-xl font-semibold text-blue-300 mb-3">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-5 rounded-xl bg-purple-700 border border-blue-500 text-white text-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-200 outline-none placeholder-blue-300 placeholder-opacity-70"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl font-semibold text-blue-300 mb-3">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-5 rounded-xl bg-purple-700 border border-blue-500 text-white text-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-200 outline-none placeholder-blue-300 placeholder-opacity-70"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl font-semibold text-blue-300 mb-3">Your Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-5 rounded-xl bg-purple-700 border border-blue-500 text-white text-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-200 outline-none placeholder-blue-300 placeholder-opacity-70"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-10 py-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-purple-950 text-center relative overflow-hidden">
        <div className="container mx-auto px-8">
          <p className="text-xl md:text-2xl text-blue-200 mb-6 font-semibold">
            &copy; {new Date().getFullYear()} osigc-static. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8 text-xl">
            <a href="#" className="text-blue-300 hover:text-white transition duration-300 transform hover:scale-110">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white transition duration-300 transform hover:scale-110">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;