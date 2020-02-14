import React, { useState, useEffect } from 'react'
import EpicTitle from '../components/EpicTitle'
import dynamic from 'next/dynamic'

const Morph = dynamic(() => import('../components/Morph'))

const Index = () => {
  return (
    <>
      <EpicTitle />
      <Morph />
    </>
  )
}

export default Index
