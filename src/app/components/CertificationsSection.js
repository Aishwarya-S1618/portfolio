import { motion } from "framer-motion";

const CertificationsSection = ({ colors }) => {
  const certificates = [
    {
      title: 'Meta Front-End Developer Specialization',
      provider: 'Coursera',
      description: 'Specialized in building interactive web interfaces, mastering front-end frameworks, and implementing responsive designs to create seamless user experiences.',
      link: 'https://coursera.org/share/7f05a6e8bb8b62adea1f1da56b612d03'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      provider: 'Microsoft',
      description: 'Gained expertise in cloud services, deployment strategies, and scalable architecture for modern applications, strengthening cloud proficiency.',
      link: 'https://learn.microsoft.com/en-us/users/shivareddyaishwarya-6414/transcript/dq16ra8xg3qo96x'
    },
    {
      title: 'Python Specialization',
      provider: 'University of Michigan | Coursera',
      description: 'Mastered Python for data manipulation, automation, and efficient software solutions, improving problem-solving and software development skills.',
      link: 'https://coursera.org/share/a61f2a8004c1fe728a95ba740e6fee0a'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="border rounded-xl p-4 shadow-lg flex flex-col items-center justify-center text-center space-y-3 transition-transform"
            style={{ backgroundColor: colors.cardBg, borderColor: colors.accent }}
            whileHover={{ scale: 1.05, backgroundColor: colors.skillsBg }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold" style={{ color: colors.text }}>{cert.title}</h3>
            <p className="text-sm" style={{ color: colors.textAccent }}>{cert.provider}</p>
            <p className="text-sm" style={{ color: colors.text }}>{cert.description}</p>
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 border rounded-sm transition"
              style={{ color: colors.accent, backgroundColor: colors.baseBg, borderColor: colors.accent, fontWeight: 'bold' }}
              whileHover={{ color: colors.hover, borderColor: colors.hover }}
            >
              View Certificate
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
