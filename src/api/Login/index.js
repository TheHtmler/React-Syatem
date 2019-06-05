import axios from 'axios'

export const login = loginParams => {
  return axios.request({
    method: 'post',
    url: 'http://140.143.232.62:5002/api/users/login',
    data: loginParams
  })
}