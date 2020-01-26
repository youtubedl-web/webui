import React, { useState } from 'react'

import { getAudioLink } from '../../utils/api'

import './index.scss'

const SearchBar = () => {
  const [link, setLink] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [downloadState, setDownloadState] = useState(0)
  
  // update link hook whenever the input changes
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleKeyClick = (e) => {
    if (e.target.value && e.target.value.length > 0) {
      getLink(e.target.value)
    }
  }

  // fetch the download link for the audio file
  const getLink = async (link) => {
    let videoID = link.split("v=")[1]

    // set loading status
    setDownloadState(1)
    let res = await getAudioLink(videoID)

    // update download hash
    setDownloadLink(res.URL)
    // set ready status
    setDownloadState(2)
  }

  const download = async () => {
    // only fetch the download link if the link
    // is not currently loading and not ready to download
    if (downloadState !== 1 && downloadState !== 2) await getLink(link)
  }

  return (
    <React.Fragment>
      <p id="get-started">Wanna save that cool video from your favorite Youtuber so you can watch it offline?<br></br> Go ahead. :)</p>
      
      <div className="flex">
        <input type="text" name="videourl" placeholder="Cat video link goes here..."
          value={link} onChange={handleLinkChange} onKeyPress={handleKeyClick}></input>
        
        <a href={downloadState === 2 ? downloadLink : undefined} download onClick={download}>
          <button>
            <p>{downloadState === 0
              ? "Get download link"
              : (downloadState === 1 ? "Loading..." : "Download") }
            </p>
          </button>
        </a>
      </div>
    </React.Fragment>
  )
}

export default SearchBar