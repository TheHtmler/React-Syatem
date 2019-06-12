import { call, put, takeEvery } from 'redux-saga/effects'
import * as constants from './constants'
import * as loginApi from '../../../api/Login'
import Storage from '../../../utils/Storage'

import { notification } from 'antd'

function* loginSaga(action) {
  try {
    let { data } = yield call(loginApi.login, action.loginParams)
    console.log(data)

    Storage.setItem('AuthToken', data.token) // save token after login
    Storage.setItem('UserInfo', data)

    yield put({
      type: constants.LOGIN_SUCCESSFULLY,
      userInfo: data
    })

    notification['success']({
      message: 'Login successfully!', // 登陆成功！
      duration: 3
    })
  } catch(error) {
    console.log(error)
    console.log('Login failed!')
    yield put({
      type: constants.LOGIN_FAILED,
      error
    })

    notification['error']({
      message: 'Login failed! Incorrect username or password!', // 登录失败！用户名或密码不正确！
      duration: 3
    })
  }
}

export function* loginWatcherSaga() {
  yield takeEvery(constants.SUBMIT_FORM, loginSaga)
}