import React, { Suspense } from 'react'
import Text from './Text'
import { Canvas } from 'react-three-fiber'

const Title = () => {
  return (
    <Canvas
      resize={{
        scroll: false,
      }}
    >
      <Suspense fallback={<h1>Hello World</h1>}>
        <Text>v 1 r t l</Text>
      </Suspense>
    </Canvas>
  )
}

export default Title
