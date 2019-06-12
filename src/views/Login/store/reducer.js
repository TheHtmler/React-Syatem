import { Map } from 'immutable'
import * as constants from './constants'
import Storage from '../../../utils/Storage'

const defaultState = Map({
  token: Storage.getItem('AuthToken') ? Storage.getItem('AuthToken') : null,
  userInfo: Storage.getItem('UserInfo') ? Storage.getItem('UserInfo') : null,
  loading: false,
  notificationType: null
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SUBMIT_FORM:
      return state.set('loading', true)
    case constants.LOGIN_SUCCESSFULLY:
      return state.merge({
        'token': action.userInfo.token,
        'userInfo': action.userInfo,
        'loading': false,
        'notificationType': 'succcess'
      })
    case constants.LOGIN_FAILED:
      return state.merge({
        'token': null,
        'userInfo': null,
        'loading': false,
        'notificationType': 'error'
      })
    case constants.LOGOUT:
      Storage.clear()
      return state.merge({
        'token': null,
        'userInfo': null
      })
    default:
      return state
  }
}