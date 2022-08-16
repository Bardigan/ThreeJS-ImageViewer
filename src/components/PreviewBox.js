import React, { useRef } from 'react'
import { Canvas, useFrame  } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTexture } from '@react-three/drei';

function Box(props) {
  
  const mesh = useRef(null)
  const colorMap = useTexture(props.selectedImage !== "" ? props.selectedImage : 'blank.png' );
  useFrame(() => (mesh.current.rotation.y += 0.004))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1.9}
      >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={colorMap} color={'white'} />
    </mesh>
  )
}

export default function PreviewBox(props) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Box selectedImage={props.selectedImage} position={[0, 0, 0]} />
    </Canvas>
  )
}