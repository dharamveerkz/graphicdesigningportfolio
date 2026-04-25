// components/Home.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowDown, Sparkles, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showSubtext, setShowSubtext] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const roles = ["Graphic Designer", "Social Media Creator", "Brand Strategist", "Visual Storyteller"];
  const fullText = "Designing Impactful Visuals for Digital & Print Media";

  // Typing animation for subtitle
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

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 25,
        y: (e.clientY - rect.top - rect.height / 2) / 25,
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
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Animated Background Grid */}
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

      {/* Dynamic Gradient Orbs with Parallax */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-amber-500/10 rounded-full blur-3xl transition-transform duration-100 ease-out pointer-events-none"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-yellow-300/5 rounded-full blur-3xl transition-transform duration-100 ease-out pointer-events-none"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-float pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-300">Available for freelance projects</span>
        </div>

        {/* Main Heading with Animated Role */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="block text-white">Dharamveer Kumar</span>
          <span className="block mt-3 h-12 md:h-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 relative inline-block">
              {roles[currentRoleIndex]}
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent rounded-full" />
            </span>
          </span>
        </h1>

        {/* Typing Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 min-h-[3rem]">
          <span className="text-gray-300">{typedText}</span>
          <span className="inline-block w-0.5 h-5 bg-yellow-400 ml-0.5 animate-blink" />
        </p>

        {/* Description with Fade-in */}
        <p
          className={`text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10 transition-opacity duration-500 ${
            showSubtext ? "opacity-100" : "opacity-0"
          }`}
        >
          Transforming ideas into stunning visual experiences that captivate audiences and elevate brands.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#gallery"
            className="group inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 font-semibold rounded-xl hover:from-yellow-300 hover:to-amber-300 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-yellow-500/20"
          >
            View My Work
            <ArrowRight className="ml-2 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="group inline-flex items-center px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Let's Talk
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-3 gap-6 max-w-md mx-auto pb-8 transition-all duration-700 delay-200 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "100+", label: "Projects" },
            { value: "5+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Explore
        </span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2 group-hover:border-yellow-400 transition-colors">
          <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 animate-bounce" />
        </div>
      </a>

      {/* Decorative Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-yellow-400/30 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-yellow-400/30 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-yellow-400/30 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-yellow-400/30 rounded-br-xl pointer-events-none" />
    </section>
  );
};

export default Home;