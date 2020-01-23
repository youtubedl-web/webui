import React from 'react'
import { getAudioLink } from '../../utils/api'

import './index.scss'

const getLink = async (e) => {
  if (e.key === "Enter") {
    let videoID = e.target.value.split("v=")[1]
    console.log( await getAudioLink(videoID))
  }
}

const SearchBar = () => {
  return (
    <React.Fragment>
      <p id="get-started">Wanna save that cool video from your favorite Youtuber so you can watch it offline?<br></br> Go ahead. :)</p>
      <input type="text" name="videourl" onKeyPress={getLink}></input>
    </React.Fragment>
  )
}

export default SearchBar