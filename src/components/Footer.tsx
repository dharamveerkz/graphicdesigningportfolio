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
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dharamveer Kumar</h3>
            <p className="text-gray-400">
              Creative Graphic Designer specializing in impactful visual
              solutions for digital and print media.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                About
              </a>
              <a
                href="#gallery"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center sm:text-left">
              Connect With Me
            </h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dharamveerkr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              {/* Email */}
              <a
                href="mailto:dharamveerkumar774@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/imdharamvrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917903797952"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-green-500 transition-transform transform hover:scale-110"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/imdharamvrr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-black transition-transform transform hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/imdharamvrr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Nomadvir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-110"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> by
            Dharamveer Kumar © {new Date().getFullYear()}
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
