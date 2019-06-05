import { Map } from 'immutable'
import * as constants from './constants'

const defaultState = Map({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    // case constants.SUBMIT_FORM:
    //   return state.set('login', action.value)
    case constants.LOGIN_SUCCESSFULLY:
      return state.set('login', true)
    case constants.LOGIN_FAILED:
      return state.set('login', false)
    default:
      return state
  }
}