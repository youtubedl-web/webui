import React, { useState } from 'react'

// Logo
import logoLight from './logo.svg';
import logoDark from './logo-dark.svg';

// Styles
import './App.scss';

// Screens
import Home from './screens/home'

// Utils
import { getCookieByName, setCookie } from './utils/cookies'

const App = () => {
  // get user dark mode status depending on the cookie
  const isDarkModeActive = getCookieByName("ytdl-darkmode") === "1" ? true : false

  const [darkMode, toggleColorMode] = useState(isDarkModeActive)
  const handleToggleColorMode = () => {
    setCookie("ytdl-darkmode", (!darkMode ? "1" : "0"), 365)
    toggleColorMode(!darkMode)
  }

  return (
    <div className={"App" + (darkMode ? " app-dark" : " app-light")} >
      <header className="App-header">
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
