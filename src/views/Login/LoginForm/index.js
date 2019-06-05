import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loginAction } from '../store/actionCreators'

import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './index.less'

class LoginForm extends Component {
  render() {
    const { login, form: { getFieldDecorator } } = this.props

    let content = <Redirect to="/" />

    if (!login) {
      content = (
        <Form onSubmit={this.submitFormHandler} className="login-form__formfield">
          <Form.Item>
            {
              getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                  placeholder="Username"
                />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox className="login-form__remember">Remember me</Checkbox>
              )
            }
            <a href="/login" className="login-form__forgot">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form__button">
              Login
            </Button>
          </Form.Item>
        </Form>
      )
    }

    return <Fragment>{content}</Fragment>
  }

  submitFormHandler = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.loginAction({
          username: values.username,
          password: values.password
        })
      }
    })
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => {
  return bindActionCreators({
    loginAction
  }, dispatch)
}

// const mapDispatch = (dispatch) => ({
//   loginAction(loginParams) {
//     dispatch(loginAction(loginParams))
//   }
// })

const WrapperLoginForm = Form.create({ name: 'login' })(LoginForm)

export default connect(mapState, mapDispatch)(WrapperLoginForm)