import React, { Suspense, useContext, useState } from 'react'
import { Clock, ShaderMaterial, TextureLoader, LinearFilter } from 'three'
import { Canvas, useFrame, useLoader, Dom, useThree } from 'react-three-fiber'

// Kindly stolen from https://codesandbox.io/s/02-make-some-noise-ln8xv?from-embed

import vertexShader from '../../lib/gl/vertex.glsl'
import fragmentShader from '../../lib/gl/fragment.glsl'
import { ContainerProps } from 'react-three-fiber/targets/shared/web/ResizeContainer'
import { DataContext } from '../../lib/context'

const Shader = ({
  texture,
  amp,
  freq,
  width,
  height,
}: {
  texture: string
  amp: number
  freq: number
  width: number
  height: number
}) => {
  const img = useLoader(TextureLoader, texture)

  img.minFilter = LinearFilter

  const clock = new Clock()

  const shaderSettings = `
  void main() {
    vUv = uv;
  
    vec3 pos = position;
    float noiseFreq = ${freq};
    float noiseAmp = ${amp}; 
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
    pos.z += snoise(noisePos) * noiseAmp;
  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }`

  const material = new ShaderMaterial({
    vertexShader: vertexShader + shaderSettings,
    fragmentShader,
    uniforms: {
      uTime: {
        value: 0.0,
      },
      uTexture: {
        value: img,
      },
    },
  })

  useFrame(() => (material.uniforms.uTime.value = clock.getElapsedTime()))

  return (
    <mesh material={material}>
      <planeGeometry args={[width, height, 15, 15]} attach="geometry" />
    </mesh>
  )
}

const Wave = ({
  img = '/logo.png',
  imgFallback,
  children,
  amp = 0.5,
  freq = 1.5,
  width = 14,
  height = 8,
  canvasProps,
  fallback = '',
  ...props
}: {
  img?: string
  children?: any
  amp?: number
  freq?: number
  width?: number
  imgFallback?: string
  height?: number
  canvasProps?: Omit<ContainerProps, 'children'>
  fallback?: any
}) => {
  const { isWebpSupported } = useContext(DataContext)

  return (
    <div {...props}>
      <Canvas resize={{ scroll: false }} {...canvasProps}>
        <Suspense
          fallback={
            <Dom>
              <h1>{fallback}</h1>
            </Dom>
          }
        >
          <Shader texture={isWebpSupported ? img : imgFallback} {...{ amp, freq, width, height }} />
        </Suspense>
      </Canvas>
      {children}
    </div>
  )
}

export default Wave
