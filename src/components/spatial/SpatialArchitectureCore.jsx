import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ── Fallback 2D Architectural Schematic for reduced-motion / low-power devices ──
export function SpatialCoreFallback() {
  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div 
        style={{
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.04) 0%, transparent 70%)'
        }}
      >
        <div 
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '1px dashed rgba(0, 113, 227, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,242,0.6))',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(45deg)'
            }}
          >
            <div 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#111111',
                transform: 'rotate(-45deg)',
                boxShadow: '0 0 16px rgba(0, 113, 227, 0.4)'
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 3D Spatial Core Meshes ──
function CoreGeometry({ isHovered, reducedMotion }) {
  const outerGroupRef = useRef();
  const innerCoreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const nodesRef = useRef();

  useFrame((state, delta) => {
    if (reducedMotion) return;

    const time = state.clock.getElapsedTime();
    const targetSpeed = isHovered ? 1.6 : 0.8;

    // Smooth continuous multi-axis rotation
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y += delta * 0.25 * targetSpeed;
      outerGroupRef.current.rotation.x = Math.sin(time * 0.4) * 0.15;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.5 * targetSpeed;
      innerCoreRef.current.rotation.z += delta * 0.2 * targetSpeed;
      const pulse = 1 + Math.sin(time * 2) * 0.04;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.45;
      ring1Ref.current.rotation.y = time * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.4;
      ring2Ref.current.rotation.z = time * 0.25;
    }

    if (nodesRef.current) {
      nodesRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group ref={outerGroupRef}>
      {/* 1. Frosted Liquid-Glass Architectural Outer Shell */}
      <mesh>
        <octahedronGeometry args={[1.5, 2]} />
        <meshPhysicalMaterial
          color="#f2f2f4"
          roughness={0.12}
          transmission={0.88}
          thickness={1.4}
          ior={1.48}
          transparent={true}
          opacity={0.7}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Outer Shell Wireframe Cage */}
      <mesh>
        <octahedronGeometry args={[1.505, 1]} />
        <meshBasicMaterial 
          color="#0071E3" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>

      {/* 2. Precision Metallic Neural Core */}
      <mesh ref={innerCoreRef}>
        <dodecahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.92}
          roughness={0.18}
          wireframe={false}
        />
      </mesh>

      {/* 3. Primary Orbital Ring (Titanium Finished) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.016, 16, 64]} />
        <meshStandardMaterial 
          color="#6E6E73" 
          metalness={0.95} 
          roughness={0.2} 
        />
      </mesh>

      {/* 4. Secondary Counter-Rotating Ring (Apple Vision Blue Accent) */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.25, 0.014, 16, 64]} />
        <meshStandardMaterial 
          color="#0071E3" 
          metalness={0.8} 
          roughness={0.3} 
          emissive="#0071E3"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 5. Constellation Data Nodes */}
      <group ref={nodesRef}>
        {[
          [1.8, 0.6, 0.5],
          [-1.6, -0.8, 0.9],
          [0.7, 1.7, -0.8],
          [-0.8, 1.5, 1.1],
          [1.2, -1.4, -0.9],
          [-1.5, 0.9, -1.2]
        ].map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial 
              color="#0071E3" 
              emissive="#0071E3" 
              emissiveIntensity={0.8} 
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// ── Main Spatial Architecture Core Component ──
export default function SpatialArchitectureCore({ className = '', style = {} }) {
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const onMotionChange = () => setReducedMotion(motionQuery.matches);
    motionQuery.addEventListener('change', onMotionChange);

    // Verify WebGL capability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => {
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  if (!hasWebGL || reducedMotion) {
    return (
      <div className={`spatial-architecture-container ${className}`} style={{ width: '100%', height: '100%', ...style }}>
        <SpatialCoreFallback />
      </div>
    );
  }

  return (
    <div 
      className={`spatial-architecture-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        position: 'relative',
        cursor: 'grab',
        ...style
      }}
      title="Interactive Spatial Architecture Core — Autonomous Systems & Applied AI"
    >
      <Suspense fallback={<SpatialCoreFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Studio Lighting Setup (Apple High-End Product Photography) */}
          <ambientLight intensity={0.85} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-5, -4, -4]} intensity={0.6} color="#0071E3" />
          <pointLight position={[0, 0, 3]} intensity={0.7} color="#ffffff" />

          {/* Interactive Core Mesh */}
          <CoreGeometry isHovered={isHovered} reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>

      {/* Spatial HUD Badge */}
      <div 
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '4px 12px',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '100px',
          fontFamily: "var(--font-system, -apple-system, sans-serif)",
          fontSize: '10px',
          fontWeight: '600',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#6E6E73',
          pointerEvents: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <span>SPATIAL SYSTEM CORE &middot; 3D ARCHITECTURE</span>
      </div>
    </div>
  );
}
