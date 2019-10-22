import React from 'react';

// Logo
import logo from './logo.svg';
// Styles
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>Wanna save that cool video from your favorite Youtuber so you can watch it offline? Go ahead. :)</p>
          <input type="text" name="videourl"></input>
        </header>
      </div>
    );
  }
}

export default App;
