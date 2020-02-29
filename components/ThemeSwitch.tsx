import React, { useState, useEffect } from 'react'

export type Theme = 'dark' | 'light'

const ThemeSwitch = () => {
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

  const toggleTheme = (theme: Theme) => {
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('v1rtl-theme', theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <button onClick={() => toggleTheme(theme)} css={{
    border: 'none',
    background: 'none',
    filter: theme === 'light' ? 'none' : 'invert(1)'
  }}><img src="/contrast.svg" /></button>
}

export default ThemeSwitch
