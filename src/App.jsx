import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cylinder from './Cylinder'
import { EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'



function App() {
  return (
    <Canvas flat camera={{fov: 35}}>
      <OrbitControls/>
      <ambientLight/>
      <Cylinder/>
      <EffectComposer>
      <Bloom
    intensity={12.0}
    luminanceThreshold={0} 
    luminanceSmoothing={0} 
    mipmapBlur
  />
  <ToneMapping adaptive/>
      </EffectComposer>
    </Canvas>
  )
};
export default App