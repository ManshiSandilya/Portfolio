import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: "Java, C++, C, Python, JavaScript, HTML, CSS, SQL" },
  { category: "Frameworks", items: "MERN Stack, React.js, Node.js, Express.js, Bootstrap" },
  { category: "Tools/Platforms", items: "Docker, Kubernetes, AWS, Git/GitHub, MongoDB, Linux" },
  { category: "Soft Skills", items: "Problem-Solving, Team Collaboration, Adaptability, Debugging" },
];

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', width: '100%', margin: '0 auto', zIndex: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="sub-text">Professional Proficiencies</p>
        <h2 className="head-text">Technical & Soft Skills.</h2>
      </motion.div>

      <motion.p
        className="mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ 
          color: 'var(--secondary)', 
          fontSize: '1.25rem', 
          maxWidth: '850px', 
          lineHeight: '1.85', 
          margin: '2rem 0', 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          letterSpacing: '0.01em'
        }}
      >
        Clean code, structured logic, and a habit of fixing things that were "working fine." Comfortable building, debugging, and improving systems until they actually behave the way they should. Approaches problems with patience, curiosity, and just enough stubbornness to not give up halfway.
      </motion.p>

      <div className="bento-container">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="bento-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>{skill.category.charAt(0)}</span>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>{skill.category}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skill.items.split(', ').map(item => (
                <span key={item} style={{ background: 'var(--black-100)', padding: '0.5rem 1rem', borderRadius: '8px', color: 'var(--secondary)', fontSize: '0.9rem', border: '1px solid var(--border-color)' }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
