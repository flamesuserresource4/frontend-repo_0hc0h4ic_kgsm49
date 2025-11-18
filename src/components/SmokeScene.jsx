import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function SmokePoints({ count = 8000 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * 4 + 2;
      const angle = Math.random() * Math.PI * 2;
      positions[i3] = Math.cos(angle) * r * (Math.random() * 0.6 + 0.7);
      positions[i3 + 1] = (Math.random() - 0.5) * 1.5;
      positions[i3 + 2] = Math.sin(angle) * r * (Math.random() * 0.6 + 0.7);
    }
    return positions;
  }, [count]);

  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffedd5"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FlameTrail() {
  const mesh = useRef();
  const noise = useMemo(() => new THREE.ImprovedNoise(), []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.position.y = Math.sin(t * 1.2) * 0.2;
    mesh.current.rotation.y += 0.0025;
    const s = 0.9 + Math.sin(t * 1.5) * 0.05;
    mesh.current.scale.set(s, s, s);
  });

  const gradient = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const grd = ctx.createRadialGradient(128, 160, 10, 128, 128, 120);
    grd.addColorStop(0, "#ffffff");
    grd.addColorStop(0.2, "#fde68a");
    grd.addColorStop(0.45, "#fb923c");
    grd.addColorStop(0.75, "#ef4444");
    grd.addColorStop(1, "transparent");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 256, 256);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <mesh ref={mesh}>
      <cylinderGeometry args={[0.15, 0.05, 1.6, 32, 1, true]} />
      <meshBasicMaterial
        map={gradient}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function SmokeScene() {
  return (
    <div className="relative h-[420px] lg:h-[520px]">
      <Canvas camera={{ position: [0, 0.7, 5], fov: 55 }}>
        <color attach="background" args={[0, 0, 0, 0]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <Suspense fallback={null}>
          <group position={[0, -0.3, 0]}>
            <SmokePoints />
            <FlameTrail />
            <Sparkles count={50} scale={[4, 2, 4]} size={2} speed={0.2} color="#fb923c" />
          </group>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </div>
  );
}
