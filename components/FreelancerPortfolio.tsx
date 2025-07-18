import { useState } from "react";
import { motion } from "framer-motion";

export default function FreelancerPortfolio() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    "Logo Design",
    "Web Development",
    "Social Media Marketing"
  ];

  const projects = [
    {
      title: "Stokes, Rees, & Co. Logo",
      description: "Professional logo for a CPA firm.",
      relatedSkills: ["Logo Design"],
      images: [
        { src: "/images/src_og.jpg", label: "Original Logo" },
        { src: "/images/src_new.jpg", label: "Re-designed Logo" }
      ]
    },
    {
      title: "Stitch by Stitch Logo",
      description: "Logo for a friend's crocheting business.",
      relatedSkills: ["Logo Design"],
      images: [
        { src: "/images/SxS_inspo.jpg", label: "Logo Inspiration Photo" },
        { src: "/images/SxS_sketch.jpg", label: "Sketch" },
        { src: "/images/SxS_logo_image.png", label: "Final Logo Design" },
        { src: "/images/SxS_logo_text.png", label: "Final Logo Design" }
      ]
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

  const relatedProjects = projects.filter(project => project.relatedSkills.includes(selectedSkill || ""));

  return (
    <main className="relative min-h-screen bg-white text-gray-800 px-6 py-12 font-sans overflow-hidden">
      {/* Side accents using bg.jpg with full opacity, wider size, and rose gold border */}
      <div className="absolute top-0 left-0 h-full w-40 z-0 border-r-4 border-[#b76e79]">
        <img
          src="/images/bg.jpg"
          alt="Left side detail"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 h-full w-40 z-0 border-l-4 border-[#b76e79]">
        <img
          src="/images/bg.jpg"
          alt="Right side detail"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="relative z-10 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#b76e79' }}>
          Mikayla Stokes
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold mb-4" style={{ color: 'gray' }}>
          Freelance Designer & Developer | Logos, Websites, and Social Media Marketing
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select a skill to see examples of projects I have completed related to that skill.
        </p>
      </section>

      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#b76e79' }}>Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`border-2 border-[#b76e79] bg-white p-4 rounded-2xl text-center shadow-lg transition cursor-pointer ${selectedSkill === skill ? 'shadow-[0_0_15px_#b76e79]' : ''}`}
              onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {selectedSkill && relatedProjects.length > 0 && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#b76e79' }}>
              Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedProjects.map((project, i) => (
                <div
                  key={i}
                  className="border border-[#b76e79] rounded-xl p-4 bg-white shadow"
                >
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#b76e79' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.images && (
                    <div className="space-y-4">
                      {project.images.map((img, idx) => (
                        <div key={idx}>
                          <h4 className="text-sm font-semibold text-[#b76e79] mb-1">{img.label}</h4>
                          <img
                            src={img.src}
                            alt={img.label}
                            className="rounded-lg border border-[#b76e79]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      <footer className="relative z-10 mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mikayla Stokes. All rights reserved.
      </footer>
    </main>
  );
}