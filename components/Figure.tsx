import React, { Suspense, useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useFrame, Canvas, useThree, useUpdate } from 'react-three-fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import Text from './Text'
import { ColorContext } from '../lib/context'

const Controls = dynamic(() => import('./Controls'), {
  ssr: false
})

const TextGroup = ({ red, green, blue, yellow }: { red: string; green: string; blue: string; yellow: string }) => {
  const mesh = useRef<THREE.Group>()

  useFrame(() => {
    mesh.current.rotateY(0.001)
  })

  return (
    <group ref={mesh}>
      <Text x={-20} y={10} z={-10} color={green}>
        geek
      </Text>
      <Text y={5} x={0} z={20} color={yellow}>
        self-taught
      </Text>
      <Text x={-30} y={-10} z={15} color={blue}>
        linux user
      </Text>
      <Text x={-10} y={-25} z={5} color={red}>
        webdev
      </Text>
    </group>
  )
}

const Figure = () => {
  const colors = useContext(ColorContext)

  return (
    <div
      css={{
        height: '100vh'
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[1, 5, 1]} />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} attach="geometry" />
              <meshBasicMaterial color="red" attach="material" />
            </mesh>
          }
        >
          <Controls />
          <TextGroup {...colors} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Figure
