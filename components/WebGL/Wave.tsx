import React, { Suspense, useContext } from 'react'
import { TextureLoader, LinearFilter } from 'three'
import { Canvas, useLoader, Dom } from 'react-three-fiber'

import { ContainerProps } from 'react-three-fiber/targets/shared/web/ResizeContainer'
import { DataContext } from '../../lib/context'
import Shader from './Shader'

const ShaderWithImage = ({
  height,
  width,
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
  const img = useLoader(TextureLoader, texture)

  img.minFilter = LinearFilter

  return (
    <Shader
      {...{ amp, freq }}
      position={[0, 0, -1]}
      materialParams={{
        uniforms: {
          uTexture: {
            value: img,
          },
        },
      }}
    >
      <planeGeometry args={[width, height, 8, 8]} attach="geometry" />
    </Shader>
  )
}

const Wave = ({
  img = '/logo.png',
  imgFallback,
  children,
  amp = 1.0,
  freq = 1.5,
  width = 15,
  height = 7.5,
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
          <ShaderWithImage texture={isWebpSupported ? img : imgFallback} {...{ amp, freq, width, height }} />
        </Suspense>
      </Canvas>
      {children}
    </div>
  )
}

export default Wave
