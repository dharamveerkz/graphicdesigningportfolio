import React from "react";
import {
  Palette,
  Share2,
  Printer,
  Shirt,
  Award,
  Monitor,
  Clock,
  RefreshCw,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      items: [
        "Logo Design",
        "Business Cards",
        "Letterheads",
        "Brand Guidelines",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Share2,
      title: "Social Media",
      items: [
        "Instagram Posts",
        "Facebook Banners",
        "YouTube Thumbnails",
        "Story Templates",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Printer,
      title: "Print Media",
      items: ["Flex Banners", "Posters", "Flyers", "Brochures"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shirt,
      title: "Apparel",
      items: ["T-Shirt Designs", "Hoodies", "Mugs", "Tote Bags"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Award,
      title: "Academic",
      items: ["Certificates", "ID Cards", "Invitations", "Award Templates"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Monitor,
      title: "Web/Presentation",
      items: [
        "Web Banners",
        "PowerPoint Templates",
        "Infographics",
        "Email Headers",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Direction",
      description:
        "We begin with a short conversation or brief. I understand your needs, preferences, and goals to set the design direction.",
    },
    {
      icon: RefreshCw,
      title: "Creation & Concepting",
      description:
        "You’ll receive two unique design concepts, each carefully built to explore different creative angles for your project.",
    },
    {
      icon: Clock,
      title: "Refine & Finalize",
      description:
        "Once you choose your favorite, we fine-tune it with up to three revisions. Final files are prepared for print or digital use — all delivered in just a few days.",
    },
  ];

  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All-in-One Custom Graphic Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, I provide comprehensive design solutions
            for all your visual needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-600"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            My Design Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Highlight */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-black">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Delivery Time</h4>
              <p>2–4 days</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Lightbulb className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Concepts</h4>
              <p>2 Initial</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <RefreshCw className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Revisions</h4>
              <p>3 Included</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg group"
          >
            Get a Quote Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
