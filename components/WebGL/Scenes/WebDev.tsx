import React, { useRef, Suspense, ReactNode } from 'react'
import { useFrame, ReactThreeFiber } from 'react-three-fiber'
import { Mesh, BoxGeometry } from 'three'
import { HTML, Text, OrbitControls } from 'drei'
import ResponsiveText from '../Primitives/ResponsiveText'
import Laptop from '../Models/Laptop'

const code = `import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Laptop = (props: any) => {
  const glb = useLoader(GLTFLoader, '/models/laptop.glb')

  return (
    <primitive
      object={glb.scene}
      rotation-y={-Math.PI / 2}
      {...props}
    />
  )
}
export default Laptop`

const term = `$ rm -rf .next && yarn dev
yarn run v1.21.1
$ next
ready - started server on http://localhost:3000
> Using external babel configuration
> Location: "/home/v1rtl/Coding/v1rtl-2/.babelrc"
event - compiled successfully`

const Cube = (
  {
    args
  }: {
    args?: [number, number, number]
  } = { args: [11, 7, 0.75] }
) => {
  return (
    <mesh>
      <boxGeometry args={args} attach="geometry" />
      <meshPhongMaterial color="#13151D" attach="material" />
    </mesh>
  )
}

const WebDev = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <directionalLight position={[0, 2, 0]} color="white" intensity={0.6} />
      <pointLight position={[0, 2, 0]} color="white" intensity={0.8} />
      <group rotation-x={0.3} position-y={-1}>
        <group position={[-12, 4, 0]} rotation={[0.01, 0.7, -0.1]}>
          <Cube />
          <ResponsiveText position={[-5, 3, 0.4]}>{code}</ResponsiveText>
        </group>
        <Suspense
          fallback={
            <HTML>
              <h1 css={{ color: 'white' }}>Loading...</h1>
            </HTML>
          }
        >
          <Laptop />
        </Suspense>
        <group position={[16, 6, 0]} rotation={[0.1, -0.5, 0.1]}>
          <Cube args={[9, 5, 0.75]} />
          <ResponsiveText position={[-4, 2, 0.4]}>{term}</ResponsiveText>
        </group>
      </group>
    </>
  )
}

export default WebDev
