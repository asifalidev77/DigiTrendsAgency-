import React from "react";
import Header from "./Header";
const HeroSection = () => {
  return (
    
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-6 md:px-12 lg:px-24"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-3xl">
        <p className="text-sm md:text-lg uppercase tracking-wide text-green-400">
          Welcome to Our Freelance Solutions
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
          Hire top professionals to transform your <span className="text-green-400">ideas into reality</span>
        </h1>
        <p className="text-sm md:text-lg mt-4 text-gray-200">
          Freelancing has become a transformative career choice in today's dynamic work environment, 
          offering individuals the freedom to work independently and pursue diverse projects across industries.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition">
            Contact Now
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-full font-medium flex items-center gap-2 hover:bg-gray-600 transition">
            Explore More
            <span className="bg-green-500 w-6 h-6 flex items-center justify-center rounded-full">➜</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
