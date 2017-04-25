import loadScript from 'load-script'

const GOOGLE_SDK_URL = 'https://apis.google.com/js/api.js'
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4']

const loadApiScript = () => {
  return new Promise((resolve, reject) => {
    loadScript(GOOGLE_SDK_URL, (err, script) => {
      if (err) reject(err)

      resolve(script)
    })
  })
}

const loadLibs = () => {
  return new Promise((resolve) => {
    window.gapi.load('client:auth2:picker', resolve)
  })
}

const initClient = () => {
  return new Promise((resolve) => {
    window.gapi.client.init({
      apiKey: 'AIzaSyCUc586MZvUba-no3aB-tt2mr7CLROVle8',
      discoveryDocs: DISCOVERY_DOCS,
      clientId: '270478801405-ebtt402hdm8rn9idn12gu8k1f5lsbjlg.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/spreadsheets'
    }).then(resolve)
  })
}

export default () => {
  return new Promise((resolve, reject) => {
    loadApiScript()
      .then(loadLibs)
      .then(initClient)
      .then(resolve)
  })
}
