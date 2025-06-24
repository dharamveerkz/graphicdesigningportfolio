import React from "react";
import { Palette, Users, Zap, Code } from "lucide-react";
import profileImage from "../assest/dp.png"; // Make sure this path is correct

const About: React.FC = () => {
  const softSkills = [
    {
      name: "Creative",
      icon: Palette,
      description: "Innovative design thinking",
    },
    {
      name: "Collaborative",
      icon: Users,
      description: "Team-oriented approach",
    },
    {
      name: "Adaptable",
      icon: Zap,
      description: "Quick learning & flexibility",
    },
    {
      name: "Organized",
      icon: Code,
      description: "Structured project management",
    },
  ];

  const tools = [
    "Canva",
    "Adobe Illustrator",
    "Sketch",
    "Infinite Design",
    "Photoshop",
    "Figma",
    "Microsoft Designer",
  ];

  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Me */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 bg-gray-100 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Dharamveer Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hi, I'm{" "}
                <span className="font-semibold text-yellow-600">
                  Dharamveer Kumar
                </span>{" "}
                – a graphic designer, frontend developer, and branding
                strategist. I specialize in creating impactful visuals for
                social media, merchandise, marketing, and web.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe{" "}
                <span className="font-semibold">design that connects</span> can
                turn ideas into powerful identities.
              </p>
            </div>
          </div>

          {/* Right Column - Experience & Soft Skills */}
          <div className="space-y-8">
            {/* Graphic Design Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Graphic Design Experience
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                I’ve worked on a variety of creative projects — from branding
                for NGOs and clubs, to poster, flex, and merchandise designs for
                college and event campaigns. My focus has always been on
                building visual consistency with a touch of innovation.
              </p>

              <h4 className="text-xl font-semibold text-yellow-600 mb-2">
                Tools I Work With:
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-yellow-600" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-gray-50 p-4 rounded-xl hover:bg-yellow-50 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-5 h-5 text-yellow-600 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-gray-900">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
