"use client"
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext("")

export const AppThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true)

  const updateTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  useEffect(() => {
    document.body.style.backgroundColor = isLightTheme ? "#ecedf8" : "#09090a"
  }, [isLightTheme])

  return (
    <ThemeContext.Provider value={{ isLightTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
