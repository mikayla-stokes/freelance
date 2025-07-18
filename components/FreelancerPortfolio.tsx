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
        { src: "/images/SxS_logo_text.png" }
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
      relatedSkills: ["Social Media Marketing"],
      media: [
        { src: "/images/hybris_photo.png", type: "image" },
        { src: "/images/hybris_video.mov", type: "video" }
      ]
    },
    {
      title: "On50 Apartments Social Media Accounts",
      description: "Logo and social strategy for On50 Apartments.",
      relatedSkills: ["Social Media Marketing"],
      media: [
        { src: "/images/on50_1.jpg", type: "image" },
        { src: "/images/on50_2.jpg", type: "image" },
        { src: "/images/on50_video.mov", type: "video" }
      ]
    }
  ];

  const relatedProjects = projects.filter(project => project.relatedSkills.includes(selectedSkill || ""));

  return (
    <main className="relative min-h-screen bg-white text-gray-800 px-6 py-12 font-sans overflow-hidden">
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

      <section className="relative z-10 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#b76e79' }}>
          Mikayla Stokes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Freelance Designer & Developer | Logos, Websites, and Social Media Marketing
        </p>
        <p className="text-md text-gray-500 mt-4 italic">
          Explore my work by selecting a skill below
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
                          {img.label && <h4 className="text-sm font-semibold text-[#b76e79] mb-1">{img.label}</h4>}
                          <img
                            src={img.src}
                            alt={img.label || 'Project image'}
                            className="rounded-lg border border-[#b76e79]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {project.media && (
                    <div className="flex flex-wrap gap-4 mt-4 items-start">
                      {project.media.map((item, idx) => (
                        item.type === "image" ? (
                          <img
                            key={idx}
                            src={item.src}
                            alt="Project media"
                            className="rounded-lg border border-[#b76e79] w-40"
                          />
                        ) : (
                          <video
                            key={idx}
                            src={item.src}
                            className="rounded-lg border border-[#b76e79] w-full max-w-md"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Design Process Visualization */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#b76e79' }}>My Design Process</h2>
        <div className="flex flex-wrap justify-between items-center gap-4 text-center">
          {["Consultation", "Sketch", "Refine", "Finalize"].map((step, i, arr) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#b76e79] text-white text-lg font-bold">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-2">{step}</p>
              </div>
              {i < arr.length - 1 && (
                <span className="text-2xl text-[#b76e79]">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Software Used */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#b76e79' }}>Tools & Software Used</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Canva", "PicCollage", "Video Pad", "JavaScript", "Python", "HTML/CSS", "React", "VS Code"].map((tool, idx) => (
            <div
              key={idx}
              className="px-4 py-2 border border-[#b76e79] rounded-xl text-sm text-[#b76e79] bg-white shadow"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mikayla Stokes. All rights reserved.
      </footer>
    </main>
  );
}