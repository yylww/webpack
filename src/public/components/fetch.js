import 'whatwg-fetch'

function transformData(data) {
  let form = document.createElement('form')
  let formData = new FormData(form)

  for (let key in data) {
    formData.append(key, data[key])
  }

  return formData
}

const _fetch = {
  baseUrl: 'http://localhost:3001',
  post: function (url, data, callback) {
    fetch(this.baseUrl + url, {
      method: 'POST',
      body: transformData(data),
      credentials: 'include'
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
    }).then((res) => {
      callback(res)
    })
  },

  get: function (url, callback) {
    fetch(this.baseUrl + url, {
      method: 'GET',
      credentials: 'include'
    }).then((res) => {
      return res.json()
    }).then((res) => {
      callback(res)
    })
  }
}

export default _fetch
