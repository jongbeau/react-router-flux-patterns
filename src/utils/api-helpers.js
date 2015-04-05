require('whatwg-fetch')

var _checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

var _toJson = (response) => {
  return response.json()
}

var api_url = GOCO_CONFIG.api_url

module.exports = {

  full_url(url) {
    return api_url + url
  },

  get(url, access_token = window.SessionStore.getState().access_token) {
    return fetch(this.full_url(url), {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': access_token
      }
    })
      .then(_checkStatus)
      .then(_toJson)
  },

  post(url, json, access_token = window.SessionStore.getState().access_token) {
    return fetch(this.full_url(url), {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': access_token
      },
      body: JSON.stringify(json)
    })
      .then(_checkStatus)
      .then(_toJson)
  },

  put(url, json, access_token = window.SessionStore.getState().access_token) {
    return fetch(this.full_url(url), {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': access_token
      },
      body: JSON.stringify(json)
    })
      .then(_checkStatus)
      .then(_toJson)
  },

  del(url, access_token = window.SessionStore.getState().access_token) {
    return fetch(this.full_url(url), {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': access_token
      }
    })
      .then(_checkStatus)
      .then(_toJson)
  }
}
