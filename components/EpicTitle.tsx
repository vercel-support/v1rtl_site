import React from 'react'
import { css } from '@emotion/core'
import Plx from 'react-plx'

const data = [
  {
    start: 300,
    duration: 1500,
    properties: [
      {
        startValue: 0,
        endValue: 40,
        property: 'translateY'
      }
    ]
  },
  {
    start: 300,
    duration: 1750,
    properties: [
      {
        startValue: 30,
        endValue: 0,
        property: 'translateY'
      }
    ]
  },
  {
    start: 300,
    duration: 2000,
    properties: [
      {
        startValue: 0,
        endValue: 60,
        property: 'translateY'
      }
    ]
  },
  {
    start: 400,
    duration: 1400,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'translateY'
      }
    ]
  },
  {
    start: 350,
    duration: 1600,
    properties: [
      {
        startValue: 0,
        endValue: 60,
        property: 'translateY'
      }
    ]
  }
]

const EpicTitle = () => {
  return (
    <div
      css={css`
        height: 250vh;
      `}
    >
      <Plx
        parallaxData={[
          {
            start: 300,
            duration: 300,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              }
            ]
          }
        ]}
        css={css`
          opacity: 0;
          display: flex;
          height: 100vh;
          position: sticky;
          top: 0;
          left: 0;
          justify-content: center;
          align-items: center;

          #bgText {
            div {
              text-transform: uppercase;
              color: var(--fg-secondary);
            }
            div:nth-of-type(1) {
              font-size: 10.5vw;
            }
            div:nth-of-type(2) {
              font-size: 14vw;
            }
          }
          #v1rtl {
            position: absolute;
            top: calc(100vh / 2 - 10vw);
            div {
              font-size: 10vw;
              text-transform: uppercase;
              font-weight: bolder;
              margin: calc(1rem + 1vw);
            }
          }
        `}
      >
        <div id="bgText">
          <div>full stack</div>
          <div>web dev</div>
        </div>
        <div id="v1rtl">
          {'v1rtl'.split('').map((letter, i) => (
            <Plx
              css={{
                display: 'inline-block'
              }}
              parallaxData={[data[i]]}
              key={i}
            >
              {letter}
            </Plx>
          ))}
        </div>
      </Plx>
    </div>
  )
}

export default EpicTitle
