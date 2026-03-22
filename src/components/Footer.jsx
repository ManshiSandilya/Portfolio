import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: '1px solid var(--border-color)',
      background: 'var(--primary)',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center'
      }}>
        <p style={{
          color: 'var(--secondary)',
          fontSize: '0.9rem',
          fontWeight: 400,
          letterSpacing: '0.05em'
        }}>
          &copy; {new Date().getFullYear()} Manshi Sandilya. All rights reserved.
        </p>
        <div style={{
          height: '2px',
          width: '50px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.5
        }} />
      </div>
    </footer>
  );
};

export default Footer;
