import React from 'react'

import './index.scss'

const SearchBar = () => {
  return (
    <React.Fragment>
      <p id="get-started">Wanna save that cool video from your favorite Youtuber so you can watch it offline?<br></br> Go ahead. :)</p>
      <input type="text" name="videourl"></input>
    </React.Fragment>
  )
}

export default SearchBar