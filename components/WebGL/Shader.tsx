import React from 'react'
import { ShaderMaterial, Clock, ShaderMaterialParameters, BufferGeometry, Geometry } from 'three'
import vertexShader from '../../lib/gl/vertex.glsl'
import fragmentShader from '../../lib/gl/fragment.glsl'
import { useFrame } from 'react-three-fiber'

type ShaderProps = {
  amp?: number
  freq?: number
  materialParams?: ShaderMaterialParameters
}

export const createShaderMaterial = ({ amp = 0.5, freq = 1.5, materialParams = {} }: ShaderProps): ShaderMaterial => {
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

  return new ShaderMaterial({
    vertexShader: vertexShader + shaderSettings,
    fragmentShader,
    ...materialParams,

    uniforms: {
      uTime: {
        value: 0.0,
      },
      ...materialParams.uniforms,
    },
  })
}

const Shader = ({
  amp = 0.5,
  freq = 1.5,
  materialParams = {},
  children,
  ...props
}: ShaderProps & {
  children?: any
  geometry?: Geometry | BufferGeometry
} & any) => {
  const clock = new Clock()

  // Stolen from https://codesandbox.io/s/02-make-some-noise-ln8xv?from-embed

  const material = createShaderMaterial({ amp, freq, materialParams })

  useFrame(() => (material.uniforms.uTime.value = clock.getElapsedTime()))

  return (
    <mesh {...props} {...{ material }}>
      {children}
    </mesh>
  )
}

export default Shader
