import * as THREE from 'three'
import React from 'react'
import { useUpdate, useFrame } from 'react-three-fiber'
import { Font, Mesh, TextGeometryParameters, Clock } from 'three'
import fontJson from '../../public/font.json'
import { createShaderMaterial } from './Shader'
import colorFragmentShader from '../../lib/gl/color_fragment.glsl'

type TextProps = {
  size?: number
  children: any
  color?: string
}

const Text = ({ children, color = 'white', ...props }: TextProps) => {
  const font = new Font(fontJson)

  const clock = new Clock()

  const material = createShaderMaterial({
    materialParams: {
      fragmentShader: colorFragmentShader,
    },
    freq: 0.5,
    amp: 0.3,
  })

  const config: TextGeometryParameters = {
    font: font,
    height: 0,
    size: 2,
    curveSegments: 32,
  }
  const mesh = useUpdate(
    (self: Mesh) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
    },
    [children]
  )

  useFrame(() => (material.uniforms.uTime.value = clock.getElapsedTime()))

  return (
    <mesh {...props} ref={mesh} position={[-7.5, 0, 0]} rotation={[0, 0, 0]} material={material}>
      <ambientLight />
      <textGeometry attach="geometry" args={[children, config]} />
    </mesh>
  )
}

export default Text
