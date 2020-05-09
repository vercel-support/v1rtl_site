import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

const BoxMesh = () => {
  const ref = useRef<Mesh>()

  useFrame(() => {
    ref.current.rotation.x += 0.02
    ref.current.rotation.z += 0.01
    ref.current.rotation.y -= 0.01
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} attach="geometry" />
      <meshBasicMaterial color="red" wireframe attach="material" />
    </mesh>
  )
}

const Box = () => {
  return (
    <div
      css={{
        height: '300px',
      }}
    >
      <Canvas resize={{ scroll: false }}>
        <BoxMesh />
      </Canvas>
    </div>
  )
}

export default Box
