import React, { useState, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import Text from '../components/WebGL/Text'
import font from 'three/examples/fonts/optimer_bold.typeface.json'

const Page404 = () => {
  const [scale, setScale] = useState(3)

  useEffect(() => {
    setScale(window.innerWidth / 500)
  }, [])

  return (
    <main
      css={{
        height: 'calc(100vh - 232px)',
        display: 'flex',
        paddingTop: '128px',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Canvas
        resize={{
          scroll: false,
        }}
      >
        <Text fontJson={font} position={[-2.25, -0.5, scale]}>
          404
        </Text>
      </Canvas>

      <span
        css={{
          textAlign: 'center',
          fontSize: '1.5rem',
        }}
      >
        Not Found
      </span>
    </main>
  )
}

export default Page404
