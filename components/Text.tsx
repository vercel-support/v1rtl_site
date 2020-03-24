import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'
import { Mesh, TextGeometryParameters } from 'three'

const Text = ({ children, size = 1, color = '#000000', x, y, z, ...props }) => {
  const font = useLoader(THREE.FontLoader, '/font.json')
  const config = useMemo(
    (): TextGeometryParameters => ({
      font,
      size: 4,
      height: 1,
      curveSegments: 30
    }),
    [font]
  )

  const mesh = useUpdate(
    (self: Mesh) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.setX(x)
      self.position.setY(y)
      self.position.setZ(z)
    },
    [children]
  )

  // useFrame(() => (mesh.current.position.x = mesh.current.position.y += 0.01))

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.05]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshPhongMaterial attach="material" color={color} />
      </mesh>
    </group>
  )
}

export default Text
