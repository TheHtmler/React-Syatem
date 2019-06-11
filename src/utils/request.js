import axios from 'axios'
import Storage from './Storage'

let baseUrl = ''

baseUrl = process.env.NODE_ENV === 'development' ? 
  '//localhost:5002' : 
  '//140.143.232.62:5002'

const service = axios.create({
  baseURL: baseUrl
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  err => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          Storage.clear()
          console.log(111)
          break
        default:
          break
      }
    }
    return Promise.reject(err)
  }
)

export default service