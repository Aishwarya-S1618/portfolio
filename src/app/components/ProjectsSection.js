
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProjectsSection = ({colors }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when closed
    }
  }, [selectedProject]);
  const projects = [
    {
      title: 'Portfolio Website',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      description: 'Developed a responsive portfolio website with interactive animations and seamless transitions for a modern user experience.',
      link: 'https://github.com/Aishwarya-S1618/portfolio',
      },
    {
    title: 'Automation: Open Banking API Flow',
    tech: ['Python', 'AWS Lambda'],
    description: 'Built a smart automation tool that accelerated Open Banking AISP flow, reducing manual testing time by 60% and improving system reliability.',
    },
    {
    title: 'Little Lemon Restaurant',
    tech: ['React', 'JavaScript', 'CSS'],
    description: 'Developed a vibrant restaurant website featuring an online menu, reservation system, and seamless cart functionality for an engaging user experience.',
    link: 'https://github.com/Aishwarya-S1618/Little-Lemon',
    },
    {
    title: 'SQL Code Review Tool',
    tech: ['Python', 'SQL'],
    description: 'Created a Python-powered SQL code review tool that reduced query errors by 33%, improving efficiency. Earned the ACE Award for impact.',
    },
    {
    title: 'Tic-Tac-Toe Game',
    tech: ['React', 'JavaScript'],
    description: 'Designed a playful and interactive Tic-Tac-Toe game using React.js with smart state management and responsive UI.',
    link: 'https://aishwarya-s1618.github.io/TicTacToe/',
    },
    {
    title: 'Role Based Access Management System',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    description: 'Developed a robust Role Based Access Management System using Java and Spring Boot, enhancing security and user management for enterprise applications.',
    link: 'https://github.com/Aishwarya-S1618/RBAC'
    }
    ];
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full h-48 flex flex-col items-center justify-center rounded-xl cursor-pointer shadow-lg transition-transform p-4"
            style={{ backgroundImage: `linear-gradient(to bottom right, ${colors.projectBgFrom} 15%, ${colors.projectBgTo} 55%)` }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-lg font-semibold" style={{ color: colors.baseText }}>{project.title}</div>
            <div className="flex gap-2 mt-2 flex-wrap justify-center">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-xs px-2 py-1 rounded-md font-bold" style={{ color: colors.modalTechText, backgroundColor: colors.modalTechBg }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
        {selectedProject && (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={() => setSelectedProject(null)}
        >
            <div
            className="relative text-white rounded-lg p-6 w-full max-w-lg shadow-2xl"
            style={{ backgroundColor: colors.modalBg, color: colors.modalText }}
            onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                    <div className="flex gap-2 flex-wrap mb-4">
                        {selectedProject.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-md" style={{ color: colors.modalTechText, backgroundColor: colors.modalTechBg }}>
                            {tech}
                        </span>
                        ))}
                    </div>
                <p className="text-sm mb-4" style={{color:colors.modalText}}>{selectedProject.description}</p>
                {selectedProject.link ? (
                  <motion.a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block underline hover:text-[#FADA7A] transition"
                    style={{ color: colors.accent }}
                    whileHover={{
                      scale: 1.05,
                      color: colors.hover
                    }}>
                    View Project
                  </motion.a>
                ) : (
                  <p className="text-sm italic mt-2" style={{ color: colors.modalText }}>
                    Internal project — code not publicly available
                  </p>
                )}
            </div>
      </div>
    )}
    </section>
  );
};


export default ProjectsSection;
