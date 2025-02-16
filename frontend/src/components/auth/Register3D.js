import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Box, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

export default function Register3D() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const group = useRef();
  const navigate = useNavigate();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.1) * 0.1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          position={[-2, 2, 0]}
        >
          Register
          <meshStandardMaterial 
            color="#FFD700"
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>

      <Box args={[4, 6, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" opacity={0.8} transparent />
        <Html position={[0, 0, 0.1]} transform>
          <form onSubmit={handleSubmit} className="register-form-3d">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            <button type="submit">Register</button>
          </form>
        </Html>
      </Box>
    </group>
  );
} 