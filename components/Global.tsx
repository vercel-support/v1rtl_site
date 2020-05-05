import React from 'react'
import fonts from '../lib/fonts'
import { Global, css } from '@emotion/core'

export const GlobalMeta = () => (
  <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" type="image/png" href="/icon.png" />
    <meta name="theme-color" content="#000" />
  </>
)

export const PageStyles = () => (
  <Global
    styles={css`
      html {
        :root {
          --fg-hover: #d2c7c7;
          --fg: #d8d8e3;
          --bg: black;
        }
      }

      * {
        scroll-behavior: smooth;
        scrollbar-color: #2a2c2f #1a1c1d;
        line-height: 1.5;
      }

      body {
        font-family: ${fonts.body};
        margin: 0;
        background-color: var(--bg);

        color: var(--fg);
        a {
          color: var(--fg);
          :hover {
            color: var(--fg-hover);
          }
        }
      }

      body main h2 {
        letter-spacing: -3px;
        font-size: calc(2rem + 2vw);
        text-align: center;
        margin-top: 1.25rem;
      }

      body main,
      body article {
        pre,
        code {
          font-family: ${fonts.code};
        }

        button,
        select {
          padding: 0.5rem;
          margin-bottom: 1rem;
          margin-right: 1rem;
          border: 3px solid;
          border-color: var(--fg);
          color: var(--fg);
          background-color: var(--bg);
          :hover {
            cursor: pointer;
            color: var(--fg-hover);
            border-color: var(--fg-hover);
          }
        }
        button {
          padding: 0.5rem 1rem;
          font-weight: bold;
        }
      }
      ::-webkit-scrollbar {
        background-color: #1b1e2b;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #212535;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #333739;
      }
      ::-webkit-scrollbar-thumb:active {
        background-color: #404447;
      }
      ::-webkit-scrollbar-corner {
        background-color: #151819;
      }
    `}
  />
)
