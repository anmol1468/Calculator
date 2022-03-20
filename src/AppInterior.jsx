import React from 'react'
import { useContext } from 'react';
import Display from './components/Display/Display';
import Header from './components/Header/Header';
import InputBox from './components/InputBox/InputBox';
import { DisplayProvider, ThemeContext } from './contextProvider';

const AppInterior = () => {

  const theme = useContext(ThemeContext)

  return (
    <DisplayProvider>
    <div className={`App theme${theme[0]}`}>
      <div className="CalcBox">
      <Header />  
      <Display />
      <InputBox />
      </div>
    </div>
    </DisplayProvider>
  )
}

export default AppInterior