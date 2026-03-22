import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    phaseNum: "Phase 1",
    year: "2022 \u2014 2023",
    phaseTitle: "Academic Foundation \u2014 Matriculation",
    image: "/assets/phase1_bg.png",
    steps: [
      {
        id: 1,
        title: "Intermediate (Schooling)",
        desc: "Chauhan Public School. Graduated with 81%. Built foundational logic and mathematical skills."
      }
    ]
  },
  {
    phaseNum: "Phase 2",
    year: "2023 \u2014 Present",
    phaseTitle: "Higher Education \u2014 Bachelor's Degree",
    image: "/assets/phase1_bg.png", 
    steps: [
      {
        id: 1,
        title: "Bachelor of Technology - CSE",
        desc: "Lovely Professional University (CGPA: 9.3). Current undergraduate focusing on Computer Science and Engineering, core data structures, and algorithms."
      }
    ]
  },
  {
    phaseNum: "Phase 3",
    year: "2025",
    phaseTitle: "Cybersecurity \u2014 Specialized Training",
    image: "/assets/phase2_bg.png",
    steps: [
      {
        id: 1,
        title: "Network Security Fundamentals",
        desc: "Learned fundamentals of network security, cyber threats, system vulnerabilities, and secure coding practices."
      },
      {
        id: 2,
        title: "Security Assessments",
        desc: "Practiced basic security assessments, password policies, and risk mitigation techniques."
      },
      {
        id: 3,
        title: "Ethical Hacking Defense",
        desc: "Completed module-based tasks demonstrating ethical hacking awareness and defense strategies."
      }
    ]
  },
  {
    phaseNum: "Phase 4",
    year: "Continuous",
    phaseTitle: "Building & Engineering \u2014 Working on Projects",
    image: "/assets/phase3_bg.png",
    steps: [
      {
        id: 1,
        title: "Full-Stack Web Applications",
        desc: "Architecting and developing scalable solutions using MERN stack, integrating modern UI/UX principles."
      },
      {
        id: 2,
        title: "Solid Backend Systems",
        desc: "Writing backend logic that focuses on efficiency, performance, and clean code principles."
      }
    ]
  }
];

const Experience = () => {
  return (
    <>
      {/* Infinite Scrolling Marquee Transition */}
      <div style={{ width: '100vw', height: '4rem', display: 'flex', alignItems: 'center', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
          style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {Array(4).fill("LINKEDIN • GITHUB • BEHANCE • DRIBBBLE • TWITTER • MEDIUM • LEETCODE • CODEPEN • HACKERRANK • ").map((text, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1.1rem', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.2em', paddingRight: '2rem' }}>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <section id="experience" className="aesary-section">
        <div className="aesary-container">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '6rem', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--secondary)', fontSize: '1.25rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>The Journey</p>
          <h2 className="aesary-about-label" style={{ fontSize: '4rem', margin: 0 }}>Experience</h2>
        </motion.div>
        
        {phases.map((phase, index) => (
          <motion.div 
            key={index} 
            className="aesary-phase-card"
            style={{ top: `calc(100px + ${index * 30}px)` }}
          >
            {/* Background Image Container */}
            <div className="aesary-phase-bg" style={{ backgroundImage: `url(${phase.image})` }} />

            {/* Frost Overlay to ensure text readability */}
            <div className="aesary-phase-overlay" />

            <div className="aesary-phase-content">
              <div className="aesary-phase-header-block">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <h1 className="aesary-phase-num">{phase.phaseNum}</h1>
                  <span className="aesary-phase-year">{phase.year}</span>
                </div>
                <h2 className="aesary-phase-title">{phase.phaseTitle}</h2>
              </div>
              
              <div className="aesary-step-container">
                {phase.steps.map((step, i) => (
                  <div key={i} className="aesary-step-card">
                    <div className="aesary-step-badge">{step.id}</div>
                    <div className="aesary-step-text">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
