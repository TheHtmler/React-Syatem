import { Map } from 'immutable'
import * as constants from './constants'

const defaultState = Map({
  login: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SUBMIT_FORM:
      return state.set('login', action.value)
    default:
      return state
  }
}