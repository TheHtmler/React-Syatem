import { all } from 'redux-saga/effects'
import { loginWatcherSaga } from '../views/Login/store/saga'

export default function* rootSaga() {
  yield all([
    loginWatcherSaga()
  ])
}