import React, { useRef } from 'react'
import { useThree, extend, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = props => {
  const {
    camera,
    gl: { domElement }
  } = useThree()
  const controls = useRef<OrbitControls>()

  useFrame(() => {
    controls.current && controls.current.update()
    camera.updateMatrixWorld()
  })
  return <orbitControls ref={controls} args={[camera, domElement]} {...props} enableZoom={false} />
}

export default Controls
