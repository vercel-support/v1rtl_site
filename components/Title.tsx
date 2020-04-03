import React, { Suspense } from 'react'
import { Clock, ShaderMaterial, TextureLoader } from 'three'
import { Canvas, useFrame, useLoader, Dom } from 'react-three-fiber'

// Kindly stolen from https://codesandbox.io/s/02-make-some-noise-ln8xv?from-embed

import vertexShader from '../lib/gl/vertex.glsl'
import fragmentShader from '../lib/gl/fragment.glsl'

const Shader = () => {
  const img = useLoader(TextureLoader, '/logo.png')

  const clock = new Clock()

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: {
        value: 0.0
      },
      uTexture: {
        value: img
      }
    }
  })

  useFrame(() => (material.uniforms.uTime.value = clock.getElapsedTime()))

  return (
    <mesh material={material}>
      <planeGeometry args={[window.innerWidth / 170, window.innerWidth / 200, 15, 15]} attach="geometry" />
    </mesh>
  )
}

const Title = () => {
  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}
    >
      <span
        css={{
          position: 'absolute',
          top: '70vh',
          left: 'calc(50vw - 10rem)',
          zIndex: 1,
          textAlign: 'center',
          width: '20rem',
          fontSize: 'calc(1rem + 1vw)'
        }}
      >
        webdev / designer
      </span>
      <Canvas resize={{ scroll: false }}>
        <Suspense
          fallback={
            <Dom>
              <h1>v 1 r t l</h1>
            </Dom>
          }
        >
          <Shader />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Title
