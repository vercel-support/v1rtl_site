import React, { Suspense, useMemo, useEffect, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { HTML } from './HTML'
import { ContainerProps } from 'react-three-fiber/targets/shared/web/ResizeContainer'
import Shader from './Shader'
import useTexture from './useTexture'
import { MeshBasicMaterial, Mesh, ShaderMaterial, sRGBEncoding, MeshStandardMaterial, LinearFilter } from 'three'

const ShaderWithImage = ({
  texture,
  amp,
  freq,
}: {
  width: number
  height: number
  amp: number
  freq: number
  texture: string
}) => {
  const img = useTexture({
    path: texture,
  })

  return (
    <mesh>
      <meshBasicMaterial map={img} needsUpdate />
      <planeGeometry args={[window.innerWidth / 110, window.innerHeight / 110, 8, 8]} attach="geometry" />
    </mesh>
  )
}

const Wave = ({
  img = '/logo.png',
  children,
  amp = 1.0,
  freq = 1.5,
  width = 12,
  height = 6,
  canvasProps,
  fallback = '',
  ...props
}: {
  img?: string
  children?: any
  amp?: number
  freq?: number
  width?: number
  height?: number
  canvasProps?: Omit<ContainerProps, 'children'>
  fallback?: any
}) => {
  return (
    <div {...props}>
      <Canvas resize={{ scroll: false }} {...canvasProps}>
        <Suspense
          fallback={
            <HTML>
              <h1>{fallback}</h1>
            </HTML>
          }
        >
          <ShaderWithImage texture={img} {...{ amp, freq, width, height }} />
        </Suspense>
      </Canvas>
      {children}
    </div>
  )
}

export default Wave
