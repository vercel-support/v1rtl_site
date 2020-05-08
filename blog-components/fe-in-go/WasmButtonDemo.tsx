import React, { useRef } from 'react'
import HtmlDemo from '../HtmlDemo'

const WasmButtonDemo = () => {
  const ref = useRef<HTMLSpanElement>()

  return (
    <HtmlDemo>
      <span ref={ref} />
      <button onClick={() => (ref.current.textContent = 'Button was clicked')}>Click on me</button>
    </HtmlDemo>
  )
}

export default WasmButtonDemo
