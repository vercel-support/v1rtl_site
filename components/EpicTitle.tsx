import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const Text = () => {
  const obj = useLoader(OBJLoader, '/v1rtl.obj')

  return <primitive object={obj} />
}

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
    <Suspense fallback={<h1>Loading...</h1>}>
      <Canvas>
        <Text />
      </Canvas>
    </Suspense>
  </div>
)

export default EpicTitle
