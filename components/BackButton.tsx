import React from 'react'
import Router from 'next/router'

const BackButton = ({ to }: { to?: string }) => (
  <button onClick={() => (to ? Router.push(to) : Router.back())}>{'<- Back'}</button>
)

export default BackButton
