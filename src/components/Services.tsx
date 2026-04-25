// components/Services.tsx
"use client";

import React from "react";
import {
  Palette,
  Share2,
  Printer,
  Shirt,
  Award,
  Monitor,
  Lightbulb,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Create a memorable brand presence with cohesive visual systems",
      items: [
        "Logo Design & Variations",
        "Business Cards & Stationery",
        "Brand Guidelines & Style Guides",
        "Brand Strategy Consultation",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Design",
      description: "Engaging visuals optimized for every platform",
      items: [
        "Instagram Posts & Stories",
        "Facebook Covers & Ads",
        "YouTube Thumbnails & Banners",
        "LinkedIn Graphics & Templates",
      ],
    },
    {
      icon: Printer,
      title: "Print & Marketing",
      description: "High-quality designs ready for professional printing",
      items: [
        "Flex Banners & Backdrops",
        "Posters & Flyers",
        "Brochures & Catalogs",
        "Packaging & Labels",
      ],
    },
    {
      icon: Shirt,
      title: "Merchandise & Apparel",
      description: "Custom designs that turn fans into brand ambassadors",
      items: [
        "T-Shirt & Hoodie Graphics",
        "Mugs, Caps & Accessories",
        "Tote Bags & Merch Packs",
        "Print-Ready File Preparation",
      ],
    },
    {
      icon: Award,
      title: "Academic & Events",
      description: "Professional designs for institutions and occasions",
      items: [
        "Certificates & Awards",
        "ID Cards & Badges",
        "Event Invitations",
        "Presentation Templates",
      ],
    },
    {
      icon: Monitor,
      title: "Digital & Web Assets",
      description: "Clean, responsive designs for digital experiences",
      items: [
        "Web Banners & Headers",
        "Email Templates",
        "Infographics & Data Viz",
        "Social Media Kits",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: Lightbulb,
      title: "Discovery",
      description:
        "We start with a brief conversation to understand your goals, audience, and vision. This ensures every design decision aligns with your objectives.",
    },
    {
      step: "02",
      icon: RefreshCw,
      title: "Concept & Create",
      description:
        "I develop 2–3 initial concepts based on our discussion. Each explores a distinct creative direction for your feedback and selection.",
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Refine & Deliver",
      description:
        "After you choose a direction, we refine with up to 3 revisions. Final files are delivered in all required formats—print-ready or web-optimized.",
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Professional Design Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end visual solutions crafted with strategy, precision, and creativity
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gray-50 group-hover:bg-yellow-50 rounded-lg border border-gray-200 group-hover:border-yellow-200 transition-colors">
                    <Icon className="w-5 h-5 text-gray-700 group-hover:text-yellow-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-1">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              How I Work
            </h3>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              A streamlined process designed for clarity, collaboration, and quality results
            </p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-gray-200 via-yellow-300 to-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative text-center md:text-left">
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-mono text-sm font-bold mb-4 mx-auto md:mx-0">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 border border-gray-200 mb-4 mx-auto md:mx-0">
                      <Icon className="w-7 h-7 text-gray-700" />
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Standards / CTA */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Standards */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                What You Get
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900">
                      Fast Turnaround
                    </span>
                    <span className="text-xs text-gray-500">2–4 days</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900">
                      Revisions Included
                    </span>
                    <span className="text-xs text-gray-500">Up to 3 rounds</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900">
                      Multiple Concepts
                    </span>
                    <span className="text-xs text-gray-500">2–3 options</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900">
                      Print & Web Ready
                    </span>
                    <span className="text-xs text-gray-500">All formats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="md:text-right">
              <p className="text-sm text-gray-600 mb-4">
                Have a project in mind? Let's discuss how we can bring your vision to life.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center md:justify-end gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;