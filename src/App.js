import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Router from './router'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Router />
        </Provider>
      </Fragment>
    )
  }
}

export default App
