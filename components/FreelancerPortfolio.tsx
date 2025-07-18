import { useState } from "react";
import { motion } from "framer-motion";

export default function FreelancerPortfolio() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    "Logo Design",
    "Web Development",
    "UI/UX Design",
    "Social Media Marketing",
    "JavaScript",
    "React",
    "HTML/CSS"
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#b76e79' }}>
          Mikayla Stokes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Freelance Designer & Developer | Logos, Websites, and Social Media Magic
        </p>
      </section>

      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#b76e79' }}>Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-[#b76e79] bg-white p-4 rounded-2xl text-center shadow-lg cursor-pointer transition"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {hoveredSkill && (
          <motion.p
            className="mt-6 text-center"
            style={{ color: '#b76e79' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Passionate about {hoveredSkill.toLowerCase()}.
          </motion.p>
        )}
      </section>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mikayla Stokes. All rights reserved.
      </footer>
    </main>
  );
}