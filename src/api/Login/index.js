import request from '../../utils/request'

export const login = loginParams => {
  return request({
    url: 'http://140.143.232.62:5002/api/users/login',
    method: 'post',
    data: loginParams,
    headers: {
      "Content-Type": "application/json"
    }
  })
}