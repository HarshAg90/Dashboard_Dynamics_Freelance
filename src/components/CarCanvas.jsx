import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./porshe_taycan/New car for dash dynamic.glb");

  return (
    <mesh>
      <hemisphereLight intensity={100} groundColor='white' />
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
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 3}
        position={isMobile ? [0, -3, -2.2] : [0, -3, 0]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
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
  );
};

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas 
    className="canvas"
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CarCanvas;











// import React, { Component } from "react";
// import * as THREE from "three";
// import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
// import OrbitControls from "three-orbitcontrols";

// class ThreeScene extends Component {
//   componentDidMount() {
//     const width = this.mount.clientWidth;
//     const height = this.mount.clientHeight;
//     this.scene = new THREE.Scene();

//     //Add Renderer
//     this.renderer = new THREE.WebGLRenderer({ antialias: true });
//     this.renderer.setClearColor("#263238");
//     this.renderer.setSize(width, height);
//     this.mount.appendChild(this.renderer.domElement);

//     //add Camera
//     this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     this.camera.position.z = 20;
//     this.camera.position.y = 5;

//     //Camera Controls
//     const controls = new OrbitControls(this.camera, this.renderer.domElement);

//     //LIGHTS
//     var lights = [];
//     lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
//     lights[1] = new THREE.PointLight(0xffffff, 1, 0);
//     lights[2] = new THREE.PointLight(0xffffff, 1, 0);
//     lights[0].position.set(0, 200, 0);
//     lights[1].position.set(100, 200, 100);
//     lights[2].position.set(-100, -200, -100);
//     this.scene.add(lights[0]);
//     this.scene.add(lights[1]);
//     this.scene.add(lights[2]);

//     //Simple Box with WireFrame
//     this.addModels();

//     this.renderScene();
//     //start animation
//     this.start();
//   }

//   addModels() {
//     // -----Step 1--------
//     const geometry = new THREE.BoxGeometry(5, 5, 5);
//     const material = new THREE.MeshBasicMaterial({
//       color: "#0F0"
//     });
//     this.cube = new THREE.Mesh(geometry, material);
//     this.scene.add(this.cube);

//     // -----Step 2--------
//     //LOAD TEXTURE and on completion apply it on SPHERE
//     new THREE.TextureLoader().load(
//       "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       texture => {
//         //Update Texture
//         this.cube.material.map = texture;
//         this.cube.material.needsUpdate = true;
//       },
//       xhr => {
//         //Download Progress
//         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       },
//       error => {
//         //Error CallBack
//         console.log("An error happened" + error);
//       }
//     );

//     // -----Step 4--------
//     //Loading 3d Models
//     //Loading Material First
//     var mtlLoader = new MTLLoader();
//     mtlLoader.setBaseUrl("./assets/");
//     mtlLoader.load("freedom.mtl", materials => {
//       materials.preload();
//       console.log("Material loaded");
//       //Load Object Now and Set Material
//       var objLoader = new OBJLoader();
//       objLoader.setMaterials(materials);
//       objLoader.load(
//         useGLTF("./porshe_taycan/dashCar.gltf"),
//         object => {
//           this.freedomMesh = object;
//           this.freedomMesh.position.setY(3); //or  this
//           this.freedomMesh.scale.set(0.02, 0.02, 0.02);
//           this.scene.add(this.freedomMesh);
//         },
//         xhr => {
//           console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//         },
//         // called when loading has errors
//         error => {
//           console.log("An error happened" + error);
//         }
//       );
//     });
//   }

//   componentWillUnmount() {
//     this.stop();
//     this.mount.removeChild(this.renderer.domElement);
//   }
//   start = () => {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate);
//     }
//   };
//   stop = () => {
//     cancelAnimationFrame(this.frameId);
//   };
//   animate = () => {
//     // -----Step 3--------
//     //Rotate Models
//     if (this.cube) this.cube.rotation.y += 0.01;
//     if (this.freedomMesh) this.freedomMesh.rotation.y += 0.01;

//     this.renderScene();
//     this.frameId = window.requestAnimationFrame(this.animate);
//   };
//   renderScene = () => {
//     if (this.renderer) this.renderer.render(this.scene, this.camera);
//   };

//   render() {
//     return (
//       <div
//         style={{ width: "800px", height: "800px" }}
//         ref={mount => {
//           this.mount = mount;
//         }}
//       />
//     );
//   }
// }
// export default ThreeScene;
