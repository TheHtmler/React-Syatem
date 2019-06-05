import * as constants from './constants'

export const loginAction = (loginParams) => ({
  type: constants.SUBMIT_FORM,
  value: true,
  loginParams: loginParams
})