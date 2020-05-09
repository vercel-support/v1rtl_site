import React, { ReactNode } from 'react'
import { css } from '@emotion/core'
import fonts from '../lib/fonts'

const HtmlDemo = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      font-family: ${fonts.code};
      background: #7b6f6f;
      color: #e8e0e0;
      padding: 0.2rem 1rem;
      h1 {
        text-align: left;
        font-size: xx-large;
      }
    `}
  >
    {children}
  </div>
)

export default HtmlDemo
