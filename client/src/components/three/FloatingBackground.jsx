
import { useRef } from "react";

function FloatingCube({ position, color, size }) {

  const meshRef = useRef();

  useFrame(() => {

    if (meshRef.current) {

      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;

    }

  });

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >

      <mesh
        ref={meshRef}
        position={position}
      >

        <boxGeometry args={size} />

        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.2}
        />

      </mesh>

    </Float>
  );
}

function FloatingSphere({ position, color, radius }) {

  const sphereRef = useRef();

  useFrame(() => {

    if (sphereRef.current) {

      sphereRef.current.rotation.y += 0.002;

    }

  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={2}
      floatIntensity={3}
    >

      <mesh
        ref={sphereRef}
        position={position}
      >

        <sphereGeometry args={[radius, 64, 64]} />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.1}
        />

      </mesh>

    </Float>
  );
}

function Scene() {
  return (
    <>

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={2}
        color="#22d3ee"
      />

      <FloatingCube
        position={[-4, 2, -2]}
        color="#06b6d4"
        size={[1.5, 1.5, 1.5]}
      />

      <FloatingCube
        position={[4, -2, -3]}
        color="#8b5cf6"
        size={[2, 2, 2]}
      />

      <FloatingSphere
        position={[0, 0, -4]}
        color="#3b82f6"
        radius={1.2}
      />

      <FloatingSphere
        position={[3, 3, -5]}
        color="#22d3ee"
        radius={0.8}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />

    </>
  );
}

function FloatingBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        -z-10
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 60,
        }}
      >

        <Scene />

      </Canvas>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#050816]/40
          via-[#050816]/70
          to-[#050816]
        "
      />

    </div>
  );
}

export default FloatingBackground;
