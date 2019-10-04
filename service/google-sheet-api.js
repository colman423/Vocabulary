import queryString from 'query-string'
import { api_key as apiKey } from '../config/google-api'

export const getData = (spreadsheetId) => {
  return new Promise((resolve, reject) => {
    const urlParams = queryString.stringify({
      key: apiKey
    })
    window.fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?${urlParams}`, {
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log('data', data)
    }).catch(err => {
      console.log('err', err)
    })
  })
}
