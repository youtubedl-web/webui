const API_HOST = process.env.REACT_APP_APIHOST
const API_PORT = process.env.REACT_APP_APIPORT
const API_SCHEMA = process.env.REACT_APP_SECURE === "true" ? "https" : "http"

export class API {
  getVideoLink(link) {
    // return fetch(`${API_SCHEMA}://${API_HOST}:${API_PORT}/link/${link}/video`)
  }
}

export async function getAudioLink(link) {
  let fetchData = {
    method: 'GET',
    mode: 'no-cors',
  }

  return await fetch(`${API_SCHEMA}://${API_HOST}:${API_PORT}/link/${link}/audio`, fetchData)
    .then(res => res.json())
}