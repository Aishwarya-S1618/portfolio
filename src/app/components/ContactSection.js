import { motion } from "framer-motion";

const ContactSection = ({ colors }) => {
  const handleMailTo = () => {
    const subject = encodeURIComponent(`Hello from your Portfolio`);
    const body = encodeURIComponent(`Hi,\nI’m interested in getting in touch to discuss [specific topic].\n Looking forward to your response.`);
    window.location.href = `mailto:aishwarya.s.developer@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>Contact Me</h2>
      <div className="flex justify-center space-x-6">
        {/* Download Resume Button */}
        <motion.a
          href="/resume.pdf" // Update with actual path
          download="My_Resume.pdf"
          className="px-6 py-3 font-semibold rounded-lg" 
          style={{ backgroundColor: colors.button, color: colors.modalTechText }}
          whileHover={{ backgroundColor: colors.hover }}>
          Download Resume
        </motion.a>
        {/* Say Hello Button */}
        <motion.button
          className="px-6 py-3 font-semibold rounded-lg ml-4" 
          style={{ borderColorColor: colors.accent, color: colors.accent , border: '3px solid' }}
          whileHover={{ borderColor: colors.hover, color: colors.hover }}
          onClick={handleMailTo}>

          Say Hello
        </motion.button>
      </div>
    </section>
  );
};

export default ContactSection;
