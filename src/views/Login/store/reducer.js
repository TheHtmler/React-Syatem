import { Map } from 'immutable'
import * as constants from './constants'

const defaultState = Map({
  login: false,
  token: null,
  loading: false,
  notificationType: null
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SUBMIT_FORM:
      return state.set('loading', true)
    case constants.LOGIN_SUCCESSFULLY:
      return state.merge({
        'login': true,
        'token': action.userInfo,
        'loading': false,
        'notificationType': 'succcess'
      })
    case constants.LOGIN_FAILED:
        return state.merge({
          'login': false,
          'token': null,
          'loading': false,
          'notificationType': 'error'
        })
    default:
      return state
  }
}