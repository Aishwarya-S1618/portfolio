const AboutSection = ({ colors }) => {
  const text = "Hi, I'm a passionate Software Development Engineer with over 2.7 years of experience turning ideas into impactful solutions. Whether it's building scalable applications using Java Spring Boot, writing efficient Python scripts, enhancing React interfaces, or streamlining Open Banking APIs with AWS. \n\nI find joy in solving real-world problems through clean, thoughtful code. Over the past couple years, I’ve shipped features, fixed bugs, improved performance, and learned how to wear multiple hats in fast-paced environments. \n\nI believe great software is more than just code — it's about creating experiences that make people's lives easier. I'm committed to building scalable solutions, improving system efficiency, and collaborating with teams to deliver results that truly matter.";

const languages = [
  "Java",
  "Python",
  "JavaScript (ES6+)",
  "SQL"
];

const frameworkSkills = [
  "Spring Boot",
  "React.js",
  "Next.js",
  "Bootstrap"
];

const toolSkills = [
  "Git",
  "GitHub",
  "Postman",
  "MySQL",
  "Snowflake",
  "VS Code",
  "IntelliJ IDEA"
];

const cloudSkills = [
  "AWS (Lambda, EC2, S3, DynamoDB)",
  "Azure Fundamentals"
];

const csConcepts = [
  "Data Structures & Algorithms",
  "REST APIs",
  "Rate Limiting",
  "Caching (Redis)",
  "Authentication & Authorization"
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Attention to Detail"
];

  
  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>About Me</h2>
      {text.split('\n').map((paragraph, index) => (
        <p key={index} className="text-lg max-w-4xl mx-auto mb-4">{paragraph}</p>
      ))}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {languages.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg1, color: colors.text }}>{skill}</span>
        ))}
        {frameworkSkills.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg2, color: colors.text }}>{skill}</span>
        ))}
        {toolSkills.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg3, color: colors.text }}>{skill}</span>
        ))}
        {cloudSkills.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg4, color: colors.text }}>{skill}</span>
        ))}
        {csConcepts.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg5, color: colors.text }}>{skill}</span>
        ))}
        {softSkills.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg6, color: colors.text }}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
