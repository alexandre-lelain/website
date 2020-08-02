import React, { createContext, useContext, useState } from "react"
import { isSSR } from "utils"

const DEFAULT = "light"
const MODE_KEY = "mode"

const ThemeModeContext = createContext(DEFAULT)

const saveMode = (mode) => !isSSR() && localStorage.setItem(MODE_KEY, mode)

const getMode = () => (!isSSR() ? localStorage.getItem(MODE_KEY) : DEFAULT)

const ThemeModeProvider = (props) => {
  const [mode, setMode] = useState(getMode())

  const onChangeMode = (mode) => {
    saveMode(mode)
    setMode(mode)
  }

  return <ThemeModeContext.Provider value={[mode, onChangeMode]} {...props} />
}

const useThemeMode = () => useContext(ThemeModeContext)

const useIsDark = () => {
  const [mode] = useThemeMode()
  return mode === "dark"
}

export { ThemeModeProvider, useIsDark, useThemeMode }
