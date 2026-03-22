import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <section className="aesary-hero">
      <div className="aesary-hero-content">
        <motion.div 
          className="aesary-hero-left"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="aesary-logo-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100%' }}>
            {/* Removed the large empty min-height div that was pushing content down */}
            
            {/* Spotlight Drop Effect */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* The Spotlight on the floor */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }} // Light turns on at 1s
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  width: '180px',
                  height: '25px',
                  background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.4) 0%, rgba(0, 255, 255, 0) 70%)',
                  borderRadius: '50%',
                  filter: 'blur(5px)',
                  zIndex: 0
                }}
              />

              {/* The Signature Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15, x: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: -15, x: -30 }}
                transition={{ duration: 1, delay: 1.8, type: 'spring' }}
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '12rem',
                  background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: '-3rem', // Artistic overlap
                  textShadow: '0 0 30px rgba(184, 134, 11, 0.2)',
                  lineHeight: 1,
                  fontWeight: 300,
                  opacity: 0.9
                }}
              >
                ms
              </motion.div>

              {/* The Name dropping down */}
              <motion.p 
                className="aesary-hero-name" 
                initial={{ y: -800, opacity: 0 }} // Start way up high out of frame
                animate={{ y: 0, opacity: 1 }} // Drop down hard
                transition={{ 
                  duration: 1, 
                  delay: 1.2, // Drop happens right after light turns on
                  type: 'spring', 
                  stiffness: 120,
                  damping: 12,
                  mass: 1.5
                }}
                style={{ position: 'relative', zIndex: 1, margin: 0, textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
              >
                Manshi Sandilya
              </motion.p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/CERTIFICATES/cv.pdf" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', justifyContent: 'center' }}>
              View CV
            </a>
            <a href="https://linkedin.com/in/manshi-sandilya-681397284" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.5rem', borderRadius: '12px', color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }}>
              <Linkedin size={20} color="#0077b5" />
            </a>
            <a href="https://github.com/ManshiSandilya" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.5rem', borderRadius: '12px', color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }}>
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="aesary-hero-right"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <img 
              src="/CERTIFICATES/project_images/profile%20pic.png" 
              alt="Profile" 
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '2px solid rgba(255,255,255,0.1)' }} 
              onError={(e) => e.target.style.display = 'none'} 
            />
            <h2 className="aesary-about-label" style={{ marginBottom: 0 }}>About</h2>
          </div>
          <div className="aesary-about-text">
            <p>
              I’m a full-stack developer who enjoys turning ideas into real, working products (and occasionally breaking them just to make them better).
            </p>
            <p>
              I spend my time building scalable web apps, crafting responsive frontends, and writing solid backend logic that actually makes sense.
            </p>
            <p>
              I don’t just code for the sake of it. I build things that are practical, efficient, and resilient. Give me a problem, and I’ll either solve it… or dig so deep into it that it never stands a chance again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
