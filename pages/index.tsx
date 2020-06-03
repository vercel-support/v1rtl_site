import React from 'react'
import { NextPage } from 'next'
import 'isomorphic-unfetch'

import Contact from '../components/Contact'
import dynamic from 'next/dynamic'
import Alert from 'components/Alert'
import { Canvas } from 'react-three-fiber'
import { css } from '@emotion/core'

const WebDev = dynamic(() => import('components/WebGL/Scenes/WebDev'), {
  ssr: false
})

const Index: NextPage = () => {
  return (
    <main>
      <Alert>
        Site is in progress. The version you are watching is either broken or laggy as hell. Come back later when I
        finish it.
      </Alert>

      <div
        css={css`
          height: 100vh;
        `}
      >
        <Canvas camera={{ position: [0, 0, 17] }} resize={{ scroll: false }}>
          <WebDev />
        </Canvas>
      </div>

      <Contact />
    </main>
  )
}

export default Index
