import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import Restaurant3DView from '../restaurant/Restaurant3DView';

export default function Restaurants3D() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <Text
          color="#FFD700"
          fontSize={0.8}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          position={[-4, 4, 0]}
        >
          Our Restaurants
        </Text>
      </Float>
      
      <Restaurant3DView />
    </group>
  );
} 