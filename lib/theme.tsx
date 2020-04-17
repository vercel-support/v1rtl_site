import React, { useState, useEffect } from 'react'
type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    let browserTheme: Theme
    if (localStorage.getItem('v1rtl-theme')) {
      browserTheme = localStorage.getItem('v1rtl-theme') as Theme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      browserTheme = 'dark'
    } else {
      browserTheme = 'light'
    }
    setTheme(browserTheme)
  }, [])

  const toggleTheme = () => {
    setTheme(theme => {
      const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'

      localStorage.setItem('v1rtl-theme', newTheme)

      return newTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
