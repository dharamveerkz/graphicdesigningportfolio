import React from "react";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight opacity-0 animate-fadeInUp delay-300">
            <span className="block text-white">Dharamveer Kumar</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mt-2">
              Creative Graphic Designer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp delay-500">
            Designing Impactful Visuals for Digital & Print Media
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto opacity-0 animate-fadeInUp delay-700">
            Transforming ideas into stunning visual experiences that captivate
            audiences and elevate brands to new heights.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 opacity-0 animate-fadeInUp delay-1000">
          <a
            href="#gallery"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
