import React, { useMemo } from 'react'
import fonts from '../lib/fonts'
import { css } from '@emotion/core'

const Bio = () => {
  const age = useMemo(
    () => Math.abs(new Date(Date.now() - new Date(2003, 12, 5).getTime()).getUTCFullYear() - 1970),
    []
  )

  return (
    <section
      css={css`
        border: 3px solid white;
        padding: 2rem;
        height: min-content;
        * {
          font-family: ${fonts.code};
          font-size: 0.9rem;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        #table {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      `}
    >
      <div>
        $ <span contentEditable>sysinfo</span>
      </div>
      <div id="table" contentEditable>
        <div>
          <h3>Basic info</h3>
          <ul>
            <li>gender: male</li>
            <li>age: {age}</li>
            <li>nation: russian</li>
          </ul>
        </div>
        <div>
          <h3>Human languages</h3>
          <ul>
            <li>russian - native</li>
            <li>english - fluent</li>
            <li>german - beginner</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Bio
