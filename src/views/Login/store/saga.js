import { call, put, takeEvery } from 'redux-saga/effects'
import * as constants from './constants'
import * as loginApi from '../../../api/Login'

function* loginSaga(action) {
  try {
    let { data } = yield call(loginApi.login, action.loginParams)
    console.log(data)
    yield put({
      type: constants.LOGIN_SUCCESSFULLY,
      userInfo: data
    })
  } catch(error) {
    console.log(error)
    console.log('Login failed!')
    yield put({
      type: constants.LOGIN_FAILED,
      error
    })
  }
}

export function* loginWatcherSaga() {
  yield takeEvery(constants.SUBMIT_FORM, loginSaga)
}