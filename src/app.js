import React, { useState } from 'react'

// Styles
import './scss/app.scss';

// Screens
import Home from './screens/home'

const App = () => {
  // get user dark mode status depending on the cookie
  // TODO: implement light theme
  // const isDarkModeActive = getCookieByName("ytdl-darkmode") === "1" ? true : false
  const isDarkModeActive = true

  const [darkMode, toggleColorMode] = useState(isDarkModeActive)
  const handleToggleColorMode = () => {
    // TODO: implement light theme
    // setCookie("ytdl-darkmode", (!darkMode ? "1" : "0"), 365)
    toggleColorMode(darkMode)
  }

  return (
    <div className={"app" + (darkMode ? " app-dark" : " app-light")} >
      <Home></Home>

      <button className="toggleLightMode" onClick={handleToggleColorMode}>
        <i className="material-icons">highlight</i>
      </button>
    </div>
  )
}

export default App;
