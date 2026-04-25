// components/Footer.tsx
"use client";

import React from "react";
import {
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
    <footer className="relative bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Dharamveer Kumar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Creative Graphic Designer specializing in impactful visual
              solutions for digital and print media.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.aria}
                    className={`group relative p-2.5 bg-gray-900 rounded-lg border border-gray-800 ${social.color} hover:border-transparent transform hover:scale-105 transition-all duration-200`}
                  >
                    <Icon className="w-4.5 h-4.5 text-gray-300 group-hover:text-white transition-colors" />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-800 pointer-events-none">
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
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            <span className="text-gray-400">Dharamveer Kumar</span> © {new Date().getFullYear()} All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;