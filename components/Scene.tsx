import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import * as TWEEN from 'es6-tween'

type SceneProps = {
  objects: THREE.Object3D[]
}

const Scene = ({ objects }: SceneProps) => {
  const ref = useRef()

  const [h, setH] = useState(800)
  const [w, setW] = useState(600)

  useEffect(() => {
    setH(window.innerHeight)
    setW(window.innerWidth)
    const effect = async () => {
      const OrbitControls = await (await import('three/examples/jsm/controls/OrbitControls')).OrbitControls

      const fov = 30
      const aspect = window.innerWidth / window.innerHeight
      const near = 1
      const far = 10

      let scene = new THREE.Scene()

      let camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

      let renderer = new THREE.WebGLRenderer({
        canvas: ref.current,
        alpha: true
      })

      renderer.setPixelRatio(window.devicePixelRatio)

      scene.add(new THREE.AmbientLight(0x8fbcd4, 0.4))

      for (let obj of objects) {
        scene.add(obj)
      }
      camera.position.z = 5

      renderer.render(scene, camera)

      window.onresize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      }

      const render = () => {
        camera.updateProjectionMatrix()

        renderer.render(scene, camera)

        requestAnimationFrame(render)
      }

      requestAnimationFrame(render)
    }

    effect()
  }, [])

  return (
    <canvas
      ref={ref}
      height={h}
      width={w}
      css={{
        height: '100vh',
        width: '100vw',
        position: 'sticky',
        top: 0,
        right: 0,
        zIndex: -99
      }}
    />
  )
}

export default Scene
