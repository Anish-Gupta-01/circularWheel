import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three';

const Cylinder = () => {
    let tex = useTexture('./image.png');
    let Cylinder = useRef(null);
    let speed = useRef(0.2); 

    useFrame((state, delta) => {
      Cylinder.current.rotation.y += delta
    })

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={Cylinder}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]}/>
        <meshStandardMaterial map={tex} transparent={true} side={THREE.DoubleSide}/>
      </mesh>
    </group>
   
  )
}

export default Cylinder