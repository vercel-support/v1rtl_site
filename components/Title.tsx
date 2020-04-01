import React from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'
import me from '../public/me.png'

// Kindly stolen from https://codesandbox.io/s/02-make-some-noise-ln8xv?from-embed
import fragmentShader from '../lib/gl/fragment.glsl'
import vertexShader from '../lib/gl/vertex.glsl'

const Shader = () => {
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: {
        value: 0.0
      },
      uTexture: {
        value: me
      }
    },
    wireframe: true
  })

  const clock = new THREE.Clock()

  useFrame(() => {
    material.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh material={material}>
      <planeGeometry args={[5, 5, 16, 16]} attach="geometry" />
    </mesh>
  )
}

const Title = () => {
  return (
    <div
      css={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Canvas>
        <Shader />
      </Canvas>
    </div>
  )
}

export default Title
