import React, { ReactNode } from 'react'

const Alert = ({ children }: { children: ReactNode }) => (
  <div
    css={{
      border: '1px solid red ',
      borderRadius: '15px',
      padding: '1rem',
    }}
  >
    {children}
  </div>
)

export default Alert
