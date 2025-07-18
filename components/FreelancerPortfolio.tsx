import { useState } from "react";
import { motion } from "framer-motion";

export default function FreelancerPortfolio() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    "Logo Design",
    "Web Development",
    "Social Media Marketing",
    "JavaScript",
    "React",
    "HTML/CSS"
  ];

  const projects = [
    {
      title: "Stokes, Rees, & Co. Logo",
      description: "Professional logo for a CPA firm.",
      relatedSkills: ["Logo Design"]
    },
    {
      title: "Stitch by Stitch Logo",
      description: "Logo for a friend's crocheting business.",
      relatedSkills: ["Logo Design"]
    },
    {
      title: "Graduation Website",
      description: "Custom celebration site for my college graduation.",
      relatedSkills: ["Web Development"]
    },
    {
      title: "Hybris Band Branding",
      description: "Logo and social strategy for my college band.",
      relatedSkills: ["Social Media Marketing"]
    },
    {
      title: "On50 Apartments Social Media Accounts",
      description: "Logo and social strategy for On50 Apartments.",
      relatedSkills: ["Social Media Marketing"]
    }
  ];

  const relatedProjects = projects.filter(project => project.relatedSkills.includes(hoveredSkill || ""));

  return (
    <main className="relative min-h-screen bg-white text-gray-800 px-6 py-12 font-sans overflow-hidden">
      {/* Side accents using bg.jpg with full opacity, wider size, and rose gold border */}
      <div className="absolute top-0 left-0 h-full w-40 z-0 border-r-4 border-[#b76e79]">
        <img
          src="/bg.jpg"
          alt="Left side detail"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 h-full w-40 z-0 border-l-4 border-[#b76e79]">
        <img
          src="/bg.jpg"
          alt="Right side detail"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="relative z-10 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#b76e79' }}>
          Mikayla Stokes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Freelance Designer & Developer | Logos, Websites, and Social Media Marketing
        </p>
      </section>

      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#b76e79' }}>Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-[#b76e79] bg-white p-4 rounded-2xl text-center shadow-lg hover:shadow-[0_0_15px_#b76e79] transition cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {hoveredSkill && relatedProjects.length > 0 && (
          <motion.div
            className="mt-8 grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {relatedProjects.map((project, i) => (
              <div
                key={i}
                className="border border-[#b76e79] rounded-xl p-4 bg-white shadow"
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b76e79' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </section>

      <section className="relative z-10 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#b76e79' }}>Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-[#b76e79] rounded-xl p-6 shadow-md bg-white hover:shadow-[0_0_20px_#b76e79] transition"
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: '#b76e79' }}>{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mikayla Stokes. All rights reserved.
      </footer>
    </main>
  );
}