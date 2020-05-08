import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { css } from '@emotion/core'

const buttonStyles = css`
  border: none;
  background: transparent;
  color: var(--fg-dark);
  display: inherit;
  justify-content: center;
  width: max-content;
  align-items: center;
  align-self: flex-end;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  img {
    margin-left: 10px;
  }
`

const CodeBlock = ({ children, className }: { children: string; className: string }) => {
  const language = className.replace(/language-/, '') as Language

  const code = children.trimEnd()

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button
        css={buttonStyles}
        onClick={() => {
          navigator.clipboard?.writeText(code)
        }}
      >
        Copy to clipboard
        <img src="/icons/copy_dark.svg" height={20} width={20} alt="copy to clipboard" />
      </button>

      <Highlight {...defaultProps} theme={theme} code={code} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            css={{
              border: '1px solid var(--fg-dark)',
              padding: '1rem',
              overflowX: 'auto',
              '@media (max-width: 980px)': {
                overflowX: 'scroll',
              },
            }}
            className={className}
          >
            {tokens.map((line, i) => {
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <code key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlock
