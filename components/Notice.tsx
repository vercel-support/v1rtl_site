import React, { useState, useEffect } from 'react'

const Notice = ({ children }: { children: any }) => {
  const [isShown, toggle] = useState(true)

  const [initial, setInitial] = useState(true)

  useEffect(() => {
    const shown = localStorage.getItem('shown')

    if (initial) {
      toggle(shown === 'false' ? false : true)
      setInitial(false)
    } else {
      localStorage.setItem('shown', 'false')
    }
  }, [isShown])

  return (
    <div
      css={{
        borderBottom: '1px solid white',
        display: isShown ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
        a: {
          marginLeft: '0.5rem',
        },
        button: {
          marginLeft: '1rem',
          background: 'transparent',
          color: 'white',
          border: '1px solid white',
          height: '2rem',
          width: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      }}
    >
      {children}
      <button onClick={() => toggle(false)}>x</button>
    </div>
  )
}

export default Notice
