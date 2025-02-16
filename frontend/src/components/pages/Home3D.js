import { 
  Text, 
  Float, 
  useGLTF, 
  Sphere, 
  Cylinder,
  Box,
  Html
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';

// Luxury materials
const MATERIALS = {
  gold: {
    color: '#FFD700',
    metalness: 0.8,
    roughness: 0.2,
  },
  marble: {
    color: '#F5F5F5',
    metalness: 0.2,
    roughness: 0.1,
  },
  glass: {
    color: '#FFFFFF',
    metalness: 1,
    roughness: 0,
    transparent: true,
    opacity: 0.3,
  }
};

// Animated Stairs Component
function MarbleStairs() {
  return (
    <group position={[0, -2, 0]}>
      {[0, 1, 2, 3].map((step) => (
        <Box
          key={step}
          args={[10, 0.2, 1]}
          position={[0, step * 0.2, step * -1]}
        >
          <meshStandardMaterial {...MATERIALS.marble} />
        </Box>
      ))}
    </group>
  );
}

// Rotating Logo
function RotatingLogo() {
  const logoRef = useRef();
  
  useFrame((state) => {
    logoRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <group ref={logoRef} position={[0, 3, -5]}>
      <Text
        color="#FFD700"
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
      >
        GreedyBites
      </Text>
    </group>
  );
}

// Chef's Special Display
function ChefsSpecial() {
  const [hoveredDish, setHoveredDish] = useState(null);
  const dishes = [
    { name: 'Lobster Thermidor', price: '$45' },
    { name: 'Wagyu Steak', price: '$85' },
    { name: 'Truffle Pasta', price: '$35' }
  ];

  return (
    <group position={[5, 0, -3]}>
      {dishes.map((dish, index) => (
        <Float
          key={dish.name}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={[0, index * 2, 0]}
        >
          <group
            onPointerOver={() => setHoveredDish(dish)}
            onPointerOut={() => setHoveredDish(null)}
          >
            <Cylinder args={[0.5, 0.5, 0.1]} position={[0, 0, 0]}>
              <meshStandardMaterial {...MATERIALS.silver} />
            </Cylinder>
            {hoveredDish === dish && (
              <Html position={[1, 0, 0]}>
                <div className="dish-tooltip">
                  <h3>{dish.name}</h3>
                  <p>{dish.price}</p>
                </div>
              </Html>
            )}
          </group>
        </Float>
      ))}
    </group>
  );
}

export default function Home3D() {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <group ref={group}>
      <RotatingLogo />
      <MarbleStairs />
      <ChefsSpecial />
      
      {/* Ambient Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={1}
          floatIntensity={2}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 10,
            Math.random() * 20 - 10
          ]}
        >
          <Sphere args={[0.05]}>
            <meshStandardMaterial
              {...MATERIALS.glass}
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
} 