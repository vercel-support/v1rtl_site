/// <reference types="next" />
/// <reference types="next/types/global" />

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ReactThreeFiber } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
      effectComposer: ReactThreeFiber.Object3DNode<EffectComposer, typeof EffectComposer>
      glitchPass: ReactThreeFiber.Object3DNode<GlitchPass, typeof GlitchPass>
      renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>
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
