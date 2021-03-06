import { createContext } from 'react'

export const DataContext = createContext({
  isWebpSupported: true,
})

export const DataContextProvider = DataContext.Provider
