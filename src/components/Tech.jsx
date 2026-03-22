import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import { FaReact, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss, SiTypescript } from 'react-icons/si';

const technologies = [
  { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} color="#F7DF1E" /> },
  { name: "Node JS", icon: <FaNodeJs size={50} color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#06B6D4" /> },
  { name: "Docker", icon: <FaDocker size={50} color="#2496ED" /> },
  { name: "HTML 5", icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: "CSS 3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: "Git", icon: <FaGitAlt size={50} color="#F05032" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#3178C6" /> },
];

const Ball = ({ icon, name, position }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.35; // Tumble front to back
      meshRef.current.rotation.y += delta * 0.15; // Ambient spin
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh castShadow receiveShadow scale={1.5} ref={meshRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#164e4e"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        </mesh>
      </Float>

      {/* Attached to the group (NOT the spinning mesh). Remains perfectly visible floating above the sphere. */}
      {/* Set distanceFactor to 12.0 for a large, crystal clear SVG projection mapped exactly to the geometric surface */}
      <Html position={[0, 0, 1.8]} transform center sprite distanceFactor={12} zIndexRange={[100, 0]}>
        <div style={{ pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {icon}
        </div>
      </Html>

      {/* Label under the sphere in 3D space */}
      <Html position={[0, -2.5, 0]} center zIndexRange={[100, 0]}>
        <p style={{ color: '#8b9ca5', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', whiteSpace: 'nowrap', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {name}
        </p>
      </Html>
    </group>
  );
};

const Tech = () => {
  return (
    <section id="skills" style={{ padding: '6rem 5% 0', background: 'linear-gradient(to bottom, var(--primary) 0%, #0D2C2D 250px, #0D2C2D 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
      {/* Visual frost separator top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <h2 className="aesary-about-label" style={{ fontSize: '3.5rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Tech Stack</h2>
      <p style={{ color: '#E0E0E0', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8, textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>
        Hover over the interactive 3D elements to explore the technologies I use.
      </p>

      {/* SINGLE UNIFIED WEBGL CANVAS to prevent context crashes! */}
      <div style={{ width: '100%', height: '500px', maxWidth: '1200px', margin: '0 auto' }}>
        <Canvas frameloop="always" dpr={[1, 2]} camera={{ position: [0, 0, 18], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1.5} />

          {technologies.map((technology, index) => {
            // Math for a 2-row, 5-column grid layout spanning 3D space
            const col = index % 5;
            const row = Math.floor(index / 5);
            // Centering them perfectly
            const x = (col - 2) * 5; // 5 units apart horizontally
            const y = (row === 0 ? 2 : -2); // 4 units apart vertically

            return (
              <Ball
                key={technology.name}
                icon={technology.icon}
                name={technology.name}
                position={[x, y, 0]}
              />
            );
          })}
        </Canvas>
      </div>
    </section>
  );
};

export default Tech;
