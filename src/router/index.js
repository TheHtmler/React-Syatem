import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRoute from './authRoute'
import Layout from '../views/Layout'
import Login from '../views/Login'

class RouterConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthRoute path="/" exact component={Layout} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouterConfig