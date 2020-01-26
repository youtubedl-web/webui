import React, { useState } from 'react'

// Logo
import logoLight from './logo/logo.svg';
import logoDark from './logo/logo-dark.svg';

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
      <header className="app-header">
        <img src={logoDark} alt="YoutubeDL for the web logo" className="hide--on-dark"/>
        <img src={logoLight} alt="YoutubeDL for the web logo" className="hide--on-light"/>
        <p>
          <strong className="color--theme-primary">YouTube</strong> for the <span className="text-primary">Web</span>
        </p>

        <Home></Home>
      </header>

      <button className="toggleLightMode" onClick={handleToggleColorMode}>
        <i className="material-icons">highlight</i>
      </button>
    </div>
  )
}

export default App;
