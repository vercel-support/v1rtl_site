import React, { useEffect, useState } from 'react'

import { useFrame, Canvas, useUpdate, useThree } from 'react-three-fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface MeshProps {
  geometry: THREE.BufferGeometry
  color?: THREE.Color
}

const Mesh = ({ geometry, color, ...props }: MeshProps) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>()

  const { gl } = useThree()

  const [influences, setInfluences] = useState([0, 0])
  const [meshColor, setMeshColor] = useState(color || '')

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  useEffect(() => {
    window.onscroll = () => setInfluences([(window.scrollY - window.innerHeight * 3) / 200, 0])

    return () => {
      gl.forceContextLoss()
      gl.dispose()
    }
  }, [])

  return (
    <mesh {...props} ref={mesh} morphTargetInfluences={influences} geometry={geometry} scale={[3, 3, 3]}>
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <meshPhongMaterial attach="material" color={meshColor} morphTargets wireframe />
    </mesh>
  )
}

const Figure = (props: MeshProps) => (
  <Canvas
    style={{
      position: 'sticky',
      height: '100vh',
      width: '100vw',
      right: 0,
      top: 0
    }}
  >
    <Mesh {...props} />
  </Canvas>
)

export default Figure
