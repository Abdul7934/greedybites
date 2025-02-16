import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  Float,
  Text,
  useProgress,
  Html
} from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useLocation, useNavigate } from 'react-router-dom';

// Loading screen
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loading-screen">
        <div className="loading-progress">{progress.toFixed(0)}%</div>
      </div>
    </Html>
  );
}

// Modified Navigation Menu
function Navigation3D({ onNavigate }) {
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/restaurants', label: 'Restaurants' },
    { path: '/login', label: 'Login' },
    { path: '/register', label: 'Register' }
  ];

  return (
    <group position={[0, 2, -5]}>
      {menuItems.map((item, index) => (
        <Float
          key={item.path}
          speed={1.5} 
          rotationIntensity={0.5} 
          floatIntensity={0.5}
          position={[index * 4 - 6, 0, 0]}
        >
          <Text
            color="#FFD700"
            fontSize={0.5}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
            onClick={() => onNavigate(item.path)}
            onPointerOver={(e) => {
              document.body.style.cursor = 'pointer';
              e.object.scale.multiplyScalar(1.1);
            }}
            onPointerOut={(e) => {
              document.body.style.cursor = 'default';
              e.object.scale.multiplyScalar(1/1.1);
            }}
          >
            {item.label}
          </Text>
        </Float>
      ))}
    </group>
  );
}

// Main 3D Layout Component
export default function Scene3DLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10]);

  const handleNavigate = (path) => {
    // Animate camera before navigation
    setCameraPosition([0, 5, 15]);
    setTimeout(() => {
      navigate(path);
    }, 1000);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <BackgroundAudio />
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 75 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={location.pathname === '/restaurants'}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          
          <Environment preset="sunset" />
          
          {/* Global Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          
          {/* Navigation */}
          <Navigation3D onNavigate={handleNavigate} />
          
          {/* Main Content */}
          <group position={[0, 0, 0]}>
            {children}
          </group>

          <EffectComposer>
            <Bloom 
              intensity={0.5}
              luminanceThreshold={0.7}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

function BackgroundAudio() {
  useEffect(() => {
    const audio = new Audio('/audio/ambient-piano.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    const playAudio = () => {
      audio.play();
      document.removeEventListener('click', playAudio);
    };
    
    document.addEventListener('click', playAudio);
    
    return () => {
      audio.pause();
      document.removeEventListener('click', playAudio);
    };
  }, []);
  
  return null;
} 