import { motion } from 'framer-motion';

const HeroSection = ({ colors }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I am Aishwarya S
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Full Stack Developer | Spring Boot & React Enthusiast
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 font-semibold rounded-lg transition"
        style={{
          backgroundColor: colors.button,
          color: colors.modalTechText
        }}
        whileHover={{
          backgroundColor: colors.hover,
          cursor: 'pointer'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        See My Work
      </motion.a>
    </section>
  );
};

export default HeroSection;
