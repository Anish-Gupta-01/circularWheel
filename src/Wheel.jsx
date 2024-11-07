import React from 'react'
import * as THREE from 'three';

function Wheel() {
  return (
    <mesh>
        <cylinderGeometry args={[1,1,1,30,30,true]}/>
        <meshStandardMaterial side={THREE.DoubleSide}/>
      </mesh>
  )
}

export default wheel