import React from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useEffect, useRef } from 'preact/hooks'
import * as THREE from 'three'

const Scene = ({ objects }) => {
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

  const render = time => {
    time *= 0.001

    for (let i of objects) {
      i.rotation.y = time
    }
    if (renderer) {
      renderer.setPixelRatio(devicePixelRatio)
      renderer.render(scene, camera)
    }

    if (camera) {
      camera.updateProjectionMatrix()
    }

    if (controls) {
      controls.update()
    }

    requestAnimationFrame(render)
  }

  requestAnimationFrame(render)

  return <canvas ref={ref} height={window.innerHeight - 5} width={window.innerWidth} />
}

export default Scene
