import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends Component {
  render() {
    const { token, component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props => {
        return token ? <Component {...props} /> : <Redirect to="/login" />
      }}/>
    )
  }
}

const mapState = state => ({
  token: state.getIn(['login', 'token'])
})

export default connect(mapState, null)(AuthRoute)