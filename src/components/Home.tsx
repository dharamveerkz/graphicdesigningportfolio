// components/Home.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowDown, Sparkles, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showSubtext, setShowSubtext] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Graphic Designer",
    "Social Media Creator",
    "Brand Strategist",
    "Visual Storyteller",
  ];

  const fullText = "Designing Impactful Visuals for Digital & Print Media";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSubtext(true), 300);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // Mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 30,
        y: (e.clientY - rect.top - rect.height / 2) / 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  // Role rotation
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      // ✅ CHANGED: Removed min-h-[90vh] lg:min-h-[80vh], added py-16 lg:py-24 for balanced spacing
      className="relative flex items-center justify-center bg-gray-950 text-white overflow-hidden px-4 py-16 lg:py-24"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-60 h-60 lg:w-72 lg:h-72 bg-yellow-400/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-amber-400/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mt-4 w-full mx-auto text-center space-y-6 lg:space-y-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/5 border border-white/10 rounded-full">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-gray-300">            Available for freelance projects
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          <span className="block">Dharamveer Kumar</span>
          <span className="block mt-2 lg:mt-4 h-10 lg:h-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              {roles[currentRoleIndex]}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto min-h-[2.5rem]">
          <span className="text-gray-300">{typedText}</span>
          <span className="inline-block w-0.5 h-5 bg-yellow-400 ml-1 animate-blink" />
        </p>

        {/* Description */}
        <p
          className={`text-sm sm:text-base lg:text-lg text-gray-500 max-w-xl mx-auto transition-opacity duration-500 ${
            showSubtext ? "opacity-100" : "opacity-0"
          }`}
        >
          Transforming ideas into stunning visual experiences that captivate audiences and elevate brands.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 transition-all duration-700 ${
            showSubtext ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#gallery"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 font-semibold rounded-xl hover:scale-105 transition"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
          >
            Let's Talk
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto pt-4">
          {[
            { value: "3+", label: "Years Exp." },
            { value: "100+", label: "Projects" },
            { value: "24/7", label: "Availability" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-xl lg:text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* AI Section */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm text-gray-300">
            AI-Enhanced Projects
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm text-gray-300">
            Trend-Driven Designs
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-3 lg:bottom-2 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce text-gray-400" />
      </a>
    </section>
  );
};

export default Home;