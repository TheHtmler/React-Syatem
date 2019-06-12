import * as constants from './constants'

export const loginAction = (loginParams) => ({
  type: constants.SUBMIT_FORM,
  loginParams
})

export const logoutAction = () => ({
  type: constants.LOGOUT
})
