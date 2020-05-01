/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import Draggable from 'react-draggable'
import { artworks } from '../lib/projects'

const Artwork = () => {
  return (
    <section css={{ padding: '3rem' }} id="artwork">
      <h2>Artwork</h2>

      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
        }}
      >
        {artworks.map((artwork) => (
          <Draggable
            key={artwork.title}
            defaultPosition={{
              ...artwork.position,
            }}
          >
            <figure
              css={{
                transform: `rotate(${artwork.rotate}deg)`,
                zIndex: artwork.layer || 1,
                margin: 0,
                '&:hover': {
                  cursor: 'grab',
                },
              }}
            >
              <picture>
                <source srcSet={`/artwork/${artwork.link}.webp`} type="image/webp" />

                <img
                  src={`/artwork/${artwork.link}.jpg`}
                  alt={artwork.title}
                  onMouseDown={(e) => e.preventDefault()}
                  css={{
                    width: '100%',
                    userSelect: 'none',
                    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.7)',
                    transition: '0.6s',
                    ':hover': {
                      boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.5)',
                    },
                    '@media (max-width: 1100px)': {
                      width: '90%',
                    },
                  }}
                />
              </picture>
              <figcaption
                css={{
                  fontFamily: 'monospace',
                }}
              >
                {artwork.title}
              </figcaption>
            </figure>
          </Draggable>
        ))}
      </div>
    </section>
  )
}

export default Artwork
