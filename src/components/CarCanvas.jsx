import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import styled from "styled-components";

// Styled components for the button
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadModelButton = styled.button`
  background-color: #000000;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
  }
`;

// Component to render the 3D model with lights
const Computers = ({ isMobile, loadModel }) => {
  // Load the 3D model using the useGLTF hook
  const computer = useGLTF("./porshe_taycan/New car for dash dynamic.glb");

  // Check if the model should be loaded
  return loadModel ? (
    <mesh>
      {/* Set up lights for the 3D scene */}
      <hemisphereLight intensity={100} groundColor="white" />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={2048}
      />
      <spotLight
        position={[10, 0, 10]}
        angle={180}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[10, 10, -10]}
        angle={180}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[50, 10, -10]}
        angle={180}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 20, 0]}
        angle={180}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-10, 15, 0]}
        angle={180}
        penumbra={1}
        intensity={3000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 15, 0]}
        angle={180}
        penumbra={1}
        intensity={3000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, -15, 0]}
        angle={180}
        penumbra={1}
        intensity={3000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={100} />

      {/* Render the 3D model with scaling and positioning based on mobile/desktop */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 3}
        position={isMobile ? [0, -3, -2.2] : [0, -3, 0]}
        // rotation={[-0.01, -0.2, -0.1]}
      />

      {/* Commented code for additional lighting */}
      {/* var lights = [];
      lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
      lights[1] = new THREE.PointLight(0xffffff, 1, 0);
      lights[2] = new THREE.PointLight(0xffffff, 1, 0);
      lights[0].position.set(0, 200, 0);
      lights[1].position.set(100, 200, 100);
      lights[2].position.set(-100, -200, -100);
      this.scene.add(lights[0]);
      this.scene.add(lights[1]);
      this.scene.add(lights[2]); */}
    </mesh>
  ) : null;
};

// Main component for the 3D canvas
const CarCanvas = () => {
  // State variables to track if it's a mobile device and if the model should be loaded
  const [isMobile, setIsMobile] = useState(false);
  const [loadModel, setLoadModel] = useState(false);

  // Detect if it's a mobile device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Event listener for media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {/* Button to load the 3D model */}
      {!loadModel && (
        <ButtonContainer>
          <LoadModelButton onClick={() => setLoadModel(true)}>
            Load Model
          </LoadModelButton>
        </ButtonContainer>
      )}

      {/* Canvas for rendering the 3D scene */}
      <Canvas
        className="canvas"
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* Suspense for handling loading state */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={loadModel} />
          <Computers isMobile={isMobile} loadModel={loadModel} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default CarCanvas;