"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

/**
 * 360° product spin for the Zinc'd water chamber.
 *
 * The mesh is a photogrammetry-style reconstruction of the Zinc'd-branded
 * product still (`public/models/zincd-chamber.glb`). It depicts the product as
 * branded and approved — unlike the abstract ion field, this *is* the product,
 * so it must only ever be regenerated from client-approved artwork.
 *
 * Loaded only through `product-spin.tsx`, which gates it exactly as the ion
 * field is gated: reduced-motion, WebGL support, device capability, and
 * near-viewport. The static product photograph is the fallback.
 */

const MODEL_URL = "/models/zincd-chamber.glb";

function Model() {
  const gltf = useLoader(GLTFLoader, MODEL_URL);
  const group = useRef<THREE.Group>(null);

  // Centre the mesh on the origin and normalise its scale, so framing does not
  // depend on whatever units the reconstruction happened to use.
  const scene = useMemo(() => {
    const root = gltf.scene.clone(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    root.position.sub(centre);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    root.scale.setScalar(2.6 / maxAxis);

    // Photogrammetry bakes lighting into the albedo, so the mesh arrives as
    // matte white and reads as plastic. Nudging metalness/roughness restores
    // enough specular response for it to read as stainless under the rig
    // below, without needing an environment map.
    root.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material;
        const tune = (m: THREE.Material) => {
          if (m instanceof THREE.MeshStandardMaterial) {
            m.metalness = 0.45;
            m.roughness = 0.34;
            m.envMapIntensity = 1.2;
            m.needsUpdate = true;
          }
        };
        if (Array.isArray(mat)) mat.forEach(tune);
        else if (mat) tune(mat);
      }
    });

    return root;
  }, [gltf]);

  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose?.();
          const mat = child.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat?.dispose?.();
        }
      });
    };
  }, [scene]);

  return <primitive ref={group} object={scene} />;
}

type OrbitState = {
  yaw: number;
  pitch: number;
  dragging: boolean;
  lastX: number;
  lastY: number;
  idle: number;
};

/**
 * Owns orbit state and drives rotation. Listeners attach to the WebGL canvas
 * directly so the mutable state stays local to the component that mutates it —
 * React Compiler forbids mutating a ref passed in as a prop.
 */
function SpinRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const orbit = useRef<OrbitState>({
    yaw: 0.6,
    pitch: 0.1,
    dragging: false,
    lastX: 0,
    lastY: 0,
    idle: 0,
  });
  const gl = useThree((s) => s.gl);

  useEffect(() => {
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
      o.yaw += (e.clientX - o.lastX) * 0.01;
      o.pitch = THREE.MathUtils.clamp(
        o.pitch + (e.clientY - o.lastY) * 0.005,
        -0.5,
        0.5,
      );
      o.lastX = e.clientX;
      o.lastY = e.clientY;
    };
    const up = (e: PointerEvent) => {
      const o = orbit.current;
      if (!o.dragging) return;
      o.dragging = false;
      o.idle = 1.4;
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
      // Continuous turntable — a product spin should complete a full rotation,
      // unlike the ion field where a constrained sweep framed better.
      if (o.idle > 0) o.idle -= delta;
      else o.yaw += delta * 0.35;
    }
    group.current?.rotation.set(o.pitch, o.yaw, 0);
  });

  return <group ref={group}>{children}</group>;
}

export default function ProductSpinScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.6], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        touchAction: "pan-y",
      }}
    >
      {/* Three-point-ish rig: stainless needs directional light to read as
          metal rather than flat grey. */}
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 5]} intensity={2.4} />
      <directionalLight position={[-5, 1, 2]} intensity={1.1} color="#cfe9f5" />
      <directionalLight position={[0, -3, -4]} intensity={0.7} color="#7dd3fc" />

      <SpinRig>
        <Model />
      </SpinRig>
    </Canvas>
  );
}
