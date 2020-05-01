import React, { Suspense, useState, useEffect } from 'react'
import Text from './Text'
import { Canvas } from 'react-three-fiber'

const Title = () => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (window.innerWidth > 850) {
      setScale(1)
    } else if (window.innerWidth > 750) {
      setScale(-0.5)
    } else if (window.innerWidth > 600) {
      setScale(-1)
    } else if (window.innerWidth > 450) {
      setScale(-3)
    }
  }, [])

  return (
    <Canvas
      resize={{
        scroll: false,
      }}
    >
      <Suspense fallback={<h1>Hello World</h1>}>
        <Text position={[-7.5, 0, scale]}>v 1 r t l</Text>
      </Suspense>
    </Canvas>
  )
}

export default Title
