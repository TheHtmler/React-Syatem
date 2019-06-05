import { Map } from 'immutable'
import * as constants from './constants'

const defaultState = Map({
  login: false,
  notificationType: null
})

export default (state = defaultState, action) => {
  switch (action.type) {
    // case constants.SUBMIT_FORM:
    //   return state.set('login', action.value)
    case constants.LOGIN_SUCCESSFULLY:
      return state.merge({
        'login': true,
        'notificationType': 'succcess'
      })
    case constants.LOGIN_FAILED:
        return state.merge({
          'login': false,
          'notificationType': 'error'
        })
    default:
      return state
  }
}