import React, {useContext} from 'react'
import { DisplayContext, ThemeContext } from '../../contextProvider'


const Display = () => {

  const theme = useContext(ThemeContext);
  const calculation = useContext(DisplayContext);

  return (
    <div className={`display theme${theme[0]}`}>{calculation[0]}</div>
  )
}

export default Display