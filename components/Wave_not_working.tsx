import React, { useRef, useEffect } from 'react'
import { Cloth } from '../lib/cloth'
import { ParametricGeometry, TextureLoader, DoubleSide, Mesh, ShaderMaterial } from 'three'
import { useLoader, useFrame, Canvas } from 'react-three-fiber'

const WaveMesh = ({ pic }: { pic: string }) => {
  const cloth = new Cloth(3, 5)

  const geometry = new ParametricGeometry(cloth.clothFunction, cloth.w, cloth.h)

  const texture = useLoader(TextureLoader, pic)

  texture.anisotropy = 16

  const uniforms = {
    texture: {
      value: texture,
    },
  }

  const mesh = useRef<Mesh>()

  useEffect(() => {
    mesh.current.position.z = 2
    mesh.current.customDepthMaterial = new ShaderMaterial({
      uniforms,
      side: DoubleSide,
    })
  }, [])

  const update = () => {
    for (let i = 0; i < cloth.particles.length; i++) {
      geometry.vertices[i].copy(cloth.particles[i].position)
    }
    geometry.computeFaceNormals()
    geometry.computeVertexNormals()
    geometry.normalsNeedUpdate = true
    geometry.verticesNeedUpdate = true
  }

  useFrame(() => {
    const time = Date.now()

    cloth.simulate(time, geometry)
    update()
  })

  return (
    <mesh ref={mesh} geometry={geometry} scale={[3, 3, 3]} castShadow position={[0, 0, 0]}>
      <meshLambertMaterial map={texture} side={DoubleSide} alphaTest={0.5} attach="material" />
    </mesh>
  )
}

const Wave = () => (
  <Canvas>
    <WaveMesh pic={'/projects/komfy.png'} />
  </Canvas>
)
