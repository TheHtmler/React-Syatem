import { combineReducers } from 'redux-immutable'

import { reducer as layoutReducer } from '../views/Layout/store'
import { reducer as loginReducer } from '../views/Login/store'

const rootReducer = combineReducers({
  layout: layoutReducer,
  login: loginReducer
})

export default rootReducer