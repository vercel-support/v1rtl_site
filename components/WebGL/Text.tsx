import * as THREE from 'three'
import React, { MutableRefObject } from 'react'
import { useUpdate, useFrame, ReactThreeFiber } from 'react-three-fiber'
import { Font, Mesh, TextGeometryParameters, Clock } from 'three'
import FiraMono from '../../public/font.json'
import { createShaderMaterial } from './Shader'
import colorFragmentShader from '../../lib/gl/color_fragment.glsl'

type TextProps = {
  size?: number
  children: any
  color?: string
  fontJson?: any
} & ReactThreeFiber.Object3DNode<Mesh, typeof Mesh>

const Text = ({ children, fontJson = FiraMono, ...props }: TextProps) => {
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
  const mesh: MutableRefObject<Mesh> = useUpdate(
    (self: Mesh) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
    },
    [children]
  )

  useFrame(() => {
    return (material.uniforms.uTime.value = clock.getElapsedTime())
  })

  return (
    <mesh position={[-7.5, 0, 0]} {...props} ref={mesh} rotation={[0, 0, 0]} material={material}>
      <ambientLight />
      <textGeometry attach="geometry" args={[children, config]} />
    </mesh>
  )
}

export default Text
