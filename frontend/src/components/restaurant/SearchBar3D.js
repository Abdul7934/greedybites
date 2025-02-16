import { useState, useRef } from 'react';
import { Text, Html, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function SearchBar3D({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.position.y = Math.sin(t * 0.5) * 0.1;
      if (isFocused) {
        group.current.scale.x = 1.05 + Math.sin(t * 2) * 0.02;
      }
    }
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={group} position={[0, 6, -15]}>
        <Text
          position={[0, 1, 0]}
          fontSize={0.5}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#800020"
        >
          Find Your Perfect Restaurant
        </Text>
        
        <Html center transform>
          <form onSubmit={handleSearch} className="search-form-3d">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search restaurants..."
              className="search-input-3d"
            />
            <button type="submit" className="search-button-3d">
              Search
            </button>
          </form>
        </Html>
      </group>
    </Float>
  );
} 