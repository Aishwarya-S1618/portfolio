import { motion } from "framer-motion";

const ExperienceSection = ({ colors }) => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-2 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>Experience</h2>
      <div className="relative mx-auto lg:w-full sm:w-full md:w-3/4 md:border-l-4 lg:border-l-4 sm:border-l-0" style={{ borderColor:colors.accent, borderWidth: '0 0 0 4px' }}>
        {[
        {
          company: 'Accenture',
          role: 'Application Engineering Analyst',
          date: 'Nov 2024 – Present',
          details: [
            'Automated Open Banking AISP flow using Python and AWS Lambda, improving operational efficiency and reducing manual testing efforts by 75%.',
            'Drove API improvement initiatives by analyzing production issues using Splunk and collaborating across teams, resulting in a 10% reduction in API error rates and enhanced system stability.',
            'Implemented distributed rate limiting for Passkey login using Spring Boot and Redis, reducing brute-force/DoS attacks by 85% and server load by 25%.',
            'Built a fail-safe mechanism in the Enterprise Group Management app to prevent mass unintended updates, cutting critical errors by 30%.',
            'Improved rule evaluation job performance by caching user attributes in Redis, reducing DB load and execution time by 75%.'
          ]
        },
        {
          company: 'Accenture',
          role: 'Associate Software Engineer',
          date: 'Nov 2022 – Nov 2024',
          details: [
            'Developed sleek and efficient UI components for the Shift Allowance Calculator using React.js, enhancing accessibility and performance.',
            'Created a Python-powered SQL code review tool that reduced query errors by 33%, earning the ACE Award for its impact.',
            'Enhanced the SQL review tool with line-specific diagnostics, reducing time and effort by 30%.',
            'Developed a performant Python-based SQL query review system from scratch that identified inefficient access patterns and reduced DB latency by 40%.',
            'Led research to improve the Leave Tracker tool, enhancing functionality tailored to business needs.',
            'Applied Snowflake and SQL to manage data efficiently, enabling swift and accurate business insights.',
            'Maintained system stability by proactively identifying and resolving potential issues.',
            'Fostered team collaboration by organizing team events and building a positive work environment.'
          ]
          }
        ].map((job, index) => (
          <motion.div key={index} className="mb-8 ml-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}>
            <div className="absolute w-4 h-4 rounded-full -left-2.5 hidden sm:block" style={{ backgroundColor: colors.modalTechBg }}></div>
            <div className="md:p-6 lg:p-6 sm:p-2 rounded-lg shadow-lg border-l-4" style={{ borderColor: colors.accent, backgroundColor: colors.cardBg }}>
              <h3 className="text-2xl font-semibold p-1" style={{ color: colors.text }}>{job.role} @ {job.company}</h3>
              <p className="text-sm" style={{ color: colors.textAccent }}>{job.date}</p>
              <ul className="mt-2 px-6 sm:px-0">
                {job.details.map((detail, detailIndex) => (
                  <li key={detailIndex} style={{ listStyleType: 'circle' , textAlign: 'left', padding: '0.5rem'}}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Subtle Internships Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4" style={{color:colors.accent}}>Internships</h3>
        <div className=" text-sm space-y-4" style={{margin: '0 auto', color: colors.textAccent}}>
          {[ 
            {
              company: 'KSRSAC',
              role: 'Web Developer Intern',
              date: 'May 2022 – June 2022',
              details: 'Developed sleek, responsive web interfaces using JavaScript and Bootstrap to improve user engagement.'
            },
            {
              company: 'IC Solutions',
              role: 'Full Stack Engineer Intern',
              date: 'March 2021 – June 2021',
              details: 'Designed and developed full-stack application that improved business processes for clients, increasing efficiency by 40%.'
            }
          ].map((intern, index) => (
            <div key={index} className=" p-4 rounded-lg" style={{borderLeft: `4px solid ${colors.accent}`, backgroundColor: colors.modalBg}}>
              <h4 className="font-semibold">{intern.role} @ {intern.company}</h4>
              <p className="text-xs">{intern.date}</p>
              <p className="mt-1">{intern.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
