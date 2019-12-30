import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import * as THREE from 'three'
import NavBar from '../components/Navbar'
import Helvetica from 'three/fonts/helvetiker_regular.typeface.json'

// const cube = new THREE.BoxGeometry(1, 1, 1)
const texture = new THREE.MeshPhongMaterial({ color: 'red' })

const pointLight = new THREE.PointLight(0xffffff, 2)
pointLight.position.set(200, 250, 600)
pointLight.castShadow = true

// const mesh = new THREE.Mesh(cube, texture)

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: false
})

const Index = () => {
  const loader = new THREE.FontLoader()

  const [font, setFont] = useState()

  setFont(loader.parse(Helvetica))

  console.log(font)

  // const textMesh = (
  //   new THREE.Mesh(
  //     new THREE.TextGeometry('bruh cringe', {
  //       font,
  //       height: 1
  //     }),
  //     texture
  //   )
  // )

  return (
    <div>
      <NavBar items={[{ text: 'hello', href: '/somewhere' }]} />
      <Scene objects={[pointLight]} />
    </div>
  )
}

export default Index
