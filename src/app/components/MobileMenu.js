import { motion } from 'framer-motion';

const MobileMenu = ({ menuOpen, setMenuOpen, colors }) => {
  return (
    <motion.AnimatePresence>
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
    </motion.AnimatePresence>
  );
};

export default MobileMenu;
