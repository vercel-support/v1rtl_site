import { createContext } from 'react'

export const DataContext = createContext({
  isWebpSupported: true,
  isWebGLSupported: true,
})

export const DataContextProvider = DataContext.Provider
