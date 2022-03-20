import React, { useContext } from 'react';
import { ThemeContext } from '../../contextProvider';
import '../../index.scss';
import Button from '../Button/Button';

const InputBox = () => {

  const theme = useContext(ThemeContext)

  return (
    <div className={`inputBox  theme${theme[0]}`}>
    <ul className='inputBox__row'>
      <li><Button value="7" /></li>
      <li><Button value="8" /></li>
      <li><Button value="9" /></li>
      <li><Button value="DEL" type2 /></li>
    </ul>
    <ul className='inputBox__row'>
      <li><Button value="4" /></li>
      <li><Button value="5" /></li>
      <li><Button value="6" /></li>
      <li><Button value="+" /></li>
    </ul>
    <ul className='inputBox__row'>
      <li><Button value="1" /></li>
      <li><Button value="2" /></li>
      <li><Button value="3" /></li>
      <li><Button value="-" /></li>
    </ul>
    <ul className='inputBox__row'>
      <li><Button value="." /></li>
      <li><Button value="0" /></li>
      <li><Button value="/" /></li>
      <li><Button value="x" /></li>
    </ul>
    <ul className='inputBox__row last'>
      <li><Button value="RESET" type2 /></li>
      <li><Button value="=" type3 /></li>
    </ul>
    </div>
  )
}

export default InputBox