import { Map } from 'immutable'
import * as constants from './constants'

const defaultState = Map({
  collapsed: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.TOGGLE_MENU:
      return state.set('collapsed', !state.get('collapsed'))
    default:
      return state
  }
}