import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Dummy submit for now, could be integrated with EmailJS later by the user if they supply exact tokens
    setTimeout(() => {
      setLoading(false);
      alert('Thank you for your message! I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <style>{`
        @media (max-width: 1000px) {
          .contact-graphic { display: none !important; }
        }
      `}</style>
      <section id="contact" className="section-padding" style={{ position: 'relative', width: '100%', margin: '0 auto', display: 'flex', gap: '2rem', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, backgroundColor: 'var(--tertiary)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.3)' }}
      >
        <p className="sub-text">Get in touch</p>
        <h3 className="head-text" style={{ fontSize: '3rem' }}>Contact.</h3>

        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📧</span>
            <a href="mailto:manshisandilya6961@gmail.com" style={{ color: 'var(--secondary)', fontSize: '1.1rem', textDecoration: 'none' }}>manshisandilya6961@gmail.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📱</span>
            <a href="tel:+918271401318" style={{ color: 'var(--secondary)', fontSize: '1.1rem', textDecoration: 'none' }}>+91 8271401318</a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontWeight: 500, marginBottom: '0.5rem' }}>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" required />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontWeight: 500, marginBottom: '0.5rem' }}>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your web address?" required />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontWeight: 500, marginBottom: '0.5rem' }}>Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What you want to say?" required />
          </label>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* Decorative Contact Graphic placement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        className="contact-graphic"
      >
        {/* Animated glowing background behind the image */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, rgba(5,8,22,0) 70%)', filter: 'blur(30px)', zIndex: 0 }} 
        />
        
        {/* Floating sexy image */}
        <motion.img 
          src="/CERTIFICATES/project_images/contact.png" 
          alt="Contact Graphics"
          onError={(e) => { e.target.src = '/CERTIFICATES/download.png'; }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', zIndex: 1, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
        />
      </motion.div>
    </section>
    </>
  );
};

export default Contact;
