import React, { useState } from 'react'

import { saveAs } from 'file-saver'

import { getAudioLink, startDownload } from '../../utils/api'

import './index.scss'

const SearchBar = () => {
  const [link, setLink] = useState('')
  const [hash, setDownloadHash] = useState('')
  const [downloadReady, setDownloadReady] = useState(false)
  
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
    let res = await getAudioLink(videoID)
      
    setDownloadHash(res.URL)
    setDownloadReady(true)
  }

  const download = async (e) => {
    if (downloadReady) {
      await startDownload(hash)
        .then(res => {
          saveAs(new Blob([res.body], {type: "audio/ogg;charset=utf-8"}))
        })
    } else {
      await getLink(link)
      
      if (downloadReady) await startDownload(hash)
        .then(res => saveAs(new Blob([res.body], {type: "charset=utf-8"})))
    }
  }

  return (
    <React.Fragment>
      <p id="get-started">Wanna save that cool video from your favorite Youtuber so you can watch it offline?<br></br> Go ahead. :)</p>
      
      <div className="flex">
        <input type="text" name="videourl" placeholder="Cat video link goes here..."
          value={link} onChange={handleLinkChange} onKeyPress={handleKeyClick}></input>

        <button onClick={download}>
          <p>{ downloadReady ? "Download" : "Generate URL" }</p>
        </button>
      </div>
    </React.Fragment>
  )
}

export default SearchBar