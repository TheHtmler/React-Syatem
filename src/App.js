import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Layout from './views/Layout'
import Login from './views/Login'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Layout} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App
