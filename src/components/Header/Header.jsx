import React, { useContext } from 'react'
import { ThemeContext } from '../../contextProvider';
import '../../index.scss';

const Header = () => {

  const theme = useContext(ThemeContext)

  function changeTheme () {
    theme[1]((current) => {
      if (current === 3) return 1
      const num = +current + 1
      
      return num
    })
  }

  return (
    <div className={`header theme${theme[0]}`}>
      <h3>calc</h3>
      <button className={`header__button theme${theme[0]}`} onClick={changeTheme} >
        <div className={`labels theme${theme[0]}`}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className={`scroller theme${theme[0]}`}>
          <div></div>
        </div>
        <p>THEME</p>
      </button>
    </div>
  )
}

export default Header

