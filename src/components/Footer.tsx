// components/Footer.tsx
"use client";

import React from "react";
import {
  Heart,
  ArrowUp,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Twitter,
  Facebook,
  Youtube,
  ExternalLink,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dharamveerkr/",
      icon: Linkedin,
      color: "hover:bg-[#0A66C2]",
      aria: "LinkedIn profile",
    },
    {
      name: "Email",
      href: "mailto:dharamveerkumar774@gmail.com",
      icon: Mail,
      color: "hover:bg-[#EA4335]",
      aria: "Send email",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/imdharamvrr/",
      icon: Instagram,
      color: "hover:bg-[#E4405F]",
      aria: "Instagram profile",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/917903797952",
      icon: MessageCircle,
      color: "hover:bg-[#25D366]",
      aria: "Chat on WhatsApp",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/imdharamvrr",
      icon: Twitter,
      color: "hover:bg-black",
      aria: "X/Twitter profile",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/imdharamvrr",
      icon: Facebook,
      color: "hover:bg-[#1877F2]",
      aria: "Facebook profile",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Nomadvir",
      icon: Youtube,
      color: "hover:bg-[#FF0000]",
      aria: "YouTube channel",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Dharamveer Kumar
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Creative Graphic Designer & Digital Storyteller crafting impactful 
              visual experiences for brands across digital and print media. 
              Let's create something extraordinary together.
            </p>
            
            {/* Newsletter/CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                placeholder="Your email for updates"
                className="px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-amber-400 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-yellow-500/20">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white/90 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full" />
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/0 group-hover:bg-yellow-400 transition-all duration-300" />
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white/90 relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full" />
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.aria}
                    className={`group relative p-3 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 ${social.color} hover:border-transparent transform hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <Icon className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/95 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-gray-700 shadow-xl">
                      {social.name}
                      <ExternalLink className="inline w-3 h-3 ml-1 mb-0.5" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center flex-wrap justify-center md:justify-start gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-medium text-white/90">Dharamveer Kumar</span>
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span className="hidden sm:inline">• All rights reserved</span>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative p-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-full hover:from-yellow-400 hover:to-amber-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-yellow-500/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900/95 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-700">
              Back to top ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;