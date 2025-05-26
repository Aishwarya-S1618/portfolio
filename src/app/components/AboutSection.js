const AboutSection = ({ colors }) => {
  const text = "Hi, I'm a passionate Software Development Engineer with over two years of experience turning ideas into impactful solutions. Whether it's writing efficient Python scripts, building intuitive React interfaces, or streamlining Open Banking APIs with AWS, I thrive on solving real-world problems.\n\nI believe great software is more than just code — it's about creating experiences that make people's lives easier. I'm committed to building scalable solutions, improving system efficiency, and collaborating with teams to deliver results that truly matter.";
  
  const skills = [
    'Python', 
    'Java', 
    'JavaScript', 
    'React', 
    'Spring Boot', 
    'Next.js', 
    'SQL', 
    'MySQL', 
    'Snowflake', 
    'AWS (Lambda, EC2, S3, DynamoDB)', 
    'Azure (Fundamentals)', 
    'HTML/CSS', 
    'Bootstrap', 
    'Git', 
    'GitHub', 
    'Postman', 
    'Data Structures and Algorithms', 
    'Problem Solving', 
    'Team Collaboration', 
    'Communication Skills', 
    'Time Management', 
    'Detail-Oriented'
  ];
  
  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold inline-block mb-6" style={{ borderBottom: `4px solid ${colors.accent}` }}>About Me</h2>
      {text.split('\n').map((paragraph, index) => (
        <p key={index} className="text-lg max-w-4xl mx-auto mb-4">{paragraph}</p>
      ))}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.skillBg, color: colors.text }}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
