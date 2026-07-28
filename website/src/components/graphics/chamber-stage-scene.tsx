"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Cinematic procedural Zinc'd chamber — not photogrammetry.
 * Polished stainless, soft anode accents, living ion field.
 * Designed to read premium on desktop and mobile (lower particle count on coarse pointers).
 */

function ChamberBody() {
  const alloy = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#d8e2e6"),
        metalness: 1,
        roughness: 0.12,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.8,
        reflectivity: 1,
        ior: 2.5,
      }),
    []
  );

  const darkSteel = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#8a9aa1"),
        metalness: 0.95,
        roughness: 0.22,
        clearcoat: 0.45,
        envMapIntensity: 1.4,
      }),
    []
  );

  return (
    <group rotation={[0, 0.35, 0]}>
      {/* Main ionization chamber — horizontal cylinder */}
      <mesh castShadow receiveShadow material={alloy} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.55, 0.55, 2.4, 64]} />
      </mesh>
      {/* End caps */}
      <mesh position={[-1.2, 0, 0]} material={darkSteel} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.58, 0.58, 0.08, 48]} />
      </mesh>
      <mesh position={[1.2, 0, 0]} material={darkSteel} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.58, 0.58, 0.08, 48]} />
      </mesh>
      {/* Inlet / outlet collars */}
      <mesh position={[-1.45, 0, 0]} material={alloy} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.28, 0.35, 32]} />
      </mesh>
      <mesh position={[1.45, 0, 0]} material={alloy} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.28, 0.22, 0.35, 32]} />
      </mesh>
      {/* Anode ports */}
      <mesh position={[-0.35, 0.62, 0]} material={darkSteel}>
        <cylinderGeometry args={[0.12, 0.12, 0.28, 24]} />
      </mesh>
      <mesh position={[0.35, 0.62, 0]} material={darkSteel}>
        <cylinderGeometry args={[0.12, 0.12, 0.28, 24]} />
      </mesh>
      <mesh position={[-0.35, 0.8, 0]}>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial color="#c45c4a" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0.35, 0.8, 0]}>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial color="#d4a84b" metalness={0.4} roughness={0.35} />
      </mesh>
      {/* Soft inner glow — ionization presence */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 1.8, 32]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.12} />
      </mesh>
      {/* Feet */}
      <mesh position={[-0.7, -0.62, 0]} material={darkSteel}>
        <boxGeometry args={[0.28, 0.12, 0.4]} />
      </mesh>
      <mesh position={[0.7, -0.62, 0]} material={darkSteel}>
        <boxGeometry args={[0.28, 0.12, 0.4]} />
      </mesh>
    </group>
  );
}

function IonField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const palette = [
      new THREE.Color("#f59e0b"), // Cu
      new THREE.Color("#94a3b8"), // Ag
      new THREE.Color("#2dd4bf"), // Zn
    ];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.7 + Math.random() * 1.6;
      const y = (Math.random() - 0.5) * 1.8;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(a) * r * 0.55;
      const c = palette[i % 3];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, colors, phases };
  }, [count]);

  useFrame(({ clock }) => {
    const pts = ref.current;
    if (!pts) return;
    const attr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const t = clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const baseY = positions[i3 + 1];
      attr.setY(i, baseY + Math.sin(t * 0.7 + phases[i]) * 0.12);
    }
    attr.needsUpdate = true;
    pts.rotation.y = t * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene({ particleCount }: { particleCount: number }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    pointer.current.x = THREE.MathUtils.damp(
      pointer.current.x,
      state.pointer.x,
      2.5,
      delta
    );
    pointer.current.y = THREE.MathUtils.damp(
      pointer.current.y,
      state.pointer.y,
      2.5,
      delta
    );
    g.rotation.y = pointer.current.x * 0.45 + 0.25;
    g.rotation.x = -pointer.current.y * 0.2;
  });

  return (
    <>
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={1.6} castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={0.7} color="#a5f3fc" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.5}
        penumbra={0.6}
        intensity={1.2}
        color="#ecfeff"
      />
      <Environment preset="city" environmentIntensity={0.55} />
      <group ref={group} position={[0, 0.05, 0]}>
        <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.25}>
          <ChamberBody />
        </Float>
        <IonField count={particleCount} />
      </group>
      <ContactShadows
        position={[0, -0.85, 0]}
        opacity={0.35}
        scale={8}
        blur={2.5}
        far={3}
        color="#0a3d42"
      />
    </>
  );
}

export default function ChamberStageScene({
  particleCount = 140,
}: {
  particleCount?: number;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 4.2], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
    >
      <Scene particleCount={particleCount} />
    </Canvas>
  );
}
