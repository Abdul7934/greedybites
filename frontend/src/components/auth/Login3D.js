import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Box, Html } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login3D() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const group = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.1) * 0.1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

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
          position={[-2, 2, 0]}
        >
          Login
        </Text>
      </Float>

      <Box args={[4, 5, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" opacity={0.8} transparent />
        <Html position={[0, 0, 0.1]} transform>
          <form onSubmit={handleSubmit} className="login-form-3d">
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
            <button type="submit">Login</button>
          </form>
        </Html>
      </Box>
    </group>
  );
} 