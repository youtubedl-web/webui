import React, { useState } from 'react'

// Logo
import logo from './logo.svg';

// Styles
import './App.scss';

// Screens
import Home from './screens/home'

const App = () => {
  const [darkMode, toggleColorMode] = useState(false)
  const handleToggleColorMode = () => toggleColorMode(!darkMode)

  return (
    <div className={"App" + (darkMode ? " app-dark" : " app-light")} >
      <header className="App-header">
        <img src={logo} />
        <p>
          <strong className="text-secondary">YouTube</strong> for the <span className="text-primary">Web</span>
        </p>

        <button onClick={handleToggleColorMode}>Putas</button>
        <Home></Home>
      </header>
    </div>
  )
}

export default App;
