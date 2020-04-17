/// <reference types="next" />
/// <reference types="next/types/global" />

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ReactThreeFiber } from 'react-three-fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
    }
  }
}
