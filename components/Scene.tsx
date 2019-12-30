import React, { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

type SceneProps = {
  objects: THREE.Object3D[]
}

const Scene = ({ objects }: SceneProps) => {
  let scene, camera
  let renderer, controls

  const ref = useRef()

  const fov = 50
  const aspect = window.innerWidth / window.innerHeight
  const near = 0.1
  const far = 5

  useEffect(() => {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    controls = new OrbitControls(camera, ref.current)

    renderer = new THREE.WebGLRenderer({
      canvas: ref.current
    })

    for (let obj of objects) {
      scene.add(obj)
    }
    camera.position.z = 4

    renderer.render(scene, camera)
  }, [])

  return <canvas ref={ref} height={window.innerHeight - 10} width={window.innerWidth} />
}

export default Scene
