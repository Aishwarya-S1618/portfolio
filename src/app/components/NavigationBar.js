import { motion } from 'framer-motion';
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

const NavigationBar = ({ colors, toggleTheme, theme, menuOpen, setMenuOpen }) => {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-90 shadow-lg" style={{ backdropFilter: 'blur(2px)' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition relative shadow-lg px-6 py-2 rounded-md"
              style={{ color: colors.text, backgroundColor: colors.cardBg, fontSize: '1.2rem' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: colors.hover }}
            >
              {link}
            </motion.a>
          ))}
        </div>
        <motion.button onClick={toggleTheme} className="text-sm font-bold" >
          {theme === 'dark' ? <IoSunny style={{color:'#FADA7A', fontSize:'3rem', padding:'1px',  borderRadius:'100%'}}/> : <FaMoon style={{color:'#FFFFFF', backgroundColor: colors.textAccent, fontSize:'2.7rem', padding:'0.3rem', borderRadius:'100%'}}/>}

        </motion.button>
        <div className="md:hidden">
          <motion.button onClick={() => setMenuOpen(true)} className="text-2xl" style={{ color: colors.accent }}>
            ☰
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
