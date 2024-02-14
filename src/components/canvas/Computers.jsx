/* eslint-disable */

import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Preload, OrbitControls } from '@react-three/drei';
import  CanvasLoader  from "../Loader";
// three is not compatible with the current react version so to install it use npm install --legacy-peer-deps flag .

const Computers = () => {
  
  //imports the file from the public folder..so enter the url accordingly.
  //the actual error coming here was the positioning of the lights n all. due to difference in positioning of sections and div. and hence the 
  //coordinates are differenting 
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={1.4} groundColor='black' />
      <hemisphereLight intensity={1.6} groundColor='black' position = {[-3,5,1]}/>
      <spotLight
        position={[-3, 5, 1]}
        angle={14}
        penumbra={2}
        intensity={500}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={4.55} />
      <primitive
        object={computer.scene}
        scale={0.66}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

},[])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;