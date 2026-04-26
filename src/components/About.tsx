// components/About.tsx
"use client";

import React from "react";
import {
  Palette,
  Users,
  Zap,
  Code,
  TrendingUp,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import profileImage from "../assest/dp.png";

const About: React.FC = () => {
  const softSkills = [
    {
      name: "Creative Direction",
      icon: Palette,
      description: "Innovative design thinking with brand-first approach",
    },
    {
      name: "Collaboration",
      icon: Users,
      description: "Cross-functional teamwork & client communication",
    },
    {
      name: "Adaptability",
      icon: Zap,
      description: "Quick learning across tools, trends & platforms",
    },
    {
      name: "Project Management",
      icon: Code,
      description: "Structured workflows & deadline-driven delivery",
    },
  ];

  const tools = [
    { name: "Adobe Photoshop", level: "Advanced" },
    { name: "Adobe Illustrator", level: "Advanced" },
    { name: "Figma", level: "Advanced" },
    { name: "Canva", level: "Expert" },
    { name: "Sketch", level: "Intermediate" },
    { name: "Infinite Design", level: "Intermediate" },
    { name: "Microsoft Designer", level: "Intermediate" },
    { name: "Premiere Pro", level: "Basic" },
  ];

  const socialStats = [
    { platform: "Pages Managed", value: "5+", icon: TrendingUp },
    { platform: "Posts Created", value: "100+", icon: Palette },
    { platform: "Engagement Growth", value: "60%+", icon: TrendingUp },
    { platform: "Years Experience", value: "3+", icon: Calendar },
  ];

  const experiences = [
    {
      title: "Social Media Manager",
      company: "Freelance & College Clubs",
      period: "2022 – Present",
      description:
        "Managed content strategy, visual design, and community engagement for multiple student organizations and personal brands across Instagram, LinkedIn, and YouTube.",
      achievements: [
        "Grew follower base by 40% through consistent visual branding",
        "Created 100+ high-engagement posts, reels, and stories",
        "Developed content calendars and analytics reporting",
      ],
    },
    {
      title: "Graphic Designer",
      company: "Campus Events & NGOs",
      period: "2021 – Present",
      description:
        "Designed posters, banners, merchandise, and digital assets for college festivals, workshops, and NGO awareness campaigns.",
      achievements: [
        "Delivered 50+ print & digital designs with brand consistency",
        "Collaborated with teams to translate concepts into visuals",
        "Optimized assets for multi-platform deployment",
      ],
    },
    {
      title: "Content Creator",
      company: "Personal Brand",
      period: "2023 – Present",
      description:
        "Building a personal creative brand showcasing design work, tutorials, and behind-the-scenes content across social platforms.",
      achievements: [
        "Curated portfolio with 6+ categorized project galleries",
        "Produced short-form video content for Instagram & YouTube",
        "Engaged with design community for feedback & growth",
      ],
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Blending creativity with strategy to build memorable digital experiences
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column - Profile & Bio */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile Card */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-lg">
                <img
                  src={profileImage}
                  alt="Dharamveer Kumar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bio Card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Hi, I'm{" "}
                <span className="font-semibold text-gray-900">
                  Dharamveer Kumar
                </span>{" "}
                – a B.Tech CSE graduate and a digital creative driven by curiosity and storytelling.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                I enjoy working with{" "}
                <span className="font-medium text-gray-900">
                  vibrant colors, creating visuals that spark interest and make people feel something.
                </span>
                My approach is all about blending creativity with curiosity, turning simple ideas into engaging experiences.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                I also explore the use of{" "}
                <span className="font-semibold text-yellow-600">
                  AI
                </span>{" "}
                to enhance creativity, always experimenting with new ways to make visuals more dynamic, meaningful, and memorable.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {socialStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-yellow-600" />
                      <span className="text-xs font-medium text-gray-500">
                        {stat.platform}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Experience, Skills, Tools */}
          <div className="lg:col-span-7 space-y-8">
            {/* Experience Timeline */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-600" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    {/* Timeline dot */}
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-yellow-500 border-2 border-white" />
                    
                    <div className="mb-1 flex flex-wrap items-baseline gap-2">
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-gray-500">• {exp.company}</span>
                    </div>
                    <span className="block text-xs font-medium text-yellow-600 mb-2">
                      {exp.period}
                    </span>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Skills */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tools */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-yellow-600" />
                  Tools & Software
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-yellow-50 text-gray-700 hover:text-yellow-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-yellow-200 transition-colors cursor-default"
                      title={tool.level}
                    >
                      {tool.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-600" />
                  Core Strengths
                </h3>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 bg-yellow-50 rounded-lg flex-shrink-0">
                          <Icon className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-gray-900">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-600">
                            {skill.description}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;