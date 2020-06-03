import React, { useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Object3D, Material, MeshPhysicalMaterial } from 'three'

const Laptop = (props: any) => {
  const glb = useLoader(GLTFLoader, '/models/laptop.glb')

  useEffect(
    () =>
      void glb.scene.traverse(
        (child: Object3D & { isMesh: boolean; material: Material }) =>
          child.isMesh && (child.material = new MeshPhysicalMaterial({ color: '#292D3E' }))
      ),
    [glb]
  )

  return <primitive object={glb.scene} scale={[1.5, 1.5, 1.5]} rotation-y={-Math.PI / 2} {...props} />
}

export default Laptop
