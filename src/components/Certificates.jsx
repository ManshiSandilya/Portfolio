import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certificatesList = [
  { name: "Infosys Course Certifications", file: "/CERTIFICATES/INFOSYS COURSE 4 CERTIFICATE.pdf", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", issuerColor: "#007cc3" },
  { name: "Network Communication", file: "/CERTIFICATES/Coursera Fundamentals of Network Communication.pdf", company: "Coursera", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg", issuerColor: "#0056D2" },
  { name: "Full Stack Web Bootcamp", file: "/CERTIFICATES/udemy web dev bootcamp.pdf", company: "Udemy", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg", issuerColor: "#A435F0" },
  { name: "Generative AI", file: "/CERTIFICATES/udemy gen ai.pdf", company: "Udemy", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg", issuerColor: "#A435F0" },
  { name: "Java Programming", file: "/CERTIFICATES/week1 neptel.pdf", company: "NPTEL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/NPTEL_logo.svg/1200px-NPTEL_logo.svg.png", issuerColor: "#FF5E00" },
  { name: "Cybersecurity Bootcamp", file: "/CERTIFICATES/Manshisandilya cipherschool.pdf", company: "CipherSchools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", issuerColor: "#EF4444" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding" style={{ position: 'relative', width: '100%', margin: '0 auto', zIndex: 10, background: 'linear-gradient(to bottom, #0D2C2D 0%, var(--primary) 250px, var(--primary) 100%)' }}>
      <style>{`
        .cert-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .cert-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .comp-logo-area {
          height: 140px;
          background: var(--tertiary);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
      `}</style>

      <motion.div>
        <p className="sub-text">Continuous Learning</p>
        <h2 className="head-text">Certificates.</h2>
      </motion.div>
      
      <div className="bento-container" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {certificatesList.map((cert, index) => (
           <motion.a 
             key={index}
             href={cert.file}
             target="_blank"
             rel="noreferrer"
             className="cert-card"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             viewport={{ once: true }}
           >
             <div className="comp-logo-area">
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: cert.issuerColor, opacity: 0.8 }} />
                <img 
                  src={cert.logo} 
                  alt={cert.company} 
                  style={{ width: 'auto', height: '50px', objectFit: 'contain', opacity: 0.9, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
                />
                <h3 style={{ display: 'none', color: '#fff', fontSize: '1.5rem', fontWeight: 800 }}>{cert.company}</h3>
             </div>
             
             <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--black-100)' }}>
               <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 }}>{cert.name}</h3>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                 <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{cert.company}</p>
                 <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '50%' }}>
                   <ExternalLink color="var(--accent)" size={18} />
                 </div>
               </div>
             </div>
           </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
