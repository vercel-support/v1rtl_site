import React, { useEffect } from 'react'
import * as THREE from 'three'
import Scene from './Scene'
import { CSSObject } from '@emotion/core'

const Figure = ({
  figure,
  color,
  content,
  styles,
  id,
  handleFigure
}: {
  figure: THREE.BufferGeometry
  color: string
  content: {
    heading: string
    text: any
  }
  styles?: CSSObject
  id: string
  handleFigure?: (fig: THREE.LineSegments) => void
}) => {
  const material = new THREE.LineBasicMaterial({ color })

  const geometry = new THREE.EdgesGeometry(figure)

  const line = new THREE.LineSegments(geometry, material)

  line.position.x = 0.6

  useEffect(() => {
    handleFigure && handleFigure(line)

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
  }, [])

  return (
    <div
      css={{
        position: 'relative'
      }}
      id={id}
    >
      <Scene objects={[line]} />
      <article css={{ position: 'absolute', ...styles }}>
        <h2>{content.heading}</h2>
        <p>{content.text}</p>
      </article>
    </div>
  )
}

export default Figure
