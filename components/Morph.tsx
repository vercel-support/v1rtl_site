import React from 'react'
import * as THREE from 'three'
import * as TWEEN from 'es6-tween'
import Scene from './Scene'

const Morph = () => (
  <Scene objects={[new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'red' }))]} />
)

export default Morph
