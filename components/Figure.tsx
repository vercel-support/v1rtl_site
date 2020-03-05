import React, { useEffect } from 'react'
import * as THREE from 'three'
import Scene from './Scene'

const Figure = ({
  figure,
  color = 'red',
  handleFigure,
  ...props
}: {
  figure: THREE.BufferGeometry
  color?: string | number
  handleFigure?: (fig: THREE.Mesh) => void
}) => {
  // const material = new THREE.LineBasicMaterial({ color })

  const geometry = figure

  const material = new THREE.MeshPhongMaterial({
    morphTargets: true,
    color,
    wireframe: true
  })

  const line = new THREE.Mesh(geometry, material)

  // const line = new THREE.LineSegments(geometry, material)

  line.position.x = 0.6

  useEffect(() => {
    const draw = () => {
      line.rotateX(0.01)
      line.rotateY(0.02)

      requestAnimationFrame(draw)
    }

    requestAnimationFrame(draw)

    if (window.innerWidth <= 800) {
      line.position.y = -0.6

      line.position.x = 0.05
    }

    handleFigure?.(line)
  }, [])

  return <Scene objects={[line]} {...props} />
}

export default Figure
