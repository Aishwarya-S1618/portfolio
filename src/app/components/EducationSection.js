import { motion } from 'framer-motion';

const EducationSection = ({ colors }) => {
  return (
    <section id="education" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>Education</h2>
      <div className="rounded-lg shadow-lg p-6 text-left mx-auto" style={{ backgroundColor: colors.cardBg, maxWidth: 'calc(100% - 4rem)', marginBottom: '1rem' }}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold" style={{ color: colors.modalTechBg }}>Sir M Visvesvaraya Institute of Technology</h3>
            <p className="mt-1" style={{ color: colors.textAccent }}>Bachelors of Engineering - Information Science and Engineering  (2018 - 2022)</p>
            <p className="mt-1" style={{ color: colors.modalText, fontWeight: '600' }}>First Class with Distinction | CGPA: 9.04 </p>
            <div className="mt-4">
              <motion.a
                href="https://your-research-paper-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline transition" style={{color:colors.text}} whileHover={{ color: colors.hover }}
              >
                View Transcript
              </motion.a>
            </div>
          </div>
          <div className="hidden md:block w-px" style={{ backgroundColor: colors.modalTechBg }}></div>
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold" style={{ color: colors.modalTechBg }}>Final Year Project</h4>
            <p className="mt-2">
              <span style={{ color: colors.baseText ,  fontWeight:'600'}}>Emotion-Based Home Automation (Python, ML, IoT)</span><br />
              <span className="text-sm px-2 py-0.5" style={{color:colors.hover, backgroundColor: colors.baseBg, borderRadius: '10px', border: '1px solid black', fontWeight:'600'}}>Best Project Award by VTU</span>
            </p>
            <div className="mt-4">
              <motion.a
                href="https://your-research-paper-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition" style={{color:colors.text}} whileHover={{ color: colors.hover }}
              >
                View Research Paper
              </motion.a>
            </div>
          </div>
        </div>
      </div>
        <div className="rounded-lg shadow-lg p-6 text-left mx-auto" style={{ backgroundColor: colors.cardBg, maxWidth: 'calc(100% - 4rem)' }}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12" style={{ borderColor: colors.borderColor, marginBottom: '1rem' }}>
        <div
            className="w-full flex flex-wrap justify-between items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
            style={{backgroundColor:colors.cardBg, borderColor: colors.baseBg }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: colors.modalTechBg }}>Narayana PU College</h3>
            <p className="mt-1" style={{ color: colors.textAccent }}>Karnataka Pre-University Board - PCMC (2018)</p>
            <p className="mt-1" style={{ color: colors.modalText }}>Distinction | 94%</p>
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div
            className="w-full flex flex-wrap justify-between items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
            style={{ backgroundColor:colors.cardBg, borderColor: colors.baseBg }}
          >
            <h3 className="text-2xl font-semibold"
              style={{ color: colors.modalTechBg }}>
              BEL School ( CBSE )
            </h3>
              <p className="mt-1" style={{ color: colors.textAccent }}>
              Central Board of Secondary Education (2016)
              </p>
              <p className="mt-1" style={{ color: colors.modalText }}>
                Distinction | CGPA:10
              </p>
            </div>
          </div>
          </div>
    </section>
  );
};

export default EducationSection;