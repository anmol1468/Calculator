import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

  const [theme, setTheme] = useState(1)

  return (
    <ThemeContext.Provider value={[theme,setTheme]}>
      {props.children}
    </ ThemeContext.Provider>
  )
}


export const DisplayContext = createContext();

export const DisplayProvider = (props) => {
  
  const [calculation, setCalculation] =useState("0")

  return (
    <DisplayContext.Provider value={[calculation, setCalculation]} >
      {props.children}
    </DisplayContext.Provider>
  )
}