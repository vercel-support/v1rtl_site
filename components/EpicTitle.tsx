import React, { useState, useEffect } from 'react'
import { CSSObject } from '@emotion/core'
import { Canvas, useLoader } from 'react-three-fiber'
const { OBJLoader } = require('three/examples/jsm/loaders/OBJLoader')

// const shadow = (color: string): CSSObject => ({
//   fontSize: 'calc(3rem + 3vw)',
//   fontWeight: 1000,
//   margin: 'calc(1rem + 2vw)',
//   color: '#606060',
//   textShadow: ` 1px 1px ${color},
//   3px 3px ${color},
//   4px 4px ${color},
//   5px 5px ${color} `
// })

const Text = () => {
  const obj = useLoader(OBJLoader, '/v1rtl.obj')

  return <primitive object={obj} />
}

const V1rtlText = () => (
  <mesh>
    <pointLight position={[1, 1, 1]} />
    <meshBasicMaterial color="red" attach="material" />
    <ambientLight />
    <Text />
  </mesh>
)

const EpicTitle = () => (
  <div
    css={{
      display: 'flex',
      marginBottom: '25vh',
      height: '150vh',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50vh'
    }}
  >
    <Canvas>
      <V1rtlText />
    </Canvas>
  </div>
)

export default EpicTitle
