import React, { useContext } from 'react';
import { DisplayContext, ThemeContext } from '../../contextProvider';

const Button = ({value, type2, type3}) => {

  const theme = useContext(ThemeContext);
  const calculation = useContext(DisplayContext);

  function addToCalculate () {

    calculation[1]((current) => {
      if (value==='=') {
        try {
          return eval(current).toFixed(2)
        } catch (e) {
          return 0
        }
      }

      if (value==='RESET') return 0

      if (current=='0') {
        if (typeof(+value) ==="number" && value !=="DEL") return value
      }

      if (value==='DEL') {
        let currentArr = current.split("");
        currentArr.pop()

        return currentArr.join('')
      }

      if (value==="x") {
      let newValue = current + "*";
      return newValue
      }

      const newValue = current + value;
      return newValue
    })
  }

  return (
    <button onClick={addToCalculate} className={`button theme${theme[0]} ${type2? 'type2' : ''} ${type3? 'type3' : ''}`}>
      {value}
      </button>
  )
}

export default Button