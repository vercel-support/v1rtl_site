import { createContext } from 'react'
import { light } from './colors'

export const ColorContext = createContext(light)

export const ColorContextProvider = ColorContext.Provider
