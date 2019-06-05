import { call, put, takeLatest } from 'redux-saga/effects'
import * as constants from './constants'
import * as loginApi from '../../../api/Login'

function* loginSaga(action) {
  try {
    let { data } = yield call(loginApi.login, action.loginParams)
    console.log(data)
    put({
      type: 'LOGIN_SUCCESSFULLY',
      userInfo: data
    })
  } catch(error) {
    console.log(error)
    console.log('Login failed!')
    put({
      type: 'LOGIN_FAILED',
      error
    })
  }
}

export function* loginWatcherSaga() {
  yield takeLatest(constants.SUBMIT_FORM, loginSaga)
}