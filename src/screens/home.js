import React from 'react'

// Logo
import logoLight from '../logo/logo.svg';

import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <main>
          <header className="app-header">
            <img src={logoLight} alt="YoutubeDL for the web logo" className="logo hide--on-light"/>
            
            <p>
              <strong className="color--theme-primary">YouTube</strong>-dl for the <span className="text-primary">Web</span>
            </p>
          </header>

          <SearchBar />
          
          <Footer />
        </main>
      </React.Fragment>
    )
  }
}