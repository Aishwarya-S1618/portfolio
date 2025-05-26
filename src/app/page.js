'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import MobileMenu from './components/MobileMenu';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import InteractiveHero from './components/hero';

// Main Portfolio Component
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Define theme colors
  const themes = {
    dark: {
      background: '#0A192F',
      text: '#CCD6F6',
      button: '#64FFDA',
      accent: '#64FFDA',
      hover: '#FADA7A',
      particleColor:'rgba(100, 255, 219, 0.5)',
      linkText: '#F5F0CD',
      mobileBg: 'rgba(10, 25, 47, 0.95)',
      cardBg: '#112240',
      timelineBorder: '#64FFDA',
      skillBg: '#112240',
      skillBg1: '#401F2D', // Light Red hue
      skillBg2: '#4A3B1D', // Warm Yellow/Gold hue
      skillBg3: '#1F3D2D', // Light Green hue
      skillBg4: '#1D3A53', // Light Blue hue
      skillBg5: '#35274E', // Light Purple hue
      skillBg6: '#3E3225', // Brown hue
      projectBgFrom: '#64FFDA',
      projectBgTo: '#112240',
      modalBg: '#112240',
      modalText: '#EDEFEE',
      modalTechBg: '#64FFDA',
      modalTechText: '#0A192F',
      textAccent: '#8892B0',
      baseBg: 'black',
      baseText: 'white'
    },
    light: {
      background:'#FAF5F0',
      text: '#0A192F',
      button: '#007B6E',
      accent: '#007B6E',
      hover: '#B71C1C',
      particleColor:'rgba(0, 123, 111, 0.5)',
      linkText: '#0056A6',
      mobileBg: 'rgba(250, 245, 240, 0.95)',
      cardBg: '#FFFFFF',
      timelineBorder: '#007B6E',
      skillBg: '#E3F8F4',
      skillBg1: '#FFE5E5', // Light Red hue
      skillBg2: '#FFF4CC', // Light Yellow hue
      skillBg3: '#E1FAE4', // Light Green hue
      skillBg4: '#E0F0FF', // Light Blue hue
      skillBg5: '#F3E5F5', // Light Purple hue
      skillBg6: '#EFE3D6', // Light Brown hue
      modalText: '#0A192F',
      projectBgFrom: '#B4F1E1',
      projectBgTo: '#E3F8F4',
      modalBg: '#FFFFFF',
      modalText: '#0A192F',
      modalTechBg: '#007B6E',
      modalTechText: '#FFFFFF',
      textAccent: '#405A79',
      baseBg: '#FAF5F0',
      baseText: '#0A192F'
    }
  };

  const colors = themes[theme];

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Project data
  

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.background, color: colors.text }}>
      <NavigationBar colors={colors} toggleTheme={toggleTheme} theme={theme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} colors={colors} />
      <InteractiveHero colors={colors} />

      {/* Mobile Menu (Animated Overlay) */}
      <motion.div>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-95 flex flex-col justify-center items-center z-50"
            style={{ backgroundColor: colors.mobileBg }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-3xl"
              style={{ color: colors.accent }}
            >
              ×
            </motion.button>

            <div className="flex flex-col items-center space-y-6">
              {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-2xl transition"
                  style={{ color: colors.text }}
                  whileHover={{ scale: 1.1, color: colors.hover }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
      <AboutSection colors={colors} />
      <ProjectsSection colors={colors} />
      <ExperienceSection colors={colors} />
      <EducationSection colors={colors} />
      <CertificationsSection colors={colors} />
      <ContactSection colors={colors} />

      <footer className="py-6 text-center text-sm" style={{ color: colors.textAccent }}>
        © 2025 Aishwarya S| Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
