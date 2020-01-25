import React, { useState } from 'react'
import { getAudioLink, startDownload } from '../../utils/api'

import './index.scss'

const SearchBar = () => {
  const [hash, setDownloadHash] = useState('');

  const getLink = async (e) => {
    if (e.key === "Enter") {
      let videoID = e.target.value.split("v=")[1]
      let res = await getAudioLink(videoID)

      setDownloadHash(res.URL)
    }
  }

  const download = async (e) => {
    if (hash.length > 0) await startDownload(hash);
  }

  return (
    <React.Fragment>
      <p id="get-started">Wanna save that cool video from your favorite Youtuber so you can watch it offline?<br></br> Go ahead. :)</p>
      
      <div className="flex">
        <input type="text" name="videourl" placeholder="Cat video link goes here..." onKeyPress={getLink}></input>

        <button onClick={download}>
          <p>Download</p>
        </button>
      </div>
    </React.Fragment>
  )
}

export default SearchBar