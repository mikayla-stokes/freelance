import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

export default function FreelancerPortfolio() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    "Logo Design",
    "Web Development",
    "UI/UX Design",
    "Social Media Marketing",
    "JavaScript",
    "React",
    "HTML/CSS"
  ];

  const projects = [
    {
      title: "Stokes, Rees, & Co. Logo",
      description: "Professional logo design for a CPA firm.",
      type: "Logo Design"
    },
    {
      title: "Graduation Website",
      description: "Celebration site for college graduation.",
      type: "Web Development"
    },
    {
      title: "Portfolio Website",
      description: "Interactive personal portfolio to showcase skills.",
      type: "Web Development"
    },
    {
      title: "On50 Apartments Socials",
      description: "Managed and created content for student housing.",
      type: "Social Media Marketing"
    },
    {
      title: "Hybris Band Branding",
      description: "Logo and social media for my college band.",
      type: "Logo Design"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-400">
          Mikayla Stokes
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Freelance Designer & Developer | Logos, Websites, and Social Media Magic
        </p>
      </section>

      <Tabs defaultValue="skills" className="w-full max-w-4xl mx-auto">
        <TabsList className="flex justify-center gap-2 mb-8">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 p-4 rounded-2xl text-center shadow-xl cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          {hoveredSkill && (
            <motion.p
              className="mt-6 text-center text-pink-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Passionate about {hoveredSkill.toLowerCase()}.
            </motion.p>
          )}
        </TabsContent>

        <TabsContent value="projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-2xl p-5 shadow-lg"
              >
                <h3 className="text-xl text-pink-300 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="text-xs text-pink-400">
                          {project.type}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{`Category: ${project.type}`}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mikayla Stokes. All rights reserved.
      </footer>
    </main>
  );
}