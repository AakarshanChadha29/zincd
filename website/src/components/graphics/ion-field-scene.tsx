"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Abstract Cu–Ag–Zn ion field — the homepage hero's signature element.
 *
 * Deliberately NOT a depiction of the physical product. There is no
 * client-approved product model, and the only product photo is Arroyo-branded
 * (`docs/asset-register.md`), so rendering "the unit" would mean inventing what
 * the hardware looks like. This is an abstract energy field: three electrode
 * planes and the mineral ions moving between them. It makes no claim about
 * appearance, performance, or efficacy.
 *
 * Colours come from the existing design tokens — no new palette.
 *
 * Only ever reached through a dynamic import from `ion-field-stage.tsx`, which
 * gates it on WebGL support, reduced-motion, and device capability. Nothing
 * here runs on the critical path.
 */

// Design-system colours (globals.css primitives), as THREE colours.
const COPPER = new THREE.Color("#c2734a");
const SILVER = new THREE.Color("#dfe5ec");
const ZINC = new THREE.Color("#8fa3b8");
const AQUA = new THREE.Color("#22d3ee");
const DEEP = "#0b1f33";

const FIELD_W = 5.2;
const FIELD_H = 3.6;
const FIELD_D = 3.2;

/**
 * Soft radial sprite, generated at runtime so it costs no asset request.
 * Square point sprites read as dust; a radial falloff reads as a glowing ion,
 * which is the whole point of the piece.
 */
function useGlowTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.25, "rgba(255,255,255,0.85)");
    g.addColorStop(0.55, "rgba(255,255,255,0.28)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

/** Drifting mineral ions, tinted per metal, rising between the plates. */
function IonSwarm({
  count,
  size,
  opacity,
}: {
  count: number;
  size: number;
  opacity: number;
}) {
  const points = useRef<THREE.Points>(null);
  const glow = useGlowTexture();

  // Built once. `speeds` rides alongside so useFrame can advance each ion
  // without allocating anything per frame.
  const { geometry, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const palette = [COPPER, SILVER, ZINC];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_W;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_H;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_D;

      // Bias colour by the nearest electrode so the copper / silver / zinc
      // bands read as coming off their own plate.
      const x = positions[i * 3]!;
      const band = x < -FIELD_W / 6 ? 0 : x < FIELD_W / 6 ? 1 : 2;
      const c = palette[Math.random() < 0.72 ? band : (band + 1) % 3]!;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      spd[i] = 0.15 + Math.random() * 0.35;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return { geometry: geo, speeds: spd };
  }, [count]);

  // Free the GPU buffers when the hero scrolls away and the scene unmounts.
  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    const node = points.current;
    if (!node) return;

    // Clamp delta so a backgrounded tab doesn't teleport every ion on return.
    const dt = Math.min(delta, 0.05);
    const attr = node.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const yi = i * 3 + 1;
      arr[yi]! += speeds[i]! * dt;
      if (arr[yi]! > FIELD_H / 2) {
        arr[yi] = -FIELD_H / 2;
        arr[i * 3] = (Math.random() - 0.5) * FIELD_W;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        map={glow}
        size={size}
        vertexColors
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/** One electrode plate: metallic slab plus an emissive charge shell. */
function Electrode({
  x,
  color,
  emissive,
}: {
  x: number;
  color: string;
  emissive: string;
}) {
  return (
    <group position={[x, 0, 0]}>
      <mesh>
        <boxGeometry args={[0.14, FIELD_H * 0.82, FIELD_D * 0.5]} />
        {/* Opaque on purpose. Translucent plates sort badly against each other
            and blend into a muddy mass; the ambient orbit is constrained
            instead, so a plate is never presented broadside on its own. */}
        <meshStandardMaterial
          color={color}
          metalness={0.85}
          roughness={0.28}
          emissive={emissive}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Charge shell — a wide, faint bloom either side of the plate. */}
      <mesh scale={[2.4, 1.02, 1.04]}>
        <boxGeometry args={[0.14, FIELD_H * 0.82, FIELD_D * 0.5]} />
        <meshBasicMaterial
          color={emissive}
          transparent
          opacity={0.05}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Hot rim right at the plate surface, so each electrode has a defined
          lit edge instead of dissolving into the background. */}
      <mesh scale={[1.06, 1.005, 1.008]}>
        <boxGeometry args={[0.14, FIELD_H * 0.82, FIELD_D * 0.5]} />
        <meshBasicMaterial
          color={emissive}
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/**
 * Owns orbit state and drives the rotation of everything inside it.
 *
 * Listeners go straight onto the WebGL canvas rather than a wrapping div, so
 * the mutable orbit state stays local to the component that mutates it — React
 * Compiler forbids mutating a ref handed in as a prop, and keeping it here is
 * the cleaner structure regardless.
 *
 * Hand-rolled rather than pulling in drei (1.7 MB unpacked) for OrbitControls
 * we would only have to constrain again.
 */
function OrbitRig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const orbit = useRef({
    yaw: 0.5,
    pitch: 0.18,
    dragging: false,
    lastX: 0,
    lastY: 0,
    /** Seconds of stillness before ambient rotation resumes after a drag. */
    idle: 0,
    /** Drives the ambient sweep. */
    phase: 0,
  });

  const gl = useThree((s) => s.gl);

  useEffect(() => {
    // Cursor and touch-action are set in CSS by the wrapper/Canvas rather than
    // mutated here — React Compiler disallows modifying a hook-returned value,
    // and presentation belongs in CSS regardless.
    const el = gl.domElement;

    const down = (e: PointerEvent) => {
      const o = orbit.current;
      o.dragging = true;
      o.lastX = e.clientX;
      o.lastY = e.clientY;
      el.setPointerCapture(e.pointerId);
    };

    const move = (e: PointerEvent) => {
      const o = orbit.current;
      if (!o.dragging) return;
      o.yaw += (e.clientX - o.lastX) * 0.008;
      o.pitch = THREE.MathUtils.clamp(
        o.pitch + (e.clientY - o.lastY) * 0.005,
        -0.6,
        0.6,
      );
      o.lastX = e.clientX;
      o.lastY = e.clientY;
    };

    const up = (e: PointerEvent) => {
      const o = orbit.current;
      if (!o.dragging) return;
      o.dragging = false;
      o.idle = 1.6;
      el.releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, [gl]);

  useFrame((_, delta) => {
    const o = orbit.current;
    if (!o.dragging) {
      // Wait out the idle window so a drag never fights ambient rotation.
      if (o.idle > 0) {
        o.idle -= delta;
      } else {
        // Ambient sweep across a flattering arc rather than a full spin, so the
        // resting composition always shows the three plates in depth. Dragging
        // is still unrestricted — this only governs the idle state, and the
        // easing below carries any dragged angle smoothly back into the arc.
        o.phase += delta * 0.22;
        const target = Math.sin(o.phase) * 0.62;
        o.yaw += (target - o.yaw) * Math.min(1, delta * 0.7);
        o.pitch += (0.18 - o.pitch) * Math.min(1, delta * 0.7);
      }
    }
    group.current?.rotation.set(o.pitch, o.yaw, 0);
  });

  return <group ref={group}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.42} />
      {/* Key: aqua from the front right, the "lit water" source. */}
      <pointLight position={[4, 3, 5]} intensity={62} color={AQUA} distance={20} />
      {/* Fill: deeper blue from below left, keeps the shadow side from going flat. */}
      <pointLight position={[-4.5, -2.5, 3]} intensity={34} color="#0369a1" distance={18} />
      {/* Rim: cool backlight that separates the plates from the chamber. */}
      <pointLight position={[0, 1.5, -5]} intensity={30} color="#7dd3fc" distance={16} />

      <OrbitRig>
        <Electrode x={-1.5} color="#c2734a" emissive="#ff9d6b" />
        <Electrode x={0} color="#dfe5ec" emissive="#ffffff" />
        <Electrode x={1.5} color="#8fa3b8" emissive="#9fd8ea" />
        {/* Two layers: a broad soft haze, plus tighter bright cores. Reads as
            depth in the field rather than a flat sheet of dots. */}
        <IonSwarm count={420} size={0.3} opacity={0.5} />
        <IonSwarm count={520} size={0.11} opacity={0.95} />
      </OrbitRig>

      {/* Depth falloff so the field dissolves into the chamber instead of
          ending on a hard edge. */}
      <fog attach="fog" args={[DEEP, 6, 13]} />
    </>
  );
}

export default function IonFieldScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.45, 6.3], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        touchAction: "pan-y",
      }}
    >
      <Scene />
    </Canvas>
  );
}
