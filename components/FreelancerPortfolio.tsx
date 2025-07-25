import { useState } from "react";
import { motion } from "framer-motion";

export default function FreelancerPortfolio() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [fullscreenMedia, setFullscreenMedia] = useState<
    { src: string; type: 'image' | 'video' } | null
  >(null);

  const skills = ["Logo Design", "Web Development", "Social Media Marketing"];

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
        { src: "/images/SxS_sketch.jpeg", label: "Sketch" },
        { src: "/images/SxS_logo_image.png", label: "Final Logo Design" },
        { src: "/images/SxS_logo_text.png", label: "Logo with Text" }
      ]
    },
    {
      title: "Graduation Website",
      description: "Custom celebration site for my college graduation.",
      relatedSkills: ["Web Development"],
      images: [
        { src: "/images/graduation_website_home.png" },
        { src: "/images/graduation_website_things_to_do.png" }
      ]
    },
    {
      title: "Happy Hour Specials Website",
      description: "A fun site listing happy hour deals at me and my friends' favorite local spots.",
      relatedSkills: ["Web Development"],
      images: [
        { src: "/images/happy_hour_website.png" }
      ]
    },
    {
      title: "Hybris Band Branding",
      description: "Logo and social strategy for my college band.",
      relatedSkills: ["Social Media Marketing"],
      media: [
        { src: "/images/hybris_video.MOV", type: "video" },
        { src: "/images/hybris_photo.PNG", type: "image" }
      ]
    },
    {
      title: "On50 Apartments Social Media Accounts",
      description: "Logo and social strategy for On50 Apartments.",
      relatedSkills: ["Social Media Marketing"],
      media: [
        { src: "/images/on50_video.mov", type: "video" },
        { src: "/images/on50_ig.PNG", type: "image" },
        { src: "/images/on50_tiktok.PNG", type: "image" }
      ]
    }
  ];

  const relatedProjects = projects.filter(project => project.relatedSkills.includes(selectedSkill || ""));

  return (
    <main className="relative min-h-screen bg-white text-gray-800 px-6 py-12 font-sans overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 h-full w-40 z-0 border-r-4 border-[#b76e79]">
        <img src="/images/bg.jpg" alt="Left side detail" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 h-full w-40 z-0 border-l-4 border-[#b76e79]">
        <img src="/images/bg.jpg" alt="Right side detail" className="w-full h-full object-cover" />
      </div>

      {/* Header */}
      <section className="relative z-10 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#b76e79]">Mikayla Stokes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Freelance Designer & Developer | Logos, Websites, and Social Media Marketing
        </p>
        <p className="text-md text-gray-500 mt-4 italic">
          Explore my work by selecting a skill below
        </p>
      </section>

      {/* Skills Selector */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#b76e79]">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`border-2 border-[#b76e79] bg-white p-4 rounded-2xl text-center shadow-lg transition cursor-pointer ${
                selectedSkill === skill ? 'shadow-[0_0_15px_#b76e79]' : ''
              }`}
              onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {selectedSkill && (
          <div className="text-center mt-4">
            <button onClick={() => setSelectedSkill(null)} className="text-sm text-[#b76e79] underline">
              Clear Selection
            </button>
          </div>
        )}
      </section>

      {/* Project Display */}
      {selectedSkill && relatedProjects.length > 0 && (
        <motion.div
          className="relative z-10 w-full max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-center mb-4 text-[#b76e79]">Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedProjects.map((project, i) => (
              <div key={i} className="border border-[#b76e79] rounded-xl p-4 bg-white shadow">
                <h3 className="text-lg font-bold mb-2 text-[#b76e79]">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.images && (
                  <div className="space-y-4">
                    {project.images.map((img, idx) => (
                      <div key={idx}>
                        {img.label && (
                          <h4 className="text-sm font-semibold text-[#b76e79] mb-1">{img.label}</h4>
                        )}
                        <img
                          src={img.src}
                          alt={img.label || 'Project image'}
                          className="rounded-lg border border-[#b76e79] transition-transform duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => setFullscreenMedia({ src: img.src, type: 'image' })}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {project.media && (
                  <div className="flex flex-wrap gap-4 mt-4 items-start">
                    {project.media.map((item, idx) => {
                      const isHybrisPhoto = item.src.includes("hybris_photo");
                      const isOn50IG = item.src.includes("on50_ig");
                      const isOn50TikTok = item.src.includes("on50_tiktok");

                      const imageClass = `rounded-lg border border-[#b76e79] transition-transform duration-300 hover:scale-105 cursor-pointer ${
                        isHybrisPhoto ? "w-full max-w-md" : ""
                      } ${
                        isOn50IG || isOn50TikTok ? "w-[48%]" : ""
                      }`;

                      return item.type === "image" ? (
                        <img
                          key={idx}
                          src={item.src}
                          alt="Project media"
                          className={imageClass}
                          onClick={() => setFullscreenMedia({ src: item.src, type: 'image' })}
                        />
                      ) : (
                        <video
                          key={idx}
                          src={item.src}
                          className="rounded-lg border border-[#b76e79] w-full max-w-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          onClick={() => setFullscreenMedia({ src: item.src, type: 'video' })}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Design Process */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#b76e79]">My Design Process</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          {["Consultation", "Sketch/Demo", "Refine", "Finalize"].map((step, i, arr) => (
            <div key={i} className="flex items-end gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#b76e79] text-white text-2xl font-bold">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-2">{step}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="flex items-center" style={{ marginBottom: "3.75rem" }}>
                  <span className="text-[#b76e79] text-6xl leading-[1rem]">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Software */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#b76e79]">Tools & Software Used</h2>
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

      {/* Lightbox */}
      {fullscreenMedia && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setFullscreenMedia(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300"
            aria-label="Close full screen media"
          >
            ×
          </button>

          {fullscreenMedia.type === 'image' ? (
            <img
              src={fullscreenMedia.src}
              alt="Fullscreen preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            />
          ) : (
            <video
              src={fullscreenMedia.src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            />
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mikayla Stokes. All rights reserved.
      </footer>
    </main>
  );
}