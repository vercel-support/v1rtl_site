import React, { Suspense, useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useFrame, Canvas, useThree, useUpdate, Dom } from 'react-three-fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import Text from './Text'
import { ColorContext } from '../lib/context'

const Controls = dynamic(() => import('./Controls'), {
  ssr: false
})

const TextGroup = ({ red, green, blue, yellow }: { red: string; green: string; blue: string; yellow: string }) => {
  const mesh = useRef<THREE.Group>()

  const [size, setSize] = useState(1)

  useFrame(() => {
    mesh.current.rotateY(0.0005)
  })

  useEffect(() => {
    if (window.innerWidth >= 750) {
      setSize(1)
    } else if (window.innerWidth < 500) {
      setSize(0.5)
    } else if (window.innerWidth < 750) {
      setSize(0.7)
    }
  }, [window.innerWidth])

  return (
    <group ref={mesh}>
      <Text x={-20} y={10} z={-10} size={size} color={green}>
        geek
      </Text>
      <Text y={5} x={0} z={20} size={size} color={yellow}>
        self-taught
      </Text>
      <Text x={-30} y={-10} z={15} size={size} color={blue}>
        linux user
      </Text>
      <Text x={-10} y={-25} z={5} size={size} color={red}>
        webdev
      </Text>
    </group>
  )
}

const Figure = () => {
  const colors = useContext(ColorContext)
  const [visible, setVisible] = useState(false)

  return (
    <div
      onMouseMove={() => setVisible(true)}
      css={{
        height: '100vh'
      }}
    >
      {visible && (
        <Canvas>
          <ambientLight />
          <pointLight position={[1, 5, 1]} />
          <Suspense
            fallback={
              <Dom>
                <h1>Loading...</h1>
              </Dom>
            }
          >
            <Controls />
            <TextGroup {...colors} />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default Figure
