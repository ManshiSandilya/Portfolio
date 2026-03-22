import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss } from 'react-icons/si';

const mainProjects = [
  {
    isIntroSlide: true,
    name: "Project Work",
    description: "From rough ideas to real, working builds — each project has a story (and a few bugs behind it). Scroll to explore."
  },
  {
    name: "ENCODEX",
    description: "Engineered a privacy-focused messaging & calling system ensuring encrypted communication. Implemented AES encryption using MERN stack with secure key and data-handling workflows. Strengthened user confidentiality by developing a protected environment.",
    tags: [
      { name: "React", component: <FaReact size={16} /> },
      { name: "Node.js", component: <FaNodeJs size={16} /> },
      { name: "MongoDB", component: <SiMongodb size={16} /> }
    ],
    image: "/CERTIFICATES/project_images/Encodex.png",
    source_code_link: "https://github.com/ManshiSandilya",
  },
  {
    name: "DR. TALE",
    description: "Built an AI-assisted storywriting tool that generates unique creative prompts. Integrated NLP logic and built a React-based interactive interface for smooth user flow. Enhanced writing productivity by automating suggestion generation.",
    tags: [
      { name: "React", component: <FaReact size={16} /> },
      { name: "Docker", component: <FaDocker size={16} /> }
    ],
    image: "/CERTIFICATES/project_images/dr_Tale.png",
    source_code_link: "https://github.com/ManshiSandilya",
  },
  {
    name: "HEXVERIFY",
    description: "Created a hash-based malware detection platform enabling client-side threat validation. Implemented SHA256/MD5 hashing workflows using React for instant file verification. Improved security awareness by offering fast checks.",
    tags: [
      { name: "React", component: <FaReact size={16} /> },
      { name: "Node.js", component: <FaNodeJs size={16} /> }
    ],
    image: "/CERTIFICATES/project_images/hexverify.png",
    source_code_link: "https://github.com/ManshiSandilya",
  },
  {
    name: "MASOOM",
    description: "Developed an interactive women's health awareness platform with booking and discussion features. Used React, JavaScript, and CSS to design responsive UI and structured content modules.",
    tags: [
      { name: "React", component: <FaReact size={16} /> },
      { name: "JS", component: <SiJavascript size={16} /> },
      { name: "CSS3", component: <FaCss3Alt size={16} /> }
    ],
    image: "/CERTIFICATES/project_images/Masoom.png",
    source_code_link: "https://github.com/ManshiSandilya",
  },
  {
    name: "ARV FOUNDATION",
    description: "Designed and developed the digital presence for ARV Foundation, creating a responsive web layout connecting volunteers with social causes and streamlining community engagement.",
    tags: [
      { name: "React", component: <FaReact size={16} /> },
      { name: "Tailwind", component: <SiTailwindcss size={16} /> },
      { name: "Node.js", component: <FaNodeJs size={16} /> }
    ],
    image: "/CERTIFICATES/project_images/ArvFoundation.png",
    source_code_link: "https://github.com/ManshiSandilya",
  }
];

const ProjectCard3D = ({ project, index, total, scrollProgress }) => {
  const targetProgress = index / (total - 1);
  const distanceRaw = useTransform(scrollProgress, (val) => (val - targetProgress) * (total - 1));

  const x = useTransform(distanceRaw, [-2, -1, 0, 1, 2], ["-120%", "-60%", "0%", "60%", "120%"]);
  const rotateY = useTransform(distanceRaw, [-2, -1, 0, 1, 2], [60, 30, 0, -30, -60]); 
  const scale = useTransform(distanceRaw, [-2, -1, 0, 1, 2], [0.6, 0.8, 1, 0.8, 0.6]);
  const zIndex = useTransform(distanceRaw, [-2, -1, 0, 1, 2], [0, 10, 50, 10, 0]);
  const opacity = useTransform(distanceRaw, [-2, -1, 0, 1, 2], [0, 0.5, 1, 0.5, 0]);
  const blur = useTransform(distanceRaw, [-2, -1, 0, 1, 2], ["blur(10px)", "blur(4px)", "blur(0px)", "blur(4px)", "blur(10px)"]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        maxWidth: '700px',
        transform: 'translate(-50%, -50%)',
        perspective: 1600,
        zIndex,
      }}
      className="aesary-3d-card-wrapper"
    >
      <motion.div
        style={{
          x,
          rotateY,
          scale,
          opacity,
          filter: blur,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
      >
        {project.isIntroSlide ? (
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="aesary-about-label" style={{ fontSize: '3.5rem', margin: 0 }}>{project.name}</h2>
            <p style={{ color: '#E0E0E0', fontSize: '1.2rem', marginTop: '1.5rem', opacity: 0.8, fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
              {project.description}
            </p>
          </div>
        ) : (
          <div className="bento-box" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '100%', height: '300px', background: 'var(--black-100)', position: 'relative', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'none', justifyContent: 'center', alignItems: 'center', background: '#0D2C2D', color: 'var(--secondary)' }}>
                [Image: {project.image}]
              </div>
              
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <a href={project.source_code_link} target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)', color: 'white', textDecoration: 'none', transition: 'all 0.3s' }} className="zoom-hover">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>{project.name}</h3>
              <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', lineHeight: '1.6', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DBBC8E', fontSize: '0.9rem', fontWeight: 600, background: 'rgba(219, 188, 142, 0.1)', padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid rgba(219, 188, 142, 0.2)' }}>
                    {tag.component} {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Works = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [githubrepos, setGithubRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ManshiSandilya/repos')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
          const mainNames = mainProjects.map(p => p.name.toLowerCase());
          const others = data.filter(repo => !mainNames.includes(repo.name.toLowerCase())).map(repo => ({
            name: repo.name,
            description: repo.description || "Open Source GitHub Repository exploring new frameworks and tools.",
            tags: repo.language ? [repo.language] : ["Open Source"],
            source_code_link: repo.html_url
          }));
          setGithubRepos(others);
        }
      })
      .catch(err => console.warn("Notice: GitHub API rate limit exceeded.", err));
  }, []);

  return (
    <section id="work" style={{ width: '100%', position: 'relative', background: 'linear-gradient(to bottom, var(--primary) 0%, #0D2C2D 250px, #0D2C2D calc(100% - 250px), var(--primary) 100%)', zIndex: 5 }}>
      {/* 3D Circular Carousel Section */}
      <div 
        ref={containerRef} 
        style={{ height: `${mainProjects.length * 100}vh`, position: 'relative', width: '100%' }}
      >
        <div className="sticky-carousel" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
          
          {/* Carousel Track */}
          <div style={{ position: 'relative', width: '100%', height: '600px', perspective: 2000 }}>
            {mainProjects.map((project, index) => (
              <ProjectCard3D 
                key={index} 
                project={project} 
                index={index} 
                total={mainProjects.length} 
                scrollProgress={scrollYProgress} 
              />
            ))}
          </div>

        </div>
      </div>

      {/* Legacy / Open Source section directly below */}
      {githubrepos.length > 0 && (
        <div style={{ padding: '5rem 5%', background: 'transparent', position: 'relative', zIndex: 10 }}>
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '3rem', fontFamily: "'Playfair Display', serif", textAlign: 'center' }}>Other Open Source Experiments</h2>
          <div className="bento-container">
            {githubrepos.map((project, index) => (
              <div key={`repo-${index}`} className="bento-box" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>{project.name}</h3>
                  <a href={project.source_code_link} target="_blank" rel="noreferrer" style={{ color: 'var(--secondary)' }}>
                    <Github size={20} />
                  </a>
                </div>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>{project.description}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
