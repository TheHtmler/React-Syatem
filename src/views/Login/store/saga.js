import { call, put, takeEvery } from 'redux-saga/effects'
import * as constants from './constants'
import * as loginApi from '../../../api/Login'
import Storage from '../../../utils/Storage'

import { message } from 'antd'

function* loginSaga(action) {
  message.destroy() // destroy the previous message

  try {
    let { data } = yield call(loginApi.login, action.loginParams)
    console.log(data)

    Storage.setItem('AuthToken', data.token) // save token after login
    Storage.setItem('UserInfo', data)

    yield put({
      type: constants.LOGIN_SUCCESSFULLY,
      userInfo: data
    })

    message.success('Login successfully!') // Login message: success

  } catch(error) {
    console.log(error)
    console.log('Login failed!')
    yield put({
      type: constants.LOGIN_FAILED,
      error
    })

    message.error('Login failed! Incorrect username or password!') // Login message: failed
  }
}

export function* loginWatcherSaga() {
  yield takeEvery(constants.SUBMIT_FORM, loginSaga)
}